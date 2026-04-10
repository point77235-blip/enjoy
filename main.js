const weeklyFoodData = {
    "9-12": {
        title: "후기 이유식 (무른 밥 단계)",
        tip: "하루 세 번 식사를 시작하고 핑거 푸드를 통해 스스로 먹는 연습을 도와주세요.",
        days: {
            "월": {
                breakfast: { 
                    name: "소고기 청경채 무른밥", 
                    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", 
                    recipe: { ingredients: ["불린 쌀 50g", "소고기 안심 30g", "청경채 15g"], steps: ["1. 소고기는 핏물을 빼고 삶아서 다집니다.", "2. 청경채는 데친 후 잘게 다집니다.", "3. 냄비에 쌀과 재료를 넣고 푹 끓입니다."] }, 
                    alternatives: [{ name: "소고기 브로콜리 죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", recipe: { ingredients: ["쌀 50g", "소고기 30g", "브로콜리 20g"], steps: ["1. 소고기와 브로콜리를 다집니다.", "2. 쌀과 함께 끓여 죽을 만듭니다."] } }] 
                },
                lunch: { 
                    name: "닭고기 고구마 진밥", 
                    image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80", 
                    recipe: { ingredients: ["불린 쌀 50g", "닭가슴살 30g", "고구마 20g"], steps: ["1. 닭가슴살은 삶아 결대로 찢어 다집니다.", "2. 고구마는 쪄서 으깹니다.", "3. 쌀과 함께 재료를 넣고 끓입니다."] }, 
                    alternatives: [{ name: "닭고기 당근 무른밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80", recipe: { ingredients: ["쌀 50g", "닭고기 30g", "당근 15g"], steps: ["1. 모든 재료를 다져서 푹 익힙니다."] } }] 
                },
                snack: { 
                    name: "찐 단호박 조각", 
                    image: "https://images.unsplash.com/photo-1506807803488-8eafc15316c7?auto=format&fit=crop&w=300&q=80",
                    recipe: { ingredients: ["단호박 50g"], steps: ["1. 단호박 씨를 제거하고 껍질을 벗깁니다.", "2. 찜기에 15분간 쪄서 먹기 좋게 자릅니다."] },
                    alternatives: [{ name: "사과 매쉬", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=300&q=80" }]
                },
                dinner: { 
                    name: "흰살생선 야채 무른밥", 
                    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80",
                    recipe: { ingredients: ["대구살 30g", "애호박 15g", "쌀 50g"], steps: ["1. 생선살 가시를 완벽히 제거합니다.", "2. 야채와 함께 쌀을 넣고 끓입니다."] },
                    alternatives: [{ name: "새우 살 야채죽", image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=300&q=80" }]
                }
            },
            "화": {
                breakfast: { name: "닭고기 버섯 무른밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "소고기 무 무른밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] },
                lunch: { name: "소고기 배 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "한우 양배추 죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] },
                snack: { name: "바나나 퓨레", image: "https://images.unsplash.com/photo-1481349579423-ba96c36e6b9a?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "아기 치즈", image: "https://images.unsplash.com/photo-1486297678162-ad2a19b05844?auto=format&fit=crop&w=300&q=80"}] },
                dinner: { name: "계란 노른자 채소죽", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "두부 야채 무른밥", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80"}] }
            },
            "수": { 
                breakfast: { name: "한우 두부 무른밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "닭가슴살 감자 무른밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80"}] }, 
                lunch: { name: "대구살 애호박 진밥", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "연어 채소 죽", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80"}] }, 
                snack: { name: "아기 요거트", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "삶은 감자", image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&w=300&q=80"}] }, 
                dinner: { name: "닭안심 감자 무른밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "야채 계란죽", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80"}] } 
            },
            "목": { breakfast: { name: "소고기 당근 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "닭안심 고구마 죽", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80"}] }, lunch: { name: "닭가슴살 양배추 죽", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "소고기 시금치 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] }, snack: { name: "사과 조각", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "배 퓨레", image: "https://images.unsplash.com/photo-1541491008689-b5d3c6615e2e?auto=format&fit=crop&w=300&q=80"}] }, dinner: { name: "흰살생선 배추 무른밥", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "소고기 무 죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] } },
            "금": { breakfast: { name: "닭고기 브로콜리 무른밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "소고기 버섯 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] }, lunch: { name: "소고기 단호박 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "닭고기 고구마 진밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80"}] }, snack: { name: "고구마 매쉬", image: "https://images.unsplash.com/photo-1596040309792-953329598f44?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "찐 밤", image: "https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&w=300&q=80"}] }, dinner: { name: "계란 야채 진밥", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "흰살생선 야채 진밥", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80"}] } },
            "토": { breakfast: { name: "한우 표고버섯 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "닭안심 양배추 죽", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80"}] }, lunch: { name: "대구살 시금치 진밥", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "소고기 비트 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] }, snack: { name: "치즈 조각", image: "https://images.unsplash.com/photo-1486297678162-ad2a19b05844?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "식빵 껍질 제거 조각", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80"}] }, dinner: { name: "닭고기 무 무른밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "계란 단호박 죽", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80"}] } },
            "일": { breakfast: { name: "소고기 청경채 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "닭가슴살 고구마 무른밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80"}] }, lunch: { name: "닭안심 고구마 무른밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "소고기 브로콜리 진밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] }, snack: { name: "사과 퓨레", image: "https://images.unsplash.com/photo-1541491008689-b5d3c6615e2e?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "요거트", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80"}] }, dinner: { name: "흰살생선 야채 진밥", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "계란 감자 죽", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80"}] } }
        }
    },
    "13-18": {
        title: "유아식 초기 (진밥과 반찬)",
        tip: "서서히 어른 음식과 비슷하게 진행하되, 간은 아주 약하게(저염식) 해주세요.",
        days: {
            "월": {
                breakfast: { name: "야채 계란 진밥 & 미역국", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80", recipe: { ingredients: ["진밥 100g", "계란 1개", "다진 야채 20g", "건미역 소량"], steps: ["1. 야채를 볶다가 계란을 넣어 스크램블 합니다.", "2. 진밥과 섞어줍니다.", "3. 불린 미역으로 맑은 국을 끓입니다."] }, alternatives: [{ name: "소고기 야채 덮밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80" }] },
                lunch: { name: "닭다리살 간장구이 & 두부부침", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "수제 미트볼 & 잡곡밥", image: "https://images.unsplash.com/photo-1529042410759-ad81203b1b19?auto=format&fit=crop&w=300&q=80"}] },
                snack: { name: "우유 & 고구마 말랭이", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "바나나 쉐이크", image: "https://images.unsplash.com/photo-1481349579423-ba96c36e6b9a?auto=format&fit=crop&w=300&q=80"}] },
                dinner: { name: "가시 제거한 갈치구이 & 나물무침", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "소고기 뭇국 & 멸치볶음", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] }
            },
            "화": {
                breakfast: { name: "한우 불고기 덮밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "치킨 카레 라이스", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80"}] },
                lunch: { name: "새우 채소 볶음밥", image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "간장 계란 비빔밥", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80"}] },
                snack: { name: "딸기 & 요거트", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "치즈 토스트", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80"}] },
                dinner: { name: "대구탕 & 애호박 볶음", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "돼지고기 수육 & 백김치", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80"}] }
            },
            "수": { breakfast: { name: "전복죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "소고기 야채 죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] }, lunch: { name: "돼지고기 장조림 & 잡곡밥", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "닭안심 조림 & 진밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80"}] }, snack: { name: "찐 옥수수", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "찐 밤", image: "https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&w=300&q=80"}] }, dinner: { name: "소고기 뭇국 & 시금치나물", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "미역국 & 생선구이", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80"}] } },
            "목": { breakfast: { name: "프렌치 토스트(무염버터)", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "오트밀 사과 죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] }, lunch: { name: "닭가슴살 스테이크 & 찐 채소", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "함박 스테이크", image: "https://images.unsplash.com/photo-1529042410759-ad81203b1b19?auto=format&fit=crop&w=300&q=80"}] }, snack: { name: "포도", image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "바나나", image: "https://images.unsplash.com/photo-1481349579423-ba96c36e6b9a?auto=format&fit=crop&w=300&q=80"}] }, dinner: { name: "두부 조림 & 멸치 볶음", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "계란말이 & 콩나물국", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80"}] } },
            "금": { breakfast: { name: "소고기 미역 죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "닭가슴살 야채죽", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80"}] }, lunch: { name: "생선전 & 콩나물국", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "불고기 & 백김치", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] }, snack: { name: "수제 쌀쿠키", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "우유", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80"}] }, dinner: { name: "카레 라이스(순한맛)", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "하이라이스", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80"}] } },
            "토": { breakfast: { name: "바나나 팬케이크", image: "https://images.unsplash.com/photo-1506084868730-3423e9339e05?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "스크램블 에그 & 토스트", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80"}] }, lunch: { name: "소고기 감자 볶음 & 잡곡밥", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "닭다리살 오븐구이", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80"}] }, snack: { name: "치즈 스틱", image: "https://images.unsplash.com/photo-1486297678162-ad2a19b05844?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "요거트 볼", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80"}] }, dinner: { name: "연어 구이 & 브로콜리", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "해물 파스타(아기용)", image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=300&q=80"}] } },
            "일": { breakfast: { name: "야채 죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "단호박 타락죽", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"}] }, lunch: { name: "아기용 짜장밥", image: "https://images.unsplash.com/photo-1584263347416-85a18a4524e2?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "오므라이스", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80"}] }, snack: { name: "배", image: "https://images.unsplash.com/photo-1541491008689-b5d3c6615e2e?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "멜론", image: "https://images.unsplash.com/photo-1508317469940-e3df4959cf3f?auto=format&fit=crop&w=300&q=80"}] }, dinner: { name: "소고기 미역국 & 계란찜", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80", alternatives: [{name: "된장국 & 두부부침", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80"}] } }
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
            // 현재 표시된 메뉴(shuffledMeals에 있으면 그것, 없으면 원본)와 다른 것을 선택
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

                .meal-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
                .meal-card { background: white; border-radius: 20px; overflow: hidden; border: 1px solid var(--border-color); position: relative; transition: transform 0.3s; }
                .meal-card:hover { transform: translateY(-5px); }
                
                .meal-image { height: 160px; background-size: cover; background-position: center; position: relative; transition: 0.5s; }
                .meal-image::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.4)); }
                .meal-type-label { position: absolute; top: 12px; left: 12px; background: rgba(255,255,255,0.9); padding: 4px 10px; border-radius: 8px; font-size: 0.8rem; font-weight: bold; color: var(--primary-color); z-index: 1; }
                
                .meal-info { padding: 1.2rem; }
                .meal-name { font-size: 1.1rem; font-weight: bold; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; min-height: 2.4rem; }
                
                .action-btns { display: flex; gap: 8px; }
                .btn { padding: 8px 12px; border-radius: 8px; border: none; cursor: pointer; font-size: 0.85rem; font-weight: 600; transition: 0.2s; }
                .btn-shuffle { background: #e7f5ff; color: #228be6; white-space: nowrap; flex-shrink: 0; }
                .btn-shuffle:hover { background: #d0ebff; }
                .btn-recipe { background: #fff0f0; color: #ff6b6b; width: 100%; margin-top: 10px; }
                .btn-recipe:hover { background: #ffe3e3; }
                
                .recipe-content { display: none; margin-top: 15px; padding-top: 15px; border-top: 1px dashed var(--border-color); font-size: 0.9rem; line-height: 1.6; }
                .recipe-active .recipe-content { display: block; }
                .recipe-active .btn-recipe { background: #ff6b6b; color: white; }

                .growth-tip { margin-top: 2rem; background: #fff4f4; padding: 1.2rem; border-radius: 15px; border-left: 5px solid var(--primary-color); font-size: 0.95rem; }
                
                [data-theme="dark"] .day-tab, [data-theme="dark"] .meal-card { background: #2d2d2d; color: white; }
                [data-theme="dark"] .dashboard { background: #1a1a1a; }
                [data-theme="dark"] .growth-tip { background: #3d2b2b; }
            </style>
            
            <div class="dashboard">
                <div class="header">
                    <div style="font-weight: bold; color: #777;">👶 ${this.age}개월 맞춤 영양 대시보드</div>
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

                        return `
                            <div class="meal-card ${type}">
                                <div class="meal-image" style="background-image: url('${meal.image || 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=300&q=80'}')">
                                    <div class="meal-type-label">${icon} ${label}</div>
                                </div>
                                <div class="meal-info">
                                    <div class="meal-name">
                                        <span>${meal.name}</span>
                                        ${hasAlternatives ? `<button class="btn btn-shuffle" onclick="this.getRootNode().host.shuffleMeal('${type}')">🔄 셔플</button>` : ''}
                                    </div>
                                    <button class="btn btn-recipe" onclick="this.getRootNode().host.toggleRecipe('${type}')">📖 레시피 보기</button>
                                    <div class="recipe-content">
                                        <strong>재료:</strong><br> ${meal.recipe ? meal.recipe.ingredients.join(', ') : '준비 중입니다.'}<br><br>
                                        <strong>조리 순서:</strong><br> ${meal.recipe ? meal.recipe.steps.join('<br>') : '준비 중입니다.'}
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
