// Select the dark mode toggle button element
const darkModeBtn = document.querySelector(".dkMode");

// Function to apply the chosen theme (dark or light)
function applyTheme(theme) {
  // Add or remove the "dark-mode" class on the body depending on the theme
  document.body.classList.toggle("dark-mode", theme === "dark");

  // Change the button text to reflect the current mode
  if (darkModeBtn) {
    darkModeBtn.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  }
}

// Function to check which theme is currently active
function currentTheme() {
  return document.body.classList.contains("dark-mode") ? "dark" : "light";
}

// Read the user's previously saved theme from localStorage (if any)
// and apply it right away so the preference persists across pages
const savedTheme = localStorage.getItem("theme");
if (savedTheme) applyTheme(savedTheme);

// Listen for clicks on the dark mode button
// When clicked, switch between light and dark modes
darkModeBtn?.addEventListener("click", () => {
  // Determine the opposite of the current theme
  const newTheme = currentTheme() === "dark" ? "light" : "dark";

  // Save the user's new preference to localStorage
  localStorage.setItem("theme", newTheme);

  // Apply the new theme immediately
  applyTheme(newTheme);
});
