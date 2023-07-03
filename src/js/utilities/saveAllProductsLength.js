import getAllProducts from "../data/getAllProducts";

getAllProducts()
    .then((products) => {
        sessionStorage.setItem("productsLength", products.length);
    })
    .catch((err) => console.log(err));
