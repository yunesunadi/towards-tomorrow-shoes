import render from "../utilities/render";
import getAllProducts from "../data/getAllProducts";
import { productElement, placeholderProductElement } from "../render/product";
import getElement, { getElements } from "../utilities/getElement";
import displayModal from "../components/productDetailsModal";

window.addEventListener("DOMContentLoaded", () => {
    getAllProducts()
        .then((products) => {
            const categoryItems = getElements(".filter-btn");
            const dropdownLinks = getElements(".nav__dropdown-link");
            const radios = getElements(".category-filter__radio");
            const brandLogos = getElements(".brand__logo-link");
            const shopBtn = getElement(".category__btn");

            const displayPlaceholderProducts = (quantity) => {
                let placeholderProducts = "";

                for (let i = 1; i <= quantity; i++) {
                    placeholderProducts += placeholderProductElement;
                }

                render(placeholderProducts, ".category__items");
            };

            const displayProducts = (products) => {
                let productElements = "";

                const displayedProducts = products.slice(0, 4);

                displayedProducts.forEach(
                    ({
                        productCode,
                        name,
                        category,
                        price,
                        gender,
                        image
                    }) => {
                        const suffix = gender === "Kids" ? "'" : "'s";
                        const formatedCategory = `${gender}${suffix} ${category} Shoe`;
                        productElements += productElement(
                            productCode,
                            name,
                            formatedCategory,
                            price,
                            image
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

            render("Shop Women", ".category__btn");

            localStorage.setItem(
                "filterValue",
                JSON.stringify({ category: "Women", shopBy: "category" })
            );

            displayModal();

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

                        render(`Shop ${currentTarget}`, ".category__btn");

                        shopBtn.addEventListener("click", () => {
                            localStorage.setItem(
                                "filterValue",
                                JSON.stringify({
                                    category: currentTarget,
                                    shopBy: "category",
                                })
                            );
                        });

                        displayModal();
                    });
                });
            };

            filterProducts(categoryItems);
            filterProducts(dropdownLinks);

            const filterProductsByBrand = (items) => {
                items.forEach((item) => {
                    item.addEventListener("click", (e) => {
                        const currentTarget = e.currentTarget.dataset.brand;
                        localStorage.setItem(
                            "filterValue",
                            JSON.stringify({
                                category: currentTarget,
                                shopBy: "brand",
                            })
                        );
                    });
                });
            };

            filterProductsByBrand(brandLogos);
        })
        .catch((err) => console.log(err));
});
