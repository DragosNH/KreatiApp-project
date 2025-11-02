menuBtn = document.querySelector(".menuBtn");

const showDropdown = () => {
    document.querySelector(".dropdown-content").classList.toggle("show");
}

menuBtn.addEventListener("click", showDropdown)