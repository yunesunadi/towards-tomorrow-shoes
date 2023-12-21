import getElement from "../utilities/getElement";
import getAllProducts from "../data/getAllProducts";
import matchedProductElement from "../render/matchedProduct";
import render from "../utilities/render";
import displayModal from "../components/productDetailsModal";

const mobileInput = getElement(".mobile .input");
const desktopInput = getElement(".desktop .input");
const mobileSearchForm = getElement(".mobile .nav__search-form");
const desktopSearchForm = getElement(".desktop .nav__search-form");
const searchBtn = getElement(".desktop .nav__search-glass");

getAllProducts()
    .then((products) => {
        const searchProducts = (e, className) => {
            const inputValue = e.target.value.toLowerCase().trim();
            let elements = "";

            const matchedProducts = products.filter(({ name }) => {
                const regExp = new RegExp(inputValue, "gi");
                return name.match(regExp);
            });

            if (inputValue) {
                localStorage.setItem("inputValue", inputValue);
                localStorage.setItem(
                    "matchedProducts",
                    JSON.stringify(matchedProducts)
                );
            } else {
                localStorage.setItem("inputValue", "");
                localStorage.setItem("matchedProducts", JSON.stringify([]));
            }

            inputValue &&
                matchedProducts.map((product) => {
                    const {
                        productCode,
                        name,
                        category,
                        price,
                        gender,
                        image,
                    } = product;
                    const suffix = gender === "Kids" ? "'" : "'s";
                    const formatedCategory = `${gender}${suffix} ${category} Shoe`;

                    const regExp = new RegExp(inputValue, "gi");

                    const highlightedName = name.replace(
                        regExp,
                        `<span class="highlight">${inputValue}</span>`
                    );

                    elements += matchedProductElement(
                        productCode,
                        highlightedName,
                        formatedCategory,
                        price,
                        image
                    );
                });

            render(elements, className);

            if (matchedProducts.length === 0) {
                render(
                    `<p class="nav__no-results">
                        No results found for "${inputValue}"
                    </p>`,
                    className
                );
            } else {
                if (inputValue) {
                    getElement(className).insertAdjacentHTML(
                        "beforeend",
                        `<div class="nav__see-results">
                            <a href="products.html">
                                See all results "${inputValue}"
                            </a>
                        </div>`
                    );

                    getElement(".nav__see-results").addEventListener(
                        "click",
                        () => {
                            localStorage.setItem(
                                "filterValue",
                                JSON.stringify({ filterBy: "search" })
                            );
                        }
                    );
                }
            }

            displayModal();
        };

        mobileInput.addEventListener("keyup", (e) =>
            searchProducts(e, ".mobile-matched-items")
        );

        desktopInput.addEventListener("keyup", (e) => {
            if (e.target.value.trim()) {
                getElement(".desktop-matched-items").style.background = "#fff";
                getElement(".desktop-matched-items").style.boxShadow =
                    "0.5px 0.5px 4px #777";
            } else {
                getElement(".desktop-matched-items").style.background = "none";
                getElement(".desktop-matched-items").style.boxShadow = "none";
            }

            searchProducts(e, ".desktop-matched-items");
        });

        const redirectPage = (element, event) => {
            element.addEventListener(event, (e) => {
                e.preventDefault();

                localStorage.setItem(
                    "filterValue",
                    JSON.stringify({ filterBy: "search" })
                );

                if (localStorage.getItem("inputValue")) {
                    location.href = "products.html";
                }
            });
        };

        redirectPage(mobileSearchForm, "submit");
        redirectPage(desktopSearchForm, "submit");
        redirectPage(searchBtn, "click");
    })
    .catch((err) => console.log(err));
