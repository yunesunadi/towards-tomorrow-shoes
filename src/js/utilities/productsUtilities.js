import render from "./render";
import backToTop from "../features/backToTop";
import getElement from "./getElement";

const shopBy = JSON.parse(localStorage.getItem("filterValue")).shopBy;
const category = JSON.parse(localStorage.getItem("filterValue")).category;
const menuBtn = getElement(".open-menu-btn");

render(
    `<h2 class="product__title--desktop">
            Shop by ${shopBy} -
            ${category}${
        shopBy === "category" ? (category === "Kids" ? "'" : "'s") : ""
    }
            Shoes
        </h2>`,
    ".nav__list--center"
);

render(
    `Shop by ${shopBy} -
    ${category}${
        shopBy === "category" ? (category === "Kids" ? "'" : "'s") : ""
    } Shoes`,
    ".product__title--mobile"
);

render(
    `<a href="index.html">Home</a> &raquo; ${category}${
        shopBy === "category" ? (category === "Kids" ? "'" : "'s") : ""
    } Shoes`,
    ".product__title-link"
);

menuBtn.style.display = "none";

backToTop("#products");
