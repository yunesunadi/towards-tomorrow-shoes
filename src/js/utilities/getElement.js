const getElement = (el) => {
    const element = document.querySelector(el);
    return element || console.error(element);
};

const getElements = (el) => {
    const element = document.querySelectorAll(el);
    return element || console.error(element);
};

export { getElements };
export default getElement;
