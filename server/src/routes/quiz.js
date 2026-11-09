import { Router } from "express";
import mongoose from "mongoose";
import { asyncHandler } from "../middleware/errors.js";
import { apiLimiter } from "../middleware/rateLimit.js";
import { QuizAnswer, serializeQuizAnswer } from "../models/QuizAnswer.js";

const router = Router();
router.use(apiLimiter);

function requireDb(_req, res, next) {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      error: "Database unavailable. Restart the server and try again.",
    });
  }
  next();
}

router.use(requireDb);

const OPTION_LETTERS = new Set(["A", "B", "C", "D"]);
const QUESTION_TYPES = new Set(["personality", "logical"]);
const DISPLAYED = new Set(["Correct", "Incorrect"]);

router.post(
  "/answers",
  asyncHandler(async (req, res) => {
    const body = req.body || {};
    const sessionId = String(body.sessionId || "").trim();
    const questionId = String(body.questionId || "").trim();
    const questionText = String(body.questionText || "").trim();
    const round = String(body.round || "").trim();
    const selectedOption = String(body.selectedOption || "")
      .trim()
      .toUpperCase();
    const selectedText = String(body.selectedText || "").trim();
    const questionType = String(body.questionType || "").trim();
    const displayedResult = String(body.displayedResult || "").trim();

    if (!sessionId || !questionId || !questionText || !selectedText) {
      return res.status(400).json({ error: "Missing required answer fields" });
    }
    if (!OPTION_LETTERS.has(selectedOption)) {
      return res.status(400).json({ error: "selectedOption must be A–D" });
    }
    if (!QUESTION_TYPES.has(questionType)) {
      return res
        .status(400)
        .json({ error: "questionType must be personality or logical" });
    }
    if (!DISPLAYED.has(displayedResult)) {
      return res
        .status(400)
        .json({ error: "displayedResult must be Correct or Incorrect" });
    }

    let isCorrect = null;
    if (questionType === "logical") {
      if (typeof body.isCorrect !== "boolean") {
        return res
          .status(400)
          .json({ error: "isCorrect boolean required for logical questions" });
      }
      isCorrect = body.isCorrect;
    }

    let clientAnsweredAt = null;
    if (body.clientAnsweredAt) {
      const d = new Date(body.clientAnsweredAt);
      if (!Number.isNaN(d.getTime())) clientAnsweredAt = d;
    }

    const doc = await QuizAnswer.create({
      sessionId,
      questionId,
      questionText,
      round,
      selectedOption,
      selectedText,
      questionType,
      isCorrect,
      displayedResult,
      clientAnsweredAt,
      answeredAt: new Date(),
    });

    res.status(201).json({ answer: serializeQuizAnswer(doc) });
  })
);

router.get(
  "/answers",
  asyncHandler(async (_req, res) => {
    const docs = await QuizAnswer.find({})
      .sort({ answeredAt: -1 })
      .limit(2000)
      .lean();

    const answers = docs.map(serializeQuizAnswer);

    /** Group by session, newest session first (by latest answer in session) */
    const bySession = new Map();
    for (const a of answers) {
      if (!bySession.has(a.sessionId)) {
        bySession.set(a.sessionId, {
          sessionId: a.sessionId,
          latestAt: a.answeredAt,
          answers: [],
        });
      }
      bySession.get(a.sessionId).answers.push(a);
    }

    const sessions = [...bySession.values()].map((s) => {
      s.answers.sort((x, y) => {
        const tx = new Date(x.answeredAt || 0).getTime();
        const ty = new Date(y.answeredAt || 0).getTime();
        return tx - ty;
      });
      return s;
    });

    sessions.sort((a, b) => {
      const ta = new Date(a.latestAt || 0).getTime();
      const tb = new Date(b.latestAt || 0).getTime();
      return tb - ta;
    });

    res.json({ answers, sessions, total: answers.length });
  })
);

export default router;
