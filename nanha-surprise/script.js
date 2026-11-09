/* ========================================
   Nanha Surprise — App Logic
   Edit ONLY the CONFIG object below to
   customize names, quotes, memories, etc.
   ======================================== */

const CONFIG = {
  herName: "Nanhi Bacchi",
  myName: "Cocoon",

  /* Gate — nanha-gift pills/lock + existing surprise copy */
  gateQuestion: "Which was the best day of my life? 💫",
  gateSub: "Only my real Nanhi Bacchi knows the magical date that changed everything forever...",
  gateIdleHint: "Sahi wala milestone tap karo na, Nanhi Bacchi 🐙",
  gateCorrect: "10 Nov",
  gateOptions: ["20 Jan", "21 Feb", "20 Mar", "10 Nov", "14 Feb"],
  gateHints: [
    "Arre, jaanti toh ho na… natakbazi nahi karo 🐙",
    "Sahi wala tumhe acche se pata hai, tap kardo 💭",
    "I knowww, tumheeee pata hai iska answer! 🫧",
    "Chalo chalo, nakli gareebi band… ragebait nahi karo, sahi wale pe tap karo 🎂",
  ],
  gateSuccessHint: "Yesss! Bilkul sahi jawab 🔓✨",
  birthdayDate: { month: 10, day: 10, year: 2007, label: "10 Nov" }, // 0-indexed month → November 10

  /* Quotes & copy — aligned to Inspiration.html */
  birthdayQuote:
    "I hope life always gives you little reasons to smile, big dreams to chase, and countless moments that make your heart happy. You deserve all the happiness in the world my Burger Queen. ♡",
  yearQuote:
    "Thanksssss for 1 year together. Even with all the challenges life throws at us, we still choose us. Distance doesn't matter.",
  emotionalCore:
    "Thanksssss for 1 year together. Even with all the challenges life throws at us, we still choose us. Distance doesn't matter.",
  babyCaption: "Always the cutest in the universe 💕",
  babySideEyebrow: "once upon",
  babySideNote: "a little sunshine arrived",
  babyQuote:
    "From this little spark grew a whole galaxy of laughter, courage, and the softest kind of magic.",
  finalQuote: `A year ago, we didn't know how many little memories were waiting for us. The random conversations, endless giggles, late night calls, silly arguments, shared secrets, and all those ordinary days that somehow became so special.

Seasons will change, years will pass, and we'll both grow in so many ways. But I hope we never lose this little world we've created together. The comfort of understanding each other without having to explain everything, finding reasons to laugh even on difficult days, and always having a little something to share.

One year down, and there are still so many stories left to live, memories to make, and little moments waiting to become our favourites.

Thankyou for being my constant, my happiness, my favourite person to tease, and my very own Nanhi bacchiiiiiiiii.

Happy 1st Anniversary and happiest birthday to my puchkuuuu!!! Here's to all the little moments we've shared, all the ones yet to come, and to us, choosing each other every single day.🌷`,
  final: {
    title: "Choosing Us, Every Single Day",
    quote: `A year ago, we didn't know how many little memories were waiting for us. The random conversations, endless giggles, late night calls, silly arguments, shared secrets, and all those ordinary days that somehow became so special.

Seasons will change, years will pass, and we'll both grow in so many ways. But I hope we never lose this little world we've created together. The comfort of understanding each other without having to explain everything, finding reasons to laugh even on difficult days, and always having a little something to share.

One year down, and there are still so many stories left to live, memories to make, and little moments waiting to become our favourites.

Thankyou for being my constant, my happiness, my favourite person to tease, and my very own Nanhi bacchiiiiiiiii.

Happy 1st Anniversary and happiest birthday to my puchkuuuu!!! Here's to all the little moments we've shared, all the ones yet to come, and to us, choosing each other every single day.🌷`,
  },
  diveAutoAdvance: true, // gift-style underwater → memories transition
  diveText: "Let's dive into our memories… 🌊",

  /* Letter — edit text / greeting / signature here */
  letter: {
    greeting: "To my Nanhi Bacchi's heart,",
    signature: "With lots of love,\nYours,\nCocoon ♡",
    speed: 46, // ms per character (higher = slower)
    text: `Hello, hello, hello, hello! 🥹💗

Toh aasha hai ki tujhe mera yeh letter mil gaya hoga, and I hope ki aap khushal mangal honge.

Mujhe bas tujhse apni kuch feelings share karni thi. Like, can you believe it? Humein ek dusre ko jaante huye poora ek saal ho gaya hai!

Sabse pehle, I want to thank you for being consistent and for staying. Aur main tujhe yeh baat batana chahta hoon kiii, Pichle ek saal mein maine tujhe bohot jaana hai. Lekin aisa nahi hai ki maine tujhe jaana, balki tune mujhe tujhe jaanne diya, apne aap ko samajhne diya. And I am genuinely glad ki tune mujhe woh chance diya.

Pata hai, mera sabse favourite kaam kya hai? Tujhe jaanna, tujhe samajhna, aur tere baare mein chhoti chhoti cheezein discover karna. No matter what, chahe kuch bhi ho jaaye, mera sabse fav kaam humesha apni nanhi bacchi ko jaanna aur samajhna hi rahega. 🥹

Lekin pichle ek saal mein aise bohot saare din bhi aaye hain jab humare beech problems, misunderstandings aur pareshaniyan huyi hain. Kabhi kabhi toh in sabki wajah seh humare beech kaafi distance bhi aayi hain. Aise bhi moments aaye jab shayad hum ek dusre ko thik seh samajh nahi paaye. Lekin in sabke bawajood, dekho, hum yahan tak pohoch gaye. And honestly, this is a little milestone for us.

Is ek saal mein na jaane kitni saari ghatnayein huyi hain. Kitne acche din, kitne difficult days, kitni misunderstandings aur kitni saari baatein. Aur phir bhi, here we are. I am genuinely glad. And thank you for being a part of my life.

Ek aur cheez jo maine is ek saal mein samajhi hai, woh hai ki why you are you.

Matlab, tum jaisi ho, tumhara sochne ka tareeka, tumhari chhoti chhoti reactions, tumhara behaviour aur life tumhe jis tarah seh treat karti aayi hai, in sabko dekhkar mujhe dheere dheere samajh aaya hai ki tum tum kaise bani. Main sirf tumhare acche dino mein nahi, balki tumhare difficult days mein bhi tha. Kyunki I want to understand the little things that make you, YOU.

Aur haan, humare beech jo bhi misunderstandings huyi hain, humne unka saamna kiya hai aur unse bahar nikalne ki koshish bhi ki hai. Main bas chahta hoon ki aage bhi, aur aage seh mera matlab sirf kuch din ya kuch saal nahi, balki poori zindagi hai, hum isi tarah ek dusre ka saath dein. Chahe kabhi mujhe koi pareshani ho, chahe tujhe koi problem ho, ya phir hum dono ke beech hi koi misunderstanding ya problem aa jaaye, main chahta hoon ki hum uska solution bhi milkar hi nikalein. Problem chahe kisi ek ki ho ya hum dono ki, main chahta hoon ki hum ek dusre ke against nahi, balki problem ke against khade hon.

Aage chal kar life mein na jaane kitni pareshaniyan aayengi, kitne ups and downs honge, but I want to face them with you. Pata hai, tere saath rehne seh meri life ki problems utni bhi badi nahi lagti. Aisa nahi hai ki problems khatam ho jaati hain, bas unka saamna karna thoda aasaan lagne lagta hai. Because somewhere, I know ki tu mere saath hai. Aur mere liye woh feeling hi bohot hai.

There were days jab I felt really alone. Kabhi kabhi jab humari baat nahi ho paati thi, toh pata nahi kyun, bohot bechaini si hone lagti thi. Tujhse baat nahi hoti thi toh din thoda adhoora sa lagta tha. Lekin phir tera ek chhota sa text, ek pyaara sa good night ya phir randomly bheja hua koi bhi message... bas, mera mood thoda theek kar deta tha. Dil ki woh bechaini bhi jaane kahan chali jaati thi. It's funny how something so little from you can make such a difference to my day... 🥹

Aur ek baat, tum jaisi bhi ho, jo bhi ho, I like you. Not because you have to be a certain way or because you have to be perfect. I like you for being you. And I will always like you.

And nowww, happiest 19th birthday to my nanhi bachhiiii! 🎀

I genuinely wish ki teri woh pyaari si smile kabhi kam na ho. Humesha aise hi muskurati rehna, khush rehna aur apne life ke nanhe nanhe moments bhi enjoy karna. Life tujhe bohot saari khushiyan de, aur tujhe woh sab mile jo tera dil chahta hai.

Aur please, ek baat humesha yaad rakhna: I'm with you.

No matter what the situation is, chahe kabhi life kitni bhi difficult kyun na ho jaaye, please yeh mat sochna ki tujhe sab kuch akele handle karna hai. Whenever you need someone, I'll be here.

Aur haan, main koi aisa promise nahi kar raha ki humari life mein kabhi problems nahi aayengi ya humare beech kabhi distance nahi aayega. Ho sakta hai kabhi circumstances humare favour mein na hon, ho sakta hai kabhi humari baat bhi na ho. But even then, agar kabhi tujhe meri jarurat pade, toh please hesitate mat karna. Koi help chahiye ho, kuch share karna ho, ya bas mann halka karna ho, I am all ears to you.

You don't have to think twice before reaching out to me. I'll always be willing to listen.

Aur aakhir mein bas itna hi kehna hai ki tu pehli insaan hai jisse maine pyaar kiya hai, Main nahi jaanta ki life aage humare liye kya lekar aayegi, but I know that loving you has been one of the most meaningful parts of my life.

Bas khush rehna meri pyaaaaari bachhi. Apna khayal rakhna, aur kabhi kabhi apne is cocoon ko bhi yaad kar liya karna. 😭💗

Happy Birthday once again!

To my Nanhi Bacchi,`,
  },

  /* Facts — Little Facts About Youuu */
  factsHeading: "Little Facts About Youuu 🥹🎀",
  factsIntro: "A little collection of things that make you… well, YOU!",
  factsOutro:
    "Basically, tum ek nanhi si entertainment package ho. Thodi complicated ho, lekin tumhari ye chhoti chhoti aadatein hi tumhe special banati hain.\nAnd someone's favourite too. 🥹🎀",
  facts: [
    {
      icon: "♏",
      title: "Born to Be a Scorpio",
      body: "You were born on 10 November, which makes you a Scorpio. Thodi mysterious, thodi stubborn, extremely observant and sometimes impossible to figure out. Matlab, tumhe samajhne ke liye alag seh research paper likhna padega. 😭",
    },
    {
      icon: "🕵️‍♀️",
      title: "Nanhi Detective",
      body: "You notice even the tiniest changes in people's behaviour. Kisi ke tone mein halka sa difference aa jaaye, toh nanhi madam ke dimaag mein investigation shuru! Koi kuch chhupane ki koshish kare, toh pakde jaane ke chances kaafi high hain. Antaryami ho tum!",
    },
    {
      icon: "💬",
      title: "Two-Word Reply Specialist",
      body: '"Haan", "Kuch nahi", "Pata nahi" and sometimes just "." - bas, conversation khatam! Aur saamne wala bechara ab iska meaning samajhne ke liye alag se detective bane. Lekin jab tumhe kuch explain karna ho, toh poora paragraph ready hota hai. Dual personality hai tumhara. 😭',
    },
    {
      icon: "🤫",
      title: "Official CEO of Chup Raho",
      body: 'Tumhara favourite dialogue hai "Chup raho!" Lagta hai yeh do words tumhari vocabulary mein kuch zayada hi important hain. 😭',
    },
    {
      icon: "💅",
      title: "Madam Ka Final Decision",
      body: "Once you've made up your mind, bas phir discussion over! Koi kitna bhi samjha le, madam apne decision par tiki rehti hain. Tumse decision change karwana matlab impossible mission complete karna. 😭",
    },
    {
      icon: "💤",
      title: "Ninni Ki Brand Ambassador",
      body: "You seem to have a special relationship with sleep. Duniya mein kitni bhi interesting cheezein chal rahi hon, ninni ka invitation aaye toh baaki sab secondary! Bas ek comfortable jagah aur sukoon ki neend chahiye. 😭",
    },
    {
      icon: "🎀",
      title: "Romance Seh Thoda Sa Darr Lagta Hai Kya?",
      body: 'Kabhi itniiiii pyaari pyaari baatein, toh kabhi seedha "Ewww", "Chi", " Muh Band karo"! Madam, aakhir aap chahti kya hai? Romance pasand bhi hai aur usse sharmaana bhi hai? Chalti phirti mixed signals?😭',
    },
    {
      icon: "🧠",
      title: "Overthinking Department Ki HOD",
      body: "You don't just think about something; you investigate it, analyse every little detail, and imagine approximately 27 different possible outcomes. Past bhi, present bhi, future bhi — sabka analysis ek saath chalta rehta hai! Kabhi kabhi toh apne hi dimaag ka aloo ka chaloo hone tak... 😭",
    },
    {
      icon: "👑",
      title: "Miss Independent",
      body: "You like making your own decisions and doing things at your own pace. Koi unnecessarily force kare, toh madamji ka mood turant change ho sakta hai. Apni marzi ki maalik ho tum, aur tumhe apni space bhi pyaari hai!",
    },
    {
      icon: "🥹",
      title: "Andar Se Chhupi Huyi Softie",
      body: "Upar se thodi nakhrebaaz, kabhi stubborn aur kabhi attitude wali madam, lekin andar seh kaafi soft hearted. Shayad tum humesha apni feelings directly express na karo, lekin tumhari chhoti chhoti baaton mein care aur affection dikh hi jaata hai.",
    },
    {
      icon: "🐷",
      title: "Fire Pig Wali Personality",
      body: "According to the Chinese zodiac, you were born in the Year of the Fire Pig. Traditionally, this sign is associated with honesty, generosity, confidence and enjoying life's little pleasures. Matlab dil seh generous, apne logon ke liye caring aur khane peene aur comfort ke maamle mein koi compromise nahi! 😭",
    },
    {
      icon: "✨",
      title: "Life Path Number 3",
      body: "Your numerology Life Path Number is 3, traditionally associated with creativity, humour, self-expression and communication. Matlab tumhare andar ek little entertainer chhupa hai — bas kabhi kabhi uska mood depend karta hai. 😭",
    },
    {
      icon: "💛",
      title: "Topaz Is Your Birthstone",
      body: 'Your November birthstone is Topaz, traditionally associated with strength, warmth and clarity. Waiseee, clarity toh tumhare birthstone mein hai, bas kabhi kabhi apne "Kuch nahi" aur "." waale replies mein bhi bhej diya karo. 😊',
    },
    {
      icon: "🌼",
      title: "Chrysanthemum Is Your Birth Flower",
      body: "Your November birth flower is Chrysanthemum, traditionally associated with happiness, optimism and loyalty. A little flower symbolising warmth and positivity, with a personality that can be a little stubborn sometimes. Cute combination, isn't it?",
    },
    {
      icon: "❤️",
      title: "Someone's Favourite Little Trouble",
      body: 'You can be cute, stubborn, dramatic, funny and confusing — sometimes all within five minutes! Kabhi hasaogi, kabhi pareshaan karogi (pyaar seh), kabhi bina wajah "Chup raho" bologi. Thode nakhre, thodi masti, thoda attitude aur bohot saari cuteness.',
    },
  ],

  /* Memories — chronological */
  memories: [
    {
      sort: "2025-02-15",
      date: "Mid-February 2025",
      title: "The Library Encounter 📚",
      badge: "Quiet Beginning",
      caption: "You weren't feeling well and seemed lost in your thoughts. We met unexpectedly, without knowing that such a small moment would stay with me.\n\nI don't know why, but something about that day made me want to know you a little more. That's when I started noticing you a little differently. ♡",
      art: "heartGuitar",
      icon: "📖",
    },
    {
      sort: "2025-09-01",
      date: "1 September 2025",
      title: "The First Long Conversation 💬",
      badge: "Midnight Mark",
      caption: "Our first long conversation felt a little special. You kept answering all my questions until MIDNIGHT (thik 12 baje, Avg sincere kid). After you fell asleep, I stayed up reading our chats again and again, smiling at some of your messages. I didn't even realise how the whole night passed without me getting any sleep. ♡",
      photo: "assets/memories/1.webp",
      icon: "🕛",
    },
    {
      sort: "2025-09-04",
      date: "4 September 2025",
      title: "Three Special Burgers 🍔",
      badge: "Care, Delivered",
      caption: "The day I handed you three special burgers as your punishment. What started as a simple challenge turned into a little memory that still makes me smile. Somehow, even the simplest moments with you became special. ♡",
      photo: "assets/memories/2.webp",
      icon: "🍔",
    },
    {
      sort: "2025-11-10",
      date: "10 Nov 2025",
      title: "The Very First Text 💌",
      badge: "Day 1",
      caption: "A little shy birthday wish that turned into the beginning of our most beautiful chapter. Who knew one simple message would bring my favorite person into my life? ♡",
      photo: "assets/memories/3.webp",
      icon: "🍍",
    },
    {
      sort: "2025-11-17",
      date: "17 November 2025",
      title: "Mission Retry: Dark Chocolate 🍫",
      badge: "Mission Success",
      caption: "I wanted to get you something for your birthday, but I wasn't quite sure what you'd like, so dark chocolate felt like a safe little choice. Our first attempt on 13 November didn't go as planned, but Mission Retry was finally successful! It was just a small surprise, but I hope it brought a little smile to your face. And now, it's another sweet memory for us to look back on. ♡",
      photo: "assets/memories/4.webp",
      icon: "🍫",
    },
    {
      sort: "2026-01-20",
      date: "20 Jan 2026",
      title: "Our First In-Person Meeting ☕",
      badge: "Heartbeat Moment",
      caption: "After all those chats, we finally met in person! A few nervous smiles, a little awkwardness, and me giving you college tour. It felt different seeing you right there instead of on a screen. I was a little nervous, but secretly happy to have you around. (Aur haan, woh ₹18 wali Boom Boom icecream toh mujhe humesha yaad rahegi). Just a simple day, but one I'll always remember. ♡",
      photo: "assets/memories/5.webp",
      icon: "✨",
    },
    {
      sort: "2026-02-21",
      date: "21 Feb 2026",
      title: "Meeting Again & Double the Laughter 🍦",
      badge: "Against all odds",
      caption: "By now, all the awkwardness was gone. It was just us, laughing nonstop, trying out the Magic Mirror, and talking about anything and everything. We kept walking around in circles, never running out of things to talk about. I kept wondering where all the time was going. Honestly, mujhe apni pasandida aurat ko byee bolne ka mann hi nahi ho raha tha. Aur main toh teri moti moti sundar sundar eyelashes mein kab ka kho chuka tha...\n\nI just wish that evening had lasted a little longer. ♡",
      photo: "assets/memories/6.webp",
      icon: "🍨",
    },
    {
      sort: "2026-02-28",
      date: "A Quiet Detail",
      title: "The Shoe Admiration Ritual 👟",
      badge: "Little Things",
      caption: "Mujhe apni nanhi maharani ke joote humesha pyaar seh saja ke rakhna accha lagta tha. Aur uske paas kisi aur ke joote dekh loon toh chid mach jaati thi! Pata nahi kyun, par teri chhoti chhoti cheezein bhi mere liye khaas banti chali gayi. ♡",
      photo: "assets/memories/7.webp",
      icon: "👟",
    },
    {
      sort: "2026-03-15",
      date: "Mid-March 2026",
      title: "Our Little Virtual Home 🏠",
      badge: "Building Home",
      caption: "Those days spent building our little house, choosing things for our home, and eventually getting married in our virtual world. It was just a game, but I loved how naturally we started imagining and building little things together. A small glimpse of a future that would be lovely to share with you. Kisse pata tha ki hum bina realise kiye hi apne happily ever after ki practice kar rahe ho? ♡",
      photo: "assets/memories/8.webp",
      icon: "🏡",
    },
    {
      sort: "2026-03-20",
      date: "20 Mar 2026",
      title: "The First Phone Call 📞",
      badge: "Late Night Voice",
      caption: "One call would turn into hours of talking. We'd start around midnight, and I'd listen to your voice, laugh at the little things you said, and keep finding reasons to stay on the call a little longer. There's something about your voice that feels like home, making even the distance between us feel a little smaller. Sometimes, I wish I could go back to those nights. ♡",
      photo: "assets/memories/9.webp",
      icon: "🌙",
    },
    {
      sort: "2026-04-09",
      date: "9 April 2026",
      title: "Goluu Meets His Pyaari Mummy 🧸",
      badge: "Softest Day",
      caption: "The day I finally got to meet you and hand Goluu over to his pyaari mummy. I can still picture that little moment, knowing you liked it and how happy I was to finally bring it for you. It was such a small moment, but one I'll always remember with a smile. ♡",
      photo: "assets/memories/10.webp",
      icon: "🧸",
    },
    {
      sort: "2026-09-10",
      date: "10 September 2026",
      title: "Earphone Twins 🎧",
      badge: "Same Vibe",
      caption: "The day we both bought the same same earphones! I still remember wanting to twin with my paneer roll. Of course, I had to get the same ones as you! Now, whenever I see those earphones, I'm reminded of our little twinning moment. Same earphones, same vibe, and one more thing that reminds me of us. ♡",
      photo: "assets/memories/11.webp",
      icon: "🎧",
    },
    {
      sort: "2026-10-15",
      date: "October 2026",
      title: "Our Ludo Memories 🎲",
      badge: "Friendly Rivalry",
      caption: "The month we started playing Ludo together! From waiting for that one perfect six to cutting each other's goli, teasing each other over every little move. Sometimes competitive, sometimes full of laughter, but always fun. Who knew a simple game would give us so many little moments to smile about? ♡",
      photo: "assets/memories/12.webp",
      icon: "🎲",
    },
    {
      sort: "2099-12-31",
      date: "Every Single Day Since",
      title: "Choosing Us Through Everything 🌸",
      badge: "Infinite",
      caption: "Through busy days when we barely had time, quiet evenings filled with little conversations, miles that kept us apart, and those small worries that life brought along. There were days when things weren't easy, but we still found reasons to laugh, made time for each other, and kept creating little memories together. No matter how the days changed, it was still you and me. ♡",
      art: "catsLoop",
      icon: "🐙",
    },
  ],

  /* Admire reasons */
  admire: [
    {
      heading: "Your Pure Heart",
      line: "I love how you always try to make things better, even when you don't have to. Whenever I've had a bad day, you listen to all my stories, let me share what's bothering me, and try to find a way to make things feel better. You don't just hear me out; you genuinely care about what's going on in my mind. That means more to me than you know.",
    },
    {
      heading: "Your Sweet, Unfiltered Laugh",
      line: "I don't think you realise how much your laughter means to me. Whenever I hear you laugh, something about my day instantly feels better. Even on days when things haven't gone well, hearing your giggles feels like a little therapy. Your laugh feels like home to me, and honestly, it's one of my favourite sounds in the world.",
    },
    {
      heading: "Your Quiet Strength",
      line: "Maine nanhi bacchi ke kharab seh kharab din dekhe hain, and one thing I've always admired is how you never give up (atleast is cheez mein toh nahi). No matter how hard things get, you somehow find the strength to stand back up and face them. Tumhare andar kitniiii sehne ki shakti hai, and no matter what comes your way, you somehow manage to stand strong. I don't know if you realise how strong you are, but this is something I admire about you the most.",
    },
    {
      heading: "How I Can Be Myself With You",
      line: "With you, I never feel embarrassed about being myself. I can share my random thoughts, silly habits, lazy moments, little problems, or even things that feel really serious. I never have to worry that you'll judge me or think differently about me. Chahe baat kitni bhi chhoti ho ya kitni bhi serious, I know I can always share it with you without thinking twice. That comfort is something I truly cherish.",
    },
    {
      heading: "Simply Being My Nanhi Bacchi",
      line: "Your little nakhre, your excitement over the smallest things, your random cravings, your cute habits, and all those little things that make you who you are. Over the past year, I've got to know so many different sides of you, and I've come to love all these little things about you. Just stay the way you are. Jaisi bhi hai, meri nanhi bacchi bohot pyaari hai. ♡",
    },
  ],

  /* Quiz — personality always Correct; logical uses correctIndex */
  quizTitle: "Nanhi Bacchi Quiz",
  quiz: [
    {
      id: "Q1",
      round: "Round 1 — Pehle thodi nautanki!",
      type: "personality",
      q: "Agar tumhe ek superpower mil jaaye, toh konsa choose karogi?",
      options: [
        "Sirf ek 🙂 se saamne wale ka poora mood samajh jaana.",
        'Ek "chup raho" bolte hi samne wale ko ekdum chup karwa dena.',
        "Jab mann kare tab seedha ninni mode mein chale jaana.",
        "Poori zindagi mujhse maar peet karna.",
      ],
    },
    {
      id: "Q2",
      round: "Round 1 — Pehle thodi nautanki!",
      type: "personality",
      q: "Achhaaaa, kisi ko chup karwana ho toh tumhara signature move kya hoga?",
      options: [
        '"Chup rahoooo!"',
        '"Bas, ab end of discussion."',
        "Sirf ek 🙂 ... aur saamne wala khud samajh jaaye.",
        '"Chhodo, level it, rehne do."',
      ],
    },
    {
      id: "Q3",
      round: "Round 1 — Pehle thodi nautanki!",
      type: "logical",
      q: "Trick questionnn! Tumhara birthday 10 November 2007 ko tha. Bataoooo, usdin konsa day tha?",
      options: ["Saturday", "Friday", "Sunday", "Thursday"],
      correctIndex: 0,
    },
    {
      id: "Q4",
      round: "Round 1 — Pehle thodi nautanki!",
      type: "personality",
      q: 'Maine bade pyaar se poochha, "Kya huaaaa?" Aur tumhara jawaab aaya "Kuch nhi". Toh iska asli matlab kya samjhu?',
      options: [
        "Sach mein kuch nahi hua.",
        "Kuch toh hua hai, ab tum khud samjho. 🙂",
        "Bhook lagi hai, par batana nahi hai.",
        "Ek pyaara sa 🙂 bhejo, phir shayad bataungi.",
      ],
    },
    {
      id: "Q5",
      round: "Round 1 — Pehle thodi nautanki!",
      type: "personality",
      q: 'Maine pucha, "Khaana kab khaogi?" Aur tumne mujhe sharma diya. Kya bola tha?',
      options: [
        '"Pehle tum khilao."',
        '"Tumhe khaungi."',
        '"Bhook hi nahi hai."',
        '"Jab nanha cocoon khaayega."',
      ],
    },
    {
      id: "Q6",
      round: "Round 2 — Nanhi bacchi ke secret signals 🤫",
      type: "personality",
      q: "Maan lo tum thodi upset ho aur main message karta hoon. Sabse accha kya lagega?",
      options: [
        'Ek chhota sa "Kya huaaa? Jab mann kare tab bata dena, main hoon yahan."',
        "Ek funny reel, bina kuch puchee.",
        "Thoda sa space, phir ek pyaara sa message.",
        "Seedha call.",
      ],
    },
    {
      id: "Q7",
      round: "Round 2 — Nanhi bacchi ke secret signals 🤫",
      type: "personality",
      q: "Acchaaa, maan lo main kuch der ke liye busy hone wala hoon. Tumhe kya zayada accha lagega?",
      options: [
        'Pehle bata doon, "Itne baje tak busy rahunga, phir aata hoon."',
        "Kuch na bataun, aur wapas aa jaun.",
        "Ek lamba sa explanation doon ki busy kyun hoon.",
        "Ek chhota sa cute voice note chhod doon.",
      ],
    },
    {
      id: "Q8",
      round: "Round 2 — Nanhi bacchi ke secret signals 🤫",
      type: "personality",
      q: "Agar koi tumhari tareef karde, toh tumhara reaction kya hota hai?",
      options: [
        '"Chiiii" (Lekin andar hi andar khush.)',
        "Joke maar ke topic change kar deti hoon.",
        'Seedha "Thank youuu."',
        "Screenshot leke apne paas rakh leti hoon. 😌",
      ],
    },
    {
      id: "Q9",
      round: "Round 2 — Nanhi bacchi ke secret signals 🤫",
      type: "personality",
      q: "Ek acche rishte mein sabse jaruri cheez kya lagti hai?",
      options: [
        "Honesty, chahe kabhi kadwi hi kyun na ho.",
        "Consistency, roz thoda thoda effort.",
        "Space aur privacy, har waqt chipke rehna jaruri nahi.",
        "Humour, taaki mushkil waqt mein bhi ek doosre ko hasa sakein.",
      ],
    },
    {
      id: "Q10",
      round: "Round 2 — Nanhi bacchi ke secret signals 🤫",
      type: "personality",
      q: "Kisi naye insaan par trust karne ke liye tumhe sabse pehle kya chahiye?",
      options: [
        "Bohot saara time.",
        "Woh bina force kiye mujhe samajhne ki koshish kare.",
        "Woh jo bole, uspar khara bhi utare.",
        "Meri family ya friends ko bhi woh accha lage.",
      ],
    },
    {
      id: "Q11",
      round: "Round 3 — Thoda sa emotional, thoda sa personal 🫣",
      type: "personality",
      q: "Maan lo ek lamba sa din guzar gaya aur tum bilkul thak chuki ho. Ab tumhara perfect plan kya hoga?",
      options: [
        "Seedha ninniii, aur koi disturb nahi karega.",
        "Ek chhoti si call, bas 10 minute.",
        "Chat pe reels bhejte huye timepass.",
        "Kuch accha sa khaana aur phir aaram.",
      ],
    },
    {
      id: "Q12",
      round: "Round 3 — Thoda sa emotional, thoda sa personal 🫣",
      type: "personality",
      q: "Agar main tumhari thodi si taang khinchun, toh kitna allowed hai?",
      options: [
        "Jitna mann kare, main bhi peeche nahi hatungi.",
        "Thoda bohot, lekin limit mein.",
        "Sirf tab jab mera mood accha ho.",
        "Zyaada nahi, kyunki mujhe khud mazaak sehna mushkil lagta hai. 😭",
      ],
    },
    {
      id: "Q13",
      round: "Round 3 — Thoda sa emotional, thoda sa personal 🫣",
      type: "personality",
      q: "Maan lo hum dono mein kisi baat ko lekar misunderstanding ho gayi. Toh tumhe sabse accha kya lagega?",
      options: [
        "Seedha sorry aur saaf saaf baat.",
        "Thoda waqt, phir aaram seh baat.",
        "Ek chhota sa cute gesture, jaise koi meme.",
        "Dono baithkar bina ego ke baat kar lein.",
      ],
    },
    {
      id: "Q14",
      round: "Round 3 — Thoda sa emotional, thoda sa personal 🫣",
      type: "personality",
      q: "Agar main tumhe bina kisi occasion ke ek cheez de sakun, toh kya maangogi?",
      options: [
        "Ek peaceful sa din, jisme koi tension na ho.",
        "Woh cheez jo main kabse khareedna chahti thi.",
        "Ek aisa moment jo humesha yaad rahe.",
        "Ek promise ki hum humesha ek dusre seh seedhi baat karenge.",
      ],
    },
    {
      id: "Q15",
      round: "Round 4 — Nanhe cocoon ki baari 😂",
      type: "personality",
      q: "Ek din ke liye agar tum asli Ashish ban jao (bhondupan ka parda hata ke), toh sabse pehle kya karogi? 😂",
      options: [
        "Jiski wajah seh Ashish ke chehre pe smile aati hai, usse ghanton baatein karogi. 🤭",
        "Ashish ke dimaag mein chal rahi 1001 overthinking ko band karke thoda sukoon seh jeeyogi. 😭",
        "Uske dil ki saari unsaid feelings samajhne ki koshish karogi, jo woh aksar keh nahi pata. 🥹",
        "Ek din ke liye bina kisi tension ke bacchon ki tarah jeeyogi, only masti, khana aur neend! 😂",
      ],
    },
    {
      id: "Q16",
      round: "Round 4 — Nanhe cocoon ki baari 😂",
      type: "personality",
      q: "Ye quiz banane wale nanhe cocoon ko kitne marks dogi?",
      options: [
        "10/10, full marks. 🌟",
        "Aloo ka chaloo marks (matlab pata hai kitne).",
        "Soch ke bataungi... (spoiler: acche hi milenge).",
        '"Chup raho!" (Matlab 10/10, bas bolna nahi hai).',
      ],
    },
    {
      id: "Q17",
      round: "Round 4 — Nanhe cocoon ki baari 😂",
      type: "logical",
      q: "Achhaaaa, ab ek chhota sa maths test. 17 + 9 kitna hota hai?",
      options: ["24", "25", "26", "27"],
      correctIndex: 2,
    },
    {
      id: "Q18",
      round: "Round 4 — Nanhe cocoon ki baari 😂",
      type: "logical",
      q: "14 + 20 + 16 = ?",
      options: ["48", "50", "52", "54"],
      correctIndex: 1,
    },
    {
      id: "Q19",
      round: "Round 4 — Nanhe cocoon ki baari 😂",
      type: "logical",
      q: "26 ÷ 4 kitna hota hai?",
      options: ["6.25", "6.5", "6.75", "7"],
      correctIndex: 1,
    },
    {
      id: "Q20",
      round: "Round 4 — Nanhe cocoon ki baari 😂",
      type: "logical",
      q: "Immediately ki spelling kya hoti hai?",
      options: ["Immedietly", "Immedeately", "Immediately", "ImmeDIETly 😂"],
      correctIndex: 3,
    },
  ],
  quizCheers: [
    "Yesss! 🎉",
    "That's my Nanhi Bacchi! 💖",
    "Correct! ✨",
    "You remember! 🥹",
    "Perfect! 🌟",
  ],
  quizOops: "Incorrect — try again, Nanhi Bacchi 🥺",

  /* Gift — open box → meet me? Yes/No → celebration */
  gift: {
    text: "To receive your gift, you need to meet me in person 🎁",
    yes: "HAAN Milungiiiiiiiiiiiiiiiii",
    yay: "Yay!! It's a date, Nanhi Bacchi! 🥳",
    photo: "assets/gallery/gift.webp",
    noLabels: [
      "Nhi 😢",
      "Galat button dab gaya kya? 🥺",
      "Ek baar phir soch lo Nanhi Bacchi! 🎀",
      "Nakhre toh dekho zara! 😭💕",
      "Itni bhi kya nakli gareebi, ek YES toh banta hai! 😂",
      "No button ko itna pyaar kyun mil raha hai? 👀",
      "Nanhi Bacchi, natakbaazi band karo! 🤨💗",
      "SYSTEM ERROR: Nanhi Bacchi ka nakhra limit cross kar gaya! 💻💕",
      "Arey meri cute si drama queen, YES bhi toh ek option hai! 🎀",
      "No no no... dil toh YES keh raha hai na? 🥹",
      "Ab toh YES bol do, pleaseee! 🥹💕",
      "Itna bhaav khaogi toh YES bhi sharma jayega! 😭",
      "Nakhre toh dekho meri Nanhi Bacchi ke! 🤭",
    ],
    sadEmojis: ["😢", "🥺", "😭", "😿", "💔", "😭"],
  },
  /* kept for older references */
  noLabels: [
    "Nhi 😢",
    "Galat button dab gaya kya? 🥺",
    "Ek baar phir soch lo Nanhi Bacchi! 🎀",
    "Nakhre toh dekho zara! 😭💕",
    "Itni bhi kya nakli gareebi, ek YES toh banta hai! 😂",
    "No button ko itna pyaar kyun mil raha hai? 👀",
    "Nanhi Bacchi, natakbaazi band karo! 🤨💗",
    "SYSTEM ERROR: Nanhi Bacchi ka nakhra limit cross kar gaya! 💻💕",
    "Arey meri cute si drama queen, YES bhi toh ek option hai! 🎀",
    "No no no... dil toh YES keh raha hai na? 🥹",
    "Ab toh YES bol do, pleaseee! 🥹💕",
    "Itna bhaav khaogi toh YES bhi sharma jayega! 😭",
    "Nakhre toh dekho meri Nanhi Bacchi ke! 🤭",
  ],

  /* Music comes from Nanha playlist (chrome note button) — no ambient mp3 */
  gallery: [],
  cats: [
    "assets/cats/cat1.gif",
    "assets/cats/cat2.gif",
    "assets/cats/cat3.gif",
    "assets/cats/cat4.gif",
    "assets/cats/cat5.gif",
  ],
  catFallbackEmojis: ["🐱", "🐈", "😺", "😸", "😻", "🐈‍⬛"],
};

