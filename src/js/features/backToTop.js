import getElement from "../utilities/getElement";

const backToTop = (element) => {
    const backToTopEl = getElement(".back-to-top");
    const topSection = getElement(element);
    const topSectionHeight = topSection.getBoundingClientRect().height;
    const halfTopSectionHeight = topSectionHeight / 2;

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > halfTopSectionHeight) {
            backToTopEl.style.display = "block";
        } else {
            backToTopEl.style.display = "none";
        }
    });

    backToTopEl.addEventListener("click", (e) => {
        e.preventDefault();
        window.scroll({
            top: 0,
        });
    });
};

export default backToTop;
