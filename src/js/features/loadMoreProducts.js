import render from "../utilities/render";
import getAllProducts from "../data/getAllProducts";
import { productElement, placeholderProductElement } from "../render/product";
import getElement from "../utilities/getElement";

window.addEventListener("DOMContentLoaded", () => {
    getAllProducts()
        .then((products) => {
            const loadMoreBtn = getElement(".load-more__btn");

            const { category, shopBy } = JSON.parse(
                localStorage.getItem("filterValue")
            );

            const filterProducts = products.filter((product) => {
                if (shopBy === "category") {
                    return category === product.gender;
                }
                if (shopBy === "brand") {
                    return category === product.brand;
                }
            });

            const totalLimit = filterProducts.length;
            const viewLimit = 4;
            let currentPage = 1;

            const displayPlaceholderProducts = (quantity) => {
                let placeholderProducts = "";

                for (let i = 1; i <= quantity; i++) {
                    placeholderProducts += placeholderProductElement;
                }

                render(placeholderProducts, ".product__items");
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

                render(productElements, ".product__items");
            };

            displayPlaceholderProducts(
                filterProducts.slice(0, viewLimit).length
            );
            displayProducts(filterProducts.slice(0, viewLimit));

            render(totalLimit, ".load-more__total-limit");

            const loadProducts = () => {
                const endLimit =
                    viewLimit * currentPage < totalLimit
                        ? viewLimit * currentPage
                        : totalLimit;

                render(endLimit, ".load-more__view-limit");

                displayPlaceholderProducts(
                    filterProducts.slice(0, endLimit).length
                );
                displayProducts(filterProducts.slice(0, endLimit));

                if (totalLimit === endLimit) {
                    loadMoreBtn.style.display = "none";
                }
            };

            loadProducts();

            loadMoreBtn.addEventListener("click", () => {
                currentPage++;
                loadProducts();
            });
        })
        .catch((err) => console.log(err));
});
