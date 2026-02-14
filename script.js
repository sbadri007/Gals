// PERSONALIZE THESE FOR EACH FRIEND
const friendName = "Anya";        // change name
const password = "insidejoke";   // change password

document.getElementById("friend-name").innerText = friendName;
document.getElementById("friend-name-2").innerText = friendName;

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === password) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    startCountdown();
    startPetals();
  } else {
    alert("Nope 😤 try again bestie");
  }
}

function startCountdown() {
  const targetDate = new Date("Feb 14, 2026").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerText =
      `💖 ${days} days until Galentine’s Day 💖`;
  }, 1000);
}

function sayNo() {
  document.getElementById("response").innerText =
    "You can’t say no because we’re together forever 💅💖";
}

function sayYes() {
  document.getElementById("response").innerText =
    "YAY 💕 Galentines forever!!!";

  burstHearts();
  startPetals();
}

function burstHearts() {
  const container = document.getElementById("hearts-container");

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

function startPetals() {
  for
