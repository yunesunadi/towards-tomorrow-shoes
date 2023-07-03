const placeholderProductElement = `
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

const productElement = (
    name,
    formatedCategory,
    price,
    image,
    productColors
) => `
<article class="product__item">
    <a href="product-details.html" class="product__item-link">
        <figure class="product__img-container">
            <img src=${image} alt="Product image" class="product__img" />
            <i class="fa-regular fa-heart product__wishlist"></i>
        </figure>
    </a>
    <div class="product__info">
        <div class="product__info--left">
            <p class="product__name">
                <a href="product-details.html" class="product__item-link"
                    >${name}</a
                >
            </p>
            <p class="product__category">${formatedCategory}</p>
        </div>
        <div class="product__info--right">
            <p class="product__price">$${price}</p>
        </div>
    </div>
    <div class="product__colors">${productColors}</div>
</article>`;

const productColorElement = (url, name) => `
<img src=${url} alt=${name} class="product__color-img" width="100" height="100" />
`;

export { placeholderProductElement, productElement, productColorElement };