/* Inspiration.html SVG mascots (winking octopus + friends) */
const NANHA_SVG = {
  octopus(size = 80, mood = "happy") {
    const eyes =
      mood === "winking"
        ? `<path d="M26 44 Q32 38 38 44" stroke="#4A3528" stroke-width="3.5" fill="none" stroke-linecap="round"/>
           <circle cx="64" cy="44" r="4.5" fill="#4A3528"/><circle cx="66" cy="42" r="1.5" fill="#FFF"/>`
        : mood === "surprised"
          ? `<circle cx="34" cy="44" r="5" fill="#4A3528"/><circle cx="35" cy="42" r="1.8" fill="#FFF"/>
             <circle cx="66" cy="44" r="5" fill="#4A3528"/><circle cx="67" cy="42" r="1.8" fill="#FFF"/>
             <ellipse cx="50" cy="54" rx="4" ry="6" fill="#782D42"/>`
          : `<circle cx="34" cy="44" r="4.5" fill="#4A3528"/><circle cx="36" cy="42" r="1.5" fill="#FFF"/>
             <circle cx="66" cy="44" r="4.5" fill="#4A3528"/><circle cx="68" cy="42" r="1.5" fill="#FFF"/>
             <path d="M44 50 Q50 56 56 50" stroke="#4A3528" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" class="drop-shadow-md select-none inline-block octopus-svg">
      <ellipse cx="50" cy="46" rx="34" ry="32" fill="#FFA5BA"/>
      <ellipse cx="44" cy="24" rx="8" ry="4" fill="#FFCCD8" opacity="0.6"/>
      <circle cx="28" cy="52" r="5" fill="#FF7096" opacity="0.5"/>
      <circle cx="72" cy="52" r="5" fill="#FF7096" opacity="0.5"/>
      ${eyes}
      <g fill="#FFA5BA">
        <path d="M22 66 C15 78 28 88 34 74 Z"/><path d="M35 72 C32 86 46 88 47 74 Z"/>
        <path d="M53 74 C54 88 68 86 65 72 Z"/><path d="M66 74 C72 88 85 78 78 66 Z"/>
      </g>
      <path d="M68 20 C74 16 78 26 70 24 C78 28 72 34 68 26 Z" fill="#FFE5D9"/>
      <circle cx="69" cy="23" r="2.5" fill="#FF8CA3"/>
    </svg>`;
  },
  cake(size = 130) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 120 120" class="drop-shadow-lg select-none inline-block">
      <ellipse cx="60" cy="100" rx="52" ry="12" fill="#EADBCE"/><ellipse cx="60" cy="98" rx="46" ry="9" fill="#FFF"/>
      <rect x="25" y="66" width="70" height="28" rx="6" fill="#FFF3E8"/><rect x="25" y="66" width="70" height="8" rx="4" fill="#66462C"/>
      <path d="M25 72 Q32 82 39 72 Q46 84 53 72 Q60 83 67 72 Q74 84 81 72 Q88 82 95 72 L95 66 L25 66 Z" fill="#66462C"/>
      <rect x="38" y="44" width="44" height="24" rx="4" fill="#FFD6DE"/>
      <path d="M38 50 Q43 57 48 50 Q53 58 58 50 Q63 57 68 50 Q73 58 82 50 L82 44 L38 44 Z" fill="#FFA5BA"/>
      <rect x="58" y="28" width="4" height="16" fill="#FFF2C6" rx="1"/>
      <ellipse cx="60" cy="22" rx="4" ry="7" fill="#FFB703" class="animate-pulse"/><ellipse cx="60" cy="23" rx="2" ry="4" fill="#FFF"/>
      <circle cx="44" cy="42" r="3" fill="#E63946"/><circle cx="76" cy="42" r="3" fill="#FFB703"/>
    </svg>`;
  },
  quizBox() {
    return `<div class="relative w-36 h-36 mx-auto animate-float">
      <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-xl">
        <rect x="20" y="40" width="60" height="50" rx="8" fill="#FFD6DE" stroke="#FFA5BA" stroke-width="2"/>
        <rect x="16" y="32" width="68" height="14" rx="4" fill="#FFA5BA"/>
        <rect x="46" y="40" width="8" height="50" fill="#FFF2C6"/><rect x="46" y="32" width="8" height="14" fill="#FFF2C6"/>
        <ellipse cx="40" cy="26" rx="10" ry="7" fill="#FFE5D9" stroke="#FFA5BA" stroke-width="1.5"/>
        <ellipse cx="60" cy="26" rx="10" ry="7" fill="#FFE5D9" stroke="#FFA5BA" stroke-width="1.5"/>
        <circle cx="50" cy="27" r="4" fill="#FFF2C6"/><circle cx="78" cy="20" r="2.5" fill="#FFD6DE" class="animate-ping"/>
      </svg>
    </div>`;
  },
  puppyEyes() {
    return `<svg viewBox="0 0 60 26" class="w-12 h-6 inline-block align-middle">
      <circle cx="16" cy="13" r="10" fill="#2E1C12" class="blinking-eye"/><circle cx="14" cy="9" r="4" fill="#FFFFFF"/>
      <circle cx="19" cy="15" r="1.5" fill="#FFFFFF"/><circle cx="11" cy="14" r="1" fill="#FFFFFF"/>
      <circle cx="21" cy="20" r="2.5" fill="#70D6FF" opacity="0.8"/>
      <circle cx="44" cy="13" r="10" fill="#2E1C12" class="blinking-eye"/><circle cx="42" cy="9" r="4" fill="#FFFFFF"/>
      <circle cx="47" cy="15" r="1.5" fill="#FFFFFF"/><circle cx="39" cy="14" r="1" fill="#FFFFFF"/>
      <circle cx="49" cy="20" r="2.5" fill="#70D6FF" opacity="0.8"/>
    </svg>`;
  },
  cat(type = 1) {
    const fill = type % 2 === 0 ? "#FFE5D9" : "#FFFFFF";
    const ear = type % 2 === 0 ? "#FFCCD8" : "#F4ECE4";
    return `<svg viewBox="0 0 80 80" class="w-16 h-16 drop-shadow-sm inline-block animate-bounce" style="animation-duration:${0.5 + type * 0.15}s">
      <ellipse cx="40" cy="52" rx="24" ry="20" fill="${fill}" stroke="#D1C3B4" stroke-width="2"/>
      <polygon points="22,38 28,18 36,34" fill="${ear}" stroke="#D1C3B4" stroke-width="1.5"/>
      <polygon points="58,38 52,18 44,34" fill="${ear}" stroke="#D1C3B4" stroke-width="1.5"/>
      <circle cx="32" cy="48" r="3" fill="#4A3528"/><circle cx="48" cy="48" r="3" fill="#4A3528"/>
      <path d="M37 54 Q40 57 43 54" stroke="#4A3528" stroke-width="2" fill="none"/>
      <ellipse cx="26" cy="52" rx="3" ry="1.5" fill="#FF8CA3" opacity="0.6"/><ellipse cx="54" cy="52" rx="3" ry="1.5" fill="#FF8CA3" opacity="0.6"/>
      <line x1="18" y1="48" x2="10" y2="46" stroke="#4A3528" stroke-width="1.5"/><line x1="18" y1="52" x2="10" y2="54" stroke="#4A3528" stroke-width="1.5"/>
      <line x1="62" y1="48" x2="70" y2="46" stroke="#4A3528" stroke-width="1.5"/><line x1="62" y1="52" x2="70" y2="54" stroke="#4A3528" stroke-width="1.5"/>
    </svg>`;
  },
};

const SCREENS = [
  "gate",
  "birthday",
  "year",
  "baby",
  "dive",
  "memories",
  "admire",
  "letter",
  "quiz",
  "gift",
  "final",
  "gallery",
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = matchMedia("(hover: none), (pointer: coarse)").matches;

/* Shared motion choreography — keep CSS tokens + JS timers in sync */
const MOTION = {
  easeOut: "cubic-bezier(0.22, 1, 0.36, 1)",
  easeMagic: "cubic-bezier(0.33, 0.1, 0.2, 1)",
  easeExit: "cubic-bezier(0.4, 0.05, 0.2, 1)",
  easeEnter: "cubic-bezier(0.22, 1, 0.36, 1)",
  screenMs: reduceMotion ? 40 : 580,
  screenExitMs: reduceMotion ? 40 : 440,
  loaderMs: reduceMotion ? 80 : 520,
  revealDur: reduceMotion ? 120 : 780,
  revealStep: reduceMotion ? 0 : 88,
};

/* ---------- State ---------- */
const state = {
  screen: "gate",
  musicOn: true,
  musicStarted: false,
  entering: false,
  quizIndex: 0,
  admireOpened: new Set(),
  letterDone: false,
  giftOpened: false,
  noClicks: 0,
  yesScale: 1,
  galleryItems: [],
  lbIndex: 0,
  lbActiveSlot: "a",
  lbToken: 0,
  lbScrollTop: 0,
  fed: false,
  cakeCut: false,
  cakePhase: "lit", // lit → blown → cutting → done
  cakeBusy: false,
};

const lbPreloadCache = new Map();

/* Gate unlock persists per device/browser (survives refresh & reopen) */
// Bumped so already-unlocked browsers still see the new Inspiration gate once
const GATE_UNLOCK_KEY = "nanha-gate-passed-v3";

function isGatePassed() {
  try {
    return localStorage.getItem(GATE_UNLOCK_KEY) === "1";
  } catch (_) {
    return false;
  }
}

function markGatePassed() {
  try {
    localStorage.setItem(GATE_UNLOCK_KEY, "1");
  } catch (_) {}
}

/** Resolve which screen to show after loader (respects hash when unlocked). */
function resolveStartScreen() {
  const hash = (location.hash || "").replace(/^#/, "");
  if (!isGatePassed()) return "gate";
  if (SCREENS.includes(hash) && hash !== "gate") return hash;
  return "birthday";
}

/* ---------- DOM helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function haptic(ms = 12) {
  try {
    navigator.vibrate?.(ms);
  } catch (_) {}
}

function anim(node, frames, opts = {}) {
  if (!node || !node.animate) return Promise.resolve();
  const a = node.animate(frames, {
    duration: 600,
    easing: MOTION.easeOut,
    ...opts,
  });
  return a.finished.catch(() => {});
}

function reveal(nodes, { delay = 0, step = MOTION.revealStep, dur = MOTION.revealDur, y = 16, scale = 0.975, ease = MOTION.easeEnter } = {}) {
  /* Opacity + transform only — filter:blur() forces expensive per-frame paints under the cursor */
  [...nodes].filter(Boolean).forEach((n, i) => {
    n.animate(
      [
        { opacity: 0, transform: `translate3d(0, ${y}px, 0) scale(${scale})` },
        { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
      ],
      {
        duration: reduceMotion ? 120 : dur,
        delay: reduceMotion ? 0 : delay + i * step,
        easing: ease,
        fill: "both",
      }
    );
  });
}

/** GPU-friendly progress fills — prefer transform over width/height layout thrash */
function setScaleProgress(el, ratio, axis = "x") {
  if (!el) return;
  const t = Math.max(0, Math.min(1, Number(ratio) || 0));
  el.style.transform = axis === "y" ? `scaleY(${t})` : `scaleX(${t})`;
}

function setTimelineFill(fill, px, maxPx) {
  if (!fill) return;
  const max = Math.max(1, Number(maxPx) || 1);
  const ratio = Math.max(0, Math.min(1, (Number(px) || 0) / max));
  const line = fill.parentElement;
  // One shared progress var — fill scale + tip top stay locked together
  if (line) line.style.setProperty("--tl-fill", String(ratio));
  fill.style.transform = "";
  fill.dataset.fillPx = String(px);
  fill.dataset.fillMax = String(max);
  const tip = line?.querySelector(".tl-fill-tip") || $("#tl-fill-tip");
  if (!tip) return;
  tip.style.top = "";
  if (!tip.closest(".timeline.is-forever-lit, .timeline.is-forever-connecting")) {
    tip.style.opacity = ratio <= 0.002 ? "0" : "1";
    tip.style.transform = "";
  }
}

function screenIndex(id) {
  const i = SCREENS.indexOf(id);
  return i < 0 ? 0 : i;
}

/* Lightweight SVG art used by dive + timeline (from nanha-gift) */
const DiveArt = (() => {
  const S = (vb, inner, cls = "") =>
    `<svg class="${cls}" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${inner}</svg>`;
  const ink = "#4a2c20";
  return {
    fish: (c = "#ffb36b", d = "#ff8a5c") =>
      S(
        "0 0 80 50",
        `<path d="M60 25L80 8V42Z" fill="${d}"/><ellipse cx="34" cy="25" rx="30" ry="19" fill="${c}"/><path d="M22 8Q34 -2 46 8Z" fill="${d}" opacity=".8"/><path d="M40 10Q50 25 40 40" fill="none" stroke="#fff" stroke-width="3" opacity=".5"/><circle cx="16" cy="21" r="4.5" fill="#fff"/><circle cx="15" cy="21" r="2.4" fill="${ink}"/><path d="M8 30Q12 33 16 31" fill="none" stroke="${ink}" stroke-width="1.6" stroke-linecap="round"/>`,
        "fish"
      ),
    jelly: (c = "#e3d4ff") =>
      S(
        "0 0 60 90",
        `<g fill="none" stroke="${c}" stroke-width="3.4" stroke-linecap="round" opacity=".9"><path class="jt" d="M14 38Q8 54 16 66T14 86"/><path class="jt" d="M24 40Q18 58 26 70T24 90"/><path class="jt" d="M36 40Q42 58 34 70T36 90"/><path class="jt" d="M46 38Q52 54 44 66T46 86"/></g><path d="M6 38C6 6 54 6 54 38Q30 44 6 38Z" fill="${c}" opacity=".85"/><ellipse cx="20" cy="22" rx="8" ry="4" fill="#fff" opacity=".5" transform="rotate(-25 20 22)"/><circle cx="23" cy="30" r="2.4" fill="${ink}"/><circle cx="37" cy="30" r="2.4" fill="${ink}"/><path d="M27 34Q30 37 33 34" fill="none" stroke="${ink}" stroke-width="1.8" stroke-linecap="round"/>`,
        "jelly"
      ),
    petal: (c = "#ff9ebd", d = "#ffd1e0") => {
      const id = `pg${String(c).replace(/[^a-zA-Z0-9]/g, "")}${String(d).replace(/[^a-zA-Z0-9]/g, "")}`;
      return S(
        "0 0 60 90",
        `<defs>
          <linearGradient id="${id}" x1="18" y1="8" x2="48" y2="86" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="${d}"/>
            <stop offset="55%" stop-color="${c}"/>
            <stop offset="100%" stop-color="${c}"/>
          </linearGradient>
        </defs>
        <path d="M30 88C4 66 -2 30 30 2C62 30 64 66 30 88Z" fill="url(#${id})"/>
        <ellipse cx="28" cy="28" rx="10" ry="14" fill="#fff" opacity=".28"/>
        <path d="M30 82V30" stroke="#fff" stroke-width="1.6" opacity=".38" stroke-linecap="round"/>`,
        "petal-svg"
      );
    },
    seal: () =>
      S(
        "0 0 100 100",
        `<defs>
          <radialGradient id="sealg" cx="36%" cy="28%" r="78%">
            <stop offset="0" stop-color="#f7b0c4"/>
            <stop offset=".42" stop-color="#d85a86"/>
            <stop offset=".78" stop-color="#b03a66"/>
            <stop offset="1" stop-color="#7e2448"/>
          </radialGradient>
          <radialGradient id="sealWell" cx="48%" cy="42%" r="58%">
            <stop offset="0" stop-color="#8f2a52"/>
            <stop offset=".7" stop-color="#a63560"/>
            <stop offset="1" stop-color="#6d1c3c"/>
          </radialGradient>
          <radialGradient id="sealGloss" cx="32%" cy="26%" r="45%">
            <stop offset="0" stop-color="#fff" stop-opacity=".55"/>
            <stop offset=".55" stop-color="#fff" stop-opacity=".08"/>
            <stop offset="1" stop-color="#fff" stop-opacity="0"/>
          </radialGradient>
          <filter id="sealDepth" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2.2" stdDeviation="1.6" flood-color="#5a1832" flood-opacity=".45"/>
          </filter>
          <filter id="stampInset" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy=".6" stdDeviation=".35" flood-color="#3d0f22" flood-opacity=".65"/>
          </filter>
        </defs>
        <ellipse cx="52" cy="56" rx="40" ry="36" fill="#5a1832" opacity=".18"/>
        <path filter="url(#sealDepth)" d="M50 3C61 1 67 9 75 9C85 9 89 19 93 27C99 38 97 47 95 55C93 66 96 72 87 80C78 91 68 91 59 97C51 103 43 98 35 96C25 94 18 85 12 76C4 65 4 55 4 47C4 34 11 26 19 18C28 9 38 6 50 3Z" fill="url(#sealg)"/>
        <path d="M50 8C60 6 65 13 72 13C81 13 85 21 88 28C93 37 92 45 90 52C88 61 90 66 83 73C76 82 68 82 60 87C53 92 46 88 39 86C30 84 25 77 20 69C13 60 14 52 14 45C14 35 19 28 26 22C33 15 40 11 50 8Z" fill="none" stroke="#fff" stroke-width="1.2" opacity=".22"/>
        <circle cx="50" cy="50" r="29.5" fill="url(#sealWell)" opacity=".92"/>
        <circle cx="50" cy="50" r="29.5" fill="none" stroke="#5a1832" stroke-width="1.4" opacity=".35"/>
        <circle cx="50" cy="50" r="27" fill="none" stroke="#fff" stroke-width="1.1" opacity=".18" stroke-dasharray="1.6 3.2"/>
        <g filter="url(#stampInset)" transform="translate(50 51) scale(.185) translate(-100 -100)" fill="#f8d5e2" opacity=".92">
          <path d="M100 22C146 22 164 62 154 98C148 122 128 130 100 130C72 130 52 122 46 98C36 62 54 22 100 22Z"/>
          <path d="M60 120C40 134 54 156 34 168M82 128C68 150 86 166 70 190M118 128C132 150 114 166 130 190M140 120C160 134 146 156 166 168" fill="none" stroke="#f8d5e2" stroke-width="16" stroke-linecap="round"/>
        </g>
        <g transform="translate(50 49.6) scale(.185) translate(-100 -100)" fill="#ffe9f1" opacity=".35">
          <path d="M100 22C146 22 164 62 154 98C148 122 128 130 100 130C72 130 52 122 46 98C36 62 54 22 100 22Z"/>
        </g>
        <circle cx="42" cy="45" r="2.6" fill="#6d1c3c"/>
        <circle cx="58" cy="45" r="2.6" fill="#6d1c3c"/>
        <circle cx="41.4" cy="44.3" r="1" fill="#f8d5e2" opacity=".35"/>
        <circle cx="57.4" cy="44.3" r="1" fill="#f8d5e2" opacity=".35"/>
        <ellipse cx="38" cy="30" rx="16" ry="9" fill="url(#sealGloss)" transform="rotate(-28 38 30)"/>
        <path d="M24 20C29 12 38 9 46 11" stroke="#fff" stroke-width="2.4" opacity=".42" fill="none" stroke-linecap="round"/>`,
        "seal-svg"
      ),
    giftbox: () =>
      S(
        "0 0 200 200",
        `<ellipse cx="100" cy="190" rx="66" ry="8" fill="#7a5440" opacity=".1"/>
  <g class="gb-glow"><circle cx="100" cy="100" r="86" fill="#fff6c9"/></g>
  <g class="gb-body"><rect x="38" y="92" width="124" height="94" rx="12" fill="#ffc2d6"/><rect x="38" y="92" width="124" height="22" fill="#fff" opacity=".18"/><rect x="88" y="92" width="24" height="94" fill="#fff4bf"/></g>
  <g class="gb-unfurl"><path d="M88 150C82 170 100 178 94 198L106 198C112 178 94 168 112 150Z" fill="#fff4bf" opacity="0"/></g>
  <g class="gb-lid"><rect x="30" y="68" width="140" height="34" rx="11" fill="#ff9ebd"/><rect x="88" y="68" width="24" height="34" fill="#ffe98a"/><rect x="30" y="68" width="140" height="10" rx="5" fill="#fff" opacity=".25"/>
    <g class="gb-bow"><path d="M100 68C70 28 52 52 80 68Z" fill="#ffd45e"/><path d="M100 68C130 28 148 52 120 68Z" fill="#ffd45e"/><circle cx="100" cy="66" r="9" fill="#ffc229"/></g></g>`,
        "giftbox-svg"
      ),
    lock: () =>
      S(
        "0 0 80 90",
        `<path class="shackle" d="M24 40V28C24 12 56 12 56 28V40" fill="none" stroke="#b98f74" stroke-width="8" stroke-linecap="round"/><rect x="12" y="38" width="56" height="42" rx="12" fill="#f3d9c4"/><rect x="16" y="42" width="48" height="16" rx="8" fill="#fff" opacity=".35"/><circle cx="40" cy="58" r="6" fill="#7a5440"/><rect x="37.5" y="60" width="5" height="11" rx="2.5" fill="#7a5440"/>`,
        "lock-svg"
      ),
    puppy: () => {
      /* Eyes copied from assets/cats/Yes Button.html */
      const eyeBody = `
            <path d="M119 74 C117.5 72.0 112.8 66.0 110.0 62.0 C107.2 58.0 105.0 53.5 102.0 50.0 C99.0 46.5 95.7 43.5 92.0 41.0 C88.3 38.5 84.0 36.5 80.0 35.0 C76.0 33.5 72.0 32.2 68.0 32.0 C64.0 31.8 60.0 32.7 56.0 34.0 C52.0 35.3 47.8 37.5 44.0 40.0 C40.2 42.5 35.8 46.2 33.0 49.0 C30.2 51.8 28.8 53.5 27.5 57.0 C26.2 60.5 25.3 65.5 25.0 70.0 C24.7 74.5 24.8 79.7 25.5 84.0 C26.2 88.3 27.6 92.5 29.0 96.0 C30.4 99.5 33.2 103.5 34.0 105.0 L48 92 L73 80 L100 80 Z" fill="url(#yes-iris-sclera)"/>
            <ellipse class="iris" cx="73" cy="73" rx="37" ry="39" fill="url(#yes-iris-base)"/>
            <g clip-path="url(#yes-iris-clip)">
              <ellipse cx="73" cy="73" rx="37" ry="39" fill="url(#yes-iris-vignette)"/>
              <ellipse cx="74" cy="101" rx="32" ry="13" fill="url(#yes-iris-glow)"/>
              <ellipse cx="41" cy="86" rx="12" ry="22" fill="url(#yes-iris-glow-side)"/>
              <ellipse cx="105" cy="88" rx="8" ry="15" fill="url(#yes-iris-glow-side)" opacity="0.6"/>
              <rect x="34" y="32" width="78" height="38" fill="url(#yes-iris-lid)"/>
              <g class="detail">
                <circle cx="73.5" cy="74" r="22" fill="url(#yes-iris-ring)"/>
                <circle cx="73.5" cy="74" r="19" fill="none" stroke="#6cc0f0" stroke-width="0.8" opacity="0.15"/>
              </g>
              <g class="pupil">
                <ellipse cx="73.5" cy="74" rx="17" ry="18.5" fill="url(#yes-iris-pupil)"/>
                <ellipse cx="73.5" cy="74.5" rx="4" ry="9.5" fill="#000514" opacity="0.5"/>
              </g>
            </g>
            <ellipse cx="73" cy="73" rx="36.2" ry="38.2" fill="none" stroke="#0a2356" stroke-width="1.3" opacity="0.85"/>
            <circle cx="63" cy="55" r="5.4" fill="#fff"/>
            <circle cx="63" cy="55" r="3.2" fill="#d6e6ff" opacity="0.9"/>
            <ellipse cx="44.7" cy="72.7" rx="2.8" ry="2.3" fill="#fff"/>
            <ellipse cx="53.3" cy="67" rx="2.8" ry="1.1" fill="#fff" opacity="0.9" transform="rotate(28 53.3 67)"/>
            <path d="M0 5 C-7 0 -6 -5.5 -2.5 -5 C-1 -4.7 0 -3.5 0 -2.5 C0 -3.5 1.2 -4.8 2.8 -5 C6 -5.3 7 0 0 5Z" transform="translate(90.5 67.5) rotate(-8)" fill="none" stroke="#fff" stroke-width="0.95" stroke-linejoin="round"/>
            <circle cx="106" cy="78.7" r="4" fill="#38e9d2"/>
            <ellipse cx="53.7" cy="95.8" rx="8.6" ry="8.3" fill="url(#yes-iris-blob)"/>
            <path d="M34 105 C33.0 103.7 29.8 100.2 28.0 97.0 C26.2 93.8 24.4 90.2 23.0 86.0 C21.6 81.8 20.4 77.0 19.5 72.0 C18.6 67.0 17.4 61.0 17.5 56.0 C17.6 51.0 17.9 46.5 20.0 42.0 C22.1 37.5 25.8 32.5 30.0 29.0 C34.2 25.5 39.5 22.9 45.0 21.0 C50.5 19.1 57.2 17.8 63.0 17.5 C68.8 17.2 75.0 17.4 80.0 19.0 C85.0 20.6 89.0 23.7 93.0 27.0 C97.0 30.3 100.8 34.5 104.0 39.0 C107.2 43.5 109.5 48.2 112.0 54.0 C114.5 59.8 117.8 70.7 119.0 74.0 C117.5 72.0 112.8 66.0 110.0 62.0 C107.2 58.0 105.0 53.5 102.0 50.0 C99.0 46.5 95.7 43.5 92.0 41.0 C88.3 38.5 84.0 36.5 80.0 35.0 C76.0 33.5 72.0 32.2 68.0 32.0 C64.0 31.8 60.0 32.7 56.0 34.0 C52.0 35.3 47.8 37.5 44.0 40.0 C40.2 42.5 35.8 46.2 33.0 49.0 C30.2 51.8 28.8 53.5 27.5 57.0 C26.2 60.5 25.3 65.5 25.0 70.0 C24.7 74.5 24.8 79.7 25.5 84.0 C26.2 88.3 27.6 92.5 29.0 96.0 C30.4 99.5 33.2 103.5 34.0 105.0 Z" fill="url(#yes-iris-lash)"/>
            <g fill="#35250f">
              <path d="M24.5 15.5 L27.6 29 L34 26.5 Z"/>
              <path d="M8.3 30.8 L17.5 41.5 L21.5 34 Z"/>
              <path d="M9 52 L18.5 54 L18.5 58.5 Z"/>
              <path d="M10.5 61 L18 60 L19 66 Z"/>
            </g>
            <g stroke="#35250f" stroke-width="0.9" stroke-linecap="round" fill="none">
              <path d="M26 33 C16 40 12 50 12.5 61"/>
              <path d="M13 44 L18.5 45.5"/><path d="M12.5 53 L18 53"/>
            </g>`;
      return `
<svg width="0" height="0" class="yes-eye-defs" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="yes-iris-base" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#09204b"/>
      <stop offset="0.3" stop-color="#0c3670"/>
      <stop offset="0.6" stop-color="#104a84"/>
      <stop offset="0.85" stop-color="#1668a0"/>
      <stop offset="1" stop-color="#1e92b8"/>
    </linearGradient>
    <radialGradient id="yes-iris-vignette" cx="50%" cy="48%" r="52%">
      <stop offset="0.62" stop-color="#041238" stop-opacity="0"/>
      <stop offset="1" stop-color="#041238" stop-opacity="0.65"/>
    </radialGradient>
    <radialGradient id="yes-iris-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#4cf3df" stop-opacity="1"/>
      <stop offset="0.6" stop-color="#2fd6d6" stop-opacity="0.65"/>
      <stop offset="1" stop-color="#2fd6d6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="yes-iris-glow-side" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#3fe4d8" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#3fe4d8" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="yes-iris-lid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#041338" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#041338" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="yes-iris-pupil" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#010720"/>
      <stop offset="0.55" stop-color="#031038"/>
      <stop offset="0.82" stop-color="#061a4a" stop-opacity="0.8"/>
      <stop offset="1" stop-color="#0a2468" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="yes-iris-ring" cx="50%" cy="50%" r="50%">
      <stop offset="0.6" stop-color="#5cc4f0" stop-opacity="0"/>
      <stop offset="0.82" stop-color="#5cc4f0" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#5cc4f0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="yes-iris-blob" cx="45%" cy="40%" r="60%">
      <stop offset="0" stop-color="#e6eefc"/>
      <stop offset="0.75" stop-color="#cbdcf6"/>
      <stop offset="1" stop-color="#b3caf0"/>
    </radialGradient>
    <linearGradient id="yes-iris-sclera" gradientUnits="userSpaceOnUse" x1="0" y1="28" x2="0" y2="70">
      <stop offset="0" stop-color="#cfd8e6"/>
      <stop offset="0.5" stop-color="#f4f7fb"/>
      <stop offset="1" stop-color="#ffffff"/>
    </linearGradient>
    <linearGradient id="yes-iris-lash" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#46321a"/>
      <stop offset="1" stop-color="#2f2010"/>
    </linearGradient>
    <clipPath id="yes-iris-clip"><ellipse cx="73" cy="73" rx="37" ry="39"/></clipPath>
  </defs>
</svg>
<span class="eyes" aria-hidden="true">
  <svg class="eye" viewBox="6 12 116 102" data-flip="1" focusable="false">
    <g class="art"><g>${eyeBody}</g></g>
  </svg>
  <svg class="eye" viewBox="6 12 116 102" data-flip="-1" focusable="false">
    <g class="art"><g transform="translate(127 0) scale(-1 1)">${eyeBody}</g></g>
  </svg>
</span>`;
    },
    cat: () =>
      S(
        "0 0 100 110",
        `<g class="cat-tail"><path d="M74 90C100 86 100 56 88 56" fill="none" stroke="#ffc9a8" stroke-width="9" stroke-linecap="round"/></g><ellipse cx="50" cy="84" rx="26" ry="22" fill="#ffd9bd"/><path d="M26 34L30 8L46 24Z M74 34L70 8L54 24Z" fill="#ffd9bd"/><path d="M31 28L33 16L40 24Z M69 28L67 16L60 24Z" fill="#ffb3c6"/><ellipse cx="50" cy="44" rx="28" ry="24" fill="#ffd9bd"/><circle cx="39" cy="42" r="4" fill="${ink}"/><circle cx="61" cy="42" r="4" fill="${ink}"/><circle cx="40.4" cy="40.6" r="1.4" fill="#fff"/><circle cx="62.4" cy="40.6" r="1.4" fill="#fff"/><path d="M46 52Q50 56 54 52M50 49V52" fill="none" stroke="${ink}" stroke-width="2.2" stroke-linecap="round"/><ellipse cx="33" cy="52" rx="5" ry="3" fill="#ff8fb3" opacity=".5"/><ellipse cx="67" cy="52" rx="5" ry="3" fill="#ff8fb3" opacity=".5"/><g class="cat-arm l"><path d="M32 74C20 68 18 56 22 50" fill="none" stroke="#ffd9bd" stroke-width="9" stroke-linecap="round"/></g><g class="cat-arm r"><path d="M68 74C80 68 82 56 78 50" fill="none" stroke="#ffd9bd" stroke-width="9" stroke-linecap="round"/></g>`,
        "cat-svg"
      ),
    lantern: (c = "#ffd36e", gid = "lg0") =>
      S(
        "0 0 60 100",
        /* Soft SVG glow (no CSS filter) — unique gradient id per lantern avoids paint conflicts */
        `<defs><radialGradient id="${gid}" cx="50%" cy="48%" r="55%"><stop offset="0%" stop-color="${c}" stop-opacity=".7"/><stop offset="70%" stop-color="${c}" stop-opacity="0"/></radialGradient></defs><ellipse cx="30" cy="48" rx="26" ry="34" fill="url(#${gid})"/><path d="M30 2V14" stroke="#b98f74" stroke-width="2"/><rect x="18" y="12" width="24" height="8" rx="4" fill="#b98f74"/><path d="M16 22C4 34 4 62 16 74H44C56 62 56 34 44 22Z" fill="${c}"/><path d="M30 22V74M16 22C24 40 24 56 16 74M44 22C36 40 36 56 44 74" stroke="#fff" stroke-width="1.6" opacity=".55" fill="none"/><rect x="18" y="74" width="24" height="7" rx="3.5" fill="#b98f74"/><path d="M30 81V94M26 94H34" stroke="#d9a07a" stroke-width="2.2" stroke-linecap="round"/><ellipse cx="30" cy="48" rx="9" ry="14" fill="#fff" opacity=".45"/>`,
        "lantern"
      ),
    mandala: ({ seed = 1 } = {}) => {
      seed = +seed || 1;
      let n = seed * 7919 + 13;
      const r = () => {
        n = (n * 16807) % 2147483647;
        return n / 2147483647;
      };
      const rings = 6 + (seed % 3);
      const step = 176 / rings;
      let out = "";
      let rad = 12;
      for (let i = 0; i < rings; i++) {
        const count = [8, 12, 16, 24, 12, 16, 20, 32][(i + seed) % 8];
        const len = step * (0.62 + r() * 0.22);
        const type = Math.floor(r() * 4);
        const w = len * 0.38;
        for (let j = 0; j < count; j++) {
          const a = (360 / count) * j;
          const y0 = -rad;
          const y1 = -(rad + len);
          const ym = -(rad + len / 2);
          let d = "";
          if (type === 0) d = `<path d="M0 ${y0}Q${w} ${ym} 0 ${y1}Q${-w} ${ym} 0 ${y0}Z"/>`;
          else if (type === 1)
            d = `<circle cx="0" cy="${ym}" r="${len * 0.22}"/><path d="M0 ${y0}V${ym + len * 0.22}"/>`;
          else if (type === 2)
            d = `<path d="M${-w * 0.7} ${y0}Q0 ${y1 - len * 0.1} ${w * 0.7} ${y0}"/><circle cx="0" cy="${y1 + 1}" r="1.1"/>`;
          else
            d = `<path d="M0 ${y0}C${w * 1.3} ${ym} ${w * 0.4} ${y1} 0 ${y1}C${-w * 0.4} ${y1} ${-w * 1.3} ${ym} 0 ${y0}Z"/><path d="M0 ${y0 - 2}V${y1 + 3}"/>`;
          out += `<g transform="rotate(${a})">${d}</g>`;
        }
        out += `<circle r="${rad + len + 2.5}" stroke-dasharray="${i % 2 ? "1 3" : "0"}"/>`;
        rad += step;
      }
      return S(
        "-100 -100 200 200",
        `<g fill="none" stroke="currentColor" stroke-width=".9" stroke-linecap="round" stroke-linejoin="round">${out}<circle r="5"/><circle r="2" fill="currentColor"/></g>`,
        "mandala-svg"
      );
    },
  };
})();

/* ---------- FX canvas — click hearts / bursts (from nanha-gift) ---------- */
const FX = (() => {
  const cv = $("#fx");
  if (!cv) return { hearts() {}, burst() {}, sparkles() {}, cannons() {}, firework() {}, rain() {}, confettiRain() {}, floatHearts() {}, trail() {}, pastelCelebrate() {}, clear() {}, setBudget() {} };
  const g = cv.getContext("2d", { alpha: true, desynchronized: true }) || cv.getContext("2d");
  let W = 0, H = 0, dpr = 1, raf = 0, last = 0, resizeRaf = 0;
  const P = [];
  /* Soft cap keeps gift/year storms magical without saturating laptop GPUs */
  const MAX_DEFAULT = 520;
  let MAX = MAX_DEFAULT;
  const COLORS = ["#ff9ebd", "#ffc9a8", "#ffe27a", "#a8ecd0", "#a9d8ff", "#cdb8ff", "#ffffff", "#e2b992"];
  function resize() {
    /* Cap DPR on large laptop screens — full 2x canvas is a common stutter source */
    const raw = devicePixelRatio || 1;
    const nextDpr = Math.min(raw, innerWidth >= 1440 ? 1.25 : innerWidth >= 1100 ? 1.5 : 1.75);
    W = innerWidth;
    H = innerHeight;
    if (nextDpr === dpr && cv.width === Math.round(W * dpr) && cv.height === Math.round(H * dpr)) return;
    dpr = nextDpr;
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  addEventListener("resize", () => {
    if (resizeRaf) return;
    resizeRaf = requestAnimationFrame(() => {
      resizeRaf = 0;
      resize();
    });
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    } else if (P.length && !raf) {
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
  });
  resize();
  const k = (n) => (reduceMotion ? Math.max(2, Math.round(n * 0.2)) : n);

  function heart(x, y, s) {
    g.beginPath();
    g.moveTo(x, y + s * 0.3);
    g.bezierCurveTo(x, y - s * 0.3, x - s, y - s * 0.3, x - s, y + s * 0.3);
    g.bezierCurveTo(x - s, y + s * 0.75, x, y + s * 0.95, x, y + s * 1.2);
    g.bezierCurveTo(x, y + s * 0.95, x + s, y + s * 0.75, x + s, y + s * 0.3);
    g.bezierCurveTo(x + s, y - s * 0.3, x, y - s * 0.3, x, y + s * 0.3);
    g.fill();
  }
  function star(x, y, s) {
    g.beginPath();
    g.moveTo(x, y - s);
    g.quadraticCurveTo(x, y, x + s, y);
    g.quadraticCurveTo(x, y, x, y + s);
    g.quadraticCurveTo(x, y, x - s, y);
    g.quadraticCurveTo(x, y, x, y - s);
    g.fill();
  }
  function spark(x, y, s) {
    g.beginPath();
    g.moveTo(x, y - s);
    g.lineTo(x + s * 0.18, y - s * 0.18);
    g.lineTo(x + s, y);
    g.lineTo(x + s * 0.18, y + s * 0.18);
    g.lineTo(x, y + s);
    g.lineTo(x - s * 0.18, y + s * 0.18);
    g.lineTo(x - s, y);
    g.lineTo(x - s * 0.18, y - s * 0.18);
    g.closePath();
    g.fill();
  }
  function diamond(x, y, s) {
    g.beginPath();
    g.moveTo(x, y - s);
    g.lineTo(x + s * 0.72, y);
    g.lineTo(x, y + s);
    g.lineTo(x - s * 0.72, y);
    g.closePath();
    g.fill();
  }

  function add(p) {
    if (P.length > MAX) P.shift();
    P.push(p);
    if (!raf) {
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
  }
  function tick(now) {
    const dt = Math.min(2.2, (now - last) / 16.67);
    last = now;
    g.clearRect(0, 0, W, H);
    for (let i = P.length - 1; i >= 0; i--) {
      const p = P[i];
      p.age += dt;
      if (p.age > p.life) {
        P.splice(i, 1);
        continue;
      }
      p.vy += p.g * dt;
      p.vx *= Math.pow(p.drag, dt);
      p.vy *= Math.pow(p.drag, dt);
      p.x += p.vx * dt + (p.sway ? Math.sin(p.age * 0.08 + p.ph) * p.sway : 0);
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      const t = p.age / p.life;
      g.globalAlpha = t > 0.7 ? 1 - (t - 0.7) / 0.3 : 1;
      g.fillStyle = p.c;
      switch (p.kind) {
        case "rect":
          g.save();
          g.translate(p.x, p.y);
          g.rotate(p.rot);
          g.scale(1, Math.cos(p.age * 0.2 + p.ph));
          g.fillRect(-p.s, -p.s * 0.5, p.s * 2, p.s);
          g.restore();
          break;
        case "circle":
          g.beginPath();
          g.arc(p.x, p.y, p.s * (1 - t * 0.4), 0, 6.283);
          g.fill();
          break;
        case "heart":
          g.save();
          g.translate(p.x, p.y);
          g.rotate(p.rot);
          heart(0, -p.s * 0.5, p.s);
          g.restore();
          break;
        case "star":
          g.save();
          g.translate(p.x, p.y);
          g.rotate(p.rot);
          star(0, 0, p.s * (0.6 + 0.4 * Math.sin(p.age * 0.3 + p.ph)));
          g.restore();
          break;
        case "spark":
          g.save();
          g.translate(p.x, p.y);
          g.rotate(p.rot);
          spark(0, 0, p.s * (0.7 + 0.35 * Math.sin(p.age * 0.35 + p.ph)));
          g.restore();
          break;
        case "diamond":
          g.save();
          g.translate(p.x, p.y);
          g.rotate(p.rot);
          diamond(0, 0, p.s);
          g.restore();
          break;
        case "ring":
          g.beginPath();
          g.arc(p.x, p.y, p.s * (1 - t * 0.25), 0, 6.283);
          g.lineWidth = Math.max(1, p.s * 0.22);
          g.strokeStyle = p.c;
          g.stroke();
          break;
        case "emoji":
          g.save();
          g.translate(p.x, p.y);
          g.rotate(p.rot);
          g.font = `${Math.round(p.s * 2)}px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`;
          g.textAlign = "center";
          g.textBaseline = "middle";
          g.fillStyle = "#000";
          g.fillText(p.c, 0, 0);
          g.restore();
          break;
      }
    }
    g.globalAlpha = 1;
    raf = P.length ? requestAnimationFrame(tick) : (g.clearRect(0, 0, W, H), 0);
  }
  const mk = (o) => ({
    x: 0, y: 0, vx: 0, vy: 0, g: 0.2, drag: 0.985,
    rot: rand(0, 6.28), vr: rand(-0.2, 0.2), s: 6, c: pick(COLORS),
    kind: "rect", life: 100, age: 0, ph: rand(0, 6.28), sway: 0, ...o,
  });

  return {
    setBudget(n) {
      MAX = Math.max(40, Math.min(MAX_DEFAULT, n == null ? MAX_DEFAULT : n | 0));
      while (P.length > MAX) P.shift();
    },
    clear() {
      P.length = 0;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      g.clearRect(0, 0, W, H);
    },
    burst(x, y, { n = 36, kinds = ["rect", "circle", "heart"], speed = 8, spread = 6.283, angle = -1.57, gravity = 0.22, size = [4, 8], life = [70, 120], colors = COLORS, drag } = {}) {
      for (let i = 0; i < k(n); i++) {
        const a = angle + rand(-spread / 2, spread / 2);
        const v = rand(speed * 0.35, speed);
        add(mk({
          x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: gravity,
          s: rand(size[0], size[1]), kind: pick(kinds), c: pick(colors),
          life: rand(life[0], life[1]), ...(drag != null ? { drag } : {}),
        }));
      }
    },
    sparkles(x, y, n = 12) {
      this.burst(x, y, { n, kinds: ["star"], speed: 4.5, gravity: 0.02, size: [4, 9], life: [40, 75], colors: ["#fff", "#ffe27a", "#ffc9e0", "#d9c8ff", "#bfe6ff"] });
    },
    hearts(x, y, n = 6) {
      this.burst(x, y, { n, kinds: ["heart"], speed: 4.5, spread: 2.6, gravity: -0.02, size: [5, 9], life: [60, 100], colors: ["#ff8fb3", "#ffb3cc", "#ff7aa2", "#ffd1e0"] });
    },
    cannon(side = "left", n = 60) {
      const x = side === "left" ? -10 : W + 10;
      const y = H * 0.82;
      const ang = side === "left" ? -1.05 : -2.09;
      this.burst(x, y, { n, speed: 17, spread: 0.7, angle: ang, gravity: 0.32, drag: 0.975, size: [4, 8], life: [90, 150] });
    },
    cannons(n = 60) {
      this.cannon("left", n);
      this.cannon("right", n);
    },
    firework(x = rand(W * 0.15, W * 0.85), y = rand(H * 0.12, H * 0.45)) {
      const c = [pick(COLORS.slice(0, 6)), pick(COLORS.slice(0, 6))];
      this.burst(x, y, { n: 54, kinds: ["circle", "star"], speed: 7, gravity: 0.08, drag: 0.965, size: [2.5, 5], life: [50, 90], colors: c });
    },
    rain(list = ["🍬", "🍫", "🍍", "🍔", "🐙", "💖"], n = 26) {
      for (let i = 0; i < k(n); i++) {
        add(mk({ x: rand(0, W), y: rand(-H * 0.4, -20), vy: rand(1.5, 3.2), vx: rand(-0.4, 0.4), g: 0.01, drag: 1, kind: "emoji", c: pick(list), s: rand(11, 17), life: 260, sway: 0.8, vr: rand(-0.03, 0.03) }));
      }
    },
    confettiRain(n = 70) {
      for (let i = 0; i < k(n); i++) {
        add(mk({ x: rand(0, W), y: rand(-H * 0.3, -10), vy: rand(2, 4.5), vx: rand(-0.5, 0.5), g: 0.01, drag: 1, sway: 1, s: rand(4, 7), life: 230, kind: pick(["rect", "circle"]) }));
      }
    },
    floatHearts(x, y) {
      add(mk({ x, y, vx: rand(-0.3, 0.3), vy: rand(-1.4, -0.8), g: 0, drag: 1, kind: "heart", s: rand(5, 9), c: pick(["#ff9ebd", "#ffb3cc", "#ff7aa2"]), life: 120, sway: 0.5, vr: 0 }));
    },
    trail(x, y) {
      add(mk({ x, y, vx: rand(-0.4, 0.4), vy: rand(-0.2, 0.6), g: 0.02, drag: 0.96, kind: "star", s: rand(2.5, 5), c: pick(["#ffe27a", "#ffc9e0", "#fff", "#d9c8ff"]), life: 36 }));
    },
    pastelCelebrate(x = W * 0.5, y = H * 0.42) {
      const pastel = ["#F8C8DC", "#E8D5F2", "#BFDFFF", "#C8F0E0", "#FFD5C2", "#FFE4EC", "#D9F0FF"];
      const kinds = ["rect", "circle", "star", "spark", "ring", "diamond", "heart"];
      this.burst(x, y, {
        n: 64,
        kinds,
        speed: 8.5,
        gravity: 0.05,
        drag: 0.978,
        size: [3.5, 9],
        life: [95, 165],
        colors: pastel,
      });
      this.burst(x, y, {
        n: 28,
        kinds: ["star", "spark", "circle", "ring"],
        speed: 4.2,
        gravity: 0.015,
        drag: 0.99,
        size: [2.5, 6],
        life: [70, 120],
        colors: pastel,
      });
    },
  };
})();

/* Click anywhere → pink heart burst + light haptic (from nanha-gift) */
addEventListener(
  "pointerdown",
  (e) => {
    if (e.target.closest("#lightbox")) return;
    /* Gallery / lightbox: skip particle storms — they fight image compositing */
    if (document.body.classList.contains("lightbox-open")) return;
    if (state.screen === "gallery") return;
    /* Admire petals handle their own FX — avoid double particle storms */
    if (e.target.closest(".screen[data-screen='admire'] .petal, #flower")) return;
    /* Celebrate already runs cannons/confetti — skip click hearts to cut jank */
    if (document.body.classList.contains("is-celebrating")) return;
    /* Interactive controls already play their own cues */
    if (e.target.closest("button, a, input, select, textarea, .opt, .pill, .petal, .next-btn, #seal, #bigbox, #cake, #knife-element")) return;
    FX.hearts(e.clientX, e.clientY, 4);
    haptic(8);
    try {
      Sound.play?.("tap");
    } catch (_) {}
  },
  { passive: true }
);

/* ---------- Ambient ---------- */
function spawnAmbient() {
  const bubbles = $("#bubbles");
  const sparkles = $("#sparkles");
  const petals = $("#petals");
  if (!bubbles) return;
  for (let i = 0; i < (reduceMotion ? 4 : 14); i++) {
    const b = document.createElement("span");
    b.className = "bubble";
    const size = 8 + Math.random() * 28;
    b.style.width = size + "px";
    b.style.height = size + "px";
    b.style.left = Math.random() * 100 + "%";
    b.style.bottom = -20 + "px";
    b.style.animationDuration = 12 + Math.random() * 18 + "s";
    b.style.animationDelay = Math.random() * 10 + "s";
    bubbles.appendChild(b);
  }
  for (let i = 0; i < (reduceMotion ? 3 : 18); i++) {
    const s = document.createElement("span");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDuration = 2 + Math.random() * 3 + "s";
    s.style.animationDelay = Math.random() * 2 + "s";
    sparkles.appendChild(s);
  }
  for (let i = 0; i < (reduceMotion ? 2 : 8); i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "%";
    p.style.top = -20 + "px";
    p.style.animationDuration = 14 + Math.random() * 16 + "s";
    p.style.animationDelay = Math.random() * 8 + "s";
    p.style.background = ["var(--blush)", "var(--lavender)", "var(--peach)", "var(--mint)"][i % 4];
    petals.appendChild(p);
  }
}

/* Parallax — only where ambient mandalas are actually visible */
const PARALLAX_SCREENS = new Set(["gate", "birthday"]);
function initParallax() {
  if (reduceMotion) return;
  const mandalas = $$(".mandala");
  if (!mandalas.length) return;
  let pending = null;
  window.addEventListener(
    "pointermove",
    (e) => {
      if (!PARALLAX_SCREENS.has(state.screen) || document.body.classList.contains("lightbox-open")) {
        return;
      }
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      if (pending) cancelAnimationFrame(pending);
      pending = requestAnimationFrame(() => {
        pending = null;
        for (let i = 0; i < mandalas.length; i++) {
          const d = (i + 1) * 0.4;
          mandalas[i].style.translate = `${x * d}px ${y * d}px`;
        }
      });
    },
    { passive: true }
  );
}

/* Custom cursor: tip is 1:1; sparkles are transform-only + rAF-batched (no left/top thrash) */
function initCursor() {
  if (isTouch || reduceMotion) return;
  const trail = $("#cursor-trail");
  if (!trail) return;

  trail.textContent = "✨";
  trail.setAttribute("aria-hidden", "true");
  document.body.classList.add("has-custom-cursor");

  let fxLayer = $("#cursor-fx");
  if (!fxLayer) {
    fxLayer = document.createElement("div");
    fxLayer.id = "cursor-fx";
    fxLayer.setAttribute("aria-hidden", "true");
    document.body.appendChild(fxLayer);
  }

  const sparkleEmojis = ["✨", "🌸", "🍍", "⭐", "🫧"];
  const HALF = 14;
  const LIFE_MS = 560;
  const pool = [];
  let liveCount = 0;
  let lastX = null;
  let lastY = null;
  let carry = 0;
  let moveX = 0;
  let moveY = 0;
  let needsTrail = false;
  let raf = 0;

  function trailBudget() {
    /* Lightbox: tip only — sparkles + full-bleed media crush the compositor */
    if (document.body.classList.contains("lightbox-open")) {
      return { step: 9999, max: 0 };
    }
    /* Celebrate / gift dancers + FX already saturate the compositor */
    if (document.body.classList.contains("is-celebrating")) {
      return { step: 36, max: 4 };
    }
    if (state.screen === "gallery" || state.screen === "year" || state.screen === "gift") {
      return { step: 28, max: 8 };
    }
    return { step: 20, max: 12 };
  }

  function acquireSparkle() {
    const el = pool.pop() || document.createElement("div");
    el.className = "nanha-sparkle-trail";
    return el;
  }

  function releaseSparkle(el) {
    if (el._trailAnim) {
      try {
        el._trailAnim.cancel();
      } catch (_) {}
      el._trailAnim = null;
    }
    el.remove();
    if (pool.length < 32) pool.push(el);
    liveCount = Math.max(0, liveCount - 1);
  }

  function spawnSparkle(x, y, maxLive) {
    if (maxLive <= 0) return;
    if (liveCount >= maxLive) {
      const oldest = fxLayer.firstElementChild;
      if (oldest) releaseSparkle(oldest);
      else return;
    }
    const el = acquireSparkle();
    el.textContent = sparkleEmojis[(Math.random() * sparkleEmojis.length) | 0];
    const ox = (Math.random() - 0.5) * 4;
    const oy = (Math.random() - 0.5) * 4;
    /* Transform-only placement — never left/top (those force layout every move) */
    el.style.transform = `translate3d(${x + ox}px, ${y + oy}px, 0) translate(-50%, -50%) scale(1)`;
    el.style.opacity = "0.9";
    fxLayer.appendChild(el);
    liveCount += 1;

    if (el._trailAnim) {
      try {
        el._trailAnim.cancel();
      } catch (_) {}
    }
    const anim = el.animate(
      [
        {
          opacity: 0.9,
          transform: `translate3d(${x + ox}px, ${y + oy}px, 0) translate(-50%, -50%) scale(1)`,
          offset: 0,
        },
        {
          opacity: 0.7,
          transform: `translate3d(${x + ox}px, ${y + oy - 4}px, 0) translate(-50%, -50%) scale(0.9)`,
          offset: 0.25,
        },
        {
          opacity: 0,
          transform: `translate3d(${x + ox}px, ${y + oy - 14}px, 0) translate(-50%, -50%) scale(0.35)`,
          offset: 1,
        },
      ],
      {
        duration: LIFE_MS,
        easing: MOTION.easeOut,
        fill: "forwards",
      }
    );
    el._trailAnim = anim;
    anim.finished.then(() => releaseSparkle(el)).catch(() => {});
  }

  function flushTrail() {
    raf = 0;
    const x = moveX;
    const y = moveY;
    const { step, max } = trailBudget();

    if (!needsTrail || max <= 0) {
      lastX = x;
      lastY = y;
      carry = 0;
      needsTrail = false;
      return;
    }
    needsTrail = false;

    if (lastX == null) {
      lastX = x;
      lastY = y;
      spawnSparkle(x, y, max);
      return;
    }

    const dx = x - lastX;
    const dy = y - lastY;
    const dist = Math.hypot(dx, dy);
    if (dist < 0.5) return;

    carry += dist;
    if (carry >= step) {
      const ux = dx / dist;
      const uy = dy / dist;
      let traveled = step - (carry - dist);
      let stamped = 0;
      /* Cap stamps per frame so a fast flick can't flood the compositor */
      while (traveled <= dist && stamped < 4) {
        spawnSparkle(lastX + ux * traveled, lastY + uy * traveled, max);
        traveled += step;
        stamped += 1;
      }
      carry = dist - (traveled - step);
      if (carry < 0) carry = 0;
    }

    lastX = x;
    lastY = y;
  }

  window.addEventListener(
    "pointermove",
    (e) => {
      const x = e.clientX;
      const y = e.clientY;
      /* Tip stays glued to the OS pointer — never waits on trail work */
      trail.style.transform = `translate3d(${x - HALF}px, ${y - HALF}px, 0)`;

      moveX = x;
      moveY = y;
      needsTrail = true;
      if (!raf) raf = requestAnimationFrame(flushTrail);
    },
    { passive: true }
  );
}

/* ---------- Image loading (pastel skel + silent broken hide) ---------- */
function hideBrokenPhoto(img) {
  if (!img || img.dataset.fallback === "1") return;
  img.dataset.fallback = "1";
  img.hidden = true;
  img.style.display = "none";
  const host = img.closest(".photo-load-host");
  if (host) {
    host.hidden = true;
    host.style.display = "none";
  }
  const figure = img.closest("figure, .tl-photo, .memory-photo, .polaroid, .photo-frame");
  if (figure && !figure.querySelector("img:not([hidden])")) {
    figure.hidden = true;
    figure.style.display = "none";
  }
}

function enhancePhoto(img) {
  const api = window.NanhaPhotoLoad;
  if (api?.enhance) {
    api.enhance(img, { onError: () => hideBrokenPhoto(img) });
    return;
  }
  img.addEventListener("error", () => hideBrokenPhoto(img), { once: true });
}

function hydrateImages(root = document) {
  $$("img[data-src]", root).forEach((img) => {
    const needsSrc = !img.src || img.src.endsWith(location.pathname);
    /* Attach skel before assigning src so the pastel loader paints first */
    enhancePhoto(img);
    if (needsSrc) img.src = img.dataset.src;
  });
}

/* ---------- Sound (SFX only — songs come from Nanha playlist) ---------- */
const Sound = (() => {
  const SFX_MUTE_KEY = "nanha-sfx-muted";
  const BUS_GAIN = 0.5;
  const COOLDOWN_MS = {
    tap: 55,
    pop: 90,
    pen: 40,
    sparkle: 280,
    cheer: 420,
    fanfare: 650,
    whoosh: 240,
    unlock: 480,
    correct: 180,
    wrong: 220,
    crack: 320,
    munch: 260,
    boom: 520,
    sad: 220,
  };

  let ctx, sfxBus, noiseBuf, started = false, warmed = false;
  let muted = false;
  try {
    muted = localStorage.getItem(SFX_MUTE_KEY) === "1";
  } catch (_) {}

  const lastPlayed = Object.create(null);

  function applyBusGain() {
    if (!sfxBus || !ctx) return;
    const now = ctx.currentTime;
    sfxBus.gain.cancelScheduledValues(now);
    sfxBus.gain.setValueAtTime(sfxBus.gain.value, now);
    sfxBus.gain.linearRampToValueAtTime(muted ? 0 : BUS_GAIN, now + 0.08);
  }

  function ensure() {
    if (ctx) {
      if (ctx.state === "suspended") {
        try {
          const p = ctx.resume();
          if (p && p.catch) p.catch(() => {});
        } catch (_) {}
      }
      return ctx;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    sfxBus = ctx.createGain();
    sfxBus.gain.value = muted ? 0 : BUS_GAIN;
    sfxBus.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 1, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    if (ctx.state === "suspended") {
      try {
        const p = ctx.resume();
        if (p && p.catch) p.catch(() => {});
      } catch (_) {}
    }
    return ctx;
  }

  /** Near-silent tick so the first real SFX has no cold-start hitch. */
  function warm() {
    if (warmed) return ensure();
    if (!ensure() || muted) {
      warmed = !!ctx;
      return ctx;
    }
    try {
      const now = ctx.currentTime;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.00001, now);
      g.gain.exponentialRampToValueAtTime(0.00001, now + 0.04);
      o.connect(g);
      g.connect(sfxBus);
      o.start(now);
      o.stop(now + 0.05);
      warmed = true;
    } catch (_) {
      warmed = !!ctx;
    }
    return ctx;
  }

  function tone(f, { t = 0, dur = 0.3, type = "sine", vol = 0.1, to = 0, attack = 0.03, release = 0.12 } = {}) {
    if (!ensure() || muted) return;
    const now = ctx.currentTime + t;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const a = Math.min(attack, dur * 0.45);
    const r = Math.min(release, Math.max(0.04, dur - a));
    o.type = type;
    o.frequency.setValueAtTime(Math.max(20, f), now);
    if (to) o.frequency.exponentialRampToValueAtTime(Math.max(20, to), now + dur);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), now + a);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    o.connect(g);
    g.connect(sfxBus);
    o.start(now);
    o.stop(now + dur + r * 0.25);
  }

  function noise({ t = 0, dur = 0.2, vol = 0.06, from = 1200, to = 300, type = "bandpass", attack = 0.04 } = {}) {
    if (!ensure() || muted) return;
    const now = ctx.currentTime + t;
    const s = ctx.createBufferSource();
    const f = ctx.createBiquadFilter();
    const g = ctx.createGain();
    s.buffer = noiseBuf;
    f.type = type;
    f.Q.value = 0.9;
    f.frequency.setValueAtTime(Math.max(40, from), now);
    f.frequency.exponentialRampToValueAtTime(Math.max(40, to), now + dur);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), now + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    s.connect(f);
    f.connect(g);
    g.connect(sfxBus);
    s.start(now);
    s.stop(now + dur + 0.06);
  }

  const N = { C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880, B5: 987.77, C6: 1046.5, E6: 1318.5, G6: 1568 };
  const sfx = {
    pop() {
      tone(480, { dur: 0.14, to: 820, vol: 0.07, type: "sine", attack: 0.02, release: 0.1 });
    },
    tap() {
      tone(640, { dur: 0.055, vol: 0.035, type: "triangle", attack: 0.008, release: 0.04 });
    },
    sparkle() {
      [N.E5, N.G5, N.C6, N.E6].forEach((f, i) =>
        tone(f, { t: i * 0.075, dur: 0.42, vol: 0.045, type: "sine", attack: 0.04, release: 0.18 })
      );
    },
    wrong() {
      tone(320, { dur: 0.26, type: "sine", vol: 0.055, to: 220, attack: 0.03, release: 0.14 });
      tone(260, { t: 0.14, dur: 0.32, type: "triangle", vol: 0.04, to: 180, attack: 0.04, release: 0.16 });
    },
    cheer() {
      [N.C5, N.E5, N.G5, N.C6, N.E6].forEach((f, i) =>
        tone(f, { t: i * 0.085, dur: 0.48, vol: 0.055, type: "triangle", attack: 0.035, release: 0.2 })
      );
    },
    correct() {
      [N.G5, N.C6, N.E6].forEach((f, i) =>
        tone(f, { t: i * 0.095, dur: 0.4, vol: 0.055, type: "sine", attack: 0.03, release: 0.16 })
      );
    },
    munch() {
      for (let i = 0; i < 3; i++) {
        tone(210 - i * 18, { t: i * 0.11, dur: 0.1, type: "triangle", vol: 0.04, attack: 0.01, release: 0.06 });
        noise({ t: i * 0.11 + 0.01, dur: 0.08, vol: 0.028, from: 900, to: 280, type: "bandpass", attack: 0.01 });
      }
    },
    whoosh() {
      noise({ dur: 0.5, vol: 0.055, from: 520, to: 2400, type: "bandpass", attack: 0.08 });
    },
    crack() {
      noise({ dur: 0.14, vol: 0.07, from: 2200, to: 700, type: "bandpass", attack: 0.01 });
      tone(180, { dur: 0.16, type: "triangle", vol: 0.035, attack: 0.01, release: 0.1 });
    },
    pen() {
      noise({ dur: 0.028, vol: 0.022, from: 3800, to: 2200, type: "highpass", attack: 0.004 });
    },
    boom() {
      noise({ dur: 0.55, vol: 0.07, from: 700, to: 80, type: "lowpass", attack: 0.05 });
      tone(110, { dur: 0.45, to: 55, vol: 0.06, type: "sine", attack: 0.04, release: 0.2 });
    },
    unlock() {
      [N.C5, N.E5, N.G5, N.C6, N.E6, N.G6].forEach((f, i) =>
        tone(f, { t: i * 0.08, dur: 0.55, vol: 0.05, type: "sine", attack: 0.04, release: 0.22 })
      );
      noise({ dur: 0.55, vol: 0.028, from: 1600, to: 4200, type: "highpass", attack: 0.1 });
    },
    sad() {
      tone(380, { dur: 0.4, to: 240, vol: 0.05, type: "sine", attack: 0.05, release: 0.18 });
    },
    fanfare() {
      [N.C5, N.C5, N.G5, N.E5, N.G5, N.C6].forEach((f, i) =>
        tone(f, { t: i * 0.13, dur: 0.34, vol: 0.055, type: "triangle", attack: 0.03, release: 0.14 })
      );
    },
  };

  function canPlay(name) {
    const cd = COOLDOWN_MS[name] || 80;
    const now = performance.now();
    if (lastPlayed[name] && now - lastPlayed[name] < cd) return false;
    lastPlayed[name] = now;
    return true;
  }

  function setMuted(m) {
    muted = !!m;
    try {
      localStorage.setItem(SFX_MUTE_KEY, muted ? "1" : "0");
    } catch (_) {}
    applyBusGain();
    try {
      window.NanhaPlaylist?.syncSfxMuteChip?.();
    } catch (_) {}
  }

  function duck() {
    try {
      window.NanhaPlaylist?.softDuck?.(38);
    } catch (_) {}
  }

  function restore() {
    try {
      window.NanhaPlaylist?.softRestore?.();
    } catch (_) {}
  }

  function unlock() {
    warm();
    return ctx;
  }

  return {
    unlock,
    // SFX mute only — never touches playlist playback
    setMuted,
    setSfxMuted: setMuted,
    toggle: () => setMuted(!muted),
    toggleSfxMute: () => setMuted(!muted),
    get muted() { return muted; },
    get sfxMuted() { return muted; },
    get started() { return started; },
    duck,
    restore,
    play: (n) => {
      try {
        // Independent Web Audio tones — must not pause/stop/reload playlist
        warm();
        started = true;
        if (ctx && ctx.state === "suspended") {
          try { ctx.resume(); } catch (_) {}
        }
        if (muted || !sfx[n] || !canPlay(n)) return;
        sfx[n]();
      } catch (_) {}
    },
  };
})();
window.Sound = Sound;
try {
  window.NanhaPlaylist?.syncSfxMuteChip?.();
} catch (_) {}

/** Start Nanha playlist once; never restarts if already playing. */
function startPlaylistMusic() {
  try {
    if (window.NanhaPlaylist?.ensurePlaying) {
      return window.NanhaPlaylist.ensurePlaying();
    }
    if (window.NanhaPlaylist?.beginPlayback) {
      return window.NanhaPlaylist.beginPlayback();
    }
  } catch (_) {}
  return Promise.resolve();
}

/* ---------- Screen manager ---------- */
function screenEl(id) {
  return $(`.screen[data-screen="${id}"]`);
}

function goTo(id, { history = true, transition } = {}) {
  // One-time gate: lock content until passed; never re-show gate once unlocked
  if (id !== "gate" && !isGatePassed()) id = "gate";
  else if (id === "gate" && isGatePassed()) id = "birthday";

  const prev = state.screen;
  const from = screenEl(prev);
  const to = screenEl(id);
  if (!to) return;
  if (prev === id && to.classList.contains("active") && !to.hidden) return;

  const forward = screenIndex(id) >= screenIndex(prev);
  const txDir = forward ? "forward" : "back";

  /* Soft transition cue — cooldown merges with next-btn pop; leaves whoosh free for dive/letter */
  if (from && from !== to && prev) {
    try {
      Sound.play?.("pop");
    } catch (_) {}
  }

  if (from && from !== to) {
    from.classList.remove("active", "from-loader", "is-entering", "is-settled");
    from.dataset.txDir = txDir;
    from.classList.add("is-leaving");

    if (prev === "year") {
      teardownYearBlast();
      stopYearFlight();
      FX.setBudget?.(reduceMotion ? 40 : 100);
    }
    if (prev === "dive") {
      clearDiveTimers();
      diveBusy = false;
    }
    if (prev === "memories") clearMemoriesObservers(from);
    if (prev === "letter") {
      clearLetterSparkles();
      letterRun++;
      Sound.restore?.();
    }
    if (prev === "gift") {
      leaveGiftScreen();
      FX.setBudget?.(reduceMotion ? 40 : 110);
    }
    if (prev === "final") {
      clearFinalTimers();
      FX.clear?.();
      finalRevealedOnce = false;
    }
    if (prev === "birthday") {
      FX.setBudget?.(reduceMotion ? 40 : 120);
    }

    setTimeout(() => {
      if (state.screen !== prev) {
        from.hidden = true;
        from.classList.remove("is-leaving");
        delete from.dataset.txDir;
      }
    }, MOTION.screenMs);
  }

  to.hidden = false;
  to.classList.remove("from-loader", "is-leaving", "is-settled");
  to.dataset.txDir = txDir;
  to.classList.add("is-entering");
  // Double-rAF so opacity/transform transitions always run (no skipped first paint)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      to.classList.add("active");
      to.scrollTop = 0;
      setTimeout(() => {
        if (state.screen !== id) return;
        to.classList.remove("is-entering");
        to.classList.add("is-settled");
        delete to.dataset.txDir;
      }, MOTION.screenMs);
    });
  });

  state.screen = id;
  document.body.dataset.screen = id;
  document.body.classList.toggle("gallery-active", id === "gallery");
  if (id !== "gallery" && !document.getElementById("lightbox")?.hidden) {
    closeLightbox();
  }
  if (history) {
    try {
      window.history.pushState({ screen: id }, "", "#" + id);
    } catch (_) {}
  }

  onEnterScreen(id);
}

function onEnterScreen(id) {
  if (id === "birthday") initBirthday();
  if (id === "year") {
    ensureYearQuote();
    FX.setBudget?.(reduceMotion ? 60 : 180);
    initYearFlight();
    yearPastelBlast();
  }
  if (id === "baby") initBaby();
  if (id === "dive") runDive();
  if (id === "memories") initMemories();
  if (id === "admire") initAdmire();
  if (id === "letter") initLetter();
  if (id === "quiz") initQuiz();
  if (id === "gift") initGift();
  if (id === "gallery") initGallery();
  if (id === "final") initFinal();
}

/* ---------- Loader → enter (music starts as they arrive) ---------- */
function revealAppAfterEnter() {
  const loader = $("#loader");
  const startScreen = resolveStartScreen();

  // Paint destination under the loader BEFORE fading it — no blank/flicker gap
  SCREENS.forEach((id) => {
    const el = screenEl(id);
    if (!el) return;
    el.classList.remove("active", "from-loader");
    el.hidden = id !== startScreen;
  });

  const start = screenEl(startScreen);
  if (start) {
    start.hidden = false;
    start.classList.add("from-loader");
    // Force style flush so .active opacity transition isn't skipped
    void start.offsetWidth;
    start.classList.add("active");
    start.scrollTop = 0;
  }

  const chrome = $("#chrome");
  if (chrome) chrome.hidden = false;

  state.screen = startScreen;
  document.body.dataset.screen = startScreen;
  document.body.classList.toggle("gallery-active", startScreen === "gallery");
  try {
    history.replaceState({ screen: startScreen }, "", "#" + startScreen);
  } catch (_) {}

  // Soft-enter gate card while loader dissolves
  if (startScreen === "gate") {
    const card = $("#gate-card") || $(".gate-card");
    card?.classList.add("gate-enter");
  }

  // Next frame: fade loader away over the already-visible screen
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      loader?.classList.add("done", "exiting");
    });
  });

  let loaderFinished = false;
  const finishLoader = () => {
    if (!loader || loaderFinished) return;
    loaderFinished = true;
    loader.classList.add("is-settled");
    loader.setAttribute("aria-hidden", "true");
    loader.style.display = "none";
    start?.classList.remove("from-loader");
  };
  if (loader) {
    const onEnd = (e) => {
      if (e.target !== loader) return;
      if (e.propertyName && e.propertyName !== "opacity") return;
      loader.removeEventListener("transitionend", onEnd);
      finishLoader();
    };
    loader.addEventListener("transitionend", onEnd);
    // Fallback if transitionend is skipped (tab background / reduced motion)
    setTimeout(finishLoader, MOTION.loaderMs);
  }

  if (startScreen !== "gate") onEnterScreen(startScreen);
}

function enterSurprise() {
  if (state.entering) return;
  state.entering = true;

  const btn = $("#enter-surprise");
  if (btn) {
    btn.disabled = true;
    btn.setAttribute("aria-busy", "true");
  }
  $("#loader")?.classList.add("is-opening");

  try {
    Sound.unlock?.();
    Sound.play("sparkle");
    // Same user gesture — never block the UI wait on network/YouTube
    startPlaylistMusic();
  } catch (_) {}

  revealAppAfterEnter();
}

function showEnterPrompt() {
  const loader = $("#loader");
  const text = $("#loader-text");
  const hint = $("#loader-open-hint");
  const tip = $("#loader-earphone-tip");
  const eyebrow = $("#loader-eyebrow");
  const lead = $("#loader-lead");
  const btn = $("#enter-surprise");
  loader?.classList.add("ready-to-enter");
  if (text) text.innerHTML = "And finally,<br>your Nanha Surprise<br>is ready… ✨";
  if (eyebrow) eyebrow.hidden = false;
  if (lead) lead.hidden = false;
  if (tip) tip.hidden = false;
  if (hint) hint.hidden = false;
  // pointerdown feels instant; click kept as fallback for keyboard/a11y
  const go = (e) => {
    if (state.entering) return;
    e?.preventDefault?.();
    e?.stopPropagation?.();
    btn?.removeEventListener("pointerdown", go);
    btn?.removeEventListener("click", go);
    enterSurprise();
  };
  btn?.addEventListener("pointerdown", go, { once: true });
  btn?.addEventListener("click", go, { once: true });
}

function loadAsset(url, ms = 2500) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };
    setTimeout(finish, ms);
    try {
      const isAudio = String(url).endsWith(".mp3");
      if (isAudio) {
        const a = new Audio();
        a.preload = "auto";
        a.addEventListener("canplaythrough", finish, { once: true });
        a.addEventListener("loadedmetadata", finish, { once: true });
        a.addEventListener("error", finish, { once: true });
        a.src = url;
        try {
          a.load();
        } catch (_) {
          finish();
        }
        return;
      }
      const img = new Image();
      img.onload = finish;
      img.onerror = finish;
      img.src = url;
    } catch (_) {
      finish();
    }
  });
}

async function preload() {
  // Ambient mp3 is no longer auto-started — playlist begins on "Open Nanha Surprise"
  const urls = [
    "assets/baby.jpg",
    "assets/gallery/gift.webp",
    "assets/gallery/ninni.png",
    "assets/gallery/ninni_happy.png",
    "assets/gallery/golu.png",
    "assets/gallery/golu_happy.png",
    "assets/char3.png",
    ...CONFIG.memories.map((m) => m.photo).filter(Boolean),
    ...CONFIG.gallery.slice(0, 4),
  ];
  let done = 0;
  const total = Math.max(urls.length, 1);
  const fill = $("#loader-fill");
  const pct = $("#loader-pct");
  const tickPct = () => {
    done++;
    const p = Math.min(100, Math.round((done / total) * 100));
    setScaleProgress(fill, p / 100, "x");
    if (pct) pct.textContent = String(p);
  };

  // Warm music engine in parallel so Open never waits on fetch/YT
  const musicWarm = (async () => {
    try {
      if (window.NanhaPlaylist?.warmEngine) {
        await window.NanhaPlaylist.warmEngine();
      } else if (window.NanhaPlaylist?.loadPlaylist) {
        await window.NanhaPlaylist.loadPlaylist();
      }
    } catch (_) {}
  })();

  // Pre-mount the start screen under the loader (still hidden by loader z-index)
  try {
    const startId = resolveStartScreen();
    const start = screenEl(startId);
    if (start) {
      start.hidden = false;
      start.classList.add("from-loader");
    }
  } catch (_) {}

  // Hard cap so missing assets / hanging audio can never freeze "Nanha is waking up"
  await Promise.race([
    Promise.all([
      Promise.all(urls.map((url) => loadAsset(url).then(tickPct))),
      musicWarm,
    ]),
    new Promise((r) => setTimeout(r, 3200)),
  ]);
  setScaleProgress(fill, 1, "x");
  fill?.classList.add("is-complete");
  if (pct) pct.textContent = "100";

  await new Promise((r) => setTimeout(r, reduceMotion ? 40 : 120));

  // Always leave the waking screen — enter prompt starts music on open
  showEnterPrompt();
}

/* ---------- Gate (gift lock/pills + existing surprise octopus/sub/footer) ---------- */
function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function setGateOctopusMood(mood = "winking") {
  const host = $("#gate-octopus");
  const svg = host?.querySelector(".octopus-svg");
  if (!svg || !host) return;
  host.classList.toggle("is-surprised", mood === "surprised");
  if (mood !== "surprised") return;

  const prev = svg.innerHTML;
  svg.innerHTML = `
    <ellipse cx="50" cy="46" rx="34" ry="32" fill="#FFA5BA"/>
    <ellipse cx="44" cy="24" rx="8" ry="4" fill="#FFCCD8" opacity="0.6"/>
    <circle cx="28" cy="52" r="5" fill="#FF7096" opacity="0.5"/>
    <circle cx="72" cy="52" r="5" fill="#FF7096" opacity="0.5"/>
    <circle cx="34" cy="44" r="5" fill="#4A3528"/><circle cx="35" cy="42" r="1.8" fill="#FFF"/>
    <circle cx="66" cy="44" r="5" fill="#4A3528"/><circle cx="67" cy="42" r="1.8" fill="#FFF"/>
    <ellipse cx="50" cy="54" rx="4" ry="6" fill="#782D42"/>
    <g fill="#FFA5BA">
      <path d="M22 66 C15 78 28 88 34 74 Z"/>
      <path d="M35 72 C32 86 46 88 47 74 Z"/>
      <path d="M53 74 C54 88 68 86 65 72 Z"/>
      <path d="M66 74 C72 88 85 78 78 66 Z"/>
    </g>
    <path d="M68 20 C74 16 78 26 70 24 C78 28 72 34 68 26 Z" fill="#FFE5D9"/>
    <circle cx="69" cy="23" r="2.5" fill="#FF8CA3"/>
  `;
  setTimeout(() => {
    svg.innerHTML = prev;
    host.classList.remove("is-surprised");
  }, 850);
}

function updateGateCountdown() {
  const el = $("#gate-countdown");
  const badge = $("#countdown-badge");
  const now = new Date();
  const t0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const b = CONFIG.birthdayDate;
  const label = b.label || "10 Nov";
  const diff = Math.round(
    (new Date(now.getFullYear(), b.month, b.day) - t0) / 864e5
  );

  if (el) {
    if (diff > 0) el.textContent = `⏳ ${diff} more sleep${diff > 1 ? "s" : ""} to ${label}!`;
    else if (diff === 0) el.textContent = "🎂 Today is the day!";
    else el.textContent = "";
  }
  if (badge) {
    if (diff > 0) badge.textContent = `10 November · ${diff} day${diff === 1 ? "" : "s"} 💖`;
    else badge.textContent = "10 November 💖";
  }
}

function initGate() {
  const title = $("#gate-title");
  const sub = $("#gate-sub");
  const pills = $("#gate-pills");
  const hint = $("#gate-hint");
  const cont = $("#gate-continue");
  const lock = $("#lock");
  const card = $("#gate-card") || $(".gate-card");
  const peek = $("#gate-octo");
  let solved = false;
  let wrong = 0;

  if (title) title.textContent = CONFIG.gateQuestion;
  if (sub) sub.textContent = CONFIG.gateSub || "";
  if (hint) {
    hint.textContent = CONFIG.gateIdleHint || "Tap the true milestone, Nanhi Bacchi 🐙";
    hint.className = "hint";
  }
  updateGateCountdown();
  if (peek) requestAnimationFrame(() => peek.classList.add("peek-in"));

  function buildPills() {
    if (!pills) return;
    pills.innerHTML = "";
    const opts = shuffleInPlace([...(CONFIG.gateOptions || [])]);
    opts.forEach((label) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pill";
      btn.textContent = label;
      btn.addEventListener("click", () => choose(btn, label));
      pills.appendChild(btn);
    });
  }

  function choose(btn, label) {
    if (solved) return;
    const correct = CONFIG.gateCorrect || "10 Nov";
    if (label === correct) {
      solved = true;
      btn.classList.add("correct", "pill-press");
      $$(".pill", pills).forEach((p) => {
        if (p !== btn) p.disabled = true;
      });
      lock?.classList.add("open");
      if (hint) {
        hint.textContent = CONFIG.gateSuccessHint || "Yesss! The lock is open 🔓✨";
        hint.className = "hint good";
      }
      markGatePassed();
      celebrateSoft();
      Sound.play("unlock");
      Sound.play("sparkle");
      startPlaylistMusic();
      if (window.confetti && !reduceMotion) {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.55 },
          colors: ["#ffd6e3", "#e3d9ff", "#d3f5e6", "#fff1b8"],
        });
      }
      if (cont) cont.hidden = false;
      haptic(20);
    } else {
      wrong++;
      btn.classList.add("wrong", "pill-press");
      btn.disabled = true;
      card?.classList.remove("shake-card");
      void card?.offsetWidth;
      card?.classList.add("shake-card");
      setGateOctopusMood("surprised");
      Sound.play("wrong");
      const hints = CONFIG.gateHints || [];
      if (hint) {
        hint.textContent = hints[(wrong - 1) % Math.max(hints.length, 1)] || "Hmm, think again, Nanhi Bacchi 🐙";
        hint.className = "hint";
      }
      haptic(30);
      setTimeout(() => btn.classList.remove("wrong", "pill-press"), 600);
    }
  }

  buildPills();

  if (cont) {
    cont.onclick = () => {
      markGatePassed();
      Sound.play("sparkle");
      startPlaylistMusic();
      goTo("birthday");
    };
  }
}

/* ---------- Birthday (Inspiration Screen 2) ---------- */
let cakeTimeline = null;

/* Balloons — copied from nanha-gift */
function balloonSvg(c = "#ff9ebd") {
  return `<svg viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M25 2C44 2 50 22 44 38C40 50 30 56 25 58C20 56 10 50 6 38C0 22 6 2 25 2Z" fill="${c}"/>
    <ellipse cx="15" cy="18" rx="5" ry="9" fill="#fff" opacity=".45" transform="rotate(20 15 18)"/>
    <path d="M21 60L25 55L29 60Z" fill="${c}"/>
    <path d="M25 60C20 72 30 80 25 98" fill="none" stroke="#c9a98a" stroke-width="1.4"/>
  </svg>`;
}
function launchBalloons(box, n = 9) {
  if (!box || reduceMotion) return;
  box.innerHTML = "";
  box.classList.remove("hidden");
  const cs = ["#ff9ebd", "#c9b1ff", "#8fdcc0", "#9fd2ff", "#ffc08f", "#ffe27a"];
  for (let i = 0; i < n; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.cssText = `--x:${rand(2, 92)}%;--d:${rand(9, 16)}s;--dl:${-rand(0, 14)}s;--s:${rand(38, 64)}px;--sw:${rand(10, 30)}px`;
    b.innerHTML = balloonSvg(cs[i % cs.length]);
    box.appendChild(b);
  }
}

function showBdayCornerCats() {
  const host = $("#bday-corner-cats");
  if (!host) return;
  host.hidden = false;
  host.setAttribute("aria-hidden", "false");
  if (reduceMotion) {
    host.classList.add("is-visible");
    return;
  }
  // Restart pop-in if replaying after a reset
  host.classList.remove("is-visible");
  void host.offsetWidth;
  requestAnimationFrame(() => host.classList.add("is-visible"));
}

function hideBdayCornerCats() {
  const host = $("#bday-corner-cats");
  if (!host) return;
  host.classList.remove("is-visible");
  host.hidden = true;
  host.setAttribute("aria-hidden", "true");
}

function initBirthday() {
  const title = $("#bday-title");
  if (title) title.textContent = `Happy Birthday, ${CONFIG.herName}! ✨`;
  const quote = $("#bday-quote");
  if (quote) quote.textContent = CONFIG.birthdayQuote;
  launchBalloons($("#balloons"), 9);

  if (window.confetti && !reduceMotion) {
    confetti({ particleCount: 40, spread: 70, origin: { y: 0.3 } });
  }

  hydrateImages(screenEl("birthday"));
  setupCake();
  if (!state.cakeCut && state.cakePhase === "lit") setCakeCharsHappy(false);
  else if (state.cakePhase !== "lit") setCakeCharsHappy(true);
  if (state.cakePhase === "lit") hideBdayCornerCats();
  else showBdayCornerCats();
  syncCakeUI();
}

function syncCakeUI() {
  const btn = $("#cut-cake-btn");
  const status = $("#cake-status");
  const cake = $("#cake");
  const continueBtn = $("#bday-continue") || document.querySelector('[data-screen="birthday"] .next-btn');
  if (!btn || !cake) return;

  btn.classList.remove("cake-done", "bg-emerald-100", "text-emerald-800");

  const cakeDone = state.cakePhase === "done" || state.cakeCut;
  if (continueBtn) {
    continueBtn.disabled = !cakeDone;
    continueBtn.setAttribute("aria-disabled", cakeDone ? "false" : "true");
    continueBtn.classList.toggle("is-locked", !cakeDone);
    if (!cakeDone) continueBtn.classList.remove("bday-continue-invite");
  }

  if (state.cakePhase === "lit") {
    btn.disabled = false;
    btn.textContent = "Blow Out the Candles 💨";
    if (status) status.textContent = "Close your eyes and wish for something beautiful… You deserve it";
    cake.setAttribute("aria-label", "Blow out the birthday candles");
  } else if (state.cakePhase === "blown") {
    btn.disabled = false;
    btn.textContent = "Tap Knife to Slice Cake ✨";
    if (status) status.textContent = "Wish locked in! Time to cut the burger cake 🍔";
    cake.setAttribute("aria-label", "Cut the birthday burger cake");
  } else if (state.cakePhase === "done") {
    btn.disabled = true;
    btn.textContent = "One slice closer to happiness!";
    btn.classList.add("cake-done");
    if (status) status.textContent = "Wooooooooooooooo";
    cake.setAttribute("aria-label", "Birthday burger cake already sliced");
  } else {
    btn.disabled = true;
    btn.textContent = "…";
  }
}

function spawnCakeFx(kind, count = 6) {
  const host = $("#cake-fx");
  if (!host || reduceMotion) return [];
  const nodes = [];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = kind === "crumb" ? "cake-crumb" : "cake-spark";
    if (kind === "crumb" && i % 3 === 0) el.classList.add("frost");
    if (kind === "spark") {
      if (i % 3 === 1) el.classList.add("pink");
      if (i % 3 === 2) el.classList.add("cream");
    }
    el.style.left = `${28 + Math.random() * 48}%`;
    el.style.top = `${30 + Math.random() * 40}%`;
    host.appendChild(el);
    nodes.push(el);
  }
  return nodes;
}

function clearCakeFx() {
  const host = $("#cake-fx");
  if (host) host.innerHTML = "";
}

function killCakeTimeline() {
  if (cakeTimeline) {
    cakeTimeline.kill();
    cakeTimeline = null;
  }
  if (window.gsap) {
    gsap.killTweensOf([
      "#cake-slice",
      "#cake-left",
      "#knife-element",
      "#serve-plate",
      "#cake-stack",
      ".cake-crumb",
      ".cake-spark",
      ".candle .flame",
      ".candle .flame-core",
      ".candle .smoke",
      ".cut-face",
      ".slice-frosting-bit",
      ".cake-char .cake-char-avatar",
    ]);
  }
}

function resetCakeVisual() {
  killCakeTimeline();
  clearCakeFx();
  hideBdayCornerCats();
  state.cakePhase = "lit";
  state.cakeBusy = false;
  state.cakeCut = false;

  const cake = $("#cake");
  cake?.classList.remove("is-blown", "is-cutting", "is-cut", "animate-pulse-soft");

  if (window.gsap) {
    gsap.set("#knife-element", { x: 0, y: 0, rotation: 0, scale: 1, clearProps: "transform" });
    gsap.set("#cake-slice", { x: 0, y: 0, rotation: 0, scale: 1, clearProps: "transform" });
    gsap.set("#cake-left", { x: 0, y: 0, rotation: 0, clearProps: "transform" });
    gsap.set("#serve-plate", { opacity: 0, x: 0, y: 8, scale: 0.85 });
    gsap.set("#cake-stack", { x: 0, y: 0, clearProps: "transform" });
    gsap.set(".candle .flame, .candle .flame-core", { opacity: 1, scale: 1, visibility: "visible", clearProps: "opacity,visibility,transform" });
    gsap.set(".candle .smoke", { opacity: 0, y: 0 });
    gsap.set(".cut-face", { opacity: 0 });
    gsap.set(".slice-frosting-bit", { opacity: 0, x: 0, y: 0 });
    gsap.set(".cake-char .cake-char-avatar", { clearProps: "transform" });
  } else {
    ["knife-element", "cake-slice", "cake-left", "cake-stack"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.style.cssText = "";
    });
    const plate = $("#serve-plate");
    if (plate) plate.setAttribute("opacity", "0");
    $$(".cut-face").forEach((el) => el.setAttribute("opacity", "0"));
  }

  setCakeCharsHappy(false);
  $$(".cake-char").forEach((c) => c.classList.remove("cheer"));
  syncCakeUI();
}

function setCakeCharsHappy(happy) {
  $$(".cake-char").forEach((c) => c.classList.toggle("is-happy", !!happy));
}

function blowCandlesSequence() {
  if (state.cakeBusy || state.cakePhase !== "lit") return;
  state.cakeBusy = true;
  const cake = $("#cake");
  const status = $("#cake-status");
  const btn = $("#cut-cake-btn");
  if (btn) btn.disabled = true;
  if (status) status.textContent = "Whoooosh… candles listening to your wish 🌬️";
  Sound.play("whoosh");
  haptic(18);

  const flameSel = ".candle .flame, .candle .flame-core";
  const charAvatars = $$(".cake-char .cake-char-avatar");

  const finishBlow = () => {
    cake?.classList.add("is-blown");
    setCakeCharsHappy(true);
    if (window.gsap) gsap.set(flameSel, { opacity: 0, scale: 0.15 });
    else $$(flameSel).forEach((f) => { f.style.opacity = "0"; });
    state.cakePhase = "blown";
    state.cakeBusy = false;
    showBdayCornerCats();
    try {
      Sound.play?.("pop");
    } catch (_) {}
    syncCakeUI();
    if (window.confetti && !reduceMotion) {
      confetti({
        particleCount: 55,
        spread: 70,
        origin: { y: 0.55 },
        colors: ["#FFD6DE", "#FFF2C6", "#FFB703", "#FFE5D9"],
      });
    }
    const sparks = spawnCakeFx("spark", 8);
    if (window.gsap && sparks.length) {
      sparks.forEach((s, i) => {
        gsap.fromTo(
          s,
          { opacity: 0, scale: 0.2, y: 8 },
          {
            opacity: 1,
            scale: 1,
            y: -18 - Math.random() * 16,
            x: (Math.random() - 0.5) * 36,
            duration: 0.85,
            delay: i * 0.04,
            ease: "power2.out",
            onComplete: () => gsap.to(s, { opacity: 0, duration: 0.35 }),
          }
        );
      });
    }
  };

  if (reduceMotion || !window.gsap) {
    $$(flameSel).forEach((f) => { f.style.opacity = "0"; });
    finishBlow();
    if (status) status.textContent = "Wish granted, soft smoke curling up… ✨";
    return;
  }

  killCakeTimeline();
  cakeTimeline = gsap.timeline();

  cakeTimeline
    .to(flameSel, {
      scaleY: 1.28,
      scaleX: 0.72,
      rotation: 10,
      duration: 0.16,
      stagger: 0.03,
      ease: "power1.in",
    })
    .to(flameSel, {
      opacity: 0,
      scale: 0.12,
      y: 3,
      duration: 0.22,
      stagger: 0.04,
      ease: "power2.in",
    })
    .to(
      ".candle .smoke",
      {
        opacity: 0.65,
        y: -4,
        duration: 0.28,
        stagger: 0.05,
        ease: "power1.out",
      },
      "-=0.08"
    )
    // Ninni & Golu brighten as the last flames go out
    .add(() => {
      setCakeCharsHappy(true);
      if (charAvatars.length) {
        gsap.fromTo(
          charAvatars,
          { y: 0, scale: 1 },
          {
            y: -8,
            scale: 1.06,
            duration: 0.32,
            stagger: 0.05,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
          }
        );
      }
    }, "-=0.18")
    .add(() => {
      if (status) status.textContent = "Wish granted — tiny sparkles for you ✨";
      finishBlow();
    })
    .to(".candle .smoke", {
      opacity: 0,
      y: -26,
      duration: 0.9,
      stagger: 0.06,
      ease: "sine.out",
    });
}

function cutCakeSequence() {
  if (state.cakeBusy || state.cakePhase !== "blown") return;
  state.cakeBusy = true;
  state.cakePhase = "cutting";
  syncCakeUI();

  const cake = $("#cake");
  const knife = $("#knife-element");
  const slice = $("#cake-slice");
  const left = $("#cake-left");
  const plate = $("#serve-plate");
  const stack = $("#cake-stack");
  const continueBtn = $("#bday-continue") || document.querySelector('[data-screen="birthday"] .next-btn');

  cake?.classList.add("is-cutting");
  haptic(25);
  try {
    Sound.play?.("whoosh");
  } catch (_) {}

  const finishCut = () => {
    cake?.classList.remove("is-cutting");
    cake?.classList.add("is-cut", "is-blown");
    state.cakePhase = "done";
    state.cakeCut = true;
    state.cakeBusy = false;
    syncCakeUI();
    $$(".cake-char").forEach((c) => c.classList.add("cheer"));
    continueBtn?.classList.add("bday-continue-invite");
    Sound.play("cheer");
    if (window.confetti && !reduceMotion) {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }
  };

  if (reduceMotion || !window.gsap) {
    gsap?.set?.(knife, { x: -42, y: 36, rotation: -12 });
    gsap?.set?.(slice, { x: 52, y: 10, rotation: 18 });
    gsap?.set?.(plate, { opacity: 1, y: 0, scale: 1 });
    gsap?.set?.(".cut-face", { opacity: 1 });
    $$(".cut-face").forEach((el) => el.setAttribute("opacity", "1"));
    if (plate) plate.setAttribute("opacity", "1");
    cake?.classList.add("is-cut");
    try {
      Sound.play?.("munch");
    } catch (_) {}
    finishCut();
    return;
  }

  killCakeTimeline();
  clearCakeFx();
  const crumbs = spawnCakeFx("crumb", 9);
  const sparks = spawnCakeFx("spark", 7);

  // SVG groups animate cleanly with x/y/rotation
  gsap.set(slice, { x: 0, y: 0, rotation: 0, scale: 1, transformOrigin: "18% 78%" });
  gsap.set(left, { x: 0, y: 0 });
  gsap.set(knife, { x: 0, y: 0, rotation: 0, transformOrigin: "40% 90%" });
  gsap.set(plate, { opacity: 0, scale: 0.82, y: 10, x: 0 });
  gsap.set(".cut-face", { opacity: 0 });
  gsap.set(".slice-frosting-bit", { opacity: 0, x: 0, y: 0 });

  cakeTimeline = gsap.timeline({
    defaults: { ease: "power2.out" },
    onComplete: finishCut,
  });

  cakeTimeline
    // 1) Knife rises, aims at the cut line
    .to(knife, {
      x: -22,
      y: -10,
      rotation: -18,
      duration: 0.35,
      ease: "power2.out",
    })
    // 2) Plunge through the cake
    .to(knife, {
      x: -48,
      y: 52,
      rotation: -8,
      duration: 0.42,
      ease: "power3.in",
      onStart: () => {
        try {
          Sound.play?.("munch");
        } catch (_) {}
      },
    })
    .to(stack, { y: 2, duration: 0.12, ease: "power1.out" }, "-=0.12")
    .to(stack, { y: 0, duration: 0.28, ease: "elastic.out(1, 0.55)" }, "-=0.02")
    // 3) Reveal internal layers on both cut faces
    .to(
      ".cut-face",
      {
        opacity: 1,
        duration: 0.22,
        ease: "power1.out",
      },
      "-=0.18"
    )
    // 4) Knife wiggles free; cake gap opens a hair
    .to(knife, {
      x: -40,
      y: 40,
      rotation: 6,
      duration: 0.28,
      ease: "power2.out",
    })
    .to(left, { x: -3, duration: 0.45, ease: "power2.out" }, "-=0.15")
    // 5) Slice lifts out as a real wedge (not a flat half)
    .to(
      slice,
      {
        x: 18,
        y: -14,
        rotation: -6,
        scale: 1.02,
        duration: 0.55,
        ease: "back.out(1.6)",
      },
      "-=0.2"
    )
    // 6) Tip the slice so the cut face turns toward us
    .to(slice, {
      x: 36,
      y: -6,
      rotation: 16,
      duration: 0.5,
      ease: "power2.inOut",
    })
    // 7) Plate slides in to receive it
    .to(
      plate,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      },
      "-=0.35"
    )
    // 8) Serve onto the plate with weight + soft bounce
    .to(slice, {
      x: 58,
      y: 8,
      rotation: 12,
      scale: 1,
      duration: 0.65,
      ease: "power2.in",
    })
    .to(slice, {
      y: 14,
      rotation: 10,
      duration: 0.45,
      ease: "bounce.out",
    })
    .to(
      ".slice-frosting-bit",
      {
        opacity: 1,
        x: 6,
        y: 8,
        duration: 0.35,
        stagger: 0.05,
        ease: "back.out(2)",
      },
      "-=0.35"
    )
    // 9) Knife rests aside
    .to(
      knife,
      {
        x: 8,
        y: 6,
        rotation: 22,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.7"
    )
  crumbs.forEach((c, i) => {
    cakeTimeline.fromTo(
      c,
      { opacity: 0, y: 0, x: 0, scale: 0.5 },
      {
        opacity: 1,
        y: 16 + Math.random() * 24,
        x: 8 + Math.random() * 36,
        rotation: Math.random() * 60 - 20,
        duration: 0.55,
        ease: "power2.out",
      },
      1.05 + i * 0.035
    );
    cakeTimeline.to(c, { opacity: 0.2, duration: 0.45 }, ">-0.12");
  });

  sparks.forEach((s, i) => {
    cakeTimeline.fromTo(
      s,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        y: -10 - Math.random() * 18,
        x: 20 + (Math.random() - 0.5) * 40,
        duration: 0.55,
        ease: "power2.out",
      },
      1.35 + i * 0.04
    );
    cakeTimeline.to(s, { opacity: 0, duration: 0.35 }, ">-0.12");
  });
}

function advanceCakeInteraction() {
  if (state.cakeBusy) return;
  if (state.cakePhase === "lit") blowCandlesSequence();
  else if (state.cakePhase === "blown") cutCakeSequence();
}

function setupCake() {
  const btn = $("#cut-cake-btn");
  const cake = $("#cake");
  if (!btn || btn.dataset.bound) return;
  btn.dataset.bound = "1";

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    advanceCakeInteraction();
  });
  cake?.addEventListener("click", () => advanceCakeInteraction());
  cake?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      advanceCakeInteraction();
    }
  });
}

function celebrateSoft() {
  if (reduceMotion || !window.confetti) return;
  confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 }, colors: ["#F8C8DC", "#E8D5F2", "#FFE9A8"] });
}

/* Year page — soft pastel congratulatory blast */
const YEAR_PASTEL = ["#F8C8DC", "#E8D5F2", "#BFDFFF", "#C8F0E0", "#FFD5C2", "#FFE4EC", "#D9F0FF", "#E6F7F0"];
const YEAR_BIT_KINDS = ["rect", "circle", "ring", "star", "spark", "diamond", "heart"];
let yearBlastTimers = [];

function clearYearBlastTimers() {
  yearBlastTimers.forEach((id) => clearTimeout(id));
  yearBlastTimers = [];
}

function yearBlastLater(fn, ms) {
  const id = setTimeout(fn, ms);
  yearBlastTimers.push(id);
  return id;
}

function spawnYearBlastBits(host, origin, count) {
  if (!host) return;
  const n = reduceMotion ? Math.min(10, count) : count;
  for (let i = 0; i < n; i++) {
    const kind = pick(YEAR_BIT_KINDS);
    const el = document.createElement("span");
    el.className = `year-blast-bit year-blast-bit--${kind === "rect" ? "rect" : kind}`;
    const size = rand(5, kind === "ring" ? 14 : 11);
    const angle = rand(0, Math.PI * 2);
    const dist = rand(48, Math.min(innerWidth, innerHeight) * (innerWidth < 640 ? 0.38 : 0.46));
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist * rand(0.75, 1.15) - rand(10, 40);
    const color = pick(YEAR_PASTEL);
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.left = origin.x + "px";
    el.style.top = origin.y + "px";
    el.style.color = color;
    if (kind === "rect" || kind === "circle") el.style.background = color;
    el.style.setProperty("--bit-x", `${x.toFixed(1)}px`);
    el.style.setProperty("--bit-y", `${y.toFixed(1)}px`);
    el.style.setProperty("--bit-rot", `${rand(-200, 220).toFixed(0)}deg`);
    el.style.setProperty("--bit-dur", `${rand(2.4, 3.8).toFixed(2)}s`);
    el.style.setProperty("--bit-peak", String(rand(0.55, 0.92)));
    el.style.setProperty("--bit-scale", String(rand(0.45, 0.85)));
    el.style.animationDelay = `${rand(0, 0.35).toFixed(2)}s`;
    host.appendChild(el);
    const life = (parseFloat(el.style.getPropertyValue("--bit-dur")) + 0.4) * 1000;
    setTimeout(() => el.remove(), life);
  }
}

function yearPastelBlast() {
  clearYearBlastTimers();
  const layer = $("#year-blast");
  const host = $("#year-blast-host");
  if (host) host.innerHTML = "";
  if (layer) {
    layer.classList.remove("is-on");
    void layer.offsetWidth;
    layer.classList.add("is-on");
  }

  const card = screenEl("year")?.querySelector(".glass-card") || screenEl("year");
  const rect = card?.getBoundingClientRect();
  const ox = rect ? rect.left + rect.width / 2 : innerWidth / 2;
  const oy = rect ? rect.top + Math.min(rect.height * 0.32, 120) : innerHeight * 0.38;

  if (reduceMotion) {
    spawnYearBlastBits(host, { x: ox, y: oy }, 12);
    if (window.confetti) {
      confetti({
        particleCount: 28,
        spread: 55,
        origin: { x: ox / innerWidth, y: oy / innerHeight },
        colors: YEAR_PASTEL,
        scalar: 0.8,
      });
    }
    return;
  }

  // Primary canvas burst (gentle outward bloom)
  FX.pastelCelebrate(ox, oy);
  spawnYearBlastBits(host, { x: ox, y: oy }, 42);

  // Soft side sprays — density like a celebration burst, pastel only
  yearBlastLater(() => {
    FX.burst(ox - 40, oy + 10, {
      n: 26,
      kinds: ["rect", "circle", "spark", "ring"],
      speed: 6.5,
      spread: 2.4,
      angle: -2.4,
      gravity: 0.04,
      drag: 0.98,
      size: [3, 7],
      life: [80, 140],
      colors: YEAR_PASTEL,
    });
    FX.burst(ox + 40, oy + 10, {
      n: 26,
      kinds: ["rect", "circle", "star", "diamond"],
      speed: 6.5,
      spread: 2.4,
      angle: -0.75,
      gravity: 0.04,
      drag: 0.98,
      size: [3, 7],
      life: [80, 140],
      colors: YEAR_PASTEL,
    });
    spawnYearBlastBits(host, { x: ox, y: oy }, 24);
  }, 320);

  // Second gentle wave + floating confetti rain
  yearBlastLater(() => {
    FX.burst(ox, oy - 20, {
      n: 36,
      kinds: ["star", "spark", "circle", "heart", "ring"],
      speed: 5.5,
      gravity: 0.02,
      drag: 0.985,
      size: [3, 8],
      life: [100, 170],
      colors: YEAR_PASTEL,
    });
    for (let i = 0; i < 18; i++) {
      const px = rand(innerWidth * 0.1, innerWidth * 0.9);
      FX.burst(px, rand(-20, 40), {
        n: 1,
        kinds: [pick(["rect", "circle", "spark", "star"])],
        speed: rand(1.2, 2.4),
        angle: 1.55,
        spread: 0.4,
        gravity: 0.03,
        drag: 0.995,
        size: [3, 6],
        life: [140, 220],
        colors: YEAR_PASTEL,
      });
    }
  }, 780);

  // Canvas-confetti soft accent (pastel, never overpowering)
  if (window.confetti) {
    const origin = { x: ox / innerWidth, y: Math.min(0.55, oy / innerHeight) };
    confetti({
      particleCount: 55,
      spread: 78,
      startVelocity: 28,
      gravity: 0.55,
      scalar: 0.85,
      ticks: 180,
      origin,
      colors: YEAR_PASTEL,
    });
    yearBlastLater(() => {
      confetti({
        particleCount: 28,
        angle: 60,
        spread: 48,
        origin: { x: 0.08, y: 0.7 },
        colors: YEAR_PASTEL,
        scalar: 0.75,
        startVelocity: 32,
      });
      confetti({
        particleCount: 28,
        angle: 120,
        spread: 48,
        origin: { x: 0.92, y: 0.7 },
        colors: YEAR_PASTEL,
        scalar: 0.75,
        startVelocity: 32,
      });
    }, 450);
  }

  try {
    Sound.play("sparkle");
  } catch (_) {}
  yearBlastLater(() => {
    try {
      Sound.play?.("cheer");
    } catch (_) {}
  }, 780);
}

function teardownYearBlast() {
  clearYearBlastTimers();
  const layer = $("#year-blast");
  const host = $("#year-blast-host");
  if (layer) layer.classList.remove("is-on");
  if (host) host.innerHTML = "";
  FX.clear?.();
  FX.setBudget?.();
}

/* ---------- Baby (Inspiration Screen 4) ---------- */
let babyEnterTimers = [];
function clearBabyEnter() {
  babyEnterTimers.forEach((id) => clearTimeout(id));
  babyEnterTimers = [];
}
function babyLater(fn, ms) {
  const id = setTimeout(fn, ms);
  babyEnterTimers.push(id);
  return id;
}

function initBaby() {
  const screen = screenEl("baby");
  const cap = $("#baby-caption");
  if (cap) cap.textContent = CONFIG.babyCaption || "Always the cutest in the universe 💕";
  const sideEyebrow = $("#baby-side-eyebrow");
  if (sideEyebrow) sideEyebrow.textContent = CONFIG.babySideEyebrow || "once upon";
  const sideDate = $("#baby-side-date");
  if (sideDate) {
    const bd = CONFIG.birthdayDate || {};
    const base = bd.label || "10 Nov";
    sideDate.textContent = bd.year ? `${base} ${bd.year}` : base;
  }
  const sideName = $("#baby-side-name");
  if (sideName) sideName.textContent = CONFIG.herName || "Nanhi Bacchi";
  const sideNote = $("#baby-side-note");
  if (sideNote) sideNote.textContent = CONFIG.babySideNote || "a little sunshine arrived";
  const bq = $("#baby-quote");
  if (bq) bq.textContent = CONFIG.babyQuote;
  const heading = $("#facts-heading");
  if (heading) heading.textContent = CONFIG.factsHeading || "Little Facts About Youuu 🥹🎀";
  const intro = $("#facts-intro");
  if (intro) intro.textContent = CONFIG.factsIntro || "";
  const outro = $("#facts-outro");
  const outroTextEl = $("#facts-outro-text") || outro;
  if (outro) {
    const outroText = CONFIG.factsOutro || "";
    if (outroTextEl) outroTextEl.innerHTML = outroText.replace(/\n/g, "<br>");
    outro.hidden = !outroText;
  }
  hydrateImages(screen);

  const FACTS_PREVIEW = 6;
  const facts = $("#facts");
  const moreBtn = $("#facts-more");
  if (facts && !facts.dataset.done) {
    facts.dataset.done = "1";
    facts.innerHTML = "";
    const total = CONFIG.facts.length;
    CONFIG.facts.forEach((f, i) => {
      const card = document.createElement("article");
      const tone = i % 3;
      const num = String(i + 1).padStart(2, "0");
      const icon = f.icon || "✨";
      const title = f.title || "";
      const desc = f.body || f.desc || "";
      card.className = `baby-fact baby-fact-tone-${tone}`;
      card.setAttribute("role", "listitem");
      card.dataset.index = String(i);
      if (total > FACTS_PREVIEW && i >= FACTS_PREVIEW) {
        card.hidden = true;
        card.classList.add("baby-fact-extra");
      }
      card.innerHTML = `
        <span class="baby-fact-tape" aria-hidden="true"></span>
        <div class="baby-fact-meta">
          <span class="baby-fact-num" aria-label="Fact ${num}">${num}</span>
          <span class="baby-fact-icon" aria-hidden="true">${icon}</span>
        </div>
        <div class="baby-fact-copy">
          <h4 class="baby-fact-title">${title}</h4>
          <p class="baby-fact-body">${desc}</p>
        </div>`;
      facts.appendChild(card);
    });
    if (moreBtn) {
      const extras = total - FACTS_PREVIEW;
      if (extras > 0) {
        moreBtn.hidden = false;
        moreBtn.textContent = `Show ${extras} more quirks 🎀`;
        moreBtn.setAttribute("aria-expanded", "false");
        moreBtn.onclick = () => {
          const hiddenCards = $$(".baby-fact-extra", facts);
          hiddenCards.forEach((c, i) => {
            c.hidden = false;
            babyLater(() => c.classList.add("is-in"), 40 + i * 70);
          });
          moreBtn.hidden = true;
          moreBtn.setAttribute("aria-expanded", "true");
          Sound.play?.("pop");
        };
      } else {
        moreBtn.hidden = true;
      }
    }
  } else if (facts) {
    $$(".baby-fact", facts).forEach((c) => {
      c.classList.remove("is-in");
      if (c.classList.contains("baby-fact-extra") && moreBtn && !moreBtn.hidden) {
        c.hidden = true;
      }
    });
    $$(":scope > *", facts).forEach((c) => {
      if (!c.classList.contains("baby-fact")) c.classList.add("baby-fact");
      c.classList.remove("is-in");
    });
  }

  playBabyEntrance(screen);
}

function playBabyEntrance(screen) {
  clearBabyEnter();
  if (!screen) return;

  const curtain = $("#baby-curtain");
  const frame = $("#baby-frame");
  const enters = $$(".baby-enter", screen);
  const factCards = $$(".baby-fact", screen);

  screen.classList.remove("baby-ready");
  enters.forEach((el) => el.classList.remove("is-in"));
  factCards.forEach((el) => el.classList.remove("is-in"));
  frame?.classList.remove("bloom", "is-in");
  curtain?.classList.remove("open");

  if (reduceMotion) {
    enters.forEach((el) => el.classList.add("is-in"));
    factCards.forEach((el) => el.classList.add("is-in"));
    frame?.classList.add("bloom", "is-in");
    curtain?.classList.add("open");
    screen.classList.add("baby-ready");
    return;
  }

  // Staggered cute reveal: badge → title → polaroid bloom → curtain → side → caption → facts → CTA
  const show = (sel, delay) => {
    babyLater(() => {
      const el = typeof sel === "string" ? $(sel, screen) : sel;
      el?.classList.add("is-in");
    }, delay);
  };

  show(".baby-badge", 80);
  show(".baby-title", 220);

  babyLater(() => {
    frame?.classList.add("bloom", "is-in");
    Sound.play("sparkle");
  }, 380);

  babyLater(() => {
    curtain?.classList.add("open");
    try {
      Sound.play?.("whoosh");
    } catch (_) {}
  }, 820);

  babyLater(() => {
    screen.classList.add("baby-ready");
    const r = frame?.getBoundingClientRect();
    if (r) {
      const cx = r.left + r.width * 0.38;
      const cy = r.top + r.height * 0.42;
      FX.sparkles?.(cx, cy, 18);
      FX.hearts?.(cx, cy - 12, 5);
    }
    Sound.play("sparkle");
  }, 1180);

  show(".baby-side", 1240);
  show(".baby-caption", 1380);
  show(".baby-scrap-divider", 1480);
  show(".baby-facts-kicker", 1560);
  show(".baby-facts-title", 1640);
  show(".baby-facts-intro", 1740);

  // Only stagger cards that are currently visible (preview set)
  const visibleFacts = factCards.filter((c) => !c.hidden);
  visibleFacts.forEach((card, i) => {
    babyLater(() => {
      card.classList.add("is-in");
      if (i === 0) Sound.play("pop");
    }, 1860 + i * 75);
  });

  const afterFacts = 1860 + Math.max(visibleFacts.length, 1) * 75;
  show(".baby-facts-more", afterFacts + 40);
  show(".baby-facts-outro", afterFacts + 120);
  show(".baby-cta", afterFacts + 240);
}

function ensureYearQuote() {
  const q = $("#year-quote");
  if (q) q.textContent = `"${CONFIG.emotionalCore || CONFIG.yearQuote}"`;
  const lblL = $("#lbl-l");
  const lblR = $("#lbl-r");
  // Flight pins: left = Me, right = My Rasmalai
  if (lblL) lblL.textContent = "Me";
  if (lblR) lblR.textContent = "My Rasmalai";
  // Keep legacy name slots if still present
  const mine = $("#year-my-name");
  if (mine) mine.textContent = CONFIG.myName;
  const hers = $("#year-her-name");
  if (hers) hers.textContent = CONFIG.herName;
}

/* Flight butterflies — copied from nanha-gift mods.together */
const INK = "#4a2c20";
function butterflyInner(c = "#ff9ebd", d = "#ffd1e0", spot = "#fff") {
  return `<g class="bfly"><g class="wing wl"><path d="M0 0C-14 -22 -34 -14 -28 2C-24 14 -10 10 0 4Z" fill="${c}"/><path d="M0 4C-12 8 -22 22 -14 26C-6 28 -2 16 0 4Z" fill="${d}"/><circle cx="-18" cy="-3" r="3" fill="${spot}" opacity=".85"/></g><g class="wing wr"><path d="M0 0C14 -22 34 -14 28 2C24 14 10 10 0 4Z" fill="${c}"/><path d="M0 4C12 8 22 22 14 26C6 28 2 16 0 4Z" fill="${d}"/><circle cx="18" cy="-3" r="3" fill="${spot}" opacity=".85"/></g><rect x="-2" y="-8" width="4" height="22" rx="2" fill="${INK}"/><path d="M-1 -8Q-6 -18 -10 -17M1 -8Q6 -18 10 -17" fill="none" stroke="${INK}" stroke-width="1.4" stroke-linecap="round"/></g>`;
}

let yearFlightRaf = 0;
let yearFlightStartTimer = 0;
let yearPathLen = 0;
function placeYearButterfliesAt(path, b1, b2, e = 0, bob = 0, len = yearPathLen) {
  const L = len || path.getTotalLength() || 0;
  const p1 = path.getPointAtLength(L * 0.5 * (e * 0.9));
  const p2 = path.getPointAtLength(L - L * 0.5 * (e * 0.9));
  b1.setAttribute(
    "transform",
    `translate(${p1.x} ${p1.y + bob}) rotate(${(1 - e) * 22 - 6}) scale(1.15)`
  );
  b2.setAttribute(
    "transform",
    `translate(${p2.x} ${p2.y - bob}) rotate(${-(1 - e) * 22 + 6}) scale(1.15)`
  );
  return { L, p1, p2 };
}
function stopYearFlight() {
  if (yearFlightRaf) {
    cancelAnimationFrame(yearFlightRaf);
    yearFlightRaf = 0;
  }
  if (yearFlightStartTimer) {
    clearTimeout(yearFlightStartTimer);
    yearFlightStartTimer = 0;
  }
}
function initYearFlight() {
  const path = $("#flight-path");
  const b1 = $("#bf1");
  const b2 = $("#bf2");
  const h = $("#flight-heart");
  if (!path || !b1 || !b2 || !h) return;

  stopYearFlight();

  b1.innerHTML = butterflyInner("#c9b1ff", "#e3d9ff", "#ffffff");
  b2.innerHTML = butterflyInner("#ffffff", "#f5f2fa", "#c9b1ff");
  h.innerHTML =
    '<path transform="translate(-11 -11) scale(.95)" d="M12 21C-4 10 2 -1 12 5C22 -1 28 10 12 21Z" fill="#ff8fb3"/>';
  h.setAttribute("opacity", "0");

  yearPathLen = path.getTotalLength() || 0;
  // Pin to path ends immediately so they never flash at (0,0) / last pose
  placeYearButterfliesAt(path, b1, b2, 0, 0, yearPathLen);
  const T = reduceMotion ? 1 : 5200;
  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  let t0 = 0;

  const step = (now) => {
    if (!t0) t0 = now;
    const k = clamp01((now - t0) / T);
    const e = 1 - Math.pow(1 - k, 3);
    const bob = Math.sin(now / 420) * 3;
    const { p1, p2 } = placeYearButterfliesAt(path, b1, b2, e, bob, yearPathLen);
    if (k >= 1) {
      /* Settle once — wing CSS flap keeps life; perpetual rAF was stealing cursor frames */
      placeYearButterfliesAt(path, b1, b2, 1, 0, yearPathLen);
      const mx = (p1.x + p2.x) / 2;
      const my = Math.min(p1.y, p2.y) - 38;
      h.setAttribute("opacity", "1");
      h.setAttribute("transform", `translate(${mx} ${my}) scale(1)`);
      try {
        Sound.play?.("pop");
      } catch (_) {}
      yearFlightRaf = 0;
      return;
    }
    yearFlightRaf = requestAnimationFrame(step);
  };

  // Brief delay like gift so the card is visible first
  yearFlightStartTimer = setTimeout(() => {
    yearFlightStartTimer = 0;
    yearPathLen = path.getTotalLength() || yearPathLen;
    // Re-pin after layout/transition in case path metrics settled
    placeYearButterfliesAt(path, b1, b2, 0, 0, yearPathLen);
    yearFlightRaf = requestAnimationFrame(step);
  }, reduceMotion ? 0 : 700);
}

/* ---------- Dive → Memories (nanha-gift underwater transition) ---------- */
let diveTimers = [];
let memIo = null;
let memOnScroll = null;
let diveBusy = false;

function clearDiveTimers() {
  diveTimers.forEach((id) => clearTimeout(id));
  diveTimers = [];
}
function diveLater(fn, ms) {
  const id = setTimeout(fn, ms);
  diveTimers.push(id);
  return id;
}

function buildSeaLife() {
  const sea = $("#sea");
  if (!sea) return;
  const fc = [
    ["#ffb36b", "#ff8a5c"],
    ["#ff9ebd", "#ee7aa0"],
    ["#8fdcc0", "#5cc0a0"],
    ["#9fd2ff", "#6bb0ee"],
    ["#ffe27a", "#f0b73c"],
    ["#c9b1ff", "#a98be8"],
  ];
  let h = "";
  for (let i = 0; i < 7; i++) {
    const c = fc[i % fc.length];
    h += `<div class="fish-wrap ${i % 2 ? "rtl" : ""}" style="--t:${rand(12, 80)}%;--d:${rand(9, 16)}s;--dl:${-rand(0, 12)}s;--s:${rand(46, 84)}px"><div class="fish-bob">${DiveArt.fish(c[0], c[1])}</div></div>`;
  }
  for (let i = 0; i < 3; i++) {
    h += `<div class="jelly-wrap" style="--x:${12 + i * 34 + rand(-6, 6)}%;--d:${rand(7, 11)}s;--dl:${-rand(0, 6)}s;--s:${rand(46, 66)}px">${DiveArt.jelly(["#e3d4ff", "#ffd1e0", "#cfeaff"][i])}</div>`;
  }
  for (let i = 0; i < 26; i++) {
    h += `<i class="sea-bubble" style="--x:${rand(0, 100)}%;--s:${rand(6, 26)}px;--d:${rand(5, 12)}s;--dl:${-rand(0, 10)}s"></i>`;
  }
  sea.innerHTML = h;
}

async function drainToMemories() {
  const prev = screenEl("dive");
  const next = screenEl("memories");
  const wb = $("#water-body");
  if (!prev || !next) {
    goTo("memories");
    return;
  }

  // Timeline should already be built during dive; ensure once without blocking paint
  next.hidden = false;
  next.classList.add("active", "memories-emerging");
  next.scrollTop = 0;
  next.style.opacity = "1";
  next.style.filter = "none";
  next.style.transform = "translate3d(0, 48px, 0)";
  next.style.clipPath = "inset(100% 0 0 0)";
  next.style.webkitClipPath = "inset(100% 0 0 0)";
  buildMemoriesList();

  const items = $$(".tl-item", next);
  items.forEach((item) => item.classList.remove("in"));
  const fill = $("#tl-fill");
  const line = next.querySelector(".tl-line");
  if (fill) {
    fill.style.height = "";
    fill.style.transition = "none";
    setTimelineFill(fill, 0, 1);
  }
  resetTimelineForever();

  // Estimate resting fill without unclipping the whole screen (avoids a forced full reflow spike)
  const restFillPx = Math.max(72, Math.round(innerHeight * 0.28));
  const lineH = Math.max(line?.offsetHeight || restFillPx, restFillPx, 1);
  const restRatio = Math.max(0, Math.min(1, restFillPx / lineH));
  // First 2 cards bloom with water; rest wait for IntersectionObserver (cheaper than rect-scanning all)
  const emergeItems = items.slice(0, 2);

  prev.classList.add("is-draining");
  prev.style.zIndex = "30";
  prev.style.pointerEvents = "none";
  if (wb) wb.classList.add("is-exiting");

  const revealTimers = [];
  const later = (fn, ms) => {
    const id = setTimeout(fn, ms);
    revealTimers.push(id);
    return id;
  };

  if (reduceMotion) {
    next.style.clipPath = "inset(0 0 0 0)";
    next.style.webkitClipPath = "inset(0 0 0 0)";
    next.style.transform = "none";
    setTimelineFill(fill, restFillPx, lineH);
    await anim(prev, [{ opacity: 1 }, { opacity: 0 }], { duration: 280, fill: "forwards" });
    emergeItems.forEach((item) => item.classList.add("in"));
  } else {
    const dur = 3400;
    // Water level rises; memories uncover in sync from the bottom up
    const lift = anim(
      wb || prev,
      [
        { transform: "translate3d(0, 0, 0)", opacity: 1 },
        { transform: "translate3d(0, -18%, 0)", opacity: 1, offset: 0.3 },
        { transform: "translate3d(0, -55%, 0)", opacity: 1, offset: 0.62 },
        { transform: "translate3d(0, -120%, 0)", opacity: 0.97 },
      ],
      { duration: dur, easing: MOTION.easeExit, fill: "forwards" }
    );
    const emerge = anim(
      next,
      [
        {
          clipPath: "inset(100% 0 0 0)",
          webkitClipPath: "inset(100% 0 0 0)",
          transform: "translate3d(0, 56px, 0)",
          offset: 0,
        },
        {
          clipPath: "inset(72% 0 0 0)",
          webkitClipPath: "inset(72% 0 0 0)",
          transform: "translate3d(0, 36px, 0)",
          offset: 0.28,
        },
        {
          clipPath: "inset(38% 0 0 0)",
          webkitClipPath: "inset(38% 0 0 0)",
          transform: "translate3d(0, 16px, 0)",
          offset: 0.55,
        },
        {
          clipPath: "inset(12% 0 0 0)",
          webkitClipPath: "inset(12% 0 0 0)",
          transform: "translate3d(0, 5px, 0)",
          offset: 0.78,
        },
        {
          clipPath: "inset(0% 0 0 0)",
          webkitClipPath: "inset(0% 0 0 0)",
          transform: "translate3d(0, 0, 0)",
          offset: 1,
        },
      ],
      { duration: dur, easing: MOTION.easeMagic, fill: "forwards" }
    );

    // Header appears once a little sky is clear (no blur — keeps emerge buttery)
    later(() => {
      reveal([$("#mem-title", next), $(".mem-eyebrow", next)], {
        step: 120,
        dur: 820,
        y: 14,
      });
      Sound.play("sparkle");
    }, dur * 0.32);

    // Timeline fill + tip share --tl-fill; emerge animates both in lockstep then commits
    let fillRise = Promise.resolve();
    if (fill) {
      const lineEl = fill.parentElement;
      const tip = lineEl?.querySelector(".tl-fill-tip") || $("#tl-fill-tip");
      fill.style.transition = "none";
      if (tip) tip.style.transition = "none";
      setTimelineFill(fill, 0, lineH);
      const riseOpts = {
        duration: dur * 0.72,
        delay: dur * 0.26,
        easing: "cubic-bezier(0.33, 0.12, 0.18, 1)",
        fill: "forwards",
      };
      const mid = restRatio * 0.45;
      const fillA = fill.animate
        ? fill.animate(
            [
              { transform: "scaleY(0)", offset: 0 },
              { transform: `scaleY(${mid})`, offset: 0.45 },
              { transform: `scaleY(${restRatio})`, offset: 1 },
            ],
            riseOpts
          )
        : null;
      const tipA =
        tip?.animate
          ? tip.animate(
              [
                { top: "0%", opacity: 0, offset: 0 },
                { top: `${mid * 100}%`, opacity: 1, offset: 0.45 },
                { top: `${restRatio * 100}%`, opacity: 1, offset: 1 },
              ],
              riseOpts
            )
          : null;
      fillRise = Promise.all([
        fillA?.finished.catch(() => {}) || Promise.resolve(),
        tipA?.finished.catch(() => {}) || Promise.resolve(),
      ]).then(() => {
        fillA?.cancel();
        tipA?.cancel();
        setTimelineFill(fill, restFillPx, lineH);
        fill.style.transition = "";
        if (tip) tip.style.transition = "";
      });
    }

    // Cards in view bloom upward as the water line passes them.
    // Cards below the fold stay without `.in` so IntersectionObserver can reveal on scroll.
    const n = Math.max(emergeItems.length, 1);
    emergeItems.forEach((item, i) => {
      const fromBottom = n - 1 - i;
      const t = 0.34 + (fromBottom / n) * 0.4;
      later(() => {
        item.classList.add("in");
        if (i === 0) Sound.play("pop");
      }, dur * t);
    });

    // Soft magical shimmer — lighter particle budget during the heavy transition
    later(() => {
      const midX = innerWidth * 0.5;
      const midY = innerHeight * 0.42;
      FX.sparkles?.(midX, midY, 6);
      FX.hearts?.(midX, midY + 20, 2);
    }, dur * 0.48);

    await Promise.all([lift, emerge, fillRise]);
  }

  revealTimers.forEach((id) => clearTimeout(id));

  /* Commit WAAPI styles BEFORE cancel — prevents the micro-snap when handing back to CSS */
  try {
    fill?.getAnimations?.()?.forEach((a) => {
      try { a.commitStyles?.(); } catch (_) {}
      a.cancel();
    });
    next.getAnimations?.()?.forEach((a) => {
      try { a.commitStyles?.(); } catch (_) {}
      a.cancel();
    });
    prev.getAnimations?.({ subtree: true })?.forEach((a) => a.cancel());
  } catch (_) {}

  prev.classList.remove("active", "is-draining");
  prev.hidden = true;
  prev.style.zIndex = "";
  prev.style.opacity = "";
  prev.style.pointerEvents = "";
  if (wb) {
    wb.style.transform = "";
    wb.classList.remove("is-exiting");
  }

  /* Settle memories to CSS control on the next frame so clip/transform don't flash */
  next.classList.remove("memories-emerging");
  next.style.willChange = "auto";
  requestAnimationFrame(() => {
    next.style.transform = "";
    next.style.filter = "";
    next.style.opacity = "";
    next.style.clipPath = "";
    next.style.webkitClipPath = "";
  });

  state.screen = "memories";
  document.body.dataset.screen = "memories";
  try {
    window.history.pushState({ screen: "memories" }, "", "#memories");
  } catch (_) {}
  diveBusy = false;

  // Keep bloomed cards; wire scroll without yanking the fill thumb back down
  if (fill) {
    setTimelineFill(fill, restFillPx, lineH);
    fill.style.transition = "";
  }
  playMemoriesEntrance(next, { preserve: true, fillFloor: restFillPx });
  /* Ensure first couple of cards are visible without a full layout scan */
  requestAnimationFrame(() => {
    items.slice(0, 3).forEach((item) => item.classList.add("in"));
    memOnScroll?.();
  });
}

function runDive() {
  clearDiveTimers();
  diveBusy = true;
  const wb = $("#water-body");
  const text = $("#dive-text");
  const octo = $("#dive-octo");

  buildSeaLife();
  if (text) text.textContent = CONFIG.diveText || "Let's dive into our memories… 🌊";
  if (octo) {
    octo.innerHTML = NANHA_SVG.octopus(140, "happy");
    octo.classList.remove("swim");
    void octo.offsetWidth;
  }
  if (wb) {
    wb.style.transform = "translateY(100%)";
    wb.getAnimations?.()?.forEach((a) => a.cancel());
  }

  // Prefetch memories DOM while underwater so drain→memories has zero build lag
  diveLater(() => {
    try {
      buildMemoriesList();
    } catch (_) {}
  }, reduceMotion ? 40 : 480);

  // Water rises
  anim(wb, [{ transform: "translate3d(0, 100%, 0)" }, { transform: "translate3d(0, 0, 0)" }], {
    duration: reduceMotion ? 200 : 2000,
    easing: MOTION.easeMagic,
    fill: "forwards",
  });

  if (text) {
    text.style.opacity = "0";
    diveLater(() => {
      text.style.opacity = "";
      reveal([text], { dur: 1400, y: 20 });
    }, reduceMotion ? 100 : 1700);
  }

  diveLater(() => octo?.classList.add("swim"), 80);
  Sound.play("whoosh");
  diveLater(() => Sound.play("pop"), 1400);

  const go = () => {
    if (!diveBusy || state.screen !== "dive") return;
    diveBusy = false;
    clearDiveTimers();
    try {
      Sound.play?.("whoosh");
    } catch (_) {}
    drainToMemories();
  };
  diveLater(go, reduceMotion ? 900 : CONFIG.diveAutoAdvance === false ? 999999 : 6600);

  // Tap / click skips ahead into the drain
  const diveScreen = screenEl("dive");
  if (diveScreen && !diveScreen.dataset.skipBound) {
    diveScreen.dataset.skipBound = "1";
    diveScreen.addEventListener(
      "pointerdown",
      () => {
        if (state.screen !== "dive" || !diveBusy) return;
        go();
      },
      { passive: true }
    );
  }
}

/* ---------- Memories timeline (from nanha-gift) ---------- */
function buildMemoriesList() {
  const list = $("#tl-list");
  if (!list) return;
  if (list.dataset.done === "1") return;
  list.dataset.done = "1";
  list.innerHTML = "";

  const items = [...(CONFIG.memories || [])].sort((a, b) =>
    String(a.sort || a.date || "").localeCompare(String(b.sort || b.date || ""))
  );

  const frag = document.createDocumentFragment();
  const eagerPhotos = [];

  items.forEach((m, i) => {
    const li = document.createElement("li");
    li.className = "tl-item " + (i % 2 ? "r" : "l");
    const body = m.caption || m.text || "";
    const bodyHtml = String(body)
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => `<p>${esc(s)}</p>`)
      .join("");
    const badge = m.badge ? `<span class="date-badge mem-badge">${esc(m.badge)}</span>` : "";
    li.innerHTML = `
      <span class="tl-node" aria-hidden="true"><span class="tl-emoji">${m.icon || "✨"}</span></span>
      <article class="tl-card">
        <div class="tl-meta">
          <span class="date-badge">${esc(m.date || "")}</span>
          ${badge}
        </div>
        <h3>${esc(m.title || "")}</h3>
        ${bodyHtml}
      </article>`;
    if (m.art === "heartGuitar") {
      const fig = document.createElement("figure");
      fig.className = "tl-photo tl-art tl-art-guitar lyric-memory";
      fig.setAttribute(
        "aria-label",
        "Pehli nazar mein — Kaise jaadu kar diya. Some magic stays forever."
      );
      fig.innerHTML = `
        <div class="lyric-card" aria-hidden="true">
          <span class="lyric-deco lyric-petal lyric-petal-1">❀</span>
          <span class="lyric-deco lyric-petal lyric-petal-2">✿</span>
          <span class="lyric-deco lyric-heart lyric-h1">♡</span>
          <span class="lyric-deco lyric-heart lyric-h2">♥</span>
          <span class="lyric-deco lyric-spark lyric-s1">✦</span>
          <span class="lyric-deco lyric-spark lyric-s2">✧</span>
          <span class="lyric-deco lyric-spark lyric-s3">·</span>
          <span class="lyric-deco lyric-note lyric-n1">♪</span>
          <span class="lyric-deco lyric-note lyric-n2">♫</span>
          <span class="lyric-deco lyric-note lyric-n3">♬</span>

          <header class="lyric-head">
            <span class="lyric-head-note" title="melody">♪</span>
            <div class="lyric-head-text">
              <p class="lyric-kicker">That first moment</p>
              <p class="lyric-title">A feeling worth remembering.</p>
            </div>
          </header>

          <div class="lyric-wave" role="presentation">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>

          <div class="lyric-stage">
            <span class="gh-pulse"></span>
            <span class="gh-pulse gh-pulse-2"></span>
            <span class="gh-heart">💗</span>
            <span class="gh-guitar">🎸</span>
          </div>

          <ol class="lyric-lines">
            <li class="lyric-line" style="--i:0"><span class="lyric-text">Pehli <em>nazar</em> mein ✨</span></li>
            <li class="lyric-line" style="--i:1"><span class="lyric-text">Kaise <em>jaadu</em> kar diya 🪄</span></li>
            <li class="lyric-line" style="--i:2"><span class="lyric-text"><em>Tera ban</em> baita hai, <em>Mera jiya</em> 🦋</span></li>
            <li class="lyric-line" style="--i:3"><span class="lyric-text">Jaane kya hoga 🌙</span></li>
            <li class="lyric-line" style="--i:4"><span class="lyric-text">Kya hoga kya pata 💫</span></li>
            <li class="lyric-line lyric-finale" style="--i:5"><span class="lyric-text">Is pal ko milke, <em>Aa jee le zara</em> ❤️</span></li>
          </ol>

          <p class="lyric-caption">
            <span class="lyric-caption-rule"></span>
            Some magic stays forever.
            <span class="lyric-caption-rule"></span>
          </p>
        </div>`;
      li.querySelector(".tl-card")?.appendChild(fig);
    } else if (m.art === "catsLoop") {
      const fig = document.createElement("figure");
      fig.className = "tl-photo tl-art tl-art-cats";
      fig.setAttribute("aria-label", "Choosing us — looping cat friends");
      /* GIFs stay as data-src until near viewport — animated GIFs are expensive */
      fig.innerHTML = `
        <div class="cats-scene" aria-hidden="true">
          <div class="cats-vignette"></div>
          <div class="cats-glow"></div>
          <div class="cats-glow cats-glow-soft"></div>

          <span class="cats-deco cats-h1">♡</span>
          <span class="cats-deco cats-h2">🧡</span>
          <span class="cats-deco cats-h3">♡</span>
          <span class="cats-deco cats-h4">💛</span>
          <span class="cats-deco cats-h5">♡</span>
          <span class="cats-deco cats-h6">♥</span>
          <span class="cats-deco cats-h7">♡</span>

          <span class="cats-deco cats-s1">✦</span>
          <span class="cats-deco cats-s2">✧</span>
          <span class="cats-deco cats-s3">✦</span>
          <span class="cats-deco cats-s4">⋆</span>
          <span class="cats-deco cats-s5">✧</span>
          <span class="cats-deco cats-s6">✦</span>
          <span class="cats-deco cats-s7">⋆</span>
          <span class="cats-deco cats-s8">✧</span>

          <span class="cats-deco cats-f1">🌸</span>
          <span class="cats-deco cats-f2">✿</span>
          <span class="cats-deco cats-f3">❀</span>
          <span class="cats-deco cats-f4">🌼</span>
          <span class="cats-deco cats-petal cats-p1"></span>
          <span class="cats-deco cats-petal cats-p2"></span>
          <span class="cats-deco cats-petal cats-p3"></span>
          <span class="cats-deco cats-petal cats-p4"></span>

          <span class="cats-deco cats-doodle cats-do1">˚</span>
          <span class="cats-deco cats-doodle cats-do2">˒</span>
          <span class="cats-deco cats-doodle cats-do3">˚</span>

          <span class="cats-deco cats-dot cats-d1"></span>
          <span class="cats-deco cats-dot cats-d2"></span>
          <span class="cats-deco cats-dot cats-d3"></span>
          <span class="cats-deco cats-dot cats-d4"></span>
          <span class="cats-deco cats-dot cats-d5"></span>
          <span class="cats-deco cats-dot cats-d6"></span>
          <span class="cats-deco cats-dot cats-d7"></span>
          <span class="cats-deco cats-dot cats-d8"></span>

          <div class="cats-duo">
            <img class="cats-duo-big" data-src="assets/cats/cat2.gif" alt="" width="160" height="160" decoding="async" loading="lazy" draggable="false" />
            <img class="cats-duo-small" data-src="assets/cats/cat1.gif" alt="" width="72" height="72" decoding="async" loading="lazy" draggable="false" />
          </div>
          <p class="cats-caption">still choosing us, every day</p>
        </div>`;
      li.querySelector(".tl-card")?.appendChild(fig);
    } else if (m.photo) {
      const fig = document.createElement("figure");
      fig.className = "tl-photo";
      /* First two photo cards hydrate eagerly; rest wait for near-viewport */
      const eager = i < 3;
      fig.innerHTML = `<img data-src="${esc(m.photo)}" alt="${esc(m.title || "Memory")}" loading="${eager ? "eager" : "lazy"}" decoding="async" />`;
      li.querySelector(".tl-card")?.appendChild(fig);
      if (eager) eagerPhotos.push(fig);
    }
    frag.appendChild(li);
  });

  list.appendChild(frag);

  /* Hydrate first-viewport photos immediately; below-fold wait until near view */
  eagerPhotos.forEach((fig) => hydrateImages(fig));
  const pending = $$("img[data-src]", list).filter((img) => !img.getAttribute("src"));
  if (pending.length && typeof IntersectionObserver !== "undefined") {
    const pio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const img = e.target;
          pio.unobserve(img);
          if (img.dataset.src && !img.getAttribute("src")) {
            enhancePhoto(img);
            img.src = img.dataset.src;
          }
        });
      },
      { root: screenEl("memories") || null, rootMargin: "180px 0px", threshold: 0.01 }
    );
    pending.forEach((img) => pio.observe(img));
  } else {
    const schedule =
      typeof requestIdleCallback === "function"
        ? (fn) => requestIdleCallback(fn, { timeout: 900 })
        : (fn) => setTimeout(fn, 160);
    schedule(() => hydrateImages(list));
  }
}

let memForeverTimer = null;
let memForeverDone = false;
let memForeverCelebrating = false;

/* Forever ∞ celebration persists per device — line still climbs with scroll each visit */
const FOREVER_COMPLETE_KEY = "nanha-timeline-forever-v1";

function isForeverPersisted() {
  try {
    return localStorage.getItem(FOREVER_COMPLETE_KEY) === "1";
  } catch (_) {
    return false;
  }
}

function markForeverPersisted() {
  try {
    localStorage.setItem(FOREVER_COMPLETE_KEY, "1");
  } catch (_) {}
}

function isForeverComplete() {
  // Session-only lock: after ∞ connects this visit, line won't go backward.
  // On reload, this starts false so the line climbs again from the top.
  return memForeverDone;
}

function spawnForeverFxBits() {
  const host = $("#tl-forever-fx");
  if (!host || reduceMotion) return;
  host.innerHTML = "";
  // Soft rings that bloom gently from ∞
  for (let i = 0; i < 3; i++) {
    const ring = document.createElement("span");
    ring.className = "tl-fx-ring";
    ring.style.setProperty("--delay", `${0.08 + i * 0.22}s`);
    ring.style.setProperty("--scale", String(1.4 + i * 0.45));
    host.appendChild(ring);
  }
  const bits = [
    { t: "♡", tx: -28, ty: -52, sc: 1.15, rot: -12, delay: 0.08, dur: 2.15 },
    { t: "♥", tx: 26, ty: -58, sc: 1.0, rot: 12, delay: 0.18, dur: 2.3 },
    { t: "♡", tx: -4, ty: -78, sc: 1.25, rot: 6, delay: 0.28, dur: 2.45 },
    { t: "✨", tx: 36, ty: -34, sc: 0.85, rot: 16, delay: 0.12, dur: 2.0, spark: true },
    { t: "✦", tx: -38, ty: -30, sc: 0.75, rot: -14, delay: 0.24, dur: 2.05, spark: true },
    { t: "✨", tx: 10, ty: -68, sc: 0.7, rot: 8, delay: 0.36, dur: 2.15, spark: true },
    { t: "♡", tx: 44, ty: -18, sc: 0.85, rot: 18, delay: 0.4, dur: 2.2 },
    { t: "♥", tx: -44, ty: -14, sc: 0.82, rot: -16, delay: 0.48, dur: 2.15 },
    { t: "", tx: 0, ty: -34, sc: 1.5, rot: 0, delay: 0.05, dur: 1.8, glow: true },
    { t: "✦", tx: -16, ty: -50, sc: 0.65, rot: -6, delay: 0.52, dur: 1.95, spark: true },
    { t: "♡", tx: 18, ty: -84, sc: 0.95, rot: 4, delay: 0.58, dur: 2.5 },
    { t: "✨", tx: -24, ty: -64, sc: 0.65, rot: 10, delay: 0.32, dur: 2.1, spark: true },
  ];
  bits.forEach((b) => {
    const el = document.createElement("span");
    el.className = "tl-fx-bit" + (b.spark ? " is-spark" : "") + (b.glow ? " is-glow" : "");
    el.textContent = b.t;
    el.style.setProperty("--tx", `${b.tx}px`);
    el.style.setProperty("--ty", `${b.ty}px`);
    el.style.setProperty("--sc", String(b.sc));
    el.style.setProperty("--rot", `${b.rot}deg`);
    el.style.setProperty("--delay", `${b.delay}s`);
    el.style.setProperty("--dur", `${b.dur}s`);
    host.appendChild(el);
  });
  setTimeout(() => {
    if (host) host.innerHTML = "";
  }, 3200);
}

function celebrateForeverConnection() {
  if (memForeverCelebrating || reduceMotion) return;
  memForeverCelebrating = true;
  const inf = $("#tl-infinity");
  const tl = $("#timeline");
  if (!inf || !tl) {
    memForeverCelebrating = false;
    return;
  }

  // Let CSS paint the lit state first, then ease into the connect pulse
  requestAnimationFrame(() => {
    tl.classList.add("is-forever-connecting");
    spawnForeverFxBits();
  });

  const r = inf.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  try {
    // Soft bloom — slower, lighter particles
    setTimeout(() => {
      FX.burst?.(cx, cy, {
        n: 22,
        kinds: ["heart", "spark", "star"],
        speed: 2.8,
        spread: 6.283,
        gravity: -0.012,
        drag: 0.992,
        size: [3.5, 8],
        life: [100, 170],
        colors: ["#ff8fb3", "#ffb3cc", "#ffd1e0", "#fff0f5", "#ffc9e0", "#ffffff"],
      });
      FX.sparkles?.(cx, cy, 10);
    }, 90);
    // Second gentle wave
    setTimeout(() => {
      FX.burst?.(cx, cy - 6, {
        n: 12,
        kinds: ["heart", "spark"],
        speed: 2.1,
        spread: 2.4,
        gravity: -0.018,
        drag: 0.994,
        size: [4, 9],
        life: [110, 180],
        colors: ["#ff8fb3", "#ffb3cc", "#ffd1e0", "#fff0f5"],
      });
    }, 420);
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        FX.floatHearts?.(cx + rand(-22, 22), cy + rand(-8, 10));
      }, 160 + i * 140);
    }
  } catch (_) {}

  try {
    Sound.play("sparkle");
  } catch (_) {
    try {
      Sound.play("pop");
    } catch (_) {}
  }

  try {
    haptic?.(12);
  } catch (_) {}

  setTimeout(() => {
    tl.classList.remove("is-forever-connecting");
    memForeverCelebrating = false;
  }, 2400);
}

function applyForeverCompleted({ celebrate = false, instant = false } = {}) {
  memForeverDone = true;
  const tl = $("#timeline");
  const msg = $("#tl-forever-msg");
  const fill = $("#tl-fill");
  const screen = screenEl("memories");
  if (!tl || !msg) return;

  tl.classList.add("is-forever-lit");
  if (screen && fill) {
    const { maxPx } = measureTimelineFill(screen);
    setTimelineFill(fill, maxPx, maxPx);
  }

  const showMsg = (settled = false) => {
    msg.hidden = false;
    msg.classList.toggle("is-settled", settled);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => msg.classList.add("is-shown"));
    });
  };

  if (celebrate && !reduceMotion) {
    celebrateForeverConnection();
    if (memForeverTimer) clearTimeout(memForeverTimer);
    // Message eases in after the ∞ kiss settles
    memForeverTimer = setTimeout(() => showMsg(false), 1100);
  } else if (instant || reduceMotion) {
    msg.hidden = false;
    msg.classList.add("is-shown", "is-settled");
  } else {
    showMsg(false);
  }
}

function resetTimelineForever() {
  if (memForeverTimer) {
    clearTimeout(memForeverTimer);
    memForeverTimer = null;
  }
  // Always clear on reload/re-enter so the line can climb from the top again.
  // localStorage only skips the heart celebration when ∞ is reached later.
  memForeverDone = false;
  memForeverCelebrating = false;
  const tl = $("#timeline");
  const msg = $("#tl-forever-msg");
  const fx = $("#tl-forever-fx");
  const line = tl?.querySelector(".tl-line");
  tl?.classList.remove("is-forever-lit", "is-forever-connecting");
  if (line) line.style.height = "";
  if (fx) fx.innerHTML = "";
  if (msg) {
    msg.hidden = true;
    msg.classList.remove("is-shown", "is-settled");
  }
}

/** Line track ends at ∞ center; fill tip follows the read-line, and always finishes at end of scroll. */
function measureTimelineFill(screen) {
  const tl = $("#timeline");
  const line = tl?.querySelector(".tl-line");
  const fill = $("#tl-fill");
  const inf = $("#tl-infinity");
  if (!screen || !tl || !line || !fill) {
    return { px: 0, maxPx: 1, reached: false };
  }

  const tlTop = tl.getBoundingClientRect().top;
  const screenTop = screen.getBoundingClientRect().top;
  // Slightly lower read-line so ∞ is easier to meet on short screens
  const tipY = screenTop + screen.clientHeight * 0.72;

  let maxPx = Math.max(tl.offsetHeight - 8, 48);
  let infCenter = null;
  if (inf) {
    const ir = inf.getBoundingClientRect();
    infCenter = ir.top + ir.height / 2;
    // End the track at the middle of ∞ so the glowing tip can meet it
    maxPx = Math.max(48, infCenter - tlTop);
  }
  line.style.height = `${maxPx}px`;

  // Sealed forever — line stays connected; never shrinks or disconnects
  if (isForeverComplete()) {
    return { px: maxPx, maxPx, reached: true };
  }

  let px = clamp(tipY - tlTop, 0, maxPx);
  let reached = false;

  // ∞ has scrolled up to (or past) the tip
  if (infCenter != null && infCenter <= tipY + 10) {
    px = maxPx;
    reached = true;
  }

  // Always complete when the user reaches the bottom of the memories screen
  const maxScroll = Math.max(screen.scrollHeight - screen.clientHeight, 0);
  const scrollP = maxScroll > 0 ? clamp(screen.scrollTop / maxScroll, 0, 1) : 1;
  if (maxScroll <= 8 || screen.scrollTop >= maxScroll - 16) {
    px = maxPx;
    reached = true;
  } else if (scrollP > 0.82) {
    // Ease the last stretch so the tip never stalls short of ∞
    const t = (scrollP - 0.82) / 0.18;
    px = px + (maxPx - px) * t;
    if (t >= 0.98) reached = true;
  }

  return { px, maxPx, reached: reached || px >= maxPx - 2 };
}

function maybeRevealTimelineForever(reached) {
  if (memForeverDone || !reached) return;
  const tl = $("#timeline");
  const msg = $("#tl-forever-msg");
  if (!tl || !msg) return;

  markForeverPersisted();
  // Replay climb + alive ∞ celebration each visit; instant only for reduced motion
  applyForeverCompleted({
    celebrate: !reduceMotion,
    instant: reduceMotion,
  });
}

function clearMemoriesObservers(screen) {
  if (memIo) {
    try {
      memIo.disconnect();
    } catch (_) {}
    memIo = null;
  }
  if (memOnScroll && screen) {
    screen.removeEventListener("scroll", memOnScroll);
    removeEventListener("resize", memOnScroll);
    memOnScroll = null;
  }
}

function playMemoriesEntrance(screen, { preserve = false, fillFloor = 0 } = {}) {
  const s = screen || screenEl("memories");
  if (!s) return;
  clearMemoriesObservers(s);

  const items = $$(".tl-item", s);
  const fill = $("#tl-fill");
  if (!preserve) {
    items.forEach((i) => i.classList.remove("in"));
    setTimelineFill(fill, 0, 1);
    resetTimelineForever();
    /* No blur filter on header — opacity/transform only keeps first paint smooth */
    reveal([$("#mem-title", s), $(".mem-eyebrow", s), $(".eyebrow", s)], {
      step: 120,
      dur: 820,
      y: 14,
    });
  }

  let k = 0;
  let floor = Math.max(0, fillFloor);
  let popBudget = 3;
  memIo = new IntersectionObserver(
    (entries) => {
      entries
        .filter((e) => e.isIntersecting)
        .forEach((e) => {
          if (e.target.classList.contains("in")) {
            memIo.unobserve(e.target);
            return;
          }
          memIo.unobserve(e.target);
          const delay = preserve ? 50 : 120 + (k++ % 3) * 160;
          setTimeout(() => {
            e.target.classList.add("in");
            if (popBudget > 0) {
              popBudget--;
              Sound.play("pop");
            }
          }, reduceMotion ? 0 : delay);
        });
      setTimeout(() => {
        k = 0;
      }, 480);
    },
    { root: s, threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
  );
  items.forEach((i) => {
    if (preserve && i.classList.contains("in")) return;
    memIo.observe(i);
  });

  const tl = $("#timeline");
  let scrollRaf = 0;
  const updateFill = () => {
    scrollRaf = 0;
    if (!tl || !fill) return;
    const { px, maxPx, reached } = measureTimelineFill(s);
    // After ∞ connects this visit, keep the tip locked (doesn't apply on fresh reload)
    if (isForeverComplete()) {
      setTimelineFill(fill, maxPx, maxPx);
      floor = 0;
      return;
    }
    // After dive→memories emerge, never snap the thumb down below the reveal height
    if (floor > 0) {
      if (px >= floor) {
        setTimelineFill(fill, px, maxPx);
        floor = 0;
        maybeRevealTimelineForever(reached);
      } else {
        setTimelineFill(fill, Math.min(floor, maxPx), maxPx);
      }
      return;
    }
    setTimelineFill(fill, px, maxPx);
    maybeRevealTimelineForever(reached);
  };
  memOnScroll = () => {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(updateFill);
  };
  s.addEventListener("scroll", memOnScroll, { passive: true });
  addEventListener("resize", memOnScroll);
  requestAnimationFrame(updateFill);
}

function initMemories() {
  buildMemoriesList();
  playMemoriesEntrance(screenEl("memories"));
}

/* ---------- Admire flower (from nanha-gift) ---------- */
const ADMIRE_COLS = [
  ["#ff9ebd", "#ffe0ec"],
  ["#c4aef5", "#ebe3ff"],
  ["#ffb894", "#ffe4d4"],
  ["#8edfbf", "#daf7ea"],
  ["#8ec8f5", "#dcedff"],
  ["#ffd76a", "#fff4c8"],
];

function admireReason(item) {
  return {
    h: item.h || item.heading || "A little reason 💗",
    p: item.p || item.line || "",
  };
}

function updateAdmireStatus() {
  const n = (CONFIG.admire || []).length;
  const count = $("#adm-count");
  if (!count) return;
  const seen = state.admireOpened.size;
  const done = n > 0 && seen >= n;
  const wasDone = count.dataset.state === "done";

  count.dataset.state = done ? "done" : "progress";
  count.classList.toggle("is-complete", done);

  const progress = $(".admire-status-progress", count);
  const doneEl = $(".admire-status-done", count);
  const frac = $("#adm-frac", count);
  const meter = $("#adm-meter", count);

  if (progress) progress.hidden = done;
  if (doneEl) doneEl.hidden = !done;
  if (frac) frac.textContent = `${seen}/${n} bloomed`;
  setScaleProgress(meter, n ? Math.min(1, seen / n) : 0, "x");

  if (done && !wasDone && !reduceMotion) {
    count.classList.remove("is-status-reveal");
    void count.offsetWidth;
    count.classList.add("is-status-reveal");
  } else if (!done) {
    count.classList.remove("is-status-reveal");
  }
}

let _admireReasonAnim = null;
let _admireRevealTimer = 0;
let _admireCompleteTimer = 0;

function buildAdmireFlower() {
  const flower = $("#flower");
  const next = $("#admire-next");
  const reasons = CONFIG.admire || [];
  if (!flower || !reasons.length) return;

  state.admireOpened = new Set();
  flower.classList.remove("all");
  flower.innerHTML = "";
  if (_admireReasonAnim) {
    try { _admireReasonAnim.cancel(); } catch (_) {}
    _admireReasonAnim = null;
  }
  clearTimeout(_admireRevealTimer);
  clearTimeout(_admireCompleteTimer);

  const n = reasons.length;
  const frag = document.createDocumentFragment();
  reasons.forEach((item, i) => {
    const c = ADMIRE_COLS[i % ADMIRE_COLS.length];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "petal";
    btn.style.setProperty("--a", `${(360 / n) * i}deg`);
    btn.style.setProperty("--i", String(i));
    btn.style.setProperty("--c", c[0]);
    btn.setAttribute("aria-label", `Reason ${i + 1} of ${n}: tap to bloom`);
    btn.innerHTML = `<span class="petal-art">${DiveArt.petal(c[0], c[1])}</span>`;
    btn.addEventListener("click", () => tapAdmirePetal(btn, i));
    frag.appendChild(btn);
  });

  const center = document.createElement("div");
  center.className = "flower-center";
  center.id = "flower-center";
  center.innerHTML = "<span>💗</span>";
  frag.appendChild(center);
  flower.appendChild(frag);

  const rh = $("#reason-h");
  const rp = $("#reason-p");
  const reason = $("#reason");
  if (rh) rh.textContent = "Tap a petal 🌸";
  if (rp) rp.textContent = "Each one holds a little reason I adore you.";
  reason?.classList.remove("is-revealing");
  if (next) next.hidden = true;
  updateAdmireStatus();

  requestAnimationFrame(() => {
    const petals = $$(".petal", flower);
    petals.forEach((p) => {
      p.classList.add("ready");
      const clearArrive = (e) => {
        if (e.animationName !== "petalArrive") return;
        p.style.removeProperty("animation");
        p.style.opacity = "1";
        p.removeEventListener("animationend", clearArrive);
      };
      p.addEventListener("animationend", clearArrive);
    });
  });
}

function tapAdmirePetal(petal, i) {
  const reasons = CONFIG.admire || [];
  const r = admireReason(reasons[i] || {});
  const first = !state.admireOpened.has(i);
  state.admireOpened.add(i);
  petal.classList.add("bloom");

  const rh = $("#reason-h");
  const rp = $("#reason-p");
  const reason = $("#reason");
  if (rh) rh.textContent = r.h;
  if (rp) {
    rp.textContent = r.p;
    rp.scrollTop = 0;
  }

  /* Transform/opacity only — blur filter was a major paint cost per tap */
  if (reason && reason.animate && !reduceMotion) {
    if (_admireReasonAnim) {
      try { _admireReasonAnim.cancel(); } catch (_) {}
    }
    reason.classList.add("is-revealing");
    _admireReasonAnim = reason.animate(
      [
        { transform: "translate3d(0, 10px, 0) scale(.97)", opacity: 0.35 },
        { transform: "translate3d(0, -3px, 0) scale(1.01)", opacity: 1, offset: 0.62 },
        { transform: "none", opacity: 1 },
      ],
      { duration: 480, easing: "cubic-bezier(.34,1.56,.64,1)" }
    );
    _admireReasonAnim.finished.catch(() => {}).finally(() => {
      _admireReasonAnim = null;
    });
    clearTimeout(_admireRevealTimer);
    _admireRevealTimer = setTimeout(() => reason.classList.remove("is-revealing"), 720);
  } else if (reason) {
    reason.classList.add("is-revealing");
    clearTimeout(_admireRevealTimer);
    _admireRevealTimer = setTimeout(() => reason.classList.remove("is-revealing"), 400);
  }

  /* Defer FX to next frame so bloom class paints first */
  const flower = petal.parentElement;
  requestAnimationFrame(() => {
    const b = petal.getBoundingClientRect();
    const x = b.left + b.width / 2;
    const y = b.top + b.height / 2;
    FX.sparkles?.(x, y, first ? 10 : 6);
    FX.hearts?.(x, y - b.height * 0.15, first ? 4 : 2);
  });
  Sound.play(first ? "sparkle" : "tap");
  haptic(12);
  updateAdmireStatus();

  if (state.admireOpened.size === reasons.length && first) {
    flower?.classList.add("all");
    const glow = $(".admire-bloom-glow", screenEl("admire"));
    if (glow && !reduceMotion) {
      anim(
        glow,
        [
          { transform: "translate3d(-50%, -50%, 0) scale(.85)", opacity: 0.4 },
          { transform: "translate3d(-50%, -50%, 0) scale(1.18)", opacity: 1 },
          { transform: "translate3d(-50%, -50%, 0) scale(1)", opacity: 0.85 },
        ],
        { duration: 720, easing: "cubic-bezier(.22,1,.36,1)" }
      );
    }
    clearTimeout(_admireCompleteTimer);
    _admireCompleteTimer = setTimeout(() => {
      const c = $("#flower-center")?.getBoundingClientRect();
      if (c) {
        FX.burst?.(c.left + c.width / 2, c.top + c.height / 2, {
          n: reduceMotion ? 12 : 36,
          kinds: ["heart", "star", "circle"],
          speed: 9,
          gravity: 0.1,
        });
        FX.hearts?.(c.left + c.width / 2, c.top, reduceMotion ? 3 : 6);
      }
      Sound.play("cheer");
    }, 320);
    const nb = $("#admire-next");
    if (nb) {
      nb.hidden = false;
      reveal([nb], { dur: 560, delay: 420, blur: 0, y: 12 });
    }
  }
}

function initAdmire() {
  const flower = $("#flower");
  if (!flower) return;
  if (!flower.dataset.built) {
    flower.dataset.built = "1";
    buildAdmireFlower();
  } else if (!$$(".petal.ready", flower).length) {
    $$(".petal", flower).forEach((p) => p.classList.add("ready"));
  }
  const screen = screenEl("admire");
  reveal(
    [
      $(".admire-header", screen) || $(".admire-eyebrow", screen),
      $(".admire-stage", screen) || flower,
      $("#reason", screen),
    ],
    { step: 120, blur: 0, y: 14, dur: 620 }
  );
  if (!state.admireOpened.size) flower.classList.remove("all");
}

/* ---------- Letter (gift envelope → seal → typed paper) ---------- */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let letterOpened = false;
let letterFinished = false;
let letterRun = 0;
let letterSkip = false;
let letterSparkleTimer = null;
let letterBound = false;

function letterCfg() {
  const L = CONFIG.letter || {};
  return {
    text: L.text || CONFIG.letterText || "",
    greeting: L.greeting || `To my ${CONFIG.herName || "Nanhi Bacchi"},`,
    signature: L.signature || `— forever yours, ${CONFIG.myName || "Cocoon"} 🐙`,
    speed: L.speed ?? 46,
  };
}

function hydrateGiftArt(root = document) {
  $$("[data-art]", root).forEach((n) => {
    const kind = n.getAttribute("data-art");
    if (!kind || !DiveArt[kind]) return;
    /* Skip re-inject when art is already present — avoids mandala/lantern flash on re-entry */
    if (n.dataset.artReady === "1" && n.querySelector("svg")) return;
    if (kind === "mandala") {
      n.innerHTML = DiveArt.mandala({ seed: +n.dataset.seed || 1 });
    } else {
      n.innerHTML = DiveArt[kind]();
    }
    n.dataset.artReady = "1";
  });
}
const hydrateLetterArt = hydrateGiftArt;

function shake(node) {
  anim(node, [
    { transform: "translateX(0)" },
    { transform: "translateX(-12px) rotate(-1deg)" },
    { transform: "translateX(10px) rotate(1deg)" },
    { transform: "translateX(-8px)" },
    { transform: "translateX(5px)" },
    { transform: "translateX(0)" },
  ], { duration: 480, easing: "ease-out" });
}

function clearLetterSparkles() {
  if (letterSparkleTimer) {
    clearInterval(letterSparkleTimer);
    letterSparkleTimer = null;
  }
}

function resetLetterUI() {
  letterOpened = false;
  letterFinished = false;
  letterRun++;
  letterSkip = false;
  state.letterDone = false;
  clearLetterSparkles();
  const env = $("#envelope");
  if (env) env.className = "envelope";
  $("#seal")?.classList.remove("broken");
  const scene = $("#env-scene");
  if (scene) {
    scene.style.display = "";
    scene.getAnimations?.().forEach((a) => a.cancel());
    scene.style.opacity = "";
    scene.style.transform = "";
  }
  const paper = $("#paper");
  if (paper) paper.hidden = true;
  const hint = $("#letter-hint");
  if (hint) {
    hint.hidden = false;
    hint.textContent = "Tap the wax seal to open ✨";
  }
  const out = $("#letter-text");
  if (out) out.textContent = "";
  const sign = $("#paper-sign");
  if (sign) sign.textContent = "";
  const to = $("#paper-to");
  if (to) to.textContent = "";
  const next = $("#letter-next");
  if (next) next.hidden = true;
  const skipBtn = $("#letter-skip");
  if (skipBtn) skipBtn.hidden = true;
}

function finishLetterTyping() {
  letterFinished = true;
  state.letterDone = true;
  const skipBtn = $("#letter-skip");
  if (skipBtn) skipBtn.hidden = true;
  const next = $("#letter-next");
  if (next) {
    next.hidden = false;
    reveal([next], { dur: 700 });
  }
  const cfg = letterCfg();
  const sign = $("#paper-sign");
  if (sign) {
    sign.textContent = cfg.signature;
    reveal([sign], { dur: 900 });
  }
  const paper = $("#paper");
  if (paper) {
    const r = paper.getBoundingClientRect();
    FX.hearts?.(r.left + r.width / 2, r.top + 40, 8);
  }
  Sound.play("sparkle");
  $("#paper-scroll")?.scrollTo({ top: 99999, behavior: "smooth" });
}

async function typeLetter() {
  const my = ++letterRun;
  const out = $("#letter-text");
  const cfg = letterCfg();
  const txt = cfg.text;
  if (!out) return;
  out.textContent = "";
  letterSkip = false;
  const node = document.createTextNode("");
  const caret = document.createElement("span");
  caret.className = "caret";
  out.append(node, caret);
  const skipBtn = $("#letter-skip");
  if (skipBtn) skipBtn.hidden = false;
  const to = $("#paper-to");
  if (to) to.textContent = cfg.greeting;
  const sp = reduceMotion ? 8 : cfg.speed;
  let i = 0;
  while (i < txt.length && !letterSkip && my === letterRun) {
    const ch = txt[i++];
    node.data += ch;
    if (ch.trim() && i % 3 === 0) Sound.play("pen");
    if (i % 38 === 0) {
      const paper = $("#paper");
      if (paper) {
        const r = paper.getBoundingClientRect();
        FX.floatHearts?.(r.left + rand(20, r.width - 20), r.bottom - 30);
      }
    }
    const sc2 = $("#paper-scroll");
    if (sc2 && sc2.scrollHeight - sc2.scrollTop - sc2.clientHeight < 90) {
      sc2.scrollTop = sc2.scrollHeight;
    }
    await sleep(/[.!?]/.test(ch) ? sp * 6 : ch === "," ? sp * 3 : ch === "\n" ? sp * 5 : sp);
  }
  if (my !== letterRun) return;
  node.data = txt;
  caret.remove();
  finishLetterTyping();
}

async function openLetter() {
  if (letterOpened) return;
  letterOpened = true;
  clearLetterSparkles();
  const env = $("#envelope");
  const seal = $("#seal");
  seal?.classList.add("broken");
  Sound.play("crack");
  haptic([20, 30, 40]);
  if (seal) {
    const r = seal.getBoundingClientRect();
    FX.burst?.(r.left + r.width / 2, r.top + r.height / 2, {
      n: 24,
      kinds: ["circle", "heart"],
      colors: ["#c24d77", "#f08aa8", "#ffd1e0"],
      speed: 6,
      gravity: 0.25,
    });
  }
  const hint = $("#letter-hint");
  if (hint) hint.textContent = "💌";
  await sleep(reduceMotion ? 100 : 650);
  env?.classList.add("open");
  Sound.play("whoosh");
  await sleep(reduceMotion ? 100 : 950);
  env?.classList.add("letter-out");
  Sound.play("pop");
  await sleep(reduceMotion ? 100 : 1000);
  const scene = $("#env-scene");
  if (scene) {
    await anim(
      scene,
      [
        { opacity: 1, transform: "none" },
        { opacity: 0, transform: "translateY(70px) scale(.9)" },
      ],
      { duration: reduceMotion ? 100 : 700, fill: "forwards" }
    );
    scene.style.display = "none";
  }
  if (hint) hint.hidden = true;
  const p = $("#paper");
  if (p) {
    p.hidden = false;
    Sound.duck?.();
    anim(
      p,
      [
        { clipPath: "inset(0 0 100% 0)", transform: "translateY(-30px) scale(.92)", opacity: 0.4 },
        { clipPath: "inset(0 0 0% 0)", transform: "none", opacity: 1 },
      ],
      { duration: reduceMotion ? 100 : 1300, easing: "cubic-bezier(.22,1,.36,1)" }
    );
    setTimeout(() => {
      const top = p.getBoundingClientRect().top + 30;
      FX.sparkles?.(innerWidth / 2, top, 18);
    }, reduceMotion ? 40 : 500);
  }
  await sleep(reduceMotion ? 100 : 1200);
  typeLetter();
}

function initLetter() {
  const screen = screenEl("letter");
  hydrateLetterArt(screen || document);

  if (!letterBound) {
    letterBound = true;
    $("#seal")?.addEventListener("click", openLetter);
    $("#letter-skip")?.addEventListener("click", () => {
      letterSkip = true;
      try {
        Sound.play?.("tap");
      } catch (_) {}
    });
  }

  clearLetterSparkles();

  if (letterOpened) {
    const scene = $("#env-scene");
    if (scene) scene.style.display = "none";
    const hint = $("#letter-hint");
    if (hint) hint.hidden = true;
    const paper = $("#paper");
    if (paper) paper.hidden = false;
    Sound.duck?.();
    if (!letterFinished) typeLetter();
    else {
      const cfg = letterCfg();
      const out = $("#letter-text");
      if (out) out.textContent = cfg.text;
      const to = $("#paper-to");
      if (to) to.textContent = cfg.greeting;
      const sign = $("#paper-sign");
      if (sign) sign.textContent = cfg.signature;
      const next = $("#letter-next");
      if (next) next.hidden = false;
      const skipBtn = $("#letter-skip");
      if (skipBtn) skipBtn.hidden = true;
    }
    return;
  }

  reveal(
    [$(".letter-eyebrow", screen), $("#letter-title"), $("#letter-hint")],
    { step: 120 }
  );
  const scene = $("#env-scene");
  if (scene) {
    anim(
      scene,
      [
        { opacity: 0, transform: "translateY(60px) rotate(-4deg)" },
        { opacity: 1, transform: "none" },
      ],
      {
        duration: 1400,
        delay: 400,
        fill: "backwards",
        easing: "cubic-bezier(.34,1.3,.64,1)",
      }
    );
  }
  letterSparkleTimer = setInterval(() => {
    if (letterOpened) return clearLetterSparkles();
    const seal = $("#seal");
    if (!seal) return;
    const r = seal.getBoundingClientRect();
    FX.sparkles?.(r.left + r.width / 2 + rand(-20, 20), r.top + r.height / 2 + rand(-20, 20), 2);
  }, 1100);
}

/* ---------- Quiz (gift lockbox → unlock mystery gift) ---------- */
let quizLocked = false;
let quizDone = false;
let quizSessionId = "";
let quizShockedTimer = 0;
const QUIZ_SHOCKED_SRC = "assets/cats/shocked.gif";
/* One full loop of assets/cats/shocked.gif (56 frames × 10cs) */
const QUIZ_SHOCKED_MS = 5600;
/* Letter triggers for spicy picks; Q3 uses any incorrect logical answer */
const QUIZ_SHOCKED_LETTERS = {
  Q1: "D",
  Q5: "B",
  Q12: "A",
  Q15: "C",
  Q16: "B",
};

function newQuizSessionId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `quiz-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function shouldShowQuizShocked(Q, letter, actuallyCorrect) {
  if (!Q) return false;
  if (Q.id === "Q3") return actuallyCorrect === false;
  return QUIZ_SHOCKED_LETTERS[Q.id] === letter;
}

function hideQuizShockedGifs() {
  if (quizShockedTimer) {
    clearTimeout(quizShockedTimer);
    quizShockedTimer = 0;
  }
  const layer = $("#quiz-shocked-gifs");
  if (!layer) return;
  layer.classList.remove("is-on");
  layer.setAttribute("aria-hidden", "true");
}

function showQuizShockedGifs(holdMs = QUIZ_SHOCKED_MS) {
  const layer = $("#quiz-shocked-gifs");
  if (!layer) return;
  if (quizShockedTimer) {
    clearTimeout(quizShockedTimer);
    quizShockedTimer = 0;
  }
  /* Restart GIF from frame 0 each trigger so a full loop always plays */
  const bust = `${QUIZ_SHOCKED_SRC}?t=${Date.now()}`;
  $$("img.quiz-shocked", layer).forEach((img) => {
    img.src = bust;
  });
  layer.setAttribute("aria-hidden", "false");
  layer.classList.remove("is-on");
  void layer.offsetWidth;
  requestAnimationFrame(() => layer.classList.add("is-on"));
  if (holdMs > 0) {
    quizShockedTimer = setTimeout(() => {
      quizShockedTimer = 0;
      hideQuizShockedGifs();
    }, holdMs);
  }
}

function ensureQuizSession() {
  if (!quizSessionId) quizSessionId = newQuizSessionId();
  return quizSessionId;
}

function normalizeQuiz(item = {}, index = 0) {
  const options = [...(item.o || item.options || [])];
  const type = item.type === "logical" ? "logical" : "personality";
  const answer =
    type === "logical"
      ? item.a ??
        (Number.isInteger(item.correctIndex) ? options[item.correctIndex] : null)
      : null;
  return {
    id: item.id || `Q${index + 1}`,
    round: item.round || "",
    type,
    q: item.q || "",
    options,
    answer,
    correctIndex: Number.isInteger(item.correctIndex) ? item.correctIndex : null,
  };
}

function nanhaApiUrl(path) {
  const base = String(window.NANHA_API_BASE || "").replace(/\/$/, "");
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

async function persistQuizAnswer(payload) {
  try {
    const url = nanhaApiUrl("/api/quiz/answers");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      }).catch(() => {});
    }
  } catch {
    /* soft-fail — never block quiz UX */
  }
}

