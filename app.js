const questions = [
  {
    text: "Who loves you the most, even when you get angry over tiny things?",
    answers: ["Your husband", "The delivery guy with new parcels"],
    correct: 0,
    wrong: "The parcel economy is strong, but your husband wins this one.",
    image: "assets/photos/2023_1 (After we met).jpeg"
  },
  {
    text: "Who owns 99% of the bathroom shelf?",
    answers: ["Shruti and her products", "Aakash and his one lonely item"],
    correct: 0,
    wrong: "Please respect the skincare empire.",
    image: "assets/photos/2025_vietnamtrip.jpeg"
  },
  {
    text: "What is the correct birthday snack energy?",
    answers: ["Gol gappe and chaach", "Plain banana and sadness"],
    correct: 0,
    wrong: "Absolutely not. We are not doing banana sadness today.",
    image: "assets/photos/2025_punetrip.jpeg"
  },
  {
    text: "What happens when Shruti is angry?",
    answers: ["Puppy eyes become big eyes", "Everyone receives a quarterly report"],
    correct: 0,
    wrong: "No reports. Just those big angry eyes.",
    image: "assets/photos/2026_goa trip.jpg"
  },
  {
    text: "Where are we going after Vietnam, if the universe behaves?",
    answers: ["Thailand", "A basic fruit basket"],
    correct: 0,
    wrong: "Fruit can wait. Thailand is calling.",
    image: "assets/photos/2026_latest.jpg"
  }
];

const photoJourney = [
  ["assets/photos/1- when i was born.jpg", "1995", "Tiny Shruti arrives"],
  ["assets/photos/2- got a little older.jpg", "Childhood", "Puppy eyes era"],
  ["assets/photos/3 - got a little more older.jpg", "Growing up", "The smile gets dangerous"],
  ["assets/photos/4 - got further older.jpg", "School days", "Main character training"],
  ["assets/photos/2015.jpeg", "2015", "Confidence loading"],
  ["assets/photos/2015_1.jpeg", "2015", "Soft heart, sharp style"],
  ["assets/photos/2016.jpeg", "2016", "The expressive era begins"],
  ["assets/photos/2016_1.jpeg", "2016", "Big smile chapter"],
  ["assets/photos/2016_2.jpeg", "2016", "Cute face department"],
  ["assets/photos/2016_3.jpeg", "2016", "Stylish in progress"],
  ["assets/photos/2017.jpeg", "2017", "Growing into herself"],
  ["assets/photos/2017_1.jpeg", "2017", "The soft-glow phase"],
  ["assets/photos/2018.jpeg", "2018", "The world gets more Shruti"],
  ["assets/photos/2018_1.jpeg", "2018", "Unfairly photogenic"],
  ["assets/photos/2019.jpeg", "2019", "Adulting, but cute"],
  ["assets/photos/2019_1.jpeg", "2019", "The laugh I love"],
  ["assets/photos/2020.jpeg", "2020", "Quiet strength"],
  ["assets/photos/2020_1.jpeg", "2020", "Style committee approved"],
  ["assets/photos/2020_2.jpeg", "2020", "A whole mood"],
  ["assets/photos/2021.jpeg", "2021", "Becoming brighter"],
  ["assets/photos/2022.jpeg", "2022", "Almost-us era"],
  ["assets/photos/2022_1.jpeg", "2022", "Before everything changed"],
  ["assets/photos/2023.jpeg", "2023", "The year life turned"],
  ["assets/photos/2023_1 (After we met).jpeg", "2023", "After we met"],
  ["assets/photos/2023_2.jpeg", "2023", "Falling naturally"],
  ["assets/photos/2024.jpeg", "2024", "Us becoming stronger"],
  ["assets/photos/2024_that pune trip.jpeg", "2024", "That Pune trip"],
  ["assets/photos/2025.jpeg", "2025", "The year you became my wife"],
  ["assets/photos/2025_1.jpeg", "2025", "21 February 2025"],
  ["assets/photos/2025_2.jpg", "2025", "My wife era"],
  ["assets/photos/2025_from our honemoon.jpeg", "2025", "Honeymoon glow"],
  ["assets/photos/2025_maharashtratrip.jpeg", "2025", "Maharashtra trip"],
  ["assets/photos/2025_maharashtratrip1.jpeg", "2025", "Maharashtra memories"],
  ["assets/photos/2025_maharashtratrip2.jpeg", "2025", "More trip stories"],
  ["assets/photos/2025_punetrip.jpeg", "2025", "Pune again"],
  ["assets/photos/2025_vietnamtrip.jpeg", "Vietnam", "First international trip"],
  ["assets/photos/2025_vietnamtrip1.jpeg", "Vietnam", "Two first-time travelers"],
  ["assets/photos/2025_vietnamtrip3.jpeg", "Vietnam", "The world with you"],
  ["assets/photos/2026_goa trip.jpg", "2026", "Goa chapter"],
  ["assets/photos/2026_latest.jpg", "Today", "Happy birthday, Shruti"]
].map(([src, era, title]) => ({ src, era, title }));

