const menuBtn = document.querySelector(".menuBtn");
const dropdown = document.querySelector(".dropdown-content");

// toggle on button click
const showDropdown = () => {
  dropdown.classList.toggle("show");
};

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // so the window click doesn't instantly close it
  showDropdown();
});

// close on click outside
window.addEventListener("click", (e) => {
  const clickedMenuItem = e.target.matches(".menuItem");
  const clickedMenuBtn = e.target.matches(".menuBtn");

  // if it's NOT a menu item and NOT the button → close
  if (!clickedMenuItem && !clickedMenuBtn) {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
});
