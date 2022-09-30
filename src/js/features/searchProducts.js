import getElement from "../utilities/getElement";
import getAllProducts from "../data/getAllProducts";
import matchedProductElement from "../render/matchedProduct";
import render from "../utilities/render";

const mobileInput = getElement(".mobile .input");
const desktopInput = getElement(".desktop .input");

getAllProducts()
    .then((products) => {
        const searchProducts = (e, className) => {
            const inputValue = e.target.value.toLowerCase().trim();
            let elements = "";

            const matchedProducts = products.filter(({ name }) => {
                const regExp = new RegExp(inputValue, "gi");
                return name.match(regExp);
            });

            inputValue &&
                matchedProducts.map((product) => {
                    const { name, category, price, gender, imageUrls } =
                        product;
                    const suffix = gender === "Kids" ? "'" : "'s";
                    const formatedCategory = `${gender}${suffix} ${category} Shoes`;
                    const image = imageUrls[0];

                    const regExp = new RegExp(inputValue, "gi");

                    const highlightedName = name.replace(
                        regExp,
                        `<span class="highlight">${inputValue}</span>`
                    );

                    elements += matchedProductElement(
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
                inputValue &&
                    getElement(className).insertAdjacentHTML(
                        "beforeend",
                        `<div class="nav__see-results">
                            <a href="products.html">
                                See all results "${inputValue}"
                            </a>
                        </div>
                        `
                    );
            }
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
    })
    .catch((err) => console.log(err));
