import getElement from "../utilities/getElement";

const productContainer = getElement(".product-container");
const prevBtn = getElement(".slider .prev-btn");
const nextBtn = getElement(".slider .next-btn");

const containerScrollWidth =
    productContainer.scrollWidth - productContainer.clientWidth;

const itemWidth = productContainer.children[0].getBoundingClientRect().width;

const offsets = Array.from(productContainer.children)
    .map((item, index) => itemWidth * index)
    .slice(1);

const disable = (btn) => {
    btn.disabled = true;
    btn.classList.add("disable");
};

const enable = (btn) => {
    btn.disabled = false;
    btn.classList.remove("disable");
};

disable(prevBtn);

nextBtn.addEventListener("click", () => {
    productContainer.scrollLeft += offsets[0];
    enable(prevBtn);
});

productContainer.addEventListener("scroll", () => {
    const scrollAmount = productContainer.scrollLeft;
    const nearestOffset = offsets.find((offset) => offset > scrollAmount);

    scrollAmount === 0 ? disable(prevBtn) : enable(prevBtn);
    scrollAmount === containerScrollWidth ? disable(nextBtn) : enable(nextBtn);

    nextBtn.addEventListener("click", () => {
        productContainer.scrollLeft = nearestOffset;
    });

    prevBtn.addEventListener("click", () => {
        if (offsets.includes(scrollAmount)) {
            productContainer.scrollLeft = nearestOffset - offsets[0] * 2;
        } else {
            productContainer.scrollLeft = nearestOffset - offsets[0];
        }
    });
});
