const weeklyFoodData = {
    "9-12": {
        title: "후기 이유식 (무른 밥 단계)",
        tip: "하루 세 번 식사를 시작하고 핑거 푸드를 통해 스스로 먹는 연습을 도와주세요.",
        days: {
            "월": {
                breakfast: { 
                    name: "소고기 청경채 덮밥", 
                    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80", 
                    recipe: { 
                        ingredients: ["다진 소고기 30g", "청경채 15g", "양파 10g", "전분물 1큰술", "진밥 100g"], 
                        steps: ["1. 소고기와 다진 양파, 청경채를 팬에 볶습니다.", "2. 재료가 잠길 정도로 물을 붓고 끓입니다.", "3. 전분물을 풀어 걸쭉하게 만든 뒤 밥 위에 얹어줍니다."] 
                    }, 
                    alternatives: [{ name: "소고기 애호박 죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" }] 
                },
                lunch: { 
                    name: "닭고기 야채 간장조림", 
                    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80", 
                    recipe: { 
                        ingredients: ["닭안심 30g", "당근 10g", "양파 10g", "아기 간장 0.5작은술", "배즙 1큰술"], 
                        steps: ["1. 닭고기와 야채를 아이 한입 크기로 썹니다.", "2. 냄비에 재료와 물, 아기 간장, 배즙을 넣습니다.", "3. 고기가 익고 국물이 자작해질 때까지 졸입니다."] 
                    }, 
                    alternatives: [{ name: "닭고기 감자 조림", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=500&q=80" }] 
                },
                snack: { 
                    name: "바나나 퓨레", 
                    image: "https://images.unsplash.com/photo-1481349579423-ba96c36e6b9a?auto=format&fit=crop&w=500&q=80",
                    recipe: { ingredients: ["잘 익은 바나나 1개"], steps: ["1. 바나나 껍질을 벗기고 양 끝을 제거합니다.", "2. 숟가락으로 부드럽게 으깨어 제공합니다."] },
                    alternatives: [{ name: "사과 퓨레", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=500&q=80" }]
                },
                dinner: { 
                    name: "순두부 달걀탕 & 진밥", 
                    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80",
                    recipe: { 
                        ingredients: ["순두부 50g", "달걀 1개", "멸치 육수 150ml"], 
                        steps: ["1. 육수에 순두부를 큼직하게 떼어 넣습니다.", "2. 국물이 끓어오르면 달걀물을 풀어 넣습니다.", "3. 부드럽게 익혀 밥과 함께 제공합니다."] 
                    },
                    alternatives: [{ name: "대구살 채소국", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" }]
                }
            },
            "화": {
                breakfast: { name: "감자계란국 & 무른밥", image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&w=500&q=80", recipe: { ingredients: ["감자 1개", "달걀 1개", "다시마 육수 200ml"], steps: ["1. 육수에 작게 썬 감자를 넣고 익힙니다.", "2. 감자가 익으면 푼 달걀을 줄을 치듯 넣습니다.", "3. 한소끔 끓여 마무리합니다."] }, alternatives: [{name: "배추 된장국", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80"}] },
                lunch: { name: "애호박 느타리버섯볶음", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80", recipe: { ingredients: ["애호박 20g", "느타리버섯 15g", "들기름 1작은술"], steps: ["1. 애호박은 채썰고 버섯은 잘게 찢습니다.", "2. 팬에 들기름을 두르고 채소를 볶습니다.", "3. 물을 조금 넣어 증기로 부드럽게 익힙니다."] }, alternatives: [{name: "가지 볶음", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80"}] },
                snack: { name: "아기 치즈 & 고구마", image: "https://images.unsplash.com/photo-1486297678162-ad2a19b05844?auto=format&fit=crop&w=500&q=80", alternatives: [{name: "찐 밤", image: "https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&w=500&q=80"}] },
                dinner: { name: "소고기 애호박전", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80", recipe: { ingredients: ["애호박 1/4개", "다진 소고기 20g", "달걀 1개", "밀가루 약간"], steps: ["1. 다진 소고기와 애호박을 섞어 반죽을 만듭니다.", "2. 달걀물을 입혀 팬에 노릇하게 구워냅니다."] }, alternatives: [{name: "두부 스테이크", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80"}] }
            },
            "수": { breakfast: { name: "아기 배추 된장국", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" }, lunch: { name: "닭가슴살 채소 덮밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=500&q=80" }, snack: { name: "제철 과일 퓨레", image: "https://images.unsplash.com/photo-1541491008689-b5d3c6615e2e?auto=format&fit=crop&w=500&q=80" }, dinner: { name: "한우 표고버섯 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" } },
            "목": { breakfast: { name: "순두부 채소국", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80" }, lunch: { name: "대구살 조림 & 진밥", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" }, snack: { name: "찐 단호박 조각", image: "https://images.unsplash.com/photo-1506807803488-8eafc15316c7?auto=format&fit=crop&w=500&q=80" }, dinner: { name: "소고기 뭇국 & 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" } },
            "금": { breakfast: { name: "달걀 채소 죽", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80" }, lunch: { name: "닭고기 브로콜리 진밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=500&q=80" }, snack: { name: "요거트 & 블루베리", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80" }, dinner: { name: "한우 애호박 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" } },
            "토": { breakfast: { name: "전복 무른밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" }, lunch: { name: "새우 살 야채 진밥", image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80" }, snack: { name: "찐 고구마 조각", image: "https://images.unsplash.com/photo-1596040309792-953329598f44?auto=format&fit=crop&w=500&q=80" }, dinner: { name: "닭고기 무 진밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=500&q=80" } },
            "일": { breakfast: { name: "소고기 청경채 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" }, lunch: { name: "대구살 채소 죽", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" }, snack: { name: "사과 매쉬", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=500&q=80" }, dinner: { name: "닭안심 감자 진밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=500&q=80" } }
        }
    },
    "13-18": {
        title: "유아식 초기 (진밥과 반찬)",
        tip: "자기주도 식사가 시작되는 시기입니다. 다양한 식재료의 맛과 질감을 경험하게 해주세요.",
        days: {
            "월": {
                breakfast: { 
                    name: "야채 계란 볶음밥 & 감자국", 
                    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80", 
                    recipe: { ingredients: ["밥 100g", "계란 1개", "감자 1/4개", "다진 채소 20g"], steps: ["1. 육수에 작게 썬 감자를 넣고 감자국을 끓입니다.", "2. 팬에 채소와 밥을 볶다가 계란을 넣어 볶음밥을 만듭니다."] }, 
                    alternatives: [{ name: "소고기 볶음밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" }] 
                },
                lunch: { 
                    name: "순두부 달걀탕 & 닭고기 구이", 
                    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80", 
                    recipe: { ingredients: ["순두부 50g", "달걀 1개", "닭다리살 40g"], steps: ["1. 순두부와 달걀을 넣어 부드러운 탕을 끓입니다.", "2. 닭고기는 작게 썰어 팬에 노릇하게 굽습니다."] }, 
                    alternatives: [{ name: "미역국 & 생선구이", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" }] 
                },
                snack: { 
                    name: "우유 & 제철 과일", 
                    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80",
                    alternatives: [{ name: "수제 요거트", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80" }]
                },
                dinner: { 
                    name: "한우 불고기 & 백김치", 
                    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80",
                    recipe: { ingredients: ["다진 소고기 40g", "양파 10g", "배즙 1큰술", "아기 간장 0.5작은술"], steps: ["1. 소고기에 양파와 배즙, 간장으로 밑간을 합니다.", "2. 팬에 고기를 볶아 밥과 함께 제공합니다."] },
                    alternatives: [{ name: "돼지고기 수육", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80" }]
                }
            },
            "화": {
                breakfast: { name: "애호박 느타리버섯볶음 & 밥", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80" },
                lunch: { name: "새우 살 야채 전 & 뭇국", image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80" },
                snack: { name: "고구마 매쉬", image: "https://images.unsplash.com/photo-1596040309792-953329598f44?auto=format&fit=crop&w=500&q=80" },
                dinner: { name: "대구살 조림 & 시금치나물", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" }
            },
            "수": { breakfast: { name: "프렌치 토스트 & 우유", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80" }, lunch: { name: "소고기 뭇국 & 잡곡밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" }, snack: { name: "치즈 조각 & 배", image: "https://images.unsplash.com/photo-1486297678162-ad2a19b05844?auto=format&fit=crop&w=500&q=80" }, dinner: { name: "생선전 & 두부 조림", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80" } },
            "목": { breakfast: { name: "전복죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" }, lunch: { name: "닭다리살 오븐구이 & 찐 채소", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80" }, snack: { name: "찐 옥수수", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=500&q=80" }, dinner: { name: "된장국 & 계란찜", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80" } },
            "금": { breakfast: { name: "바나나 팬케이크", image: "https://images.unsplash.com/photo-1506084868730-3423e9339e05?auto=format&fit=crop&w=500&q=80" }, lunch: { name: "함박 스테이크 & 잡곡밥", image: "https://images.unsplash.com/photo-1529042410759-ad81203b1b19?auto=format&fit=crop&w=500&q=80" }, snack: { name: "수제 쌀쿠키", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=80" }, dinner: { name: "카레 라이스 & 백김치", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=500&q=80" } },
            "토": { breakfast: { name: "소고기 미역 죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" }, lunch: { name: "연어 구이 & 브로콜리", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80" }, snack: { name: "요거트 볼", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80" }, dinner: { name: "닭가슴살 간장 조림 & 진밥", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80" } },
            "일": { breakfast: { name: "오트밀 과일 죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" }, lunch: { name: "아기용 짜장밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=500&q=80" }, snack: { name: "배 & 딸기", image: "https://images.unsplash.com/photo-1541491008689-b5d3c6615e2e?auto=format&fit=crop&w=500&q=80" }, dinner: { name: "소고기 된장국 & 두부부침", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80" } }
        }
    }
};

class BabyFoodRecommendation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.activeDay = "월";
        this.shuffledMeals = { breakfast: null, lunch: null, snack: null, dinner: null };
    }

    connectedCallback() {
        this.age = parseInt(this.getAttribute('age'));
        this.render();
    }

    getRecommendationData(age) {
        if (age >= 9 && age <= 12) return weeklyFoodData["9-12"];
        if (age >= 13 && age <= 18) return weeklyFoodData["13-18"];
        return null; 
    }

    shuffleMeal(mealType) {
        const data = this.getRecommendationData(this.age);
        if (!data || !data.days[this.activeDay]) return;
        
        const currentMeal = data.days[this.activeDay][mealType];
        if (currentMeal.alternatives && currentMeal.alternatives.length > 0) {
            const displayedName = this.shuffledMeals[mealType] ? this.shuffledMeals[mealType].name : currentMeal.name;
            const availableOptions = [currentMeal, ...currentMeal.alternatives].filter(m => m.name !== displayedName);
            
            const randomIndex = Math.floor(Math.random() * availableOptions.length);
            this.shuffledMeals[mealType] = availableOptions[randomIndex];
            this.render();
        }
    }

    toggleRecipe(mealType) {
        const card = this.shadowRoot.querySelector(`.meal-card.${mealType}`);
        card.classList.toggle('recipe-active');
    }

    render() {
        const data = this.getRecommendationData(this.age);
        if (!data) {
            this.shadowRoot.innerHTML = `<p style="padding: 20px; text-align: center;">9~18개월 사이의 상세 일주일 식단이 준비되어 있습니다. (다른 개월수는 순차적으로 업데이트 중입니다.)</p>`;
            return;
        }

        const dayData = data.days[this.activeDay];
        const days = ["월", "화", "수", "목", "금", "토", "일"];

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; margin-top: 2rem; color: var(--text-color, #333); }
                .dashboard { background: var(--secondary-color, #f8f9fa); border-radius: 24px; padding: 1.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
                .header { text-align: center; margin-bottom: 2rem; }
                .header h3 { color: var(--primary-color, #ff6b6b); font-size: 1.6rem; margin: 0.5rem 0; }
                
                .day-tabs { display: flex; justify-content: center; gap: 8px; margin-bottom: 2rem; overflow-x: auto; padding-bottom: 10px; }
                .day-tab { padding: 10px 18px; border-radius: 12px; background: white; border: 1px solid var(--border-color); cursor: pointer; font-weight: bold; transition: 0.3s; white-space: nowrap; }
                .day-tab.active { background: var(--primary-color); color: white; border-color: var(--primary-color); }

                .meal-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem; }
                .meal-card { background: white; border-radius: 20px; overflow: hidden; border: 1px solid var(--border-color); position: relative; transition: transform 0.3s; padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between; }
                .meal-card:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
                
                .meal-type-badge { display: inline-block; background: #fff0f0; color: var(--primary-color); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; margin-bottom: 0.8rem; width: fit-content; }
                
                .meal-name { font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem; color: #333; display: flex; justify-content: space-between; align-items: center; gap: 10px; }
                
                .btn { padding: 10px 15px; border-radius: 10px; border: none; cursor: pointer; font-size: 0.9rem; font-weight: 600; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 5px; text-decoration: none; }
                .btn-shuffle { background: #e7f5ff; color: #228be6; font-size: 0.8rem; padding: 6px 10px; }
                .btn-recipe { background: #f1f3f5; color: #495057; width: 100%; margin-bottom: 8px; }
                .btn-link { background: #e3faf3; color: #099268; width: 100%; }
                
                .recipe-content { display: none; margin-top: 15px; padding: 15px; background: #f8f9fa; border-radius: 12px; font-size: 0.9rem; line-height: 1.6; }
                .recipe-active .recipe-content { display: block; }
                .recipe-active .btn-recipe { background: #adb5bd; color: white; }

                .growth-tip { margin-top: 2rem; background: #fff4f4; padding: 1.2rem; border-radius: 15px; border-left: 5px solid var(--primary-color); font-size: 0.95rem; }
                
                [data-theme="dark"] .day-tab, [data-theme="dark"] .meal-card { background: #2d2d2d; color: white; border-color: #444; }
                [data-theme="dark"] .meal-name { color: #eee; }
                [data-theme="dark"] .dashboard { background: #1a1a1a; }
                [data-theme="dark"] .recipe-content { background: #383838; color: #ddd; }
                [data-theme="dark"] .btn-recipe { background: #444; color: #ccc; }
                [data-theme="dark"] .btn-link { background: #1b2b24; color: #63e6be; }
            </style>
            
            <div class="dashboard">
                <div class="header">
                    <div style="font-weight: bold; color: #777; margin-bottom: 5px;">👶 ${this.age}개월 맞춤 영양 대시보드</div>
                    <h3>${data.title}</h3>
                </div>

                <div class="day-tabs">
                    ${days.map(d => `<div class="day-tab ${this.activeDay === d ? 'active' : ''}" onclick="this.getRootNode().host.setDay('${d}')">${d}요일</div>`).join('')}
                </div>

                <div class="meal-grid">
                    ${["breakfast", "lunch", "snack", "dinner"].map(type => {
                        const meal = this.shuffledMeals[type] || dayData[type];
                        const icon = type === "breakfast" ? "☀️" : type === "lunch" ? "🕛" : type === "snack" ? "🍎" : "🌙";
                        const label = type === "breakfast" ? "아침" : type === "lunch" ? "점심" : type === "snack" ? "간식" : "저녁";
                        const hasAlternatives = (dayData[type].alternatives && dayData[type].alternatives.length > 0);
                        
                        // 외부 검색 링크 생성 (네이버 검색 결과)
                        const searchUrl = `https://search.naver.com/search.naver?query=${encodeURIComponent(this.age + "개월 " + meal.name + " 레시피")}`;

                        return `
                            <div class="meal-card ${type}">
                                <div>
                                    <div class="meal-type-badge">${icon} ${label}</div>
                                    <div class="meal-name">
                                        <span>${meal.name}</span>
                                        ${hasAlternatives ? `<button class="btn btn-shuffle" onclick="this.getRootNode().host.shuffleMeal('${type}')">🔄 셔플</button>` : ''}
                                    </div>
                                </div>
                                
                                <div class="action-buttons">
                                    <button class="btn btn-recipe" onclick="this.getRootNode().host.toggleRecipe('${type}')">
                                        <span>📖 간단 요약 레시피</span>
                                    </button>
                                    <a href="${searchUrl}" target="_blank" class="btn btn-link">
                                        <span>🔍 외부 상세 레시피 보기</span>
                                    </a>
                                    
                                    <div class="recipe-content">
                                        <strong>🥦 주요 재료:</strong><br> ${meal.recipe ? meal.recipe.ingredients.join(', ') : '준비 중입니다.'}<br><br>
                                        <strong>👨‍🍳 조리 방법:</strong><br> ${meal.recipe ? meal.recipe.steps.join('<br>') : '준비 중입니다.'}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="growth-tip">
                    <strong>💡 ${this.activeDay}요일 성장 팁:</strong> ${data.tip}
                </div>
            </div>
        `;
    }

    setDay(day) {
        this.activeDay = day;
        this.shuffledMeals = { breakfast: null, lunch: null, snack: null, dinner: null };
        this.render();
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
