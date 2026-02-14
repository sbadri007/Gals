alert("script loaded");

// PERSONALIZE THESE FOR EACH FRIEND
const friendName = "Shruti";      // change per friend
const password = "nooni";         // change per friend

document.getElementById("friend-name").innerText = friendName;
document.getElementById("friend-name-2").innerText = friendName;

const steps = document.querySelectorAll(".step");
let currentStep = 0;

// PASSWORD CHECK
function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === password) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    showStep(0);
  } else {
    alert("Nope 😤 try again bestie");
  }
}

// STEP CONTROL
function showStep(index) {
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

// ANSWERS
function sayNo() {
  document.getElementById("response").innerText =
    "You can’t say no because we’re together forever 💅💖";
}

function sayYes() {
  document.getElementById("response").innerText =
    "YAY 💕 Galentines forever!!!";
  burstHearts();
}

// HEARTS
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