function quizGlow() {
  const n = (CONFIG.quiz || []).length || 1;
  const k = quizDone ? 1 : state.quizIndex / n;
  const pct = Math.max(0, Math.min(100, k * 100));
  const lb = $("#lockbox");
  if (lb) lb.style.setProperty("--glow", k.toFixed(2));
  const fill = $("#qbar-fill");
  setScaleProgress(fill, pct / 100, "x");
  const spark = $("#qbar-spark");
  /* left only updates on quiz steps (not every frame) — keeps bob keyframes free to own transform */
  if (spark) spark.style.left = `${pct}%`;
}

function resetQuizUI() {
  state.quizIndex = 0;
  quizLocked = false;
  quizDone = false;
  quizSessionId = newQuizSessionId();
  hideQuizShockedGifs();
  const lb = $("#lockbox");
  lb?.classList.remove("unlocked", "happy");
  const card = $("#q-card");
  if (card) {
    card.style.display = "";
    card.classList.remove("q-card-correct", "q-card-wrong", "q-card-swap");
  }
  const done = $("#quiz-done");
  if (done) done.hidden = true;
  const opts = $("#q-options");
  if (opts) opts.innerHTML = "";
  const fb = $("#q-feedback");
  if (fb) {
    fb.innerHTML = "&nbsp;";
    fb.className = "hint";
  }
  const roundEl = $("#q-round");
  if (roundEl) {
    roundEl.textContent = "";
    roundEl.hidden = true;
  }
  quizGlow();
}

