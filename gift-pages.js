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
  ["assets/photos/2025_1.jpeg", "2025", "Smile to fall for"],
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

let currentPhoto = 0;
let albumTimer = null;
let roadmapState = {
  checkpoints: [],
  roadmap: null,
  line: null,
  sprite: null,
  progress: null
};

function fillList(selector, items, className) {
  const root = document.querySelector(selector);
  if (!root) return;
  root.innerHTML = "";
  items.forEach(([title, body]) => {
    const item = document.createElement("article");
    item.className = className;
    item.innerHTML = `<strong>${title}</strong><p>${body}</p>`;
    root.appendChild(item);
  });
}

function renderAlbumStrip() {
  const albumStrip = document.querySelector("#albumStrip");
  if (!albumStrip) return;
  albumStrip.innerHTML = "";
  photoJourney.forEach((photo, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "thumb";
    button.setAttribute("aria-label", `${photo.era}: ${photo.title}`);
    button.innerHTML = `<img src="${photo.src}" alt="">`;
    button.addEventListener("click", () => renderPhoto(index, true));
    albumStrip.appendChild(button);
  });
}

function renderPhoto(index, manual = false) {
  const albumImage = document.querySelector("#albumImage");
  const albumEra = document.querySelector("#albumEra");
  const albumTitle = document.querySelector("#albumTitle");
  if (!albumImage || !albumEra || !albumTitle) return;

  currentPhoto = (index + photoJourney.length) % photoJourney.length;
  const photo = photoJourney[currentPhoto];
  albumImage.classList.remove("album-pop");
  albumImage.offsetHeight;
  albumImage.src = photo.src;
  albumImage.alt = `${photo.era} - ${photo.title}`;
  albumImage.classList.add("album-pop");
  albumEra.textContent = photo.era;
  albumTitle.textContent = photo.title;

  document.querySelectorAll(".thumb").forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("active", thumbIndex === currentPhoto);
  });

  const activeThumb = document.querySelector(".thumb.active");
  activeThumb?.scrollIntoView({ behavior: manual ? "smooth" : "auto", inline: "center", block: "nearest" });
  if (manual) startAlbumLoop();
}

function startAlbumLoop() {
  stopAlbumLoop();
  albumTimer = window.setInterval(() => renderPhoto(currentPhoto + 1), 3200);
}

function stopAlbumLoop() {
  if (albumTimer) {
    window.clearInterval(albumTimer);
    albumTimer = null;
  }
}

function renderRoadmap() {
  const root = document.querySelector("#roadCheckpoints");
  const roadmap = document.querySelector("#journeyRoadmap");
  const line = document.querySelector(".road-line");
  const sprite = document.querySelector("#journeySprite");
  const progress = document.querySelector("#roadProgress");
  if (!root || !roadmap || !line || !sprite || !progress) return;

  root.innerHTML = "";
  photoJourney.forEach((photo, index) => {
    const checkpoint = document.createElement("section");
    checkpoint.className = `road-checkpoint ${index % 2 ? "right" : "left"}`;
    checkpoint.dataset.index = String(index);
    checkpoint.innerHTML = `
      <div class="checkpoint-dot" aria-hidden="true"></div>
      <figure class="road-photo-card">
        <img src="${photo.src}" alt="${photo.era} - ${photo.title}" loading="${index < 3 ? "eager" : "lazy"}">
        <figcaption>
          <span>${photo.era}</span>
          <strong>${photo.title}</strong>
        </figcaption>
      </figure>
    `;
    root.appendChild(checkpoint);
  });

  roadmapState = {
    checkpoints: Array.from(document.querySelectorAll(".road-checkpoint")),
    roadmap,
    line,
    sprite,
    progress
  };

  updateRoadmap();
  window.addEventListener("scroll", updateRoadmap, { passive: true });
  window.addEventListener("resize", updateRoadmap);
}

function updateRoadmap() {
  const { checkpoints, roadmap, line, sprite, progress } = roadmapState;
  if (!checkpoints.length || !roadmap || !line || !sprite || !progress) return;

  const centers = checkpoints.map((checkpoint) => checkpoint.offsetTop + checkpoint.offsetHeight * 0.5);
  const firstCenter = centers[0];
  const lastCenter = centers[centers.length - 1];
  const pathLength = Math.max(1, lastCenter - firstCenter);
  const viewportFocus = window.innerHeight * 0.5;
  const spriteCenter = Math.max(
    firstCenter,
    Math.min(lastCenter, viewportFocus - roadmap.getBoundingClientRect().top)
  );
  const pathRatio = (spriteCenter - firstCenter) / pathLength;
  let activeIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  centers.forEach((checkpointCenter, index) => {
    const distance = Math.abs(checkpointCenter - spriteCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      activeIndex = index;
    }
  });

  checkpoints.forEach((checkpoint, index) => {
    checkpoint.classList.toggle("active", index === activeIndex);
    checkpoint.classList.toggle("visited", centers[index] < spriteCenter);
  });

  line.style.top = `${firstCenter}px`;
  line.style.height = `${pathLength}px`;
  progress.style.height = `${pathRatio * 100}%`;
  sprite.style.top = `${pathRatio * 100}%`;
}

function initGiftPage() {
  const page = document.body.dataset.page;
  fillList("#traitGrid", traits, "trait");
  fillList("#loveList", loveItems, "love-item");
  fillList("#futureGrid", futureItems, "future-item");

  if (page === "journey") {
    renderRoadmap();
  }
}

initGiftPage();
