import render from "../utilities/render";

const elements = `
<div class="container">
    <nav class="nav">
        <div class="sub-container">
            <ul class="nav__list">
                <li class="nav__item">
                    <a href="#" class="nav__logo">TTS</a>
                </li>
                <div class="nav__list--center menu-overlay">
                    <li class="nav__item close-menu-btn">
                        <a href="#" class="nav__close"
                            ><i class="fa-solid fa-xmark"></i
                        ></a>
                    </li>
                    <div class="nav__items">
                        <label for="checkbox1">
                            <li class="nav__item">
                                <input
                                    type="checkbox"
                                    class="nav__checkbox"
                                    id="checkbox1"
                                />
                                <div class="jc-space-between">
                                    <a href="#" class="nav__link"
                                        ><label for="checkbox1">Women</label></a
                                    >
                                    <span class="nav__caret"
                                        ><i class="fa-solid fa-caret-down"></i
                                    ></span>
                                </div>
                                <ul class="nav__dropdown-list">
                                    <li class="nav__dropdown-item">
                                        <a href="#" class="nav__dropdown-link"
                                            >All</a
                                        >
                                    </li>
                                    <li class="nav__dropdown-item">
                                        <a href="#" class="nav__dropdown-link"
                                            >Lifestyle</a
                                        >
                                    </li>
                                    <li class="nav__dropdown-item">
                                        <a href="#" class="nav__dropdown-link"
                                            >Running</a
                                        >
                                    </li>
                                    <li class="nav__dropdown-item">
                                        <a href="#" class="nav__dropdown-link"
                                            >Walking</a
                                        >
                                    </li>
                                    <li class="nav__dropdown-item">
                                        <a href="#" class="nav__dropdown-link"
                                            >Training</a
                                        >
                                    </li>
                                </ul>
                            </li>
                        </label>
                        <label for="checkbox2">
                            <li class="nav__item">
                                <input
                                    type="checkbox"
                                    class="nav__checkbox"
                                    id="checkbox2"
                                />
                                <div class="jc-space-between">
                                    <a href="#" class="nav__link"
                                        ><label for="checkbox2">Men</label></a
                                    >
                                    <span class="nav__caret"
                                        ><i class="fa-solid fa-caret-down"></i
                                    ></span>
                                </div>
                                <ul class="nav__dropdown-list">
                                    <li class="nav__dropdown-item">
                                        <a href="#" class="nav__dropdown-link"
                                            >All</a
                                        >
                                    </li>
                                    <li class="nav__dropdown-item">
                                        <a href="#" class="nav__dropdown-link"
                                            >Lifestyle</a
                                        >
                                    </li>
                                    <li class="nav__dropdown-item">
                                        <a href="#" class="nav__dropdown-link"
                                            >Running</a
                                        >
                                    </li>
                                    <li class="nav__dropdown-item">
                                        <a href="#" class="nav__dropdown-link"
                                            >Walking</a
                                        >
                                    </li>
                                    <li class="nav__dropdown-item">
                                        <a href="#" class="nav__dropdown-link"
                                            >Training</a
                                        >
                                    </li>
                                </ul>
                            </li>
                        </label>
                        <label for="checkbox3">
                            <li class="nav__item">
                                <input
                                    type="checkbox"
                                    class="nav__checkbox"
                                    id="checkbox3"
                                />
                                <div class="jc-space-between">
                                    <a href="#" class="nav__link"
                                        ><label for="checkbox3">Kids</label></a
                                    >
                                    <span class="nav__caret"
                                        ><i class="fa-solid fa-caret-down"></i
                                    ></span>
                                </div>
                                <ul class="nav__dropdown-list--flex">
                                    <div class="nav__dropdown-list--left">
                                        <li class="nav__dropdown-item">
                                            <p class="nav__dropdown-title">
                                                Girls
                                            </p>
                                        </li>
                                        <li class="nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="nav__dropdown-link"
                                                >All</a
                                            >
                                        </li>
                                        <li class="nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="nav__dropdown-link"
                                                >Lifestyle</a
                                            >
                                        </li>
                                        <li class="nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="nav__dropdown-link"
                                                >Running</a
                                            >
                                        </li>
                                        <li class="nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="nav__dropdown-link"
                                                >Walking</a
                                            >
                                        </li>
                                    </div>
                                    <div class="nav__dropdown-list--right">
                                        <li class="nav__dropdown-item">
                                            <p class="nav__dropdown-title">
                                                Boys
                                            </p>
                                        </li>
                                        <li class="nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="nav__dropdown-link"
                                                >All</a
                                            >
                                        </li>
                                        <li class="nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="nav__dropdown-link"
                                                >Lifestyle</a
                                            >
                                        </li>
                                        <li class="nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="nav__dropdown-link"
                                                >Running</a
                                            >
                                        </li>
                                        <li class="nav__dropdown-item">
                                            <a
                                                href="#"
                                                class="nav__dropdown-link"
                                                >Walking</a
                                            >
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </label>
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
                                <div class="nav__matched-items">
                                    <article class="nav__matched-item">
                                        <img
                                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                            alt=""
                                            class="nav__matched-img"
                                        />
                                        <div class="">
                                            <p class="nav__matched-name">
                                                Name
                                            </p>
                                            <p class="nav__matched-category">
                                                Category
                                            </p>
                                            <p class="nav__matched-price">
                                                Price
                                            </p>
                                        </div>
                                    </article>
                                    <p class="nav__see-results">
                                        See all results "something"
                                    </p>
                                </div>
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
                            <div class="nav__matched-items">
                                <div class="grid-col-2">
                                    <article class="nav__matched-item">
                                        <img
                                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                            alt=""
                                            class="nav__matched-img"
                                        />
                                        <div class="">
                                            <p class="nav__matched-name">
                                                Name
                                            </p>
                                            <p class="nav__matched-category">
                                                Category
                                            </p>
                                            <p class="nav__matched-price">
                                                Price
                                            </p>
                                        </div>
                                    </article>
                                    <article class="nav__matched-item">
                                        <img
                                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                            alt=""
                                            class="nav__matched-img"
                                        />
                                        <div class="">
                                            <p class="nav__matched-name">
                                                Name
                                            </p>
                                            <p class="nav__matched-category">
                                                Category
                                            </p>
                                            <p class="nav__matched-price">
                                                Price
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <p class="nav__see-results">
                                    See all results "something"
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link"
                            ><i class="fa-solid fa-user"></i
                        ></a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link"
                            ><i class="fa-solid fa-heart"></i
                        ></a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link"
                            ><i class="fa-solid fa-cart-shopping"></i
                        ></a>
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
