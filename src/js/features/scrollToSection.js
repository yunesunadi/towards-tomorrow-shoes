import getElement, { getElements } from "../utilities/getElement";
import backToTop from "./backToTop";

const navLinks = getElements(".menu-overlay .nav__link");
const dropdownLinks = getElements(".menu-overlay .nav__dropdown-link");
const shopBtn = getElement(".carousel__shop-btn");
const nav = getElement(".nav");
const navHeight = nav.getBoundingClientRect().height;

const scrollToId = (e) => {
    const elementId = e.currentTarget.getAttribute("href");

    if (elementId !== "#") {
        const element = getElement(elementId);
        const elementTop = element.offsetTop;
        const position = elementTop - navHeight;

        window.scroll({
            top: position,
        });
    }
};

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToId(e);
    });
});

dropdownLinks.forEach((dropdownLink) => {
    dropdownLink.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToId(e);
    });
});

shopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToId(e);
});

backToTop("#hero");
