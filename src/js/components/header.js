const header = document.querySelector(".header");

const render = () => {
    header.innerHTML = `<nav class="header-nav">
        <div class="container">
            <ul class="header-nav__list">
                <li class="header-nav__item">
                    <a href="#" class="header-nav__logo">TTS</a>
                </li>
                <div class="header-nav__list--center menu-overlay">
                    <li class="header-nav__item close-menu-btn">
                        <a href="#" class="header-nav__close"
                            ><i class="fa-solid fa-xmark"></i
                        ></a>
                    </li>
                    <div class="header-nav__items">
                        <label for="checkbox1">
                            <li class="header-nav__item">
                                <input
                                    type="checkbox"
                                    class="header-nav__checkbox"
                                    id="checkbox1"
                                />
                                <div class="jc-space-between">
                                    <a href="#" class="header-nav__link"
                                        ><label for="checkbox1">Women</label></a
                                    >
                                    <span class="header-nav__caret"
                                        ><i class="fa-solid fa-caret-down"></i
                                    ></span>
                                </div>
                                <ul class="header-nav__dropdown-list">
                                    <li class="header-nav__dropdown-item">
                                        <a
                                            href="#"
                                            class="header-nav__dropdown-link"
                                            >All</a
                                        >
                                    </li>
                                    <li class="header-nav__dropdown-item">
                                        <a
                                            href="#"
                                            class="header-nav__dropdown-link"
                                            >Lifestyle</a
                                        >
                                    </li>
                                    <li class="header-nav__dropdown-item">
                                        <a
                                            href="#"
                                            class="header-nav__dropdown-link"
                                            >Running</a
                                        >
                                    </li>
                                    <li class="header-nav__dropdown-item">
                                        <a
                                            href="#"
                                            class="header-nav__dropdown-link"
                                            >Walking</a
                                        >
                                    </li>
                                    <li class="header-nav__dropdown-item">
                                        <a
                                            href="#"
                                            class="header-nav__dropdown-link"
                                            >Training</a
                                        >
                                    </li>
                                </ul>
                            </li>
                        </label>
                        <label for="checkbox2">
                            <li class="header-nav__item">
                                <input
                                    type="checkbox"
                                    class="header-nav__checkbox"
                                    id="checkbox2"
                                />
                                <div class="jc-space-between">
                                    <a href="#" class="header-nav__link"
                                        ><label for="checkbox2">Men</label></a
                                    >
                                    <span class="header-nav__caret"
                                        ><i class="fa-solid fa-caret-down"></i
                                    ></span>
                                </div>
                                <ul class="header-nav__dropdown-list">
                                    <li class="header-nav__dropdown-item">
                                        <a
                                            href="#"
                                            class="header-nav__dropdown-link"
                                            >All</a
                                        >
                                    </li>
                                    <li class="header-nav__dropdown-item">
                                        <a
                                            href="#"
                                            class="header-nav__dropdown-link"
                                            >Lifestyle</a
                                        >
                                    </li>
                                    <li class="header-nav__dropdown-item">
                                        <a
                                            href="#"
                                            class="header-nav__dropdown-link"
                                            >Running</a
                                        >
                                    </li>
                                    <li class="header-nav__dropdown-item">
                                        <a
                                            href="#"
                                            class="header-nav__dropdown-link"
                                            >Walking</a
                                        >
                                    </li>
                                    <li class="header-nav__dropdown-item">
                                        <a
                                            href="#"
                                            class="header-nav__dropdown-link"
                                            >Training</a
                                        >
                                    </li>
                                </ul>
                            </li>
                        </label>
                        <label for="checkbox3">
                            <li class="header-nav__item">
                                <input
                                    type="checkbox"
                                    class="header-nav__checkbox"
                                    id="checkbox3"
                                />
                                <div class="jc-space-between">
                                    <a href="#" class="header-nav__link"
                                        ><label for="checkbox3">Kids</label></a
                                    >
                                    <span class="header-nav__caret"
                                        ><i class="fa-solid fa-caret-down"></i
                                    ></span>
                                </div>
                                <ul class="header-nav__dropdown-list--flex">
                                    <div
                                        class="header-nav__dropdown-list--left"
                                    >
                                        <li class="header-nav__dropdown-item">
                                            <p
                                                class="header-nav__dropdown-title"
                                            >
                                                Girls
                                            </p>
                                        </li>
                                        <li class="header-nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="header-nav__dropdown-link"
                                                >All</a
                                            >
                                        </li>
                                        <li class="header-nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="header-nav__dropdown-link"
                                                >Lifestyle</a
                                            >
                                        </li>
                                        <li class="header-nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="header-nav__dropdown-link"
                                                >Running</a
                                            >
                                        </li>
                                        <li class="header-nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="header-nav__dropdown-link"
                                                >Walking</a
                                            >
                                        </li>
                                    </div>
                                    <div
                                        class="header-nav__dropdown-list--right"
                                    >
                                        <li class="header-nav__dropdown-item">
                                            <p
                                                class="header-nav__dropdown-title"
                                            >
                                                Boys
                                            </p>
                                        </li>
                                        <li class="header-nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="header-nav__dropdown-link"
                                                >All</a
                                            >
                                        </li>
                                        <li class="header-nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="header-nav__dropdown-link"
                                                >Lifestyle</a
                                            >
                                        </li>
                                        <li class="header-nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="header-nav__dropdown-link"
                                                >Running</a
                                            >
                                        </li>
                                        <li class="header-nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="header-nav__dropdown-link"
                                                >Walking</a
                                            >
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </label>
                    </div>
                </div>
                <div class="header-nav__list--right">
                    <li class="header-nav__item">
                        <div class="header-nav__search--mobile">
                            <i
                                class="fa-solid fa-magnifying-glass header-nav__search-glass open-search-btn"
                            ></i>
                            <div
                                class="header-nav__search-overlay search-overlay"
                            >
                                <form class="header-nav__search-form">
                                    <i
                                        class="fa-solid fa-caret-left header-nav__caret close-search-btn"
                                    ></i>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        class="header-nav__search-input mobile-input"
                                    />
                                    <i
                                        class="fa-solid fa-xmark header-nav__search-close mobile-clear-btn"
                                    ></i>
                                </form>
                                <div class="header-nav__matched-items">
                                    <article class="header-nav__matched-item">
                                        <img
                                            src="https://images.unsplash.com/photo-1518288774672-b94e808873ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80"
                                            alt=""
                                            class="header-nav__matched-img"
                                        />
                                        <div class="">
                                            <p class="header-nav__matched-name">
                                                Name
                                            </p>
                                            <p
                                                class="header-nav__matched-category"
                                            >
                                                Category
                                            </p>
                                            <p
                                                class="header-nav__matched-price"
                                            >
                                                Price
                                            </p>
                                        </div>
                                    </article>
                                    <p class="header-nav__see-results">
                                        See all results "something"
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="header-nav__search--desktop">
                            <form class="header-nav__search-form">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    class="header-nav__search-input desktop-input"
                                />
                                <i
                                    class="fa-solid fa-xmark header-nav__search-close desktop-clear-btn"
                                ></i>
                                <i
                                    class="fa-solid fa-magnifying-glass header-nav__search-glass"
                                ></i>
                            </form>
                            <div class="header-nav__matched-items">
                                <div class="grid-col-2">
                                    <article class="header-nav__matched-item">
                                        <img
                                            src="https://images.unsplash.com/photo-1518288774672-b94e808873ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80"
                                            alt=""
                                            class="header-nav__matched-img"
                                        />
                                        <div class="">
                                            <p class="header-nav__matched-name">
                                                Name
                                            </p>
                                            <p
                                                class="header-nav__matched-category"
                                            >
                                                Category
                                            </p>
                                            <p
                                                class="header-nav__matched-price"
                                            >
                                                Price
                                            </p>
                                        </div>
                                    </article>
                                    <article class="header-nav__matched-item">
                                        <img
                                            src="https://images.unsplash.com/photo-1518288774672-b94e808873ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80"
                                            alt=""
                                            class="header-nav__matched-img"
                                        />
                                        <div class="">
                                            <p class="header-nav__matched-name">
                                                Name
                                            </p>
                                            <p
                                                class="header-nav__matched-category"
                                            >
                                                Category
                                            </p>
                                            <p
                                                class="header-nav__matched-price"
                                            >
                                                Price
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <p class="header-nav__see-results">
                                    See all results "something"
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="header-nav__item">
                        <a href="#" class="header-nav__link"
                            ><i class="fa-solid fa-user"></i
                        ></a>
                    </li>
                    <li class="header-nav__item">
                        <a href="#" class="header-nav__link"
                            ><i class="fa-solid fa-heart"></i
                        ></a>
                    </li>
                    <li class="header-nav__item">
                        <a href="#" class="header-nav__link"
                            ><i class="fa-solid fa-cart-shopping"></i
                        ></a>
                    </li>
                    <li class="header-nav__item open-menu-btn">
                        <a href="#" class="header-nav__bars"
                            ><i class="fa-solid fa-bars"></i
                        ></a>
                    </li>
                </div>
            </ul>
        </div>
    </nav>`;
};

render();
