const data = require("../../../products.json");

const getAllProducts = async () => {
    try {
        return data;
    } catch (err) {
        console.log(err);
    }
};

export default getAllProducts;
