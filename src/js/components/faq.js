import getElement, { getElements } from "../utilities/getElement";

const faqs = [
    {
        id: 1,
        question: "Voluptatem soluta illum assumenda nihil accusamus?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta illum assumenda nihil accusamus, aliquam hic consectetur dolore ea quo fugit sequi incidunt officiis laudantium.",
    },
    {
        id: 2,
        question: "Aperiam quos obcaecati consequuntur?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quos, itaque vitae, obcaecati consequuntur iusto eos velit corrupti est molestiae quidem inventore culpa similique numquam.",
    },
    {
        id: 3,
        question:
            "Sit consequuntur quod itaque libero qui eaque voluptatem vitae?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit consequuntur quod itaque libero qui eaque voluptatem vitae, odio, provident illo eos, impedit nulla necessitatibus nisi.",
    },
    {
        id: 4,
        question: "Neque, commodi praesentium. Sunt sequi doloribus vel animi?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, commodi praesentium. Sunt sequi doloribus vel animi repudiandae, quod adipisci aut, consequatur soluta voluptate sit. A eveniet illo provident obcaecati exercitationem.",
    },
    {
        id: 5,
        question: "A eveniet illo provident obcaecati exercitationem?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, commodi praesentium. Sunt sequi doloribus vel animi repudiandae, quod adipisci aut, consequatur soluta voluptate sit. A eveniet illo provident obcaecati exercitationem.",
    },
];

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
