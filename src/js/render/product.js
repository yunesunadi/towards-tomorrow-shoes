import render from "../utilities/render";
import getAllProducts from "../data/getAllProducts";
import getPopularProductIndexes, {
    quantity,
} from "../data/getPopularProductIndexes";

let elements = "";

for (let i = 1; i <= quantity; i++) {
    elements += `
    <article class="product__item">
        <figure class="product__img-container">
            <img
                src="../../../dist/assets/images/placeholder-image.jpg"
                alt="Product placeholder image"
                class="product__img"
            />
            <i
                class="fa-regular fa-heart product__wishlist"
            ></i>
        </figure>
        <div class="product__info">
            <div class="product__info--left">
                <p class="product__name name-placeholder">&nbsp;</p>
                <p class="product__category category-placeholder">&nbsp;</p>
            </div>
            <div class="product__info--right">
                <p class="product__price price-placeholder">&nbsp;</p>
            </div>
        </div>
    </article>`;
}

render(elements, ".product");

window.addEventListener("DOMContentLoaded", () => {
    Promise.all([getPopularProductIndexes(), getAllProducts()])
        .then(([indexes, products]) => {
            let elements = "";

            indexes.map((index) => {
                const { name, gender, category, price, imageUrls } =
                    products[index];
                const suffix = gender === "Kids" ? "'" : "'s";

                elements += `
                <article class="product__item">
                    <a
                        href="product-details.html"
                        class="product__item-link"
                    >
                        <figure class="product__img-container">
                            <img
                                src=${imageUrls[0]}
                                alt="Product image"
                                class="product__img"
                            />
                            <i
                                class="fa-regular fa-heart product__wishlist"
                            ></i>
                        </figure>
                    </a>
                    <div class="product__info">
                        <div class="product__info--left">
                            <p class="product__name">
                                <a
                                    href="product-details.html"
                                    class="product__item-link"
                                >${name}</a>
                            </p>
                            <p class="product__category">
                                ${gender}${suffix} ${category} Shoes
                            </p>
                        </div>
                        <div class="product__info--right">
                            <p class="product__price">$${price}</p>
                        </div>
                    </div>
                </article>`;

                render(elements, ".product");
            });
        })
        .catch((err) => console.log(err));
});
