alert("script loaded");

// PERSONALIZE THESE FOR EACH FRIEND
const friendName = "Shruti";        // change name
const password = "nooni";   // change password

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
    alert("Nope 😤 try again bestie, hint:I call you this all the time");
  }
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
  for (let i = 0; i < 10; i++) {
    const petal = document.createElement("div");
    petal.innerText = "🌹";
    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-10px";
    petal.style.fontSize = "24px";
    petal.style.animation = "fall 6s linear";

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 6000);
  }
}
