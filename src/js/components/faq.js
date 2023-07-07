import getElement, { getElements } from "../utilities/getElement";
import faqs from "../data/getFaqsData";

let faq = "";
const faqList = getElement(".faq__items");

window.addEventListener("DOMContentLoaded", showFaqs);

function showFaqs() {
    faqs.forEach(({ question, answer }) => {
        faq += `
        <article class="faq__card">
            <div class="faq__question-title">
                <h3 class="faq__question">${question}</h3>
                <button class="faq__icon">
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
            </div>
            <p class="faq__answer">${answer}</p>
        </article>`;
    });

    faqList.innerHTML = faq;

    const faqItems = getElements(".faq__card");

    faqItems.forEach((currentItem) => {
        const faqQuestion = currentItem.querySelector(".faq__question-title");

        faqQuestion.addEventListener("click", () => {
            faqItems.forEach((faqItem) => {
                if (currentItem !== faqItem) {
                    faqItem.classList.remove("active");
                }
            });

            currentItem.classList.toggle("active");
        });
    });
}