async function unlockQuiz() {
  quizDone = true;
  quizGlow();
  const lb = $("#lockbox");
  lb?.classList.add("unlocked");
  Sound.play("unlock");
  haptic([30, 40, 30, 60]);
  const card = $("#q-card");
  if (card) card.style.display = "none";
  const roundEl = $("#q-round");
  if (roundEl) roundEl.hidden = true;
  const count = $("#qcount");
  if (count) count.textContent = "All answered ✨";
  if (lb) {
    const r = lb.getBoundingClientRect();
    FX.burst?.(r.left + r.width / 2, r.top + r.height / 2, {
      n: 70,
      kinds: ["star", "heart", "circle", "rect"],
      speed: 11,
      gravity: 0.15,
    });
  }
  FX.cannons?.();
  const d = $("#quiz-done");
  if (d) {
    d.hidden = false;
    reveal([d], { dur: 800, delay: 400 });
  }
}

async function pickQuizOption(btn, choice, optionIndex, Q) {
  if (quizLocked || btn.disabled) return;
  const fb = $("#q-feedback");
  const lb = $("#lockbox");
  const card = $("#q-card");
  const letter = String.fromCharCode(65 + optionIndex);
  const isPersonality = Q.type !== "logical";
  const actuallyCorrect = isPersonality
    ? null
    : choice === Q.answer || optionIndex === Q.correctIndex;
  const displayOk = isPersonality || actuallyCorrect === true;
  const shock = shouldShowQuizShocked(Q, letter, actuallyCorrect);

  void persistQuizAnswer({
    sessionId: ensureQuizSession(),
    questionId: Q.id,
    questionText: Q.q,
    round: Q.round,
    selectedOption: letter,
    selectedText: choice,
    questionType: Q.type,
    isCorrect: actuallyCorrect,
    displayedResult: displayOk ? "Correct" : "Incorrect",
    clientAnsweredAt: new Date().toISOString(),
  });

  if (displayOk) {
    quizLocked = true;
    btn.classList.add("correct");
    state.quizIndex++;
    Sound.play("correct");
    haptic([15, 25, 15]);
    card?.classList.remove("q-card-wrong");
    card?.classList.add("q-card-correct");
    if (shock) showQuizShockedGifs(QUIZ_SHOCKED_MS);
    else hideQuizShockedGifs();
    if (fb) {
      fb.textContent = isPersonality
        ? "Correct! ✨"
        : pick(CONFIG.quizCheers || ["Correct! ✨"]);
      fb.className = "hint good q-fb-pop";
    }
    $$(".opt", $("#q-options")).forEach((x) => {
      if (x !== btn) x.disabled = true;
    });
    const r = btn.getBoundingClientRect();
    FX.sparkles?.(r.left + r.width / 2, r.top + r.height / 2, 16);
    FX.hearts?.(r.left + r.width / 2, r.top, 4);
    if (lb) {
      lb.classList.remove("happy");
      void lb.offsetWidth;
      lb.classList.add("happy");
    }
    quizGlow();
    /* Wait for a full shocked loop before advancing on spicy picks */
    await sleep(
      shock
        ? reduceMotion
          ? Math.min(900, QUIZ_SHOCKED_MS)
          : QUIZ_SHOCKED_MS
        : reduceMotion
          ? 200
          : 1200
    );
    card?.classList.remove("q-card-correct");
    hideQuizShockedGifs();
    if (state.quizIndex >= (CONFIG.quiz || []).length) unlockQuiz();
    else showQuizQ();
  } else {
    btn.classList.add("wrong");
    btn.disabled = true;
    if (card) {
      card.classList.remove("q-card-wrong", "q-card-correct");
      void card.offsetWidth;
      card.classList.add("q-card-wrong");
    }
    shake(card);
    Sound.play("wrong");
    haptic([30, 40, 30]);
    if (shock) showQuizShockedGifs(QUIZ_SHOCKED_MS);
    else hideQuizShockedGifs();
    if (fb) {
      fb.textContent = CONFIG.quizOops || "Incorrect — try again, Nanhi Bacchi 🥺";
      fb.className = "hint q-fb-oops";
    }
  }
}

