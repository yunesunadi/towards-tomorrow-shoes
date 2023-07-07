import getAllProducts from "../data/getAllProducts";
import render from "../utilities/render";

window.addEventListener("DOMContentLoaded", () => {
    getAllProducts()
        .then((products) => {
            let productCategories = [];
            let filterCategories;
            let categoryBtn = "";

            products.forEach(({ gender }) => {
                productCategories.push(gender);
            });

            filterCategories = productCategories.filter(
                (value, index, array) => array.indexOf(value) === index
            );

            filterCategories.forEach((uniqueCategory) => {
                categoryBtn += `
                <li class="category-filter__item">
                    <label
                        for="${uniqueCategory}"
                        data-category="${uniqueCategory}"
                        class="category-filter__label"
                    >
                        <input
                            type="radio"
                            name="category"
                            id="${uniqueCategory}"
                            class="category-filter__radio"
                            ${uniqueCategory === "Women" ? "checked" : ""}
                        />
                        <span class="filter-btn">${uniqueCategory}</span>
                    </label>
                </li>`;
            });

            render(categoryBtn, ".category-filter__list");
        })
        .catch((err) => console.log(err));
});
