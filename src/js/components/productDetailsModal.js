import getElement, { getElements } from "../utilities/getElement";
import getAllProducts from "../data/getAllProducts";
import render from "../utilities/render";

const closeBtn = getElement(".modal__close-btn");
const modal = getElement(".modal");
const overlay = getElement(".modal__overlay");

const displayModal = () => {
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    setTimeout(() => {
        const productItems = getElements(".product-item");

        productItems.forEach((productItem) => {
            productItem.addEventListener("click", () => {
                modal.classList.add("active");

                getAllProducts()
                    .then((products) => {
                        products
                            .filter(
                                ({ productCode }) =>
                                    productCode === productItem.dataset.code
                            )
                            .map(
                                ({
                                    category,
                                    color,
                                    gender,
                                    name,
                                    price,
                                    image,
                                    productDetails,
                                }) => {
                                    const suffix = gender === "Kids" ? "'" : "'s";
                                    const formatedCategory = `${gender}${suffix} ${category} Shoe`;

                                    const element = `
                                    <div class="product-details__item">
                                        <figure class="product-details__img-container">
                                            <img src="../../../dist/assets/images/products/${image}" class="product-details__img" alt="${name} image" />
                                        </figure>
                                        <div class="product-details__info">
                                            <p class="product-details__name">${name}</p>
                                            <p class="product-details__category">${formatedCategory}</p>
                                            <p class="product-details__price">$${price}</p>
                                            <p class="product-details__color">Shown: ${color}</p>
                                            <p class="product-details__benefits">Benefits</p>
                                            <ul class="product-details__benefits-list">
                                            ${productDetails
                                            .map(
                                                (productDetail) =>
                                                    `<li class="product-details__benefits-list-item">
                                                        <i class="fa-solid fa-square product-details__benefits-list-icon"></i>
                                                        ${productDetail}
                                                    </li>`
                                            )
                                            .join("")}
                                            </ul>
                                        </div>
                                    </div>`;
                                    render(element, ".modal__content");
                                }
                            );
                    })
                    .catch((err) => console.log(err));
            });
        });
    }, 1000);
};

export default displayModal;