function showQuizQ() {
  const raw = (CONFIG.quiz || [])[state.quizIndex];
  if (!raw) return;
  ensureQuizSession();
  hideQuizShockedGifs();
  const Q = normalizeQuiz(raw, state.quizIndex);
  const n = (CONFIG.quiz || []).length;
  quizLocked = false;
  const count = $("#qcount");
  if (count) count.textContent = `${state.quizIndex + 1} / ${n}`;
  const roundEl = $("#q-round");
  if (roundEl) {
    if (Q.round) {
      roundEl.textContent = Q.round;
      roundEl.hidden = false;
    } else {
      roundEl.textContent = "";
      roundEl.hidden = true;
    }
  }
  const text = $("#q-text");
  if (text) text.textContent = Q.q;
  const fb = $("#q-feedback");
  if (fb) {
    fb.innerHTML = "&nbsp;";
    fb.className = "hint";
  }
  const card = $("#q-card");
  if (card) {
    card.classList.remove("q-card-correct", "q-card-wrong", "q-card-swap");
    void card.offsetWidth;
    card.classList.add("q-card-swap");
  }
  try {
    Sound.play?.("tap");
  } catch (_) {}
  const box = $("#q-options");
  if (!box) return;
  box.innerHTML = "";
  /* Fixed A–D order — no shuffle */
  Q.options.forEach((o, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "opt";
    const letter = document.createElement("span");
    letter.className = "opt-letter";
    letter.textContent = String.fromCharCode(65 + i);
    letter.setAttribute("aria-hidden", "true");
    const label = document.createElement("span");
    label.className = "opt-label";
    label.textContent = o;
    b.append(letter, label);
    b.addEventListener("click", () => pickQuizOption(b, o, i, Q));
    box.appendChild(b);
  });
  reveal([$("#q-round"), $("#q-text"), ...$$(".opt", box)], {
    dur: 550,
    step: 70,
    y: 12,
  });
  quizGlow();
}

