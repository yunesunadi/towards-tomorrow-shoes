import "../render/preloader";
import getElement from "../utilities/getElement";

const preloader = getElement(".preloader");
const progress = getElement(".preloader__progress");
const progressPercent = getElement(".preloader__progress-percent");

let startLimit = 0;
let endLimit = 100;

const progressInterval = setInterval(renderProgress, 15);

function renderProgress() {
    if (startLimit === endLimit) {
        clearInterval(progressInterval);
    } else {
        startLimit++;
        progress.style.width = `${startLimit}%`;
        progressPercent.textContent = `${startLimit}%`;

        if (startLimit >= 45) {
            progressPercent.style.color = "#fff";
        }
    }
}

setTimeout(() => {
    preloader.classList.add("hide");
}, 1550);
