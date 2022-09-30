const matchedProductElement = (name, formatedCategory, price, image) => `
<article class="nav__matched-item">
    <a href="product-details.html">
        <img
            src=${image}
            class="nav__matched-img"
        />
    </a>
    <div>
        <p class="nav__matched-name">
            <a
            href="product-details.html"
            class="nav__matched-item-link"
            >
                ${name}
            </a>
        </p>
        <p class="nav__matched-category">
            ${formatedCategory}
        </p>
        <p class="nav__matched-price">
            $${price}
        </p>
    </div>
</article>`;

export default matchedProductElement;
