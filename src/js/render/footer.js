import render from "../utilities/render";

const elements = `
<div class="container">
    <div class="sub-container">
        <div class="footer__lists">
            <ul class="footer__list get-help">
                <li class="footer__item">
                    <h4 class="footer__title">Get Help</h4>
                </li>
                <li class="footer__item">
                    <a href="#" class="footer__link">Order Status</a>
                </li>
                <li class="footer__item">
                    <a href="#" class="footer__link">Shipping and Delivery</a>
                </li>
                <li class="footer__item">
                    <a href="#" class="footer__link">Returns</a>
                </li>
                <li class="footer__item">
                    <a href="#" class="footer__link">Payment Options</a>
                </li>
                <li class="footer__item">
                    <a href="#" class="footer__link">Contact Us</a>
                </li>
            </ul>
            <ul class="footer__list about-tts">
                <li class="footer__item">
                    <h4 class="footer__title">About TTS</h4>
                </li>
                <li class="footer__item">
                    <a href="#" class="footer__link">News</a>
                </li>
                <li class="footer__item">
                    <a href="#" class="footer__link">Careers</a>
                </li>
                <li class="footer__item">
                    <a href="#" class="footer__link">Sustainability</a>
                </li>
                <li class="footer__item">
                    <a href="#" class="footer__link">Terms and Conditions</a>
                </li>
                <li class="footer__item">
                    <a href="#" class="footer__link">Privacy Policy</a>
                </li>
            </ul>
            <ul class="footer__list info">
                <li class="footer__item">
                    <a href="#" class="footer__logo">TTS</a>
                    <p class="footer__text">
                        Lorem ipsum dolor sit amet consectetur elit. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit.
                    </p>
                </li>
                <li class="footer__item">
                    <i class="fa-solid fa-location-dot footer__icon"></i>
                    <span class="footer__info-text">&nbsp;Myanmar</span>
                </li>
                <li class="footer__item">
                    <i class="fa-solid fa-phone footer__icon"></i>
                    <span class="footer__info-text">13082022</span>
                </li>
                <li class="footer__item">
                    <i class="fa-solid fa-envelope footer__icon"></i>
                    <span class="footer__info-text">test@tts.com</span>
                </li>
            </ul>
            <div class="footer__social-icons social-media">
                <a href="#" class="footer__link"
                    ><i
                        class="fa-brands fa-square-facebook footer__social-icon"
                    ></i
                ></a>
                <a href="#" class="footer__link"
                    ><i
                        class="fa-brands fa-square-twitter footer__social-icon"
                    ></i
                ></a>
                <a href="#" class="footer__link"
                    ><i
                        class="fa-brands fa-square-youtube footer__social-icon"
                    ></i
                ></a>
                <a href="#" class="footer__link"
                    ><i
                        class="fa-brands fa-square-instagram footer__social-icon"
                    ></i
                ></a>
            </div>
            <small class="footer__copyright copyright">
                &copy; <span class="current-year"></span> TTS. All Rights Reserved.
            </small>
        </div>
    </div>
</div>`;

render(elements, ".footer");
