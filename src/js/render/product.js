const placeholderProductElement = `
<article class="product__item">
    <figure class="product__img-container">
        <img
            src="../../../dist/assets/images/placeholder-image.jpg"
            alt="Product placeholder image"
            class="product__img"
        />
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

const productElement = (productCode, name, formatedCategory, price, image) => `
<article class="product__item product-item" data-code=${productCode}>
    <figure class="product__img-container">
        <img src="../../../dist/assets/images/products/${image}" alt="Product image" class="product__img" />
    </figure>
    <div class="product__info">
        <div class="product__info--left">
            <p class="product__name">${name}</p>
            <p class="product__category">${formatedCategory}</p>
        </div>
        <div class="product__info--right">
            <p class="product__price">$${price}</p>
        </div>
    </div>
</article>`;

export { placeholderProductElement, productElement };
