import render from "../utilities/render";

const elements = `
<div class="preloader__progress-bar">
    <div class="preloader__progress"></div>
    <span class="preloader__progress-percent"></span>
</div>`;

render(elements, ".preloader");
