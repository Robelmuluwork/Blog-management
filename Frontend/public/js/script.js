document.addEventListener("DOMContentLoaded", function () {
  const loginLink = document.getElementById("login-link");
  const registerLink = document.getElementById("register-link");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
  });

  registerLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  });
});

//change words in home page
const words = ["ideas", "knowledge", "learning"];
const colors = ["text-blue-600", "text-green-600", "text-purple-600"];
let currentIndex = 0;

function changeWord() {
  const animatedWord = document.getElementById("animated-word");
  animatedWord.classList.remove(colors[currentIndex]);
  currentIndex = (currentIndex + 1) % words.length;
  animatedWord.textContent = words[currentIndex];
  animatedWord.classList.add(colors[currentIndex]);
}

setInterval(changeWord, 2000);

// Profile dropdown functionality
const profileButton = document.getElementById("profileButton");
const profileMenu = document.getElementById("profileMenu");

profileButton.addEventListener("click", () => {
  profileMenu.classList.toggle("hidden");
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (
    !profileButton.contains(event.target) &&
    !profileMenu.contains(event.target)
  ) {
    profileMenu.classList.add("hidden");
  }
});

// Mobile sidebar toggle
const mobileSidebarToggle = document.getElementById("mobileSidebarToggle");
const sidebar = document.querySelector("aside");

mobileSidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});
