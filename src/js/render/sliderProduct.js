const placeholderSliderProductElement = `
<article class="slider-product__item">
    <figure class="slider-product__img-container">
        <img
            src="../../../dist/assets/images/placeholder-image.jpg"
            alt="Product placeholder image"
            class="slider-product__img"
        />
        <i
            class="fa-regular fa-heart slider-product__wishlist"
        ></i>
    </figure>
    <div class="slider-product__info">
        <div class="slider-product__info--left">
            <p class="slider-product__name name-placeholder">&nbsp;</p>
            <p class="slider-product__category category-placeholder">&nbsp;</p>
        </div>
        <div class="slider-product__info--right">
            <p class="slider-product__price price-placeholder">&nbsp;</p>
        </div>
    </div>
</article>`;

const sliderProductElement = (name, formatedCategory, price, image) => `
<article class="slider-product__item">
    <a
        href="product-details.html"
        class="slider-product__item-link"
    >
        <figure class="slider-product__img-container">
            <img
                src=${image}
                alt="Product image"
                class="slider-product__img"
            />
            <i
                class="fa-regular fa-heart slider-product__wishlist"
            ></i>
        </figure>
    </a>
    <div class="slider-product__info">
        <div class="slider-product__info--left">
            <p class="slider-product__name">
                <a
                    href="product-details.html"
                    class="slider-product__item-link"
                >${name}</a>
            </p>
            <p class="slider-product__category">
                ${formatedCategory}
            </p>
        </div>
        <div class="slider-product__info--right">
            <p class="slider-product__price">$${price}</p>
        </div>
    </div>
</article>`;

export { placeholderSliderProductElement, sliderProductElement };
