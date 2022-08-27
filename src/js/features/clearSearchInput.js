const mobileInput = document.querySelector(".mobile .input");
const mobileClearBtn = document.querySelector(".mobile .clear-btn");
const desktopInput = document.querySelector(".desktop .input");
const desktopClearBtn = document.querySelector(".desktop .clear-btn");

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
