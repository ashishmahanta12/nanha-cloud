import mongoose from "mongoose";

const quizAnswerSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, index: true },
    questionId: { type: String, required: true, index: true },
    questionText: { type: String, required: true },
    round: { type: String, default: "" },
    selectedOption: {
      type: String,
      required: true,
      enum: ["A", "B", "C", "D"],
    },
    selectedText: { type: String, required: true },
    questionType: {
      type: String,
      required: true,
      enum: ["personality", "logical"],
    },
    /** Real correctness for logical questions; null for personality */
    isCorrect: { type: Boolean, default: null },
    displayedResult: {
      type: String,
      required: true,
      enum: ["Correct", "Incorrect"],
    },
    clientAnsweredAt: { type: Date, default: null },
    answeredAt: { type: Date, default: Date.now, index: true },
  },
  { timestamps: true }
);

quizAnswerSchema.index({ sessionId: 1, answeredAt: -1 });
quizAnswerSchema.index({ answeredAt: -1 });

export const QuizAnswer =
  mongoose.models.QuizAnswer || mongoose.model("QuizAnswer", quizAnswerSchema);

export function serializeQuizAnswer(doc) {
  if (!doc) return null;
  const a = doc.toObject ? doc.toObject() : doc;
  return {
    id: String(a._id),
    sessionId: a.sessionId,
    questionId: a.questionId,
    questionText: a.questionText,
    round: a.round || "",
    selectedOption: a.selectedOption,
    selectedText: a.selectedText,
    questionType: a.questionType,
    isCorrect: a.isCorrect,
    displayedResult: a.displayedResult,
    clientAnsweredAt: a.clientAnsweredAt
      ? new Date(a.clientAnsweredAt).toISOString()
      : null,
    answeredAt: a.answeredAt
      ? new Date(a.answeredAt).toISOString()
      : null,
    createdAt: a.createdAt ? new Date(a.createdAt).toISOString() : null,
  };
}
