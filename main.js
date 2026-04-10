const foodData = {
    "0-4": "모유 또는 분유만 먹이세요.",
    "5-6": "철분 강화 시리얼, 퓌레로 만든 과일과 채소(예: 사과, 바나나, 고구마)로 시작하세요.",
    "7-8": "다양한 퓌레, 으깬 음식(예: 아보카도, 완두콩)을 시도하고, 부드러운 핑거 푸드를 소개하세요.",
    "9-12": "잘게 썬 부드러운 음식, 다양한 핑거 푸드, 가족 식사의 일부를 제공하세요."
};

class BabyFoodRecommendation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const age = this.getAttribute('age');
        const recommendation = this.getRecommendation(age);
        this.render(age, recommendation);
    }

    render(age, recommendation) {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-top: 1rem;
                    padding: 1rem;
                    border: 1px solid var(--primary-color, #e83e8c);
                    border-radius: 4px;
                    background-color: var(--secondary-bg-color, #fdf4f6);
                    color: var(--text-color, #333);
                }
                h3 {
                    color: var(--primary-color, #e83e8c);
                    margin-top: 0;
                }
                p {
                    margin-bottom: 0;
                }
            </style>
            <h3>${age}개월 추천 식단</h3>
            <p>${recommendation}</p>
        `;
    }

    getRecommendation(age) {
        if (age >= 0 && age <= 4) {
            return foodData["0-4"];
        } else if (age >= 5 && age <= 6) {
            return foodData["5-6"];
        } else if (age >= 7 && age <= 8) {
            return foodData["7-8"];
        } else if (age >= 9 && age <= 12) {
            return foodData["9-12"];
        } else {
            return "정확한 개월 수를 입력해주세요.";
        }
    }
}

customElements.define('baby-food-recommendation', BabyFoodRecommendation);

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '라이트 모드';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '라이트 모드' : '다크 모드';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

document.getElementById('recommend-button').addEventListener('click', () => {
    const ageInput = document.getElementById('age-input');
    const age = ageInput.value;
    const container = document.getElementById('recommendation-container');
    container.innerHTML = ''; // Clear previous recommendations
    if (age) {
        const recommendationElement = document.createElement('baby-food-recommendation');
        recommendationElement.setAttribute('age', age);
        container.appendChild(recommendationElement);
    }
});