function initQuiz() {
  const screen = screenEl("quiz");
  hydrateGiftArt(screen || document);
  /* Prefetch shocked reaction so spicy picks feel instant */
  {
    const im = new Image();
    im.decoding = "async";
    im.src = QUIZ_SHOCKED_SRC;
  }
  const title = $("#quiz-title");
  if (title && CONFIG.quizTitle) title.textContent = CONFIG.quizTitle;
  reveal(
    [$(".quiz-eyebrow", screen), $("#quiz-title"), $(".quiz-top", screen), $("#lockbox")],
    { step: 120 }
  );
  if (quizDone) {
    $("#lockbox")?.classList.add("unlocked");
    const card = $("#q-card");
    if (card) card.style.display = "none";
    const done = $("#quiz-done");
    if (done) done.hidden = false;
    quizGlow();
    return;
  }
  ensureQuizSession();
  showQuizQ();
}

/* ---------- Gift (open box → yes/no → celebration) ---------- */
let giftBoxOpened = false;
let giftCelebrated = false;
let giftBound = false;
let giftSparkleTimer = null;
const giftLaterTimers = new Set();

/* No-button interaction state — single-flight, no stacked glitches */
let noLastTap = 0;
let noMoveAnim = null;
let noLabelAnim = null;
let noScale = 1;
let noFlying = false;

