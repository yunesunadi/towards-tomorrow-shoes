import getElement from "../utilities/getElement";
import toggleOverlay from "./toggleOverlay";

const openMenuBtn = getElement(".open-menu-btn");
const closeMenuBtn = getElement(".close-menu-btn");
const menuOverlay = getElement(".menu-overlay");
const openSearchBtn = getElement(".open-search-btn");
const closeSearchBtn = getElement(".close-search-btn");
const searchOverlay = getElement(".search-overlay");

toggleOverlay(openMenuBtn, closeMenuBtn, menuOverlay);
toggleOverlay(openSearchBtn, closeSearchBtn, searchOverlay);
