import getElement, { getElements } from "../utilities/getElement";
import toggleOverlay from "./toggleOverlay";

const openMenuBtn = getElement(".open-menu-btn");
const closeMenuBtn = getElement(".close-menu-btn");
const menuOverlay = getElement(".menu-overlay");
const openSearchBtn = getElement(".open-search-btn");
const closeSearchBtn = getElement(".close-search-btn");
const searchOverlay = getElement(".search-overlay");
const navLinks = getElements(".menu-overlay .nav__link");
const dropdownLinks = getElements(".menu-overlay .nav__dropdown-link");

toggleOverlay(openMenuBtn, closeMenuBtn, menuOverlay);
toggleOverlay(openSearchBtn, closeSearchBtn, searchOverlay);

const removeOverlay = (btn) => {
    btn.addEventListener("click", () => menuOverlay.classList.remove("show"));
};

navLinks.forEach((navLink) => {
    if (navLink.textContent !== "Shoes") {
        removeOverlay(navLink);
    }
});

dropdownLinks.forEach((dropdownLink) => {
    removeOverlay(dropdownLink);
});