/* Yes / No hover GIF companions (side gutters) */
let yesHoverBound = false;
let noHoverBound = false;
const YES_HOVER_GIFS = ["assets/cats/yes.gif", "assets/cats/yes_pig.gif"];
const NO_HOVER_GIFS = ["assets/cats/no_cat.gif", "assets/cats/no.gif"];
/* Celebration side-gutter stack after Yes (L/R mirrored rows) */
const YES_SIDE_CATS = [
  "assets/cats/dance.gif",
  "assets/cats/shocked.gif",
  "assets/cats/giggle_cat.gif",
];
const finePointerMq =
  typeof window.matchMedia === "function"
    ? window.matchMedia("(hover: hover) and (pointer: fine)")
    : null;

/* Yes-button eye tracking (from assets/cats/Yes Button.html) */
let yesEyesBound = false;
let yesEyesRaf = 0;
let yesEyesRunning = false;
let yesEyesActive = false;
let yesEyesDirty = true;
let yesEyesLast = 0;
let yesEyesReleaseTimer = 0;
let yesEyesList = [];
const YES_EYE_MAX = 11;
const YES_EYE_DETAIL = 0.45;
const YES_EYE_FALLOFF = 110;
const YES_EYE_YSCALE = 0.85;
let yesEyesPointer = { x: 0, y: 0 };

function giftCfg() {
  const G = CONFIG.gift || {};
  return {
    text: G.text || "To receive your gift, you need to meet me in person 🎁",
    yes: String(G.yes || "HAAN Milungiiiiiiiiiiiiiiiii")
      .replace(/\s*💖\s*$/u, "")
      .replace(/,/g, "")
      .replace(/\s+/g, " ")
      .trim(),
    yay: G.yay || "Yay!! It's a date, Nanhi Bacchi! 🥳",
    photo: G.photo || "assets/gallery/gift.webp",
    noLabels: G.noLabels || CONFIG.noLabels || ["Nhi 😢"],
    sadEmojis: G.sadEmojis || ["😢", "🥺", "😭", "😿", "💔"],
  };
}

let giftCatUrls = [];
let giftCatsWarming = null;

function clearGiftTimers() {
  if (giftSparkleTimer) {
    clearInterval(giftSparkleTimer);
    giftSparkleTimer = null;
  }
  giftLaterTimers.forEach((t) => clearTimeout(t));
  giftLaterTimers.clear();
}

function giftLater(fn, ms) {
  const t = setTimeout(() => {
    giftLaterTimers.delete(t);
    fn();
  }, ms);
  giftLaterTimers.add(t);
  return t;
}

function probeImage(src) {
  return new Promise((res) => {
    const im = new Image();
    im.onload = () => res(true);
    im.onerror = () => res(false);
    im.src = src;
  });
}

/** Escape for safe typography markup inside #yay-text. */
function escapeYayHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Dreamy hierarchy: soft lead + emphasized date + name — same words, richer styling. */
function formatYayTypography(body) {
  const text = String(body || "");
  const m = text.match(/^(Yay!!?\s*)(It's a date)(,?\s*)(Nanhi Bacchi!?)$/i);
  if (!m) return escapeYayHtml(text);
  return (
    `<span class="yay-lead">${escapeYayHtml(m[1])}</span>` +
    `<span class="yay-emphasis yay-emphasis--date">${escapeYayHtml(m[2])}</span>` +
    `<span class="yay-soft">${escapeYayHtml(m[3])}</span>` +
    `<span class="yay-emphasis yay-emphasis--name">${escapeYayHtml(m[4])}</span>`
  );
}

/** Shimmer clip hides emoji — keep text + emoji as siblings, never nest emoji in .shimmer. */
function setYayMessage(text) {
  const raw = String(text || "").trim();
  const m = raw.match(/^(.*?)(?:\s*)(\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic})*)$/u);
  const copy = $("#yay-text");
  const emoji = $("#yay-emoji");
  if (m && m[1].trim()) {
    if (copy) copy.innerHTML = formatYayTypography(m[1].trimEnd());
    if (emoji) {
      emoji.hidden = false;
      emoji.textContent = m[2];
    }
  } else {
    if (copy) copy.innerHTML = formatYayTypography(raw);
    if (emoji) {
      emoji.textContent = "";
      emoji.hidden = true;
    }
  }
}

function warmGiftCats() {
  if (giftCatsWarming) return giftCatsWarming;
  const list = CONFIG.cats || [];
  giftCatsWarming = Promise.all(list.map(probeImage)).then((ok) => {
    giftCatUrls = list.filter((_, i) => ok[i]);
    return giftCatUrls;
  });
  /* Prefetch side-gutter celebration GIFs so Yes feels instant */
  YES_SIDE_CATS.forEach((src) => {
    const im = new Image();
    im.decoding = "async";
    im.src = src;
  });
  return giftCatsWarming;
}

function setYesSideCats(on) {
  const layer = $("#yes-side-cats");
  if (!layer) return;
  layer.classList.toggle("is-on", !!on);
}

function setGiftCelebrating(on) {
  document.body.classList.toggle("is-celebrating", !!on);
  screenEl("gift")?.classList.toggle("is-celebrating-screen", !!on);
  if (!on) {
    FX.setBudget?.();
  }
}

function leaveGiftScreen() {
  clearGiftTimers();
  setGiftCelebrating(false);
  setYesSideCats(false);
  FX.setBudget?.();
  FX.clear?.();
  Sound.restore?.();
}

function resetGiftUI() {
  clearGiftTimers();
  stopYesEyeTracking();
  setGiftCelebrating(false);
  FX.setBudget?.();
  giftBoxOpened = false;
  giftCelebrated = false;
  state.giftOpened = false;
  state.noClicks = 0;
  state.yesScale = 1;
  const stage = $("#gift-stage");
  if (stage) {
    stage.hidden = false;
    /* fill:forwards from openGiftBox can leave opacity:0 — cancel + clear */
    stage.getAnimations?.({ subtree: true }).forEach((a) => {
      try {
        a.cancel();
      } catch (_) {}
    });
    stage.style.removeProperty("opacity");
    stage.style.removeProperty("transform");
    stage.style.opacity = "";
    stage.style.transform = "";
  }
  const tap = $("#gift-tap");
  if (tap) {
    tap.getAnimations?.().forEach((a) => {
      try {
        a.cancel();
      } catch (_) {}
    });
    tap.style.opacity = "";
  }
  $("#bigbox")?.classList.remove("open");
  ["#gift-title", ".gift-eyebrow", "#bigbox"].forEach((sel) => {
    const el = $(sel);
    if (!el) return;
    el.getAnimations?.({ subtree: true }).forEach((a) => {
      try {
        a.cancel();
      } catch (_) {}
    });
    el.style.removeProperty("opacity");
    el.style.removeProperty("transform");
    el.style.removeProperty("filter");
  });
  const revealEl = $("#gift-reveal");
  if (revealEl) {
    revealEl.hidden = true;
    revealEl.style.visibility = "";
  }
  clearGiftRevealAnimFills();
  const giftInner = screenEl("gift")?.querySelector(".gift-inner");
  if (giftInner) giftInner.style.visibility = "";
  restoreNoBtnHome();
  const no = $("#btn-no");
  if (no) {
    no.hidden = false;
    no.className = "btn-no";
    no.removeAttribute("style");
    no.removeAttribute("aria-busy");
  }
  resetNoBtnChrome();
  $("#yes-wrap")?.style.removeProperty("--ys");
  $("#yes-wrap")?.classList.remove("yes-react");
  $("#yes-hover-gifs")?.classList.remove("is-yes-hover");
  $("#no-hover-gifs")?.classList.remove("is-no-hover");
  setYesSideCats(false);
  const celeb = $("#celebrate");
  if (celeb) {
    celeb.hidden = true;
    celeb.classList.remove("is-yay-enter");
  }
  const next = $("#yay-next");
  if (next) next.hidden = true;
  const cats = $("#cats");
  if (cats) cats.innerHTML = "";
}

function restoreNoBtnHome() {
  const b = $("#btn-no");
  const yn = $("#yn");
  if (b && yn && b.parentElement !== yn) yn.appendChild(b);
}

function clearGiftRevealAnimFills() {
  /* reveal() uses fill:"both" and leaves translate3d/scale on #yn — that
     traps position:fixed (Nhi flee) inside the small yn box so the button
     jumps off-screen and gets clipped by the gift screen overflow. */
  $$("#gift-reveal > *").forEach((el) => {
    el.getAnimations?.().forEach((a) => {
      try {
        a.cancel();
      } catch (_) {}
    });
    el.style.removeProperty("opacity");
    el.style.removeProperty("transform");
  });
}

function resetNoBtnChrome() {
  noLastTap = 0;
  noScale = 1;
  noFlying = false;
  if (noMoveAnim) {
    try {
      noMoveAnim.cancel();
    } catch (_) {}
    noMoveAnim = null;
  }
  if (noLabelAnim) {
    try {
      noLabelAnim.cancel();
    } catch (_) {}
    noLabelAnim = null;
  }
  restoreNoBtnHome();
  const label = $("#btn-no-label");
  const first = giftCfg().noLabels[0] || "Nhi 😢";
  if (label) label.textContent = first;
  else if ($("#btn-no")) $("#btn-no").textContent = first;
}

function noBtnScale() {
  /* Stay tappable — never shrink into a speck */
  return Math.max(0.62, 1 - state.noClicks * 0.055);
}

function noRectsOverlap(a, b, pad = 14) {
  return !(
    a.right + pad < b.left ||
    a.left - pad > b.right ||
    a.bottom + pad < b.top ||
    a.top - pad > b.bottom
  );
}

function pickNoFleePoint(bw, bh) {
  const screen = screenEl("gift");
  const sr = screen?.getBoundingClientRect();
  const left = sr ? sr.left : 0;
  const top = sr ? sr.top : 0;
  const width = sr ? sr.width : innerWidth;
  const height = sr ? sr.height : innerHeight;
  const topPad = 76;
  const botPad = 58;
  const m = 12;
  const maxX = Math.max(left + m, left + width - bw - m);
  const maxY = Math.max(top + topPad, top + height - bh - botPad);
  const minX = left + m;
  const minY = top + topPad;
  const yes = $("#btn-yes");
  const yesR = yes?.getBoundingClientRect();
  let x = rand(minX, maxX);
  let y = rand(minY, maxY);
  if (yesR) {
    for (let i = 0; i < 14; i++) {
      const trial = { left: x, top: y, right: x + bw, bottom: y + bh };
      if (!noRectsOverlap(trial, yesR, 18)) break;
      x = rand(minX, maxX);
      y = rand(minY, maxY);
    }
  }
  /* Fixed containing block is the gift screen (it has a transform) —
     convert viewport coords → screen-local left/top. */
  return { x: x - left, y: y - top };
}

function setNoLabel(text) {
  const label = $("#btn-no-label");
  const b = $("#btn-no");
  if (!label && !b) return;
  const target = label || b;
  if (target.textContent === text) return;
  target.textContent = text;
  if (reduceMotion) return;
  if (noLabelAnim) {
    try {
      noLabelAnim.cancel();
    } catch (_) {}
  }
  noLabelAnim = target.animate(
    [
      { transform: "scale(0.88) translateY(3px)", opacity: 0.65 },
      { transform: "scale(1.05) translateY(-2px)", opacity: 1, offset: 0.55 },
      { transform: "scale(1) translateY(0)", opacity: 1 },
    ],
    { duration: 300, easing: "cubic-bezier(.34,1.56,.64,1)" }
  );
  noLabelAnim.finished.catch(() => {}).finally(() => {
    if (noLabelAnim?.playState === "finished") noLabelAnim = null;
  });
}

function jumpNoBtn() {
  const b = $("#btn-no");
  if (!b) return;
  const screen = screenEl("gift");
  const scale = noBtnScale();
  noScale = scale;
  b.style.setProperty("--ns", scale.toFixed(3));
  /* In case Nhi is tapped before the post-reveal fill clear runs */
  clearGiftRevealAnimFills();

  /* Measure in place, then reparent onto the gift screen so position:fixed
     isn't trapped by a transformed ancestor (#yn keeps reveal fill transforms). */
  const prev = b.getBoundingClientRect();
  const w = Math.max(48, (b.offsetWidth || 120) * scale);
  const h = Math.max(40, (b.offsetHeight || 44) * scale);
  if (screen && b.parentElement !== screen) screen.appendChild(b);

  const { x, y } = pickNoFleePoint(w, h);
  const sr = screen?.getBoundingClientRect();
  const originX = sr ? sr.left : 0;
  const originY = sr ? sr.top : 0;
  const dx = prev.left - (originX + x);
  const dy = prev.top - (originY + y);
  b.classList.add("flying");
  noFlying = true;
  /* Seed left/top + compensating translate in the same turn to avoid a flash */
  b.style.left = `${x}px`;
  b.style.top = `${y}px`;
  b.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;

  if (reduceMotion) {
    b.style.transform = `scale(${scale})`;
    return;
  }

  if (noMoveAnim) {
    try {
      noMoveAnim.cancel();
    } catch (_) {}
    noMoveAnim = null;
  }

  const wobble = rand(-10, 10);
  noMoveAnim = b.animate(
    [
      {
        transform: `translate(${dx}px, ${dy}px) scale(${Math.max(0.62, scale + 0.04)}) rotate(${wobble * 0.35}deg)`,
      },
      {
        transform: `translate(${dx * 0.12}px, ${dy * 0.12}px) scale(${scale * 1.06}) rotate(${-wobble}deg)`,
        offset: 0.62,
      },
      { transform: `translate(0, 0) scale(${scale}) rotate(0deg)` },
    ],
    { duration: 520, easing: "cubic-bezier(0.22, 1.15, 0.36, 1)", fill: "forwards" }
  );
  noMoveAnim.finished
    .catch(() => {})
    .finally(() => {
      if (noMoveAnim?.playState === "finished") {
        b.style.transform = `scale(${scale})`;
        try {
          noMoveAnim.cancel();
        } catch (_) {}
        noMoveAnim = null;
      }
    });
}

function growYesButton() {
  const yw = $("#yes-wrap");
  const yes = $("#btn-yes");
  const yesW = yes?.offsetWidth || 240;
  const yesH = yes?.offsetHeight || 140;
  const maxByW = (innerWidth * 0.9) / yesW;
  const maxByH = (innerHeight * 0.42) / yesH;
  const maxS = Math.max(1.25, Math.min(maxByW, maxByH, 2.35));
  yw?.style.setProperty("--ys", Math.min(1 + state.noClicks * 0.2, maxS).toFixed(2));
  if (!yw || reduceMotion) return;
  yw.classList.remove("yes-react");
  void yw.offsetWidth;
  yw.classList.add("yes-react");
}

function canShowYnHoverGifs() {
  /* Mouse / fine pointer only — touch uses CSS display:none on the layers */
  return !giftCelebrated && (finePointerMq ? finePointerMq.matches : true);
}

function setYesHoverGifs(on) {
  const layer = $("#yes-hover-gifs");
  if (!layer) return;
  if (on && canShowYnHoverGifs()) {
    $("#no-hover-gifs")?.classList.remove("is-no-hover");
    layer.classList.add("is-yes-hover");
  } else {
    layer.classList.remove("is-yes-hover");
  }
}

function setNoHoverGifs(on) {
  const layer = $("#no-hover-gifs");
  if (!layer) return;
  const noBtn = $("#btn-no");
  if (on && canShowYnHoverGifs() && noBtn && !noBtn.hidden) {
    $("#yes-hover-gifs")?.classList.remove("is-yes-hover");
    layer.classList.add("is-no-hover");
  } else {
    layer.classList.remove("is-no-hover");
  }
}

function warmHoverGifList(list) {
  list.forEach((src) => {
    const im = new Image();
    im.decoding = "async";
    im.src = src;
  });
}

function warmYesHoverGifs() {
  warmHoverGifList(YES_HOVER_GIFS);
}

function warmNoHoverGifs() {
  warmHoverGifList(NO_HOVER_GIFS);
}

function bindYesHoverGifs() {
  if (yesHoverBound) return;
  const yes = $("#btn-yes");
  if (!yes) return;
  yesHoverBound = true;
  warmYesHoverGifs();

  const show = () => setYesHoverGifs(true);
  const hide = () => setYesHoverGifs(false);

  yes.addEventListener("pointerenter", (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    show();
  });
  yes.addEventListener("pointerleave", hide);
  yes.addEventListener("focus", show);
  yes.addEventListener("blur", hide);
}

function yesEyesVisible() {
  if (giftCelebrated) return false;
  const yn = $("#yn");
  const reveal = $("#gift-reveal");
  if (!yn || yn.hidden) return false;
  if (reveal?.hidden) return false;
  const screen = screenEl("gift");
  return !!(screen && !screen.hidden);
}

function collectYesEyes() {
  const yes = $("#btn-yes");
  if (!yes) {
    yesEyesList = [];
    return yesEyesList;
  }
  yesEyesList = Array.from(yes.querySelectorAll(".eye")).map((svg) => ({
    svg,
    flip: Number(svg.dataset.flip) || 1,
    iris: svg.querySelector(".iris"),
    pupil: svg.querySelector(".pupil"),
    detail: svg.querySelector(".detail"),
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
    cx: 0,
    cy: 0,
  }));
  yesEyesDirty = true;
  return yesEyesList;
}

function measureYesEyes() {
  yesEyesList.forEach((e) => {
    if (!e.iris) return;
    const r = e.iris.getBoundingClientRect();
    e.cx = r.left + r.width * 0.5;
    e.cy = r.top + r.height * 0.5;
  });
}

function aimYesEyes() {
  yesEyesList.forEach((e) => {
    if (!yesEyesActive) {
      e.tx = 0;
      e.ty = 0;
      return;
    }
    const dx = yesEyesPointer.x - e.cx;
    const dy = yesEyesPointer.y - e.cy;
    const d = Math.hypot(dx, dy) || 1;
    let s = Math.min(1, d / YES_EYE_FALLOFF);
    s = s * (2 - s);
    const r = YES_EYE_MAX * s;
    e.tx = (dx / d) * r;
    e.ty = (dy / d) * r * YES_EYE_YSCALE;
  });
}

function paintYesEyes() {
  yesEyesList.forEach((e) => {
    if (!e.pupil) return;
    e.pupil.setAttribute(
      "transform",
      `translate(${(e.x * e.flip).toFixed(2)} ${e.y.toFixed(2)})`
    );
    if (e.detail) {
      e.detail.setAttribute(
        "transform",
        `translate(${(e.x * e.flip * YES_EYE_DETAIL).toFixed(2)} ${(e.y * YES_EYE_DETAIL).toFixed(2)})`
      );
    }
  });
}

function yesEyesTick(t) {
  yesEyesRaf = 0;
  if (!yesEyesVisible()) {
    yesEyesActive = false;
    yesEyesRunning = false;
    yesEyesList.forEach((e) => {
      e.tx = e.ty = 0;
    });
  }
  const dt = Math.min(0.05, (t - yesEyesLast) / 1000 || 0.016);
  yesEyesLast = t;
  if (yesEyesDirty) {
    measureYesEyes();
    yesEyesDirty = false;
  }
  aimYesEyes();
  const k = reduceMotion ? 40 : yesEyesActive ? 13 : 7;
  const a = 1 - Math.exp(-k * dt);
  let moving = false;
  yesEyesList.forEach((e) => {
    e.x += (e.tx - e.x) * a;
    e.y += (e.ty - e.y) * a;
    if (Math.abs(e.tx - e.x) < 0.01 && Math.abs(e.ty - e.y) < 0.01) {
      e.x = e.tx;
      e.y = e.ty;
    } else {
      moving = true;
    }
  });
  paintYesEyes();
  if (moving) {
    yesEyesRaf = requestAnimationFrame(yesEyesTick);
  } else {
    yesEyesRunning = false;
  }
}

function startYesEyeLoop() {
  if (!yesEyesVisible()) return;
  if (!yesEyesList.length) collectYesEyes();
  if (yesEyesRunning) return;
  yesEyesRunning = true;
  yesEyesLast = performance.now();
  yesEyesRaf = requestAnimationFrame(yesEyesTick);
}

function releaseYesEyes() {
  yesEyesActive = false;
  startYesEyeLoop();
}

function stopYesEyeTracking() {
  yesEyesActive = false;
  if (yesEyesReleaseTimer) {
    clearTimeout(yesEyesReleaseTimer);
    yesEyesReleaseTimer = 0;
  }
  if (yesEyesRaf) {
    cancelAnimationFrame(yesEyesRaf);
    yesEyesRaf = 0;
  }
  yesEyesRunning = false;
  yesEyesList.forEach((e) => {
    e.x = e.y = e.tx = e.ty = 0;
  });
  paintYesEyes();
  const yes = $("#btn-yes");
  yes?.classList.remove("blink");
}

function bindYesEyeTracking() {
  const yes = $("#btn-yes");
  if (!yes) return;
  collectYesEyes();
  if (yesEyesBound) {
    yesEyesDirty = true;
    startYesEyeLoop();
    return;
  }
  yesEyesBound = true;

  /* Track pointer across the whole screen while gift Yes is visible */
  const onPointerMove = (e) => {
    if (!yesEyesVisible()) return;
    /* Touch: only follow while the finger is down */
    if (e.pointerType === "touch" && e.buttons === 0) return;
    clearTimeout(yesEyesReleaseTimer);
    yesEyesActive = true;
    yesEyesPointer.x = e.clientX;
    yesEyesPointer.y = e.clientY;
    startYesEyeLoop();
  };
  const onPointerDown = (e) => {
    if (!yesEyesVisible()) return;
    clearTimeout(yesEyesReleaseTimer);
    yesEyesActive = true;
    yesEyesDirty = true;
    yesEyesPointer.x = e.clientX;
    yesEyesPointer.y = e.clientY;
    startYesEyeLoop();
  };
  const onPointerUp = (e) => {
    if (!yesEyesVisible()) return;
    clearTimeout(yesEyesReleaseTimer);
    if (e.pointerType === "touch") {
      yesEyesReleaseTimer = setTimeout(releaseYesEyes, 650);
    }
  };

  addEventListener("pointermove", onPointerMove, { passive: true });
  addEventListener("pointerdown", onPointerDown, { passive: true });
  addEventListener("pointerup", onPointerUp, { passive: true });
  addEventListener("pointercancel", releaseYesEyes, { passive: true });
  document.addEventListener("mouseleave", releaseYesEyes);

  yes.addEventListener("click", () => {
    if (!yesEyesVisible() || reduceMotion) return;
    yes.classList.remove("blink");
    void yes.offsetWidth;
    yes.classList.add("blink");
  });
  yes.addEventListener("animationend", () => yes.classList.remove("blink"));

  const invalidate = () => {
    yesEyesDirty = true;
    if (yesEyesActive) startYesEyeLoop();
  };
  addEventListener("resize", invalidate, { passive: true });
  addEventListener("scroll", invalidate, { passive: true });
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(invalidate).observe(yes);
  }
}

function bindNoHoverGifs() {
  if (noHoverBound) return;
  const no = $("#btn-no");
  if (!no) return;
  noHoverBound = true;
  warmNoHoverGifs();

  const show = () => setNoHoverGifs(true);
  const hide = () => setNoHoverGifs(false);

  no.addEventListener("pointerenter", (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    show();
  });
  no.addEventListener("pointerleave", hide);
  no.addEventListener("focus", show);
  no.addEventListener("blur", hide);
}

function onGiftNo(e) {
  if (giftCelebrated) return;
  const b = $("#btn-no");
  if (!b || b.hidden) return;

  /* Guard against touch+click double fire and ultra-rapid spam */
  const now = performance.now();
  if (now - noLastTap < 140) return;
  noLastTap = now;
  e?.preventDefault?.();

  state.noClicks++;
  const G = giftCfg();
  const labels = G.noLabels;
  const msg = labels[Math.min(state.noClicks, labels.length - 1)];

  b.setAttribute("aria-busy", "true");
  b.classList.add("is-pressed");
  requestAnimationFrame(() => b.classList.remove("is-pressed"));

  setNoLabel(msg);
  setNoHoverGifs(false);
  jumpNoBtn();
  growYesButton();

  Sound.play("sad");
  giftLater(() => {
    try {
      Sound.play?.("tap");
    } catch (_) {}
  }, 280);
  haptic(28);
  giftLater(() => b.removeAttribute("aria-busy"), 320);
}

/**
 * Heart outline spots in a locked aspect-ratio stage (0–100% of the heart box).
 * Shape never stretches with viewport — CSS sizes the stage with the same aspect.
 * Upper lobes stay a little denser than the lower tip.
 */
function heartCatSpots(n = 16) {
  const count = Math.max(8, n | 0);
  const DENSE = 2400;
  const dense = new Array(DENSE);
  for (let i = 0; i < DENSE; i++) {
    const t = (Math.PI * 2 * i) / DENSE;
    const x = 16 * Math.sin(t) ** 3;
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    dense[i] = [x, -y];
  }

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const [x, y] of dense) {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;
  const aspect = spanX / spanY;
  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  /* Inset so half a cat sticker stays inside the stage */
  const pad = 0.07;
  const fit = 100 * (1 - 2 * pad);
  const scale = Math.min(fit / spanX, fit / spanY);

  const ring = dense.map(([x, y]) => [
    50 + (x - midX) * scale,
    50 + (y - midY) * scale,
  ]);

  let tipIdx = 0;
  for (let i = 1; i < DENSE; i++) {
    if (ring[i][1] > ring[tipIdx][1]) tipIdx = i;
  }

  let ringMinY = Infinity;
  let ringMaxY = -Infinity;
  for (const p of ring) {
    if (p[1] < ringMinY) ringMinY = p[1];
    if (p[1] > ringMaxY) ringMaxY = p[1];
  }
  const ringMidY = (ringMinY + ringMaxY) / 2;
  const topHalf = (ringMidY - ringMinY) || 1;

  const densityAt = (y) => {
    const up = (ringMidY - y) / topHalf;
    if (up <= 0) return 0.9;
    return 1 + 0.45 * Math.min(1, up);
  };

  const wArc = new Array(DENSE + 1);
  wArc[0] = 0;
  for (let i = 1; i < DENSE; i++) {
    const a = ring[i - 1];
    const b = ring[i];
    const seg = Math.hypot(b[0] - a[0], b[1] - a[1]);
    wArc[i] = wArc[i - 1] + seg * densityAt((a[1] + b[1]) / 2);
  }
  {
    const a = ring[DENSE - 1];
    const b = ring[0];
    const seg = Math.hypot(b[0] - a[0], b[1] - a[1]);
    wArc[DENSE] = wArc[DENSE - 1] + seg * densityAt((a[1] + b[1]) / 2);
  }
  const wTotal = wArc[DENSE] || 1;
  const tipW = wArc[tipIdx];

  const atWeighted = (target) => {
    let a = ((target % wTotal) + wTotal) % wTotal;
    let lo = 0;
    let hi = DENSE;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (wArc[mid] < a) lo = mid + 1;
      else hi = mid;
    }
    const i1 = Math.min(lo, DENSE);
    const i0 = Math.max(0, i1 - 1);
    const d0 = wArc[i0];
    const d1 = wArc[i1];
    const p0 = ring[i0 % DENSE];
    const p1 = ring[i1 % DENSE];
    const u = d1 > d0 ? (a - d0) / (d1 - d0) : 0;
    return [p0[0] + (p1[0] - p0[0]) * u, p0[1] + (p1[1] - p0[1]) * u];
  };

  const spots = [];
  for (let i = 0; i < count; i++) {
    const p = atWeighted(tipW + (wTotal * i) / count);
    spots.push([+p[0].toFixed(2), +p[1].toFixed(2)]);
  }

  return {
    spots,
    aspect: +aspect.toFixed(5),
    meta: {
      count: spots.length,
      aspect: +aspect.toFixed(5),
      wingTop: +Math.min(...spots.map((s) => s[1])).toFixed(2),
    },
  };
}

