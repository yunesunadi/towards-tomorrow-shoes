const handleClick = (btn, overlay) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.classList.toggle("show");
    });
};

const toggleOverlay = (openBtn, closeBtn, overlay) => {
    handleClick(openBtn, overlay);
    handleClick(closeBtn, overlay);
};

export default toggleOverlay;
