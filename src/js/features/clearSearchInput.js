import getElement from "../utilities/getElement";
import render from "../utilities/render";

const mobileInput = getElement(".mobile .input");
const mobileClearBtn = getElement(".mobile .clear-btn");
const desktopInput = getElement(".desktop .input");
const desktopClearBtn = getElement(".desktop .clear-btn");

const handle = (input, clearBtn, className) => {
    input.addEventListener("keyup", () => {
        if (input.value) {
            clearBtn.classList.add("show");
        } else {
            clearBtn.classList.remove("show");
        }
    });
    clearBtn.addEventListener("click", () => {
        input.value = "";
        clearBtn.classList.remove("show");
        input.focus();
        render("", className);
        if (className === ".desktop-matched-items") {
            getElement(".desktop-matched-items").style.background = "none";
            getElement(".desktop-matched-items").style.boxShadow = "none";
        }
    });
};

const clearSearchInput = () => {
    handle(mobileInput, mobileClearBtn, ".mobile-matched-items");
    handle(desktopInput, desktopClearBtn, ".desktop-matched-items");
};

clearSearchInput();
