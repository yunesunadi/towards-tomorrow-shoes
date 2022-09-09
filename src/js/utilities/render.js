import getElement from "./getElement";

const render = (elements, container) => {
    const containerEl = getElement(container);
    containerEl.innerHTML = elements;
};

export default render;
