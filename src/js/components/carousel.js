const data = [
    {
        backgroundImage:
            "https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "This is title one.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est pariatur tenetur?",
        category: "women",
    },
    {
        backgroundImage:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
        title: "This is title two.",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, consequatur est asperiores.",
        category: "men",
    },
    {
        backgroundImage:
            "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "This is title three.",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quasi sint, rerum maiores cum facilis.",
        category: "kids",
    },
];

const carouselItem = document.querySelector(".carousel-item");
const carouselTitle = document.querySelector(".title");
const carouselText = document.querySelector(".text");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const indicators = document.querySelector(".indicators");
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

const interval = setInterval(slideLeft, 10000);

window.addEventListener("DOMContentLoaded", () => {
    displayCarousel();
    activateIndicator();
});

prevBtn.addEventListener("click", (e) => {
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
