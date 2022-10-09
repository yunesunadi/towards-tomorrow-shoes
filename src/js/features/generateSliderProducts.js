import render from "../utilities/render";
import getAllProducts from "../data/getAllProducts";
import {
    placeholderSliderProductElement,
    sliderProductElement,
} from "../render/sliderProduct";

const generateSliderProducts = (getProductIndexes) => {
    const quantity = 8;
    let elements = "";

    for (let i = 1; i <= quantity; i++) {
        elements += placeholderSliderProductElement;
    }

    render(elements, ".slider-product");

    window.addEventListener("DOMContentLoaded", () => {
        Promise.all([getProductIndexes, getAllProducts()])
            .then(([indexes, products]) => {
                let elements = "";

                indexes.map((index) => {
                    const { name, category, price, gender, imageUrls } =
                        products[index];
                    const suffix = gender === "Kids" ? "'" : "'s";
                    const formatedCategory = `${gender}${suffix} ${category} Shoes`;
                    const image = imageUrls[0];

                    elements += sliderProductElement(
                        name,
                        formatedCategory,
                        price,
                        image
                    );

                    render(elements, ".slider-product");
                });
            })
            .catch((err) => console.log(err));
    });
};

export default generateSliderProducts;
