import getElement from "../utilities/getElement";

const backToTop = getElement(".back-to-top");
const hero = getElement("#hero");
const heroHeight = hero.getBoundingClientRect().height;
const halfHeroHeight = heroHeight / 2;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > halfHeroHeight) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
    });
});