const traits = [
  ["Soft-hearted", "You feel deeply, and that softness is one of the most beautiful things about you."],
  ["Stylish", "You make dresses, perfumes, shoes, and bags feel like a personal art form."],
  ["Happy-go-lucky", "Even ordinary days become lighter when your laugh enters the room."],
  ["Curious", "You love trying new food, new places, and new experiences before anyone can call them boring."],
  ["Emotional", "You cry easily because your heart is never half-present."],
  ["Queen-coded", "Resting while I do everything is apparently a lifestyle, and somehow I signed up happily."]
];

const loveItems = [
  ["Your smile", "It still fixes more of my day than I admit out loud."],
  ["Your laugh", "It is warm, familiar, and instantly yours."],
  ["Your efforts", "Even when things were not easy, you still found ways to show up for us."],
  ["Your taste", "Food, clothes, cafes, skincare, perfumes: you have opinions, and most of them are correct."],
  ["Your little gestures", "The way you help, notice, buy, suggest, and care in small practical ways."],
  ["Your softness", "You can be angry, dramatic, and complaining, and still be the softest person I know."]
];

const futureItems = [
  ["Thailand", "Our second international trip, with better photos, too much food, and no boring itinerary."],
  ["More cafe hunting", "New places, new dishes, and you ordering the most interesting thing on the menu."],
  ["A home that feels like us", "More comfort, more laughter, and maybe 2% bathroom shelf space for me."],
  ["Healthier versions of us", "Trendy workout things included, as long as we are allowed to complain."],
  ["More slow evenings", "Less fighting over small things, more listening, more choosing each other."],
  ["A bigger life", "Travel, family, work wins, tiny rituals, and a love that keeps getting more real."]
];

const gate = document.querySelector("#gate");
const site = document.querySelector("#birthdaySite");
const questionText = document.querySelector("#questionText");
const questionImage = document.querySelector("#questionImage");
const answers = document.querySelector("#answers");
const questionCount = document.querySelector("#questionCount");
const progressFill = document.querySelector("#progressFill");
const quizNote = document.querySelector("#quizNote");
const envelopeReveal = document.querySelector("#envelopeReveal");
const giftReveal = document.querySelector("#giftReveal");
const giftRevealLabel = document.querySelector("#giftRevealLabel");
const scrollCue = document.querySelector("#scrollCue");

let currentQuestion = 0;
let giftRevealTimer = null;
const giftNames = ["journey", "song", "wishes", "likes", "future", "promises"];
const giftLabels = {
  journey: "Opening your envelope",
  song: "Opening your envelope",
  wishes: "Opening your envelope",
  likes: "Opening your envelope",
  future: "Opening your envelope",
  promises: "Opening your envelope"
};
const giftRoutes = {
  journey: "journey.html",
  song: "song.html",
  wishes: "wishes.html",
  likes: "likes.html",
  future: "future.html",
  promises: "promises.html"
};

function init() {
  const params = new URLSearchParams(window.location.search);
  renderQuestion();
  bindGiftCards();
  bindScrollCue();
  if (params.get("gifts") === "1") {
    showGiftBoard();
  } else {
    document.body.classList.add("locked");
  }
}

function renderQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.text;
  questionImage.src = question.image;
  questionImage.alt = `Shruti birthday question ${currentQuestion + 1}`;
  questionImage.style.animation = "none";
  questionImage.offsetHeight;
  questionImage.style.animation = "";
  questionCount.textContent = `${currentQuestion + 1} / ${questions.length}`;
  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
  quizNote.textContent = "";
  answers.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => handleAnswer(button, index));
    answers.appendChild(button);
  });
}

function handleAnswer(button, index) {
  const question = questions[currentQuestion];
  if (index !== question.correct) {
    quizNote.textContent = question.wrong;
    button.classList.remove("wrong");
    window.setTimeout(() => button.classList.add("wrong"), 0);
    return;
  }

  currentQuestion += 1;
  if (currentQuestion >= questions.length) {
    unlockSite();
    return;
  }

  renderQuestion();
}

function unlockSite() {
  progressFill.style.width = "100%";
  fireConfetti(360);
  gate.classList.add("gate-exit");
  window.setTimeout(() => {
    gate.remove();
    envelopeReveal.classList.remove("hidden");
    envelopeReveal.classList.add("opening");
  }, 520);
  window.setTimeout(() => {
    site.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, 1900);
  window.setTimeout(() => {
    envelopeReveal.classList.add("hidden");
    envelopeReveal.classList.remove("opening");
    document.body.classList.remove("locked");
    fireConfetti(480);
  }, 3300);
}

function bindGiftCards() {
  document.querySelectorAll("[data-gift]").forEach((card) => {
    card.addEventListener("click", () => {
      const giftName = card.getAttribute("data-gift");
      if (giftNames.includes(giftName)) openGift(giftName, card);
    });
  });
}

function openGift(name, sourceCard) {
  const route = giftRoutes[name];
  if (!route) return;
  window.clearTimeout(giftRevealTimer);
  document.querySelectorAll(".gift-card").forEach((card) => card.classList.remove("opened"));
  sourceCard.classList.add("opened");
  document.body.classList.add("locked");
  document.body.classList.add("gift-transitioning");
  giftRevealLabel.textContent = giftLabels[name] || "Opening your surprise";
  giftReveal.classList.remove("hidden");
  giftReveal.classList.remove("opening");
  giftReveal.offsetHeight;
  giftReveal.classList.add("opening");
  fireConfetti(120);

  giftRevealTimer = window.setTimeout(() => {
    window.location.href = route;
  }, 1400);
}

function bindScrollCue() {
  const updateCue = () => {
    if (!scrollCue) return;
    scrollCue.classList.toggle("hidden-cue", window.scrollY > window.innerHeight * 0.28);
  };
  window.addEventListener("scroll", updateCue, { passive: true });
  updateCue();
}

function showGiftBoard() {
  gate.remove();
  envelopeReveal.classList.add("hidden");
  giftReveal.classList.add("hidden");
  site.classList.remove("hidden");
  document.body.classList.remove("locked");
  window.setTimeout(() => {
    document.querySelector("#envelopes")?.scrollIntoView({ behavior: "auto", block: "start" });
  }, 0);
}

const canvas = document.querySelector("#confettiCanvas");
const ctx = canvas.getContext("2d");
let confetti = [];
let animationId = null;

function resizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
}

function fireConfetti(count) {
  resizeCanvas();
  const colors = ["#ff4d79", "#00a99d", "#f7b731", "#6d3ff2", "#fff8f0", "#2f80ed"];
  confetti = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: -20 - Math.random() * window.innerHeight * 0.25,
    size: 5 + Math.random() * 10,
    speed: 2 + Math.random() * 4.5,
    drift: -1.8 + Math.random() * 3.6,
    spin: Math.random() * Math.PI,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
  if (!animationId) animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  confetti.forEach((piece) => {
    piece.y += piece.speed;
    piece.x += piece.drift;
    piece.spin += 0.14;
    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.spin);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.55);
    ctx.restore();
  });
  confetti = confetti.filter((piece) => piece.y < window.innerHeight + 40);

  if (confetti.length) {
    animationId = window.requestAnimationFrame(animateConfetti);
  } else {
    animationId = null;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

window.addEventListener("resize", resizeCanvas);
init();
