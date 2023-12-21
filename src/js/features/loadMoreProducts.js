import render from "../utilities/render";
import getAllProducts from "../data/getAllProducts";
import { productElement, placeholderProductElement } from "../render/product";
import getElement, { getElements } from "../utilities/getElement";
import displayModal from "../components/productDetailsModal";

window.addEventListener("DOMContentLoaded", () => {
    getAllProducts()
        .then((products) => {
            const loadMoreBtn = getElement(".load-more__btn");
            const filterValue = JSON.parse(
                localStorage.getItem("filterValue")
            );

            const productLengthEls = getElements(".product__length");

            const filterProducts =
                filterValue.filterBy && filterValue.filterBy === "search"
                    ? JSON.parse(localStorage.getItem("matchedProducts"))
                    : products.filter((product) => {
                        if (filterValue.shopBy === "category") {
                            return (
                                filterValue.category === product.gender
                            );
                        }
                        if (filterValue.shopBy === "brand") {
                            return filterValue.category === product.brand;
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
                    ({
                        productCode,
                        name,
                        category,
                        price,
                        gender,
                        image
                    }) => {
                        const suffix = gender === "Kids" ? "'" : "'s";
                        const formatedCategory = `${gender}${suffix} ${category} Shoes`;
                        productElements += productElement(
                            productCode,
                            name,
                            formatedCategory,
                            price,
                            image
                        );
                    }
                );

                render(productElements, ".product__items");

                localStorage.setItem("filteredProductsLength", totalLimit);
            };

            displayPlaceholderProducts(
                filterProducts.slice(0, viewLimit).length
            );
            displayProducts(filterProducts.slice(0, viewLimit));

            render(totalLimit, ".load-more__total-limit");

            productLengthEls.forEach(
                (productLengthEl) =>
                    (productLengthEl.textContent = `(${totalLimit})`)
            );

            displayModal();

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

                displayModal();
            };

            loadProducts();

            loadMoreBtn.addEventListener("click", () => {
                currentPage++;
                loadProducts();
            });
        }
        )
        .catch((err) => console.log(err));
});
