import render from "../utilities/render";

const data = [
    {
        name: "name1",
        category: "category1",
        price: "price1",
    },
    {
        name: "name2",
        category: "category2",
        price: "price2",
    },
    {
        name: "name3",
        category: "category3",
        price: "price3",
    },
    {
        name: "name4",
        category: "category4",
        price: "price4",
    },
    {
        name: "name5",
        category: "category5",
        price: "price5",
    },
    {
        name: "name6",
        category: "category6",
        price: "price6",
    },
    {
        name: "name7",
        category: "category7",
        price: "price8",
    },
    {
        name: "name8",
        category: "category8",
        price: "price8",
    },
    {
        name: "name9",
        category: "category9",
        price: "price9",
    },
    {
        name: "name10",
        category: "category10",
        price: "price10",
    },
];

const elements = data
    .map(
        ({ name, category, price }) => `
<a href="product-details.html" class="product__item-link">
    <article class="product__item">
        <figure class="product__img-container">
            <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Product image"
                class="product__img"
            />
            <i class="fa-regular fa-heart product__wishlist"></i>
        </figure>
        <div class="product__info">
            <div class="product__info--left">
                <p class="product__name name">${name}</p>
                <p class="product__category category">${category}</p>
            </div>
            <div class="product__info--right">
                <p class="product__price price">${price}</p>
            </div>
        </div>
    </article>
</a>
`
    )
    .join("");

render(elements, ".product");
