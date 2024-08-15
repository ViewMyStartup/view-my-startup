const startups = [
    {
      "name": "에듀넥스트",
      "description": "에듀넥스트는 인공지능을 활용한 맞춤형 학습 플랫폼을 제공하는 스타트업입니다.",
      "category": "에듀테크",
      "total_investment": 5000000,
      "revenue": 12000000,
      "employees": 50
    },
    {
      "name": "코딩마스터",
      "description": "코딩마스터는 청소년들을 위한 코딩 교육 플랫폼을 운영하는 기업입니다.",
      "category": "에듀테크",
      "total_investment": 3000000,
      "revenue": 8000000,
      "employees": 35
    },
    {
      "name": "러닝큐브",
      "description": "러닝큐브는 게이미피케이션을 적용한 온라인 학습 플랫폼을 제공합니다.",
      "category": "에듀테크",
      "total_investment": 4000000,
      "revenue": 10000000,
      "employees": 40
    },
    {
      "name": "스터디온",
      "description": "스터디온은 실시간 온라인 튜터링 서비스를 제공하는 스타트업입니다.",
      "category": "에듀테크",
      "total_investment": 2000000,
      "revenue": 6000000,
      "employees": 25
    },
    {
      "name": "에듀브릭",
      "description": "에듀브릭은 블록체인 기반 학습 인증 플랫폼을 운영하는 기업입니다.",
      "category": "블록체인",
      "total_investment": 3500000,
      "revenue": 9000000,
      "employees": 30
    },
    {
      "name": "핏러닝",
      "description": "핏러닝은 개인 맞춤형 피트니스 교육을 제공하는 플랫폼입니다.",
      "category": "헬스테크",
      "total_investment": 2500000,
      "revenue": 7000000,
      "employees": 20
    },
    {
      "name": "코딩클래스",
      "description": "코딩클래스는 초등학생들을 위한 기초 코딩 교육 플랫폼을 운영합니다.",
      "category": "에듀테크",
      "total_investment": 1500000,
      "revenue": 5000000,
      "employees": 15
    },
    {
      "name": "에코러닝",
      "description": "에코러닝은 환경 보호를 주제로 한 교육 프로그램을 제공합니다.",
      "category": "소셜벤처",
      "total_investment": 1000000,
      "revenue": 3000000,
      "employees": 10
    },
    {
      "name": "비즈테크",
      "description": "비즈테크는 스타트업을 위한 비즈니스 교육과 멘토링 서비스를 제공합니다.",
      "category": "비즈니스",
      "total_investment": 4500000,
      "revenue": 11000000,
      "employees": 55
    },
    {
      "name": "헬로월드",
      "description": "헬로월드는 어린이들에게 프로그래밍 기초를 가르치는 에듀테크 기업입니다.",
      "category": "에듀테크",
      "total_investment": 2000000,
      "revenue": 6000000,
      "employees": 25
    },
    {
      "name": "마이핏",
      "description": "마이핏은 개인 트레이너와 연결해주는 헬스케어 플랫폼입니다.",
      "category": "헬스케어",
      "total_investment": 3000000,
      "revenue": 7500000,
      "employees": 30
    },
    {
      "name": "피플네트워크",
      "description": "피플네트워크는 소셜 네트워킹과 교육을 결합한 플랫폼입니다.",
      "category": "소셜테크",
      "total_investment": 2500000,
      "revenue": 7000000,
      "employees": 20
    },
    {
      "name": "테크스쿨",
      "description": "테크스쿨은 최신 기술을 기반으로 한 직무 교육을 제공합니다.",
      "category": "에듀테크",
      "total_investment": 3500000,
      "revenue": 9000000,
      "employees": 40
    },
    {
      "name": "스마트에듀",
      "description": "스마트에듀는 스마트폰을 활용한 이동식 학습 플랫폼입니다.",
      "category": "모바일",
      "total_investment": 2000000,
      "revenue": 5500000,
      "employees": 18
    },
    {
      "name": "이러닝팩토리",
      "description": "이러닝팩토리는 기업 맞춤형 온라인 학습 솔루션을 제공합니다.",
      "category": "B2B",
      "total_investment": 5000000,
      "revenue": 12000000,
      "employees": 60
    },
    {
      "name": "넥스트랩",
      "description": "넥스트랩은 혁신적인 교육 기술 개발에 중점을 둔 스타트업입니다.",
      "category": "기술개발",
      "total_investment": 4500000,
      "revenue": 11000000,
      "employees": 50
    },
    {
      "name": "에듀케어",
      "description": "에듀케어는 교육과 상담을 결합한 새로운 학습 지원 플랫폼입니다.",
      "category": "에듀테크",
      "total_investment": 3000000,
      "revenue": 8000000,
      "employees": 35
    },
    {
      "name": "온더런",
      "description": "온더런은 바쁜 직장인들을 위한 이동 중 학습 플랫폼입니다.",
      "category": "모바일",
      "total_investment": 2500000,
      "revenue": 6500000,
      "employees": 22
    },
    {
      "name": "스킬업",
      "description": "스킬업은 직장인들의 스킬 업그레이드를 위한 온라인 교육 플랫폼입니다.",
      "category": "직무교육",
      "total_investment": 4000000,
      "revenue": 10000000,
      "employees": 42
    },
    {
      "name": "크리에이티브마인드",
      "description": "크리에이티브마인드는 창의력 개발을 위한 교육 프로그램을 제공합니다.",
      "category": "창의교육",
      "total_investment": 1500000,
      "revenue": 4500000,
      "employees": 15
    },
    {
      "name": "커넥트러닝",
      "description": "커넥트러닝은 전 세계 전문가들과 연결된 글로벌 학습 플랫폼입니다.",
      "category": "글로벌",
      "total_investment": 3500000,
      "revenue": 9000000,
      "employees": 35
    },
    {
      "name": "애니웨어런",
      "description": "애니웨어런은 언제 어디서나 접근 가능한 온라인 학습 플랫폼입니다.",
      "category": "에듀테크",
      "total_investment": 3000000,
      "revenue": 7500000,
      "employees": 28
    },
    {
      "name": "이코노믹스쿨",
      "description": "이코노믹스쿨은 경제 및 금융 교육을 위한 온라인 학습 플랫폼입니다.",
      "category": "금융교육",
      "total_investment": 2000000,
      "revenue": 5500000,
      "employees": 20
    },
    {
      "name": "헬스러닝",
      "description": "헬스러닝은 건강과 피트니스 관련 교육을 제공하는 스타트업입니다.",
      "category": "헬스케어",
      "total_investment": 2800000,
      "revenue": 6500000,
      "employees": 25
    },
    {
      "name": "비즈니스랩",
      "description": "비즈니스랩은 창업과 비즈니스 전략 교육에 중점을 둔 플랫폼입니다.",
      "category": "비즈니스",
      "total_investment": 4500000,
      "revenue": 10000000,
      "employees": 50
    },
    {
      "name": "리더십아카데미",
      "description": "리더십아카데미는 리더십 개발을 위한 고급 교육 프로그램을 제공합니다.",
      "category": "리더십",
      "total_investment": 3200000,
      "revenue": 8000000,
      "employees": 30
    },
    {
      "name": "지니어스랩",
      "description": "지니어스랩은 천재 교육을 위한 혁신적인 교육 플랫폼입니다.",
      "category": "특수교육",
      "total_investment": 4000000,
      "revenue": 9000000,
      "employees": 32
    },
    {
      "name": "프로그래밍101",
      "description": "프로그래밍101은 초보자를 위한 코딩 기초 교육 플랫폼입니다.",
      "category": "에듀테크",
      "total_investment": 2500000,
      "revenue": 6000000,
      "employees": 25
    },
    {
      "name": "크리애티브러닝",
      "description": "크리애티브러닝은 예술과 창의성을 위한 온라인 교육 플랫폼입니다.",
      "category": "예술교육",
      "total_investment": 3000000,
      "revenue": 7000000,
      "employees": 28
    },
    {
      "name": "아이디어팩토리",
      "description": "아이디어팩토리는 혁신적 아이디어 개발을 위한 창의적 교육 프로그램을 제공합니다.",
      "category": "창의교육",
      "total_investment": 2000000,
      "revenue": 5000000,
      "employees": 18
    }
];

