/* =====================
   YOUTUBE MUSIC PLAYER
   ===================== */
let player;
let isPlaying = false;

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
    document.getElementById("countdown").innerText =
      "🎉 Selamat Ulang Tahun! 🎉";
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