let giftHeartResizeBound = false;
let giftHeartResizeTimer = 0;

function bindGiftHeartResize() {
  if (giftHeartResizeBound) return;
  giftHeartResizeBound = true;
  const rebuild = () => {
    if (!giftCelebrated) return;
    clearTimeout(giftHeartResizeTimer);
    giftHeartResizeTimer = setTimeout(() => {
      if (giftCelebrated) buildGiftCats();
    }, 140);
  };
  addEventListener("resize", rebuild, { passive: true });
  addEventListener("orientationchange", rebuild, { passive: true });
}

function buildGiftCats() {
  const box = $("#cats");
  if (!box) return;
  box.replaceChildren();
  box.classList.add("cats-heart");
  const count = reduceMotion ? 14 : 16;
  const { spots, aspect } = heartCatSpots(count);
  if (aspect) {
    box.style.setProperty("--heart-ar", String(aspect));
    $("#celebrate")?.style.setProperty("--heart-ar", String(aspect));
  }
  /* Use only cat1.gif for every dancer */
  const cat1 =
    giftCatUrls.find((u) => /cat1\.gif$/i.test(u)) ||
    (CONFIG.cats || []).find((u) => /cat1\.gif$/i.test(u)) ||
    "assets/cats/cat1.gif";
  const emojis = CONFIG.catFallbackEmojis || ["🐱", "😺", "😸", "🐈", "😻"];
  const useGif = !reduceMotion && !!cat1;
  const frag = document.createDocumentFragment();
  spots.forEach(([x, y], i) => {
    const d = document.createElement("div");
    /* Pair mirrored cats on the same dance phase */
    const pair = Math.floor(i / 2);
    d.className = `dancer d${pair % 4} heart-dancer`;
    d.style.cssText = `left:${x}%;top:${y}%;--dl:${(-((pair * 0.08) % 0.9)).toFixed(2)}s`;
    if (useGif) {
      const im = new Image();
      im.alt = "";
      im.decoding = "async";
      im.loading = "eager";
      im.draggable = false;
      im.src = cat1;
      d.appendChild(im);
    } else if (DiveArt.cat && i % 2 === 0) {
      d.innerHTML = DiveArt.cat();
    } else {
      d.innerHTML = `<span class="cat-emoji">${pick(emojis)}</span>`;
    }
    frag.appendChild(d);
  });
  box.appendChild(frag);
  bindGiftHeartResize();
}

async function onGiftYes() {
  if (giftCelebrated) return;
  giftCelebrated = true;
  stopYesEyeTracking();
  setYesHoverGifs(false);
  setNoHoverGifs(false);
  const no = $("#btn-no");
  if (no) no.hidden = true;
  Sound.play("fanfare");
  Sound.duck?.();
  haptic([40, 40, 40, 80]);
  setGiftCelebrating(true);
  setYesSideCats(true);
  FX.setBudget?.(110);
  FX.clear?.();
  const c = $("#celebrate");
  if (c) {
    c.classList.remove("is-yay-enter");
    /* Retrigger CSS jewel entrance / burst on each Yes */
    void c.offsetWidth;
    c.hidden = false;
    c.classList.add("is-yay-enter");
    anim(c, [{ opacity: 0 }, { opacity: 1 }], { duration: reduceMotion ? 120 : 420 });
  }
  /* Keep gift-reveal in layout (visibility only). display:none collapses the
     position:relative gift screen, so fixed #celebrate only covers ~200px and
     #app shows as a white curtain under the card. */
  const revealEl = $("#gift-reveal");
  if (revealEl) {
    revealEl.hidden = false;
    revealEl.style.visibility = "hidden";
  }
  const giftInnerEl = screenEl("gift")?.querySelector(".gift-inner");
  if (giftInnerEl) giftInnerEl.style.visibility = "hidden";
  /* Build dancers immediately from warmed URLs (no await on Yes click) */
  if (!giftCatUrls.length) warmGiftCats();
  buildGiftCats();
  if (giftCatsWarming) {
    giftCatsWarming.then(() => {
      if (giftCelebrated && giftCatUrls.length) buildGiftCats();
    });
  }

  if (reduceMotion) {
    FX.sparkles?.(innerWidth / 2, innerHeight * 0.42, 8);
  } else {
    /* Shape confetti only — no party-popper emoji rain */
    FX.cannons?.(22);
    FX.confettiRain?.(18);
    giftLater(() => {
      FX.confettiRain?.(20);
      Sound.play("cheer");
    }, 900);
    giftLater(() => {
      FX.cannons?.(16);
      Sound.play("cheer");
    }, 1800);
  }

  giftLater(() => {
    const n = $("#yay-next");
    if (n) {
      n.hidden = false;
      n.style.opacity = "1";
      n.style.visibility = "visible";
      reveal([n], { dur: 600, y: 10, blur: 0, scale: 1 });
    }
    /* Settle: stop spawning heavy bursts; let remaining particles die out */
    FX.setBudget?.(80);
    Sound.restore?.();
  }, reduceMotion ? 280 : 900);
}

async function openGiftBox() {
  if (giftBoxOpened) return;
  giftBoxOpened = true;
  state.giftOpened = true;
  clearGiftTimers();
  const box = $("#bigbox");
  const g = $("#gift-stage");
  box?.classList.add("open");
  Sound.play("pop");
  haptic([20, 30, 50]);
  const tap = $("#gift-tap");
  if (tap) tap.style.opacity = 0;
  await sleep(reduceMotion ? 80 : 650);
  Sound.play("unlock");
  if (box) {
    const r = box.getBoundingClientRect();
    FX.burst?.(r.left + r.width / 2, r.top + r.height * 0.3, {
      n: 80,
      speed: 12,
      spread: 3.4,
      gravity: 0.2,
    });
  }
  FX.cannons?.();
  await sleep(reduceMotion ? 80 : 1000);
  if (g) {
    await anim(
      g,
      [
        { opacity: 1, transform: "none" },
        { opacity: 0, transform: "scale(.7) translateY(30px)" },
      ],
      { duration: reduceMotion ? 80 : 500, fill: "forwards" }
    );
    /* Drop WAAPI fill so a later resetGiftUI can't fight a stuck opacity:0 */
    g.getAnimations?.().forEach((a) => {
      try {
        a.cancel();
      } catch (_) {}
    });
    g.style.opacity = "";
    g.style.transform = "";
    g.hidden = true;
  }
  const rv = $("#gift-reveal");
  if (rv) {
    rv.hidden = false;
    const revealKids = $$("#gift-reveal > *");
    reveal(revealKids, { step: 200, dur: 800 });
    /* Drop fill:"both" transforms so Nhi can position:fixed against the screen */
    const fillClearAt = reduceMotion ? 140 : 800 + 200 * Math.max(0, revealKids.length - 1) + 40;
    giftLater(clearGiftRevealAnimFills, fillClearAt);
  }
  Sound.play("sparkle");
  giftLater(() => FX.sparkles?.(innerWidth / 2, innerHeight * 0.3, 20), 500);
  bindYesEyeTracking();
}

function initGift() {
  const screen = screenEl("gift");
  const G = giftCfg();
  hydrateGiftArt(screen || document);
  hydrateImages(screen || document);
  warmGiftCats();

  const textEl = $("#gift-text");
  if (textEl) textEl.textContent = G.text;
  const yesLabel = $("#btn-yes .yes-label");
  if (yesLabel) yesLabel.textContent = G.yes;
  setYayMessage(G.yay);
  const img = $("#gift-imgwrap img");
  if (img && G.photo) {
    img.dataset.src = G.photo;
    img.src = G.photo;
  }
  if (!giftBound) {
    giftBound = true;
    $("#bigbox")?.addEventListener("click", openGiftBox);
    const noBtn = $("#btn-no");
    if (noBtn) {
      /* pointerup feels instant on touch; click kept as keyboard/fallback */
      noBtn.addEventListener("pointerup", (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        onGiftNo(e);
      });
      noBtn.addEventListener("click", (e) => {
        /* Keyboard activation only — pointer path already handled */
        if (e.detail === 0) onGiftNo(e);
      });
    }
    $("#btn-yes")?.addEventListener("click", onGiftYes);
    bindYesHoverGifs();
    bindNoHoverGifs();
    bindYesEyeTracking();
  } else {
    warmYesHoverGifs();
    warmNoHoverGifs();
    bindYesEyeTracking();
  }

  clearGiftTimers();
  if (giftCelebrated) {
    stopYesEyeTracking();
    setGiftCelebrating(true);
    setYesSideCats(true);
    return;
  }
  if (giftBoxOpened) bindYesEyeTracking();
  if (!giftBoxOpened) {
    reveal(
      [$(".gift-eyebrow", screen), $("#gift-title"), $("#bigbox"), $("#gift-tap")],
      { step: 150 }
    );
    giftSparkleTimer = setInterval(() => {
      if (giftBoxOpened) return clearGiftTimers();
      const box = $("#bigbox");
      if (!box) return;
      const r = box.getBoundingClientRect();
      FX.sparkles?.(r.left + r.width / 2 + rand(-60, 60), r.top + rand(0, 100), 2);
    }, 900);
  }
}

/* ---------- Final (gift lanterns + shimmer quote) ---------- */
let finalLanternsBuilt = false;
let finalSparkleTimer = null;
let finalRevealedOnce = false;
const finalLaterTimers = new Set();

function finalQuoteText() {
  const raw = CONFIG.final?.quote || CONFIG.finalQuote || "";
  return String(raw).replace(/^["“]+|["”]+$/g, "").trim();
}

function renderFinalQuote(el) {
  if (!el) return;
  const text = finalQuoteText();
  /* Avoid wiping DOM when content is unchanged — prevents text flash / layout thrash */
  if (el.dataset.quoteReady === "1" && el.children.length) return;
  el.replaceChildren();
  const parts = text.split(/\n\s*\n/).map((p) => p.replace(/\s+/g, " ").trim()).filter(Boolean);
  if (!parts.length) {
    el.textContent = "";
    el.dataset.quoteReady = "1";
    return;
  }
  const frag = document.createDocumentFragment();
  parts.forEach((para) => {
    const p = document.createElement("p");
    p.textContent = para;
    frag.appendChild(p);
  });
  el.appendChild(frag);
  el.dataset.quoteReady = "1";
}

function clearFinalTimers() {
  if (finalSparkleTimer) {
    clearInterval(finalSparkleTimer);
    finalSparkleTimer = null;
  }
  finalLaterTimers.forEach((t) => clearTimeout(t));
  finalLaterTimers.clear();
  /* Drop leftover particles so leaving/returning doesn't stack RAF load */
  FX.setBudget?.();
}

function finalLater(fn, ms) {
  const t = setTimeout(() => {
    finalLaterTimers.delete(t);
    fn();
  }, ms);
  finalLaterTimers.add(t);
  return t;
}

function buildFinalLanterns() {
  const L = $("#lanterns");
  if (!L) return;
  L.innerHTML = "";
  const cs = ["#ffd36e", "#ffb3cc", "#c9b1ff", "#9fd2ff", "#ffc08f", "#a8ecd0"];
  /* Deterministic layout + staggered delays — no random mid-cycle pops that look like flicker */
  const count = reduceMotion ? 4 : window.matchMedia("(max-width: 640px)").matches ? 6 : 8;
  const bases = [
    [8, 24, 0, 44, 18],
    [22, 28, 4, 38, -22],
    [36, 20, 9, 52, 30],
    [48, 26, 2, 40, -14],
    [62, 22, 12, 56, 24],
    [74, 30, 6, 36, -28],
    [88, 18, 15, 48, 12],
    [14, 26, 18, 42, -18],
  ];
  for (let i = 0; i < count; i++) {
    const [x, d, dl, s, sw] = bases[i % bases.length];
    const node = document.createElement("div");
    node.className = "final-lantern";
    node.setAttribute("aria-hidden", "true");
    /* Negative delay only within one cycle so opacity fade still covers the loop seam */
    node.style.cssText = `--x:${x}%;--d:${d}s;--dl:${-dl}s;--s:${s}px;--sw:${sw}px`;
    node.innerHTML = DiveArt.lantern(cs[i % cs.length], `flg${i}`);
    L.appendChild(node);
  }
  finalLanternsBuilt = true;
}

function initFinal() {
  const screen = screenEl("final");
  hydrateGiftArt(screen || document);

  const title = $("#final-title");
  if (title && CONFIG.final?.title && title.textContent !== CONFIG.final.title) {
    title.textContent = CONFIG.final.title;
  }
  renderFinalQuote($("#final-quote"));

  if (!finalLanternsBuilt || !$("#lanterns")?.querySelector(".final-lantern")) {
    buildFinalLanterns();
  }

  clearFinalTimers();
  FX.clear?.();
  Sound.restore?.();

  /* Soft, slow cascade — eyebrow → title → each letter para → buttons */
  if (!finalRevealedOnce) {
    try {
      Sound.play?.("sparkle");
    } catch (_) {}
    const quote = $("#final-quote");
    const paras = quote ? [...quote.querySelectorAll("p")] : [];
    const softEase = "cubic-bezier(0.22, 0.82, 0.28, 1)";
    reveal(
      [$(".final-eyebrow", screen), $("#final-title")],
      { delay: 120, step: 420, dur: 1600, blur: 4, y: 22, scale: 0.985, ease: softEase }
    );
    if (paras.length) {
      /* Hide shell so only staggered paragraphs fade in */
      quote.style.opacity = "1";
      reveal(paras, {
        delay: 780,
        step: 520,
        dur: 1700,
        blur: 5,
        y: 26,
        scale: 0.99,
        ease: softEase,
      });
    } else {
      reveal([quote], { delay: 780, step: 0, dur: 1700, blur: 5, y: 26, scale: 0.99, ease: softEase });
    }
    reveal(
      [$(".btn-row", screen)],
      { delay: 780 + Math.max(paras.length, 1) * 520 + 200, step: 0, dur: 1400, blur: 3, y: 18, scale: 0.99, ease: softEase }
    );
    finalRevealedOnce = true;
  }
}

/* ---------- Unified Nanha Photos (timeline + cloud) ---------- */
function buildLocalPhotoItems() {
  // Cluster a few polaroids per day so the timeline feels full & cute
  const year = new Date().getFullYear();
  const base = new Date(year, CONFIG.birthdayDate.month, CONFIG.birthdayDate.day);
  if (base > new Date()) base.setFullYear(year - 1);
  const perDay = 3;
  const softNames = [
    "soft smile",
    "little spark",
    "nanha glow",
    "peach hour",
    "cozy frame",
    "moon peek",
    "candy light",
    "heart still",
  ];

  return CONFIG.gallery.map((src, i) => {
    const dayOffset = Math.floor(i / perDay);
    const d = new Date(base);
    d.setDate(d.getDate() - dayOffset);
    d.setHours(10 + (i % 8), (i * 11) % 60, 0, 0);
    return {
      id: `local-${i}`,
      name: softNames[i % softNames.length],
      category: "image",
      mimeType: "image/jpeg",
      size: 0,
      createdAt: d.toISOString(),
      contentUrl: src,
      thumbnailUrl: src,
      local: true,
      cloud: false,
      animated: false,
    };
  });
}

async function initGallery() {
  const local = buildLocalPhotoItems();
  if (window.NanhaCloud?.setLocalItems) {
    window.NanhaCloud.setLocalItems(local);
  }
  if (window.NanhaCloud?.refresh) {
    await window.NanhaCloud.refresh();
  } else {
    // Offline fallback: paint local-only timeline without cloud module
    state.galleryItems = local.map((a) => ({
      src: a.contentUrl,
      thumb: a.thumbnailUrl,
      name: a.name,
      local: true,
    }));
  }
  syncGalleryItemsFromTimeline();
}

function syncGalleryItemsFromTimeline() {
  const items = window.NanhaCloud?.getTimeline?.() || [];
  state.galleryItems = items.map((a) => ({
    src: a.contentUrl,
    thumb: a.thumbnailUrl,
    caption: a.caption || "",
    downloadName: a.raw?.downloadName || a.downloadName || "",
    local: !!a.local,
    cloud: !!a.cloud,
    animated: !!a.animated,
    category: a.category || "image",
    mimeType: a.mimeType || "",
    id: a.id,
  }));
  // Warm nearby thumbs so first open / next already feel instant
  for (const item of state.galleryItems.slice(0, 12)) {
    if (item.thumb) lbPreload(item.thumb);
  }
}

function lbIsVideo(item) {
  return item?.category === "video" || (item?.mimeType || "").startsWith("video/");
}

function updateLightboxChrome(item, index) {
  const btn = $("#lb-download");
  if (btn) btn.hidden = !(item && !item.local && item.src);

  const caption = $("#lb-caption");
  if (caption) caption.textContent = (item?.caption || "").trim();

  const counter = $("#lb-counter");
  if (counter) {
    const n = state.galleryItems.length;
    counter.textContent = n ? `${index + 1}  ·  ${n}` : "";
  }

  const kicker = $("#lb-kicker");
  if (kicker) {
    kicker.textContent = lbIsVideo(item)
      ? "a moving memory"
      : item?.animated || item?.category === "gif"
        ? "a soft little loop"
        : "a little memory";
  }
}

function downloadLightboxItem() {
  try {
    Sound.play?.("tap");
  } catch (_) {}
  syncGalleryItemsFromTimeline();
  const item = state.galleryItems[state.lbIndex];
  if (!item?.src || item.local) return;
  const a = document.createElement("a");
  a.href = `${item.src}${item.src.includes("?") ? "&" : "?"}download=1`;
  a.download = item.downloadName || (lbIsVideo(item) ? "video" : "photo");
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function lbSlotEls() {
  return {
    a: $("#lb-slot-a"),
    b: $("#lb-slot-b"),
  };
}

function lbSlotHasMedia(slot) {
  return !!(slot && slot.querySelector(".lb-media"));
}

function lbPauseVideos(root) {
  (root || document).querySelectorAll?.("video.lb-media")?.forEach((v) => {
    try {
      v.pause();
    } catch (_) {}
  });
}

function lbClearSlot(slot) {
  if (!slot) return;
  lbPauseVideos(slot);
  slot.innerHTML = "";
  lbClearSlideClasses(slot);
}

function lbPreload(src) {
  if (!src) return Promise.resolve();
  const hit = lbPreloadCache.get(src);
  if (hit) return hit;
  const p = new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      const done = img.decode ? img.decode().then(() => src).catch(() => src) : Promise.resolve(src);
      done.then(resolve);
    };
    img.onerror = () => resolve(src);
    img.src = src;
  });
  lbPreloadCache.set(src, p);
  /* Bound cache so a huge gallery can't retain every decoded bitmap forever */
  if (lbPreloadCache.size > 48) {
    const first = lbPreloadCache.keys().next().value;
    lbPreloadCache.delete(first);
  }
  return p;
}

function lbPrefetchAround(index) {
  const items = state.galleryItems;
  const n = items.length;
  if (!n) return;
  const warm = (off, full) => {
    const item = items[(index + off + n * 3) % n];
    if (!item) return;
    if (item.thumb) lbPreload(item.thumb);
    if (full && item.src && !lbIsVideo(item) && item.src !== item.thumb) {
      lbPreload(item.src);
    }
  };
  /* Immediate: neighbors' thumbs. Idle: full stills for ±1 only. */
  warm(-1, false);
  warm(1, false);
  warm(0, true);
  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 120));
  idle(() => {
    warm(-1, true);
    warm(1, true);
  });
}

function lbClearSlideClasses(el) {
  if (!el) return;
  el.classList.remove(
    "is-active",
    "is-thumb",
    "is-enter-from-left",
    "is-enter-from-right",
    "is-exit-to-left",
    "is-exit-to-right"
  );
}

function lbWaitTransition(el) {
  return new Promise((resolve) => {
    if (!el) return resolve();
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      el.removeEventListener("transitionend", onEnd);
      resolve();
    };
    const onEnd = (e) => {
      if (e.target !== el) return;
      if (e.propertyName !== "opacity" && e.propertyName !== "transform") return;
      finish();
    };
    el.addEventListener("transitionend", onEnd);
    setTimeout(finish, 280);
  });
}

function lbFillSlot(slot, item, { preferThumb = false } = {}) {
  if (!slot || !item) return null;
  lbPauseVideos(slot);
  slot.innerHTML = "";

  const alt = item.caption || (lbIsVideo(item) ? "Video" : "Photo");
  const fullSrc = item.src || "";
  const thumbSrc = item.thumb && item.thumb !== fullSrc ? item.thumb : "";

  if (lbIsVideo(item)) {
    // Soft poster first so next/prev never waits on the video stream
    if (thumbSrc) {
      const poster = document.createElement("img");
      poster.className = "lb-media lb-poster";
      poster.alt = alt;
      poster.decoding = "async";
      poster.src = thumbSrc;
      slot.appendChild(poster);
      if (preferThumb) slot.classList.add("is-thumb");
    }

    const video = document.createElement("video");
    video.className = "lb-media lb-video";
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("controlslist", "nodownload");
    if (thumbSrc) video.poster = thumbSrc;
    video.src = fullSrc;
    video.style.opacity = "0";
    const reveal = () => {
      slot.classList.remove("is-thumb");
      video.style.opacity = "1";
      slot.querySelector(".lb-poster")?.remove();
    };
    video.addEventListener("loadeddata", reveal, { once: true });
    video.addEventListener("error", reveal, { once: true });
    slot.appendChild(video);
    return video;
  }

  const img = document.createElement("img");
  img.className = "lb-media";
  img.alt = alt;
  img.decoding = "async";
  img.fetchPriority = "high";
  // Prefer full image; thumb is a non-blurred opacity stand-in only (blur filters freeze the GPU).
  slot.appendChild(img);
  const cached = !!(fullSrc && lbPreloadCache.has(fullSrc));
  const hasThumbStandIn = !!(preferThumb && fullSrc && thumbSrc && !cached);
  if (hasThumbStandIn) {
    const under = document.createElement("img");
    under.className = "lb-media lb-poster";
    under.alt = "";
    under.decoding = "async";
    under.src = thumbSrc;
    slot.insertBefore(under, img);
    slot.classList.add("is-thumb");
    img.style.opacity = "0";
    img.src = fullSrc;
    const reveal = () => {
      img.style.opacity = "1";
      slot.classList.remove("is-thumb");
      under.remove();
    };
    if (img.complete && img.naturalWidth) {
      reveal();
    } else {
      img.addEventListener("load", reveal, { once: true });
      img.addEventListener("error", reveal, { once: true });
    }
  } else {
    /* Skip NanhaPhotoLoad shimmer on lightbox — it mutates the slide host mid-transition */
    img.src = fullSrc || thumbSrc;
  }
  return img;
}

function showLightboxItem(index, { dir = 0, animate = true } = {}) {
  const items = state.galleryItems;
  if (!items.length) return;

  const n = items.length;
  index = ((index % n) + n) % n;
  state.lbIndex = index;
  const item = items[index];
  updateLightboxChrome(item, index);
  lbPrefetchAround(index);

  const slots = lbSlotEls();
  const curKey = state.lbActiveSlot === "b" ? "b" : "a";
  const nextKey = curKey === "a" ? "b" : "a";
  const incoming = slots[nextKey];
  const outgoing = slots[curKey];
  if (!incoming) return;

  const token = ++state.lbToken;
  lbPauseVideos(outgoing);

  const preferReduce =
    typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const useAnim = animate && dir !== 0 && !preferReduce && lbSlotHasMedia(outgoing);

  lbClearSlideClasses(incoming);
  const media = lbFillSlot(incoming, item, { preferThumb: true });

  const runSwap = () => {
    if (token !== state.lbToken) return;
    if (useAnim) {
      incoming.classList.add(dir > 0 ? "is-enter-from-right" : "is-enter-from-left");
      /* Double-rAF starts the transition without a forced synchronous layout read */
      requestAnimationFrame(() => {
        if (token !== state.lbToken) return;
        requestAnimationFrame(() => {
          if (token !== state.lbToken) return;
          outgoing.classList.remove(
            "is-enter-from-left",
            "is-enter-from-right",
            "is-exit-to-left",
            "is-exit-to-right"
          );
          outgoing.classList.add(dir > 0 ? "is-exit-to-left" : "is-exit-to-right");
          incoming.classList.add("is-active");
          incoming.classList.remove("is-enter-from-left", "is-enter-from-right");
        });
      });
    } else {
      lbClearSlideClasses(outgoing);
      incoming.classList.add("is-active");
    }
  };
  runSwap();

  state.lbActiveSlot = nextKey;

  const finish = async () => {
    if (token !== state.lbToken) return;

    if (!lbIsVideo(item) && item?.src && media?.tagName === "IMG") {
      await lbPreload(item.src);
      if (token !== state.lbToken) return;
      if (media.getAttribute("src") !== item.src) media.src = item.src;
      media.style.opacity = "1";
      incoming.classList.remove("is-thumb");
      incoming.querySelector(".lb-poster")?.remove();
    }

    if (lbIsVideo(item) && media?.tagName === "VIDEO") {
      try {
        media.muted = false;
        const playPromise = media.play();
        if (playPromise?.catch) playPromise.catch(() => {});
      } catch (_) {}
    }

    if (useAnim) await lbWaitTransition(outgoing || incoming);
    if (token !== state.lbToken) return;
    if (outgoing && outgoing !== incoming) lbClearSlot(outgoing);
  };
  finish();
}

function galleryScrollEl() {
  return document.querySelector('.screen[data-screen="gallery"]');
}

function rememberGalleryScroll() {
  const gal = galleryScrollEl();
  state.lbScrollTop = gal ? gal.scrollTop : 0;
}

function restoreGalleryScroll() {
  const gal = galleryScrollEl();
  if (!gal) return;
  const top = state.lbScrollTop || 0;
  gal.scrollTop = top;
  /* Re-apply after layout settles (overflow unlock / paint resume) */
  requestAnimationFrame(() => {
    if (galleryScrollEl() === gal) gal.scrollTop = top;
  });
}

function openLightbox(i) {
  syncGalleryItemsFromTimeline();
  if (!state.galleryItems.length) return;
  const lb = $("#lightbox");
  state.lbActiveSlot = "a";
  lbClearSlot($("#lb-slot-a"));
  lbClearSlot($("#lb-slot-b"));
  rememberGalleryScroll();
  document.body.classList.add("lightbox-open");
  lb.hidden = false;
  lb.classList.remove("is-closing", "is-open");
  try {
    Sound.play?.("pop");
  } catch (_) {}
  /* Next frame: fade/scale in so open feels fluid without a sync layout flush */
  requestAnimationFrame(() => {
    if (lb.hidden) return;
    lb.classList.add("is-open");
  });
  showLightboxItem(i, { dir: 0, animate: false });
}

function closeLightbox() {
  state.lbToken++;
  const lb = $("#lightbox");
  if (!lb || lb.hidden) {
    document.body.classList.remove("lightbox-open");
    restoreGalleryScroll();
    return;
  }
  try {
    Sound.play?.("tap");
  } catch (_) {}
  lbPauseVideos(lb);
  document.body.classList.remove("lightbox-open");
  restoreGalleryScroll();
  lb.classList.remove("is-open");
  lb.classList.add("is-closing");

  let done = false;
  const finishClose = () => {
    if (done) return;
    done = true;
    lb.classList.remove("is-closing");
    lbClearSlot($("#lb-slot-a"));
    lbClearSlot($("#lb-slot-b"));
    lb.hidden = true;
    restoreGalleryScroll();
  };
  const onEnd = (e) => {
    if (e.target !== lb) return;
    if (e.propertyName && e.propertyName !== "opacity") return;
    lb.removeEventListener("transitionend", onEnd);
    finishClose();
  };
  lb.addEventListener("transitionend", onEnd);
  setTimeout(finishClose, reduceMotion ? 40 : 360);
}

function lbNav(dir) {
  if (!state.galleryItems.length) {
    syncGalleryItemsFromTimeline();
    if (!state.galleryItems.length) return;
  }
  try {
    Sound.play?.("tap");
  } catch (_) {}
  showLightboxItem(state.lbIndex + dir, { dir, animate: true });
}

/* ---------- Wire UI ---------- */
function wireUI() {
  // #btn-music opens NanhaPlaylist panel (music/playlist-player.js); ambient mute lives in that panel
  $("#chrome-brand")?.addEventListener("click", () => {
    if (!isGatePassed()) return;
    try {
      Sound.play?.("tap");
    } catch (_) {}
    goTo("birthday");
  });

  $$(".next-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id === "bday-continue" && !state.cakeCut) return;
      const next = btn.dataset.next;
      if (next) {
        Sound.play("pop");
        goTo(next);
      }
    });
  });

  $("#to-gallery")?.addEventListener("click", () => {
    try {
      Sound.play?.("tap");
    } catch (_) {}
    goTo("gallery");
  });
  $("#back-final")?.addEventListener("click", () => {
    try {
      Sound.play?.("tap");
    } catch (_) {}
    goTo("final");
  });
  $("#replay")?.addEventListener("click", () => {
    try {
      Sound.play?.("sparkle");
    } catch (_) {}
    state.fed = false;
    resetQuizUI();
    state.admireOpened = new Set();
    state.letterDone = false;
    resetGiftUI();
    resetCakeVisual();
    const flower = $("#flower");
    if (flower) {
      delete flower.dataset.built;
      flower.innerHTML = "";
      flower.classList.remove("all");
    }
    const admireNext = $("#admire-next");
    if (admireNext) admireNext.hidden = true;
    const tl = $("#timeline");
    if (tl) {
      delete tl.dataset.done;
      tl.innerHTML = "";
    }
    const facts = $("#facts");
    if (facts) {
      delete facts.dataset.done;
      facts.innerHTML = "";
    }
    resetLetterUI();
    Sound.restore?.();
    if ($("#admire-next")) $("#admire-next").hidden = false;
    const gc = $("#gate-continue");
    if (gc) gc.hidden = true;
    const gh = $("#gate-hint");
    if (gh) {
      gh.hidden = false;
      gh.textContent = CONFIG.gateIdleHint || "Tap the true milestone, Nanhi Bacchi 🐙";
      gh.className = "hint";
    }
    $("#lock")?.classList.remove("open");
    // Replay the journey without clearing device gate unlock
    goTo("birthday");
  });

  window.addEventListener("nanha-cloud:assets-changed", () => {
    syncGalleryItemsFromTimeline();
  });

  window.addEventListener("nanha-cloud:timeline", () => {
    syncGalleryItemsFromTimeline();
  });

  window.addEventListener("nanha-photos:open", (e) => {
    const index = e.detail?.index ?? 0;
    openLightbox(index);
    haptic(10);
  });

  $("#lb-close")?.addEventListener("click", closeLightbox);
  $("#lb-download")?.addEventListener("click", downloadLightboxItem);

  // pointerdown feels snappier than click (no mouseup wait)
  const bindLbNav = (el, dir) => {
    if (!el) return;
    el.addEventListener("pointerdown", (e) => {
      if (e.button != null && e.button !== 0) return;
      e.preventDefault();
      lbNav(dir);
    });
  };
  bindLbNav($("#lb-prev"), -1);
  bindLbNav($("#lb-next"), 1);

  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbNav(-1);
    if (e.key === "ArrowRight") lbNav(1);
  });

  // swipe lightbox — horizontal only, ignores taps on controls
  let swipeX = 0;
  let swipeY = 0;
  let swipeActive = false;
  const lbEl = $("#lightbox");
  lbEl?.addEventListener(
    "pointerdown",
    (e) => {
      // Don't steal scrubbing / taps on controls or the video itself
      if (e.target.closest("button, video, .lb-chip, .lb-bottom")) return;
      swipeActive = true;
      swipeX = e.clientX;
      swipeY = e.clientY;
    },
    { passive: true }
  );
  lbEl?.addEventListener(
    "pointerup",
    (e) => {
      if (!swipeActive) return;
      swipeActive = false;
      const dx = e.clientX - swipeX;
      const dy = e.clientY - swipeY;
      if (Math.abs(dx) < 36 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
      lbNav(dx < 0 ? 1 : -1);
    },
    { passive: true }
  );
  lbEl?.addEventListener(
    "pointercancel",
    () => {
      swipeActive = false;
    },
    { passive: true }
  );

  window.addEventListener("popstate", (e) => {
    const id = e.state?.screen || location.hash.replace("#", "") || (isGatePassed() ? "birthday" : "gate");
    if (SCREENS.includes(id)) goTo(id, { history: false });
  });

  renderFinalQuote($("#final-quote"));
  ensureYearQuote();
}

/* ---------- Boot ---------- */
function isMobileGateActive() {
  return document.documentElement.classList.contains("is-mobile-gate");
}

async function boot() {
  // Phones / small touch tablets see the pastel message only — skip app init
  if (isMobileGateActive()) {
    const loader = document.getElementById("loader");
    if (loader) loader.hidden = true;
    const chrome = document.getElementById("chrome");
    if (chrome) chrome.hidden = true;
    return;
  }

  spawnAmbient();
  initParallax();
  initCursor();
  initGate();
  wireUI();
  // Music starts on "Open Nanha Surprise" via playlist (not ambient mp3)
  await preload();
}

boot();
