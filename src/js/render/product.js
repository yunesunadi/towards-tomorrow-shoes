import render from "../utilities/render";
import getAllProducts from "../data/getAllProducts";
import getPopularProductIndexes, {
    quantity,
} from "../data/getPopularProductIndexes";

let elements = "";

for (let i = 1; i <= quantity; i++) {
    elements += `
    <a href="#" class="product__item-link">
        <article class="product__item">
            <figure class="product__img-container">
                <img
                    src="../../../dist/assets/images/placeholder-image.jpg"
                    alt="Product image"
                    class="product__img"
                />
                <i class="fa-regular fa-heart product__wishlist"></i>
            </figure>
            <div class="product__info">
                <div class="product__info--left">
                    <p class="product__name name">Name</p>
                    <p class="product__category category">Category</p>
                </div>
                <div class="product__info--right">
                    <p class="product__price price">Price</p>
                </div>
            </div>
        </article>
    </a>`;
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
                <a href="product-details.html" class="product__item-link">
                    <article class="product__item">
                        <figure class="product__img-container">
                            <img
                                src=${imageUrls[0]}
                                alt="Product image"
                                class="product__img"
                            />
                            <i class="fa-regular fa-heart product__wishlist"></i>
                        </figure>
                        <div class="product__info">
                            <div class="product__info--left">
                                <p class="product__name name">
                                    ${name}
                                </p>
                                <p class="product__category category">
                                    ${gender}${suffix} ${category} Shoes
                                </p>
                            </div>
                            <div class="product__info--right">
                                <p class="product__price price">
                                    $${price}
                                </p>
                            </div>
                        </div>
                    </article>
                </a>`;

                render(elements, ".product");
            });
        })
        .catch((err) => console.log(err));
});
