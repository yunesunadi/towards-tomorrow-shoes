import render from "../utilities/render";

const elements = `
<div class="slider__btns">
    <button class="slider__btn prev-btn">
        <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button class="slider__btn next-btn">
        <i class="fa-solid fa-chevron-right"></i>
    </button>
</div>`;

render(elements, ".slider");
