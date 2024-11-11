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
const colors = ["text-blue-600", "text-green-600", "text-purple-700"];
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
// Handle file upload preview
const fileInput = document.querySelector('input[type="file"]');
const uploadArea = fileInput.parentElement;

fileInput.addEventListener("change", function (e) {
  if (this.files && this.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadArea.style.backgroundImage = `url(${e.target.result})`;
      uploadArea.style.backgroundSize = "cover";
      uploadArea.style.backgroundPosition = "center";
      uploadArea.querySelector("p").style.display = "none";
    };
    reader.readAsDataURL(this.files[0]);
  }
});

// Dropdown menu functionality
const addContentBtn = document.getElementById("addContentBtn");
const formatDropdown = document.getElementById("formatDropdown");

addContentBtn.addEventListener("click", () => {
  formatDropdown.classList.toggle("hidden");
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (
    !addContentBtn.contains(event.target) &&
    !formatDropdown.contains(event.target)
  ) {
    formatDropdown.classList.add("hidden");
  }
});
