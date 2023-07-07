import render from "../utilities/render";
import getAllProducts from "../data/getAllProducts";
import { productElement, placeholderProductElement } from "../render/product";
import { getElements } from "../utilities/getElement";

window.addEventListener("DOMContentLoaded", () => {
    getAllProducts()
        .then((products) => {
            const categoryItems = getElements(".filter-btn");
            const dropdownLinks = getElements(".nav__dropdown-link");
            const radios = getElements(".category-filter__radio");

            const displayPlaceholderProducts = (quantity) => {
                let placeholderProducts = "";

                for (let i = 1; i <= quantity; i++) {
                    placeholderProducts += placeholderProductElement;
                }

                render(placeholderProducts, ".category__items");
            };

            const displayProducts = (displayedProducts) => {
                let productElements = "";

                displayedProducts.forEach(
                    ({ name, category, price, gender, imageUrls }) => {
                        const suffix = gender === "Kids" ? "'" : "'s";
                        const formatedCategory = `${gender}${suffix} ${category} Shoes`;
                        productElements += productElement(
                            name,
                            formatedCategory,
                            price,
                            imageUrls[0]
                        );
                    }
                );

                render(productElements, ".category__items");
            };

            const defaultProducts = products.filter(
                (product) => product.gender === "Women"
            );

            displayPlaceholderProducts(defaultProducts.length);
            displayProducts(defaultProducts);

            const filterProducts = (items) => {
                items.forEach((item) => {
                    item.addEventListener("click", (e) => {
                        const currentTarget = e.currentTarget.textContent;

                        const underlinedBtn = Array.from(radios).filter(
                            (r) => r.id === currentTarget
                        );

                        underlinedBtn[0].checked = true;

                        const filterProducts = products.filter(
                            (product) => currentTarget === product.gender
                        );

                        displayPlaceholderProducts(filterProducts.length);
                        displayProducts(filterProducts);
                    });
                });
            };

            filterProducts(categoryItems);
            filterProducts(dropdownLinks);
        })
        .catch((err) => console.log(err));
});
