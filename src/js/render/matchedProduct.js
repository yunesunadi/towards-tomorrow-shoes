const matchedProductElement = (
    productCode,
    name,
    formatedCategory,
    price,
    image
) => `
<article
    class="nav__matched-item product-item"
    data-code=${productCode}
>
    <img src="../../../dist/assets/images/products/${image}" class="nav__matched-img" />
    <div>
        <p class="nav__matched-name nav__matched-item-link">${name}</p>
        <p class="nav__matched-category">${formatedCategory}</p>
        <p class="nav__matched-price">$${price}</p>
    </div>
</article>`;

export default matchedProductElement;
