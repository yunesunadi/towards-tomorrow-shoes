import getAllProducts from "./getAllProducts";

const getPopularProductIndexes = () =>
    getAllProducts()
        .then((products) => {
            const generateUniqueNums = () => {
                let randomNums = [];

                for (let i = 1; i <= quantity; i++) {
                    randomNums.push(
                        Math.floor(Math.random() * products.length)
                    );
                }

                const uniqueNums = [...new Set(randomNums)];
                let uniqueNumsLen = uniqueNums.length;

                while (uniqueNumsLen < quantity) {
                    const randomNum = Math.floor(
                        Math.random() * products.length
                    );
                    if (!uniqueNums.includes(randomNum)) {
                        uniqueNums.push(randomNum);
                        uniqueNumsLen++;
                    }
                }

                return uniqueNums;
            };

            !localStorage.getItem("uniqueNums") &&
                localStorage.setItem(
                    "uniqueNums",
                    JSON.stringify(generateUniqueNums())
                );

            !localStorage.getItem("todayTime") &&
                localStorage.setItem("todayTime", new Date().getTime());

            const todayTime = parseInt(localStorage.getItem("todayTime"));
            const tomorrowTime = todayTime + 24 * 60 * 60 * 1000;
            const currentTime = new Date().getTime();

            if (currentTime >= tomorrowTime) {
                localStorage.setItem("todayTime", new Date().getTime());
                localStorage.setItem(
                    "uniqueNums",
                    JSON.stringify(generateUniqueNums())
                );
            }

            return JSON.parse(localStorage.getItem("uniqueNums"));
        })
        .catch((err) => console.log(err));

export default getPopularProductIndexes;
