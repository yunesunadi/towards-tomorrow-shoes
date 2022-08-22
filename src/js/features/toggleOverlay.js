const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menuOverlay = document.querySelector(".menu-overlay");
const openSearchBtn = document.querySelector(".open-search-btn");
const closeSearchBtn = document.querySelector(".close-search-btn");
const searchOverlay = document.querySelector(".search-overlay");

const handleClick = (btn, overlay) => {
    btn.addEventListener("click", () => {
        if (overlay === "menu") {
            menuOverlay.classList.toggle("show");
        } else {
            searchOverlay.classList.toggle("show");
        }
    });
};

const toggleOverlay = () => {
    handleClick(openMenuBtn, "menu");
    handleClick(closeMenuBtn, "menu");
    handleClick(openSearchBtn, "search");
    handleClick(closeSearchBtn, "search");
};

toggleOverlay();
