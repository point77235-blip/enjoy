const foodData = {
    "0-4": {
        title: "수유기 (모유/분유)",
        breakfast: "모유 또는 분유 (160~200ml)",
        lunch: "모유 또는 분유 (160~200ml)",
        snack: "필요 시 수유",
        dinner: "모유 또는 분유 (160~200ml)",
        tip: "아직 소화기관이 미성숙하므로 모유나 분유만으로 영양을 섭취하는 시기입니다."
    },
    "5-6": {
        title: "초기 이유식 (미음 단계)",
        breakfast: "쌀미음 또는 찹쌀미음 (30~50ml) + 수유",
        lunch: "수유 (160~200ml)",
        snack: "사과 또는 바나나 퓌레 (소량)",
        dinner: "수유 (160~200ml)",
        tip: "알레르기 반응을 살피며 한 가지 재료씩 천천히 시작하세요."
    },
    "7-8": {
        title: "중기 이유식 (죽 단계)",
        breakfast: "소고기 채소 죽 (80~100ml) + 수유",
        lunch: "닭고기 고구마 죽 (80~100ml) + 수유",
        snack: "거른 요거트 또는 삶은 감자 으깸",
        dinner: "수유 (200ml)",
        tip: "하루 두 번 이유식을 진행하며 알갱이가 있는 죽 형태에 적응하는 시기입니다."
    },
    "9-12": {
        title: "후기 이유식 (무른 밥 단계)",
        breakfast: "대구살 채소 진밥 (120~150ml)",
        lunch: "소고기 버섯 진밥 (120~150ml)",
        snack: "부드러운 치즈 또는 과일 조각",
        dinner: "닭고기 단호박 무른 밥 (120~150ml)",
        tip: "하루 세 번 식사를 시작하고 핑거 푸드를 통해 스스로 먹는 연습을 도와주세요."
    },
    "13-18": {
        title: "유아식 초기 (진밥과 반찬)",
        breakfast: "야채 계란 진밥 + 맑은 소고기무국",
        lunch: "두부 부침 + 멸치 볶음 + 진밥",
        snack: "우유 (200ml) + 고구마 말랭이",
        dinner: "생선 구이 (가시 제거) + 데친 나물 + 진밥",
        tip: "서서히 어른 음식과 비슷하게 진행하되, 간은 아주 약하게(저염식) 해주세요."
    },
    "19-24": {
        title: "유아식 중기 (다양한 식재료 경험)",
        breakfast: "스크램블 에그 + 토스트 조각 + 우유",
        lunch: "아기용 불고기 덮밥 + 백김치",
        snack: "제철 과일 + 견과류 강정(잘게)",
        dinner: "새우 채소 볶음밥 + 미역국",
        tip: "자기주도 식사가 정착되는 시기입니다. 다양한 색깔과 질감의 음식을 제공하세요."
    },
    "25-36": {
        title: "유아식 완성기 (영양 균형 집중)",
        breakfast: "오트밀 죽 또는 시리얼 + 과일",
        lunch: "닭다리살 구이 + 브로콜리 볶음 + 잡곡밥",
        snack: "수제 요거트 + 통밀 쿠키",
        dinner: "된장찌개 (심심하게) + 계란말이 + 잡곡밥",
        tip: "편식이 생길 수 있는 시기이므로 즐거운 식사 분위기를 만들어주는 것이 중요합니다."
    }
};

class BabyFoodRecommendation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const age = parseInt(this.getAttribute('age'));
        const data = this.getRecommendationData(age);
        this.render(age, data);
    }

    render(age, data) {
        if (typeof data === 'string') {
            this.shadowRoot.innerHTML = `<p>${data}</p>`;
            return;
        }

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-top: 2rem;
                    padding: 1.5rem;
                    border-radius: 16px;
                    background-color: var(--secondary-color, #f8f9fa);
                    border: 1px solid var(--border-color, #e9ecef);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                    color: var(--text-color, #333);
                }
                .header {
                    text-align: center;
                    margin-bottom: 1.5rem;
                }
                .header h3 {
                    color: var(--primary-color, #ff6b6b);
                    font-size: 1.4rem;
                    margin-bottom: 0.5rem;
                }
                .header .age-badge {
                    display: inline-block;
                    padding: 4px 12px;
                    background-color: var(--primary-color, #ff6b6b);
                    color: white;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    font-weight: bold;
                }
                .meal-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }
                .meal-card {
                    background: var(--bg-color, white);
                    padding: 1rem;
                    border-radius: 12px;
                    border: 1px solid var(--border-color, #e9ecef);
                }
                .meal-card h4 {
                    font-size: 0.9rem;
                    color: #777;
                    margin-bottom: 0.5rem;
                    border-bottom: 1px solid var(--border-color, #e9ecef);
                    padding-bottom: 4px;
                }
                .meal-card p {
                    font-size: 1rem;
                    font-weight: 500;
                    margin: 0;
                }
                .tip-section {
                    background-color: #fff4f4;
                    padding: 1rem;
                    border-radius: 10px;
                    font-size: 0.9rem;
                    border-left: 4px solid var(--primary-color, #ff6b6b);
                }
                .tip-section strong {
                    color: var(--primary-color, #ff6b6b);
                }
                [data-theme="dark"] .meal-card {
                    background: #2d2d2d;
                }
                [data-theme="dark"] .tip-section {
                    background-color: #3d2b2b;
                }
            </style>
            <div class="header">
                <span class="age-badge">${age}개월</span>
                <h3>${data.title}</h3>
            </div>
            <div class="meal-grid">
                <div class="meal-card">
                    <h4>☀️ 아침</h4>
                    <p>${data.breakfast}</p>
                </div>
                <div class="meal-card">
                    <h4>🕛 점심</h4>
                    <p>${data.lunch}</p>
                </div>
                <div class="meal-card">
                    <h4>🍎 간식</h4>
                    <p>${data.snack}</p>
                </div>
                <div class="meal-card">
                    <h4>🌙 저녁</h4>
                    <p>${data.dinner}</p>
                </div>
            </div>
            <div class="tip-section">
                <strong>💡 성장 팁:</strong> ${data.tip}
            </div>
        `;
    }

    getRecommendationData(age) {
        if (age >= 0 && age <= 4) return foodData["0-4"];
        if (age >= 5 && age <= 6) return foodData["5-6"];
        if (age >= 7 && age <= 8) return foodData["7-8"];
        if (age >= 9 && age <= 12) return foodData["9-12"];
        if (age >= 13 && age <= 18) return foodData["13-18"];
        if (age >= 19 && age <= 24) return foodData["19-24"];
        if (age >= 25 && age <= 120) return foodData["25-36"]; // 최대 10세까지 제공
        return "정확한 개월 수를 입력해주세요 (0~120).";
    }
}

customElements.define('baby-food-recommendation', BabyFoodRecommendation);

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '라이트 모드';
}

themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '다크 모드';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '라이트 모드';
        localStorage.setItem('theme', 'dark');
    }
});

document.getElementById('recommend-button').addEventListener('click', () => {
    const ageInput = document.getElementById('age-input');
    const age = ageInput.value;
    const container = document.getElementById('recommendation-container');
    container.innerHTML = ''; 
    if (age !== '') {
        const recommendationElement = document.createElement('baby-food-recommendation');
        recommendationElement.setAttribute('age', age);
        container.appendChild(recommendationElement);
    }
});
