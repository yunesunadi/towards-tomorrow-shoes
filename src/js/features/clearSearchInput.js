import getElement from "../utilities/getElement";

const mobileInput = getElement(".mobile .input");
const mobileClearBtn = getElement(".mobile .clear-btn");
const desktopInput = getElement(".desktop .input");
const desktopClearBtn = getElement(".desktop .clear-btn");

const handle = (input, clearBtn) => {
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
    });
};

const clearSearchInput = () => {
    handle(mobileInput, mobileClearBtn);
    handle(desktopInput, desktopClearBtn);
};

clearSearchInput();
