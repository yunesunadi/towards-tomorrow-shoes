import getElement from "../utilities/getElement";

const openMenuBtn = getElement(".open-menu-btn");
const closeMenuBtn = getElement(".close-menu-btn");
const menuOverlay = getElement(".menu-overlay");
const openSearchBtn = getElement(".open-search-btn");
const closeSearchBtn = getElement(".close-search-btn");
const searchOverlay = getElement(".search-overlay");

const handleClick = (btn, overlay) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
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
