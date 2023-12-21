import render from "./render";
import backToTop from "../features/backToTop";
import getElement from "./getElement";

const filterValue = JSON.parse(localStorage.getItem("filterValue"));
const shopBy = filterValue.shopBy;
const category = filterValue.category;
const filterBy = filterValue.filterBy;
const menuBtn = getElement(".open-menu-btn");
const inputValue = localStorage.getItem("inputValue");

if (filterBy && filterBy === "search") {
    render(
        `<h2 class="product__title--desktop">
            Search results for "${inputValue}"
            <span class="product__length"></span>
        </h2>`,
        ".nav__list--center"
    );

    render(
        `Search results for "${inputValue}"
            <span class="product__length"></span>`,
        ".product__title--mobile"
    );

    render(
        `<a href="index.html">Home</a> &raquo; Matched Shoes`,
        ".product__title-link"
    );

    if (JSON.parse(localStorage.getItem("matchedProducts")).length === 0) {
        render(
            `<div class="product__search-info">
                <p>No results found for "${inputValue}"</p>
                <p>
                    Please check the spelling or try again with a more general
                    term.
                </p>
            </div>`,
            ".product__items-info"
        );
    }
} else {
    render(
        `<h2 class="product__title--desktop">
        Filtered results for
        ${category}${
            shopBy === "category" ? (category === "Kids" ? "'" : "'s") : ""
        }
        Shoes <span class="product__length"></span>
    </h2>`,
        ".nav__list--center"
    );

    render(
        `Filtered results for
        ${category}${
            shopBy === "category" ? (category === "Kids" ? "'" : "'s") : ""
        }
        Shoes <span class="product__length"></span>`,
        ".product__title--mobile"
    );

    render(
        `<a href="index.html">Home</a> &raquo; Shop by ${shopBy} &raquo;
        ${category}${
            shopBy === "category" ? (category === "Kids" ? "'" : "'s") : ""
        }
        Shoes`,
        ".product__title-link"
    );
}

menuBtn.style.display = "none";

backToTop("#products");
