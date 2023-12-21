import getElement from "../utilities/getElement";
import data from "../data/getCarouselData";

const carouselItem = getElement(".carousel .item");
const carouselTitle = getElement(".carousel .title");
const carouselText = getElement(".carousel .text");
const prevBtn = getElement(".carousel .prev-btn");
const nextBtn = getElement(".carousel .next-btn");
const indicators = getElement(".carousel .indicators");
let currentItem = 0;

const displayCarousel = () => {
    const { backgroundImage, title, text } = data[currentItem];
    carouselItem.style.background = `url(${backgroundImage}) no-repeat center center/cover`;
    carouselTitle.textContent = title;
    carouselText.textContent = text;
};

const toggleClass = (className) => {
    carouselItem.classList.add(className);
    setTimeout(() => {
        carouselItem.classList.remove(className);
    }, 1000);
};

indicators.innerHTML = data
    .map(
        (element, index) =>
            `<i
                class="fa-solid fa-minus carousel__indicator indicator"
                data-index=${index}
            ></i>`
    )
    .join("");

const activateIndicator = () => {
    Array.from(indicators.children).map((item) => {
        const itemIndex = item.dataset.index;
        if (itemIndex.includes(currentItem)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};

const slideRight = () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = data.length - 1;
    }
    displayCarousel();
    activateIndicator();
    toggleClass("slide-right");
};

const slideLeft = () => {
    currentItem++;
    if (currentItem > data.length - 1) {
        currentItem = 0;
    }
    displayCarousel();
    activateIndicator();
    toggleClass("slide-left");
};

window.addEventListener("DOMContentLoaded", () => {
    displayCarousel();
    activateIndicator();
});

prevBtn.addEventListener("click", () => {
    slideRight();
});

nextBtn.addEventListener("click", () => {
    slideLeft();
});

indicators.addEventListener("click", (e) => {
    const target = e.target;
    const targetIndex = target.dataset.index;

    if (!Array.from(target.classList).includes("indicator")) return;

    if (targetIndex >= currentItem) {
        toggleClass("slide-left");
    } else {
        toggleClass("slide-right");
    }
    currentItem = targetIndex;
    displayCarousel();

    target.classList.add("active");
    Array.from(indicators.children).map((item) => {
        if (item.dataset.index !== currentItem) {
            item.classList.remove("active");
        }
    });
});
