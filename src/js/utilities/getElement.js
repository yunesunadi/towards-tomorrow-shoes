const getElement = (el) => {
    const element = document.querySelector(el);
    return element || console.error(element);
};

export default getElement;
