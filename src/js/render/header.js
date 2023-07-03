import render from "../utilities/render";

const elements = `
<div class="container">
    <nav class="nav">
        <div class="sub-container">
            <ul class="nav__list">
                <li class="nav__item">
                    <a href="index.html" class="nav__logo">TTS</a>
                </li>
                <div class="nav__list--center menu-overlay">
                    <li class="nav__item close-menu-btn">
                        <a href="#" class="nav__close"
                            ><i class="fa-solid fa-xmark"></i
                        ></a>
                    </li>
                    <div class="nav__items">
                        <li class="nav__item">
                            <a href="#hero" class="nav__link">Home</a>
                        </li>
                        <label for="checkbox1">
                            <li class="nav__item">
                                <input
                                    type="checkbox"
                                    class="nav__checkbox"
                                    id="checkbox1"
                                />
                                <div class="jc-space-between">
                                    <a href="#" class="nav__link"
                                        ><label for="checkbox1">Shoes</label></a
                                    >
                                    <span class="nav__caret"
                                        ><i class="fa-solid fa-caret-down"></i
                                    ></span>
                                </div>
                                <ul class="nav__dropdown-list">
                                    <li class="nav__dropdown-item">
                                        <a
                                            href="#by-category"
                                            class="nav__dropdown-link"
                                            >Women</a
                                        >
                                    </li>
                                    <li class="nav__dropdown-item">
                                        <a
                                            href="#by-category"
                                            class="nav__dropdown-link"
                                            >Men</a
                                        >
                                    </li>
                                    <li class="nav__dropdown-item">
                                        <a
                                            href="#by-category"
                                            class="nav__dropdown-link"
                                            >Kids</a
                                        >
                                    </li>
                                </ul>
                            </li>
                        </label>
                        <li class="nav__item">
                            <a href="#popular-now" class="nav__link"
                                >Popular Now</a
                            >
                        </li>
                        <li class="nav__item">
                            <a href="#faqs" class="nav__link">FAQs</a>
                        </li>
                    </div>
                </div>
                <div class="nav__list--right">
                    <li class="nav__item">
                        <div class="nav__search--mobile mobile">
                            <i
                                class="fa-solid fa-magnifying-glass nav__search-glass open-search-btn"
                            ></i>
                            <div class="nav__search-overlay search-overlay">
                                <form class="nav__search-form">
                                    <i
                                        class="fa-solid fa-caret-left nav__caret close-search-btn"
                                    ></i>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        class="nav__search-input input"
                                    />
                                    <i
                                        class="fa-solid fa-xmark nav__search-close clear-btn"
                                    ></i>
                                </form>
                                <div
                                    class="nav__matched-items mobile-matched-items"
                                ></div>
                            </div>
                        </div>
                        <div class="nav__search--desktop desktop">
                            <form class="nav__search-form">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    class="nav__search-input input"
                                />
                                <i
                                    class="fa-solid fa-xmark nav__search-close clear-btn"
                                ></i>
                                <i
                                    class="fa-solid fa-magnifying-glass nav__search-glass"
                                ></i>
                            </form>
                            <div
                                class="nav__matched-items desktop-matched-items"
                            ></div>
                        </div>
                    </li>
                    <li class="nav__item open-menu-btn">
                        <a href="#" class="nav__bars"
                            ><i class="fa-solid fa-bars"></i
                        ></a>
                    </li>
                </div>
            </ul>
        </div>
    </nav>
</div>`;

render(elements, ".header");
