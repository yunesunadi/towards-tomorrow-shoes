import render from "../utilities/render";
import getAllProducts from "../data/getAllProducts";
import getPopularProductIndexes, {
    quantity,
} from "../data/getPopularProductIndexes";
import { placeholderProductElement, productElement } from "../render/product";

let elements = "";

for (let i = 1; i <= quantity; i++) {
    elements += placeholderProductElement;
}

render(elements, ".product");

window.addEventListener("DOMContentLoaded", () => {
    Promise.all([getPopularProductIndexes(), getAllProducts()])
        .then(([indexes, products]) => {
            let elements = "";

            indexes.map((index) => {
                const { name, category, price, gender, imageUrls } =
                    products[index];
                const suffix = gender === "Kids" ? "'" : "'s";
                const formatedCategory = `${gender}${suffix} ${category} Shoes`;
                const image = imageUrls[0];

                elements += productElement(
                    name,
                    formatedCategory,
                    price,
                    image
                );

                render(elements, ".product");
            });
        })
        .catch((err) => console.log(err));
});
