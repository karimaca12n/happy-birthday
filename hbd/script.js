/* =====================
   YOUTUBE MUSIC PLAYER
   ===================== */
let player;
let isPlaying = false;
let celebrated = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('music', {
    height: '0',
    width: '0',
    videoId: 'CptnLrdF3_E', // Semua Aku Dirayakan
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1
    }
  });
}

function playMusic() {
  if (!player) return;

  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
  isPlaying = !isPlaying;
}

/* =====================
   COUNTDOWN (OPSIONAL)
   ===================== */
const targetDate = new Date("January 10, 2026 00:00:00").getTime();


setInterval(() => {
  const now = Date.now();
  const d = targetDate - now;

  if (d <= 0) {
  const cd = document.getElementById("countdown");

  cd.innerText = "🎉HAPPY BIRTHDAY NONA VIRDA ♡ 🎉";
  cd.style.fontSize = "18,5px";
  cd.style.animation = "pop 0.6s ease";

  if (!celebrated) {
    celebrated = true;
    document.body.classList.add("glow-bg");

    // CONFETTI GELOMBANG (LEBIH HEBOH)
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        for (let j = 0; j < 40; j++) {
          const c = document.createElement("div");
          c.className = "confetti";
          c.innerText = Math.random() > 0.5 ? "💖" : "✨";
          c.style.left = Math.random() * 100 + "vw";
          c.style.fontSize = Math.random() * 22 + 14 + "px";
          document.body.appendChild(c);
          setTimeout(() => c.remove(), 5000);
        }
      }, i * 600);
    }

    // LOVE EXPLOSION
    for (let i = 0; i < 25; i++) {
      const h = document.createElement("div");
      h.className = "heart";
      h.innerText = "💗";
      h.style.left = Math.random() * 100 + "vw";
      h.style.fontSize = Math.random() * 24 + 14 + "px";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 5000);
    }
  }
  return;
}

  const days = Math.floor(d / (1000 * 60 * 60 * 24));
  const hours = Math.floor((d / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((d / (1000 * 60)) % 60);
  const seconds = Math.floor((d / 1000) % 60);

  document.getElementById("countdown").innerText =
    `Menuju ulang tahun: ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}, 1000);

/* =====================
   LOVE EFFECT
   ===================== */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 12 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 350);

/* =====================
   GIFT + CONFETTI
   ===================== */
function openGift() {
  document.getElementById("giftModal").style.display = "flex";

  for (let i = 0; i < 25; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.innerText = "💖";
    c.style.left = Math.random() * 100 + "vw";
    c.style.fontSize = Math.random() * 18 + 10 + "px";
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 4000);
  }
}

function closeGift() {
  document.getElementById("giftModal").style.display = "none";
}
