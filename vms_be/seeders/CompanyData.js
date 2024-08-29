import { faker } from '@faker-js/faker/locale/ko';

// 백엔드에서 불러올떄
//`/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`, 
const companyData = [
  {
    name: "에듀넥스트",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에듀넥스트는 현대 교육의 혁신을 선도하는 스타트업으로, 인공지능 기술을 활용하여 개인 맞춤형 학습 플랫폼을 제공합니다.\n\n" +
      "최근 교육 분야에서 인공지능의 중요성이 급부상함에 따라, 에듀넥스트는 학습자의 개별적인 학습 스타일과 속도에 맞춘 최적의 학습 경험을 설계하고 있습니다. 우리의 플랫폼은 최신 AI 알고리즘을 통해 학생들의 강점과 약점을 분석하고, 맞춤형 학습 경로를 제시하여 학습 효율성을 극대화합니다.\n\n" +
      "다양한 교육 데이터를 기반으로 하는 이 시스템은 학습자의 성과를 실시간으로 모니터링하고, 필요에 따라 조정할 수 있는 유연성을 제공합니다. 우리는 교육의 개인화와 최적화를 통해 학습자들이 자신의 목표를 효과적으로 달성할 수 있도록 지원하며, 전 세계 학습자들에게 혁신적인 교육 솔루션을 제공하는 것을 목표로 하고 있습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "코딩마스터",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "코딩마스터는 청소년을 위한 코딩 교육에 특화된 플랫폼을 운영하는 기업으로, 미래의 디지털 리더를 양성하기 위해 최선을 다하고 있습니다.\n\n" +
      "코딩마스터는 컴퓨터 프로그래밍의 기초부터 고급 기술까지 포괄적인 교육 과정을 제공하며, 특히 실습 중심의 접근 방식을 채택하여 학습자들이 실제 문제를 해결하며 코딩 능력을 쌓을 수 있도록 돕습니다. 우리의 커리큘럼은 최신 기술 트렌드와 업계 요구에 맞춰 지속적으로 업데이트되며, 학생들이 글로벌 경쟁력을 갖출 수 있도록 지원합니다.\n\n" +
      "또한, 개별 학습 진도를 추적하고 피드백을 제공하는 기능을 통해 학습자의 진행 상황을 체계적으로 관리하며, 더 나아가 코딩 교육의 새로운 기준을 제시하고자 합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "러닝큐브",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "러닝큐브는 게이미피케이션을 기반으로 한 온라인 학습 플랫폼을 제공하여 학습의 재미와 효율성을 동시에 추구합니다.\n\n" +
      "우리는 전통적인 학습 방법에서 벗어나 학습자가 게임처럼 학습 목표를 달성할 수 있도록 다양한 도전 과제와 보상 시스템을 도입하고 있습니다. 이러한 접근 방식은 학습자의 참여를 유도하고, 자연스럽게 학습 동기를 부여하여 효과적인 학습을 가능하게 합니다.\n\n" +
      "또한, 실시간 피드백과 학습 진도 분석 기능을 통해 학습자의 성과를 면밀히 모니터링하며, 필요한 지원을 적시에 제공하여 학습자의 성공적인 목표 달성을 돕습니다. 러닝큐브는 학습의 즐거움을 극대화하고, 학생들이 자발적으로 학습에 몰입할 수 있는 환경을 조성하는 데 중점을 두고 있습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 100 }),
    virtualInvestment: 0,
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "스터디온",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "스터디온은 실시간 온라인 튜터링 서비스를 제공하는 선도적인 스타트업으로, 학생들에게 고품질의 학습 경험을 제공하기 위해 지속적으로 노력하고 있습니다.\n\n" +
      "우리는 다양한 분야의 전문 튜터와 실시간으로 연결하여 학생들이 필요한 시간에 맞춤형 지도를 받을 수 있도록 지원합니다. 이를 통해 학생들은 어려운 개념을 즉시 해결하고, 학습 과정에서 발생할 수 있는 문제를 실시간으로 해결할 수 있습니다.\n\n" +
      "또한, 튜터링 세션은 모두 녹화되어 복습이 가능하며, 학생들이 스스로 학습 내용을 되새기고, 자신감을 가질 수 있도록 돕습니다. 스터디온은 학습자 중심의 서비스를 제공하며, 개인의 학습 목표 달성을 위한 최적의 솔루션을 제공합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "코드잇",
    logoUrl: `/images/company_logo_1.png`,
    description:
      "코드잇은 '온라인 코딩 교육 서비스'를 운영하는 EdTech 스타트업입니다.\n\n" +
      "코딩 교육과 데이터 사이언스 교육에 대한 수요는 급격히 늘어나고 있지만, 아직까지 좋은 교육 서비스를 찾기란 쉽지 않습니다. 이를 해결하고자 코드잇은 모든 강의를 자체 제작하여 퀄리티 높은 콘텐츠를 제공하고, 동시에 코딩 교육에 최적화된 플랫폼을 개발하고 있습니다.\n\n" +
      "모든 강의를 마음껏 들을 수 있는 '코드잇 무제한 멤버십'을 제공하고 있으며, 지난 5년 동안 21만 명의 수강생과 평균 만족도 4.9점이라는 국내 교육 업계에서 보기 드문 성과를 달성하였습니다. 또한 콘텐츠와 기술력을 인정받아 2021년 10월 Series B 투자를 받아 누적 140억 원의 투자를 받았고, 현재 40여 명의 팀원이 같은 목표를 향해 나아가고 있습니다.\n\n" +
      "‘배움의 기쁨을 세상 모두에게.’\n\n" +
      "이것이 코드잇의 비전입니다. 현재는 최고의 코딩 교육 서비스를 국내에서 제공하고 있지만, 이보다 더 큰 그림을 그리고 있습니다. 2021년 상반기부터 영어권 시장 진출을 시작했고, 코딩과 인접한 분야부터 스펙트럼을 넓혀 나갈 계획입니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "헬스체크",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "헬스체크는 개인 건강 관리와 예방을 위한 맞춤형 헬스케어 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 최첨단 기술을 활용하여 개인의 건강 상태를 실시간으로 모니터링하고, 필요한 조치를 취할 수 있는 솔루션을 제공합니다. 헬스체크는 스마트 웨어러블 기기와 모바일 애플리케이션을 통해 건강 데이터를 수집하고 분석하며, 사용자가 건강 목표를 효과적으로 달성할 수 있도록 돕습니다.\n\n" +
      "또한, 개인 맞춤형 건강 관리 계획과 예방적 건강 조언을 통해 보다 건강한 생활을 지원하며, 전반적인 건강 개선을 목표로 하고 있습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "메디브레인",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "메디브레인은 인공지능을 활용한 진단 및 치료 지원 솔루션을 제공하는 헬스케어 스타트업입니다.\n\n" +
      "우리는 최신 AI 기술을 활용하여 의료 전문가들이 보다 정확하고 신속하게 진단과 치료 결정을 내릴 수 있도록 지원합니다. 메디브레인은 방대한 의료 데이터를 분석하여 질병의 조기 발견과 예방을 가능하게 하며, 효율적인 치료 계획을 수립하는 데 도움을 줍니다.\n\n" +
      "이러한 접근 방식은 의료 서비스의 질을 향상시키고, 환자들에게 보다 나은 건강 관리 솔루션을 제공하는 것을 목표로 하고 있습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "핏라인",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "핏라인은 개인의 운동과 식단을 통합적으로 관리하는 플랫폼을 제공합니다.\n\n" +
      "우리는 사용자가 자신의 건강 목표를 설정하고, 이를 달성하기 위해 맞춤형 운동 및 식단 계획을 제안합니다. 핏라인은 실시간 데이터 추적과 분석 기능을 통해 사용자의 진행 상황을 모니터링하며, 필요한 조언과 피드백을 제공합니다.\n\n" +
      "우리의 목표는 사용자가 건강한 생활 습관을 형성하고, 자신에게 맞는 최적의 건강 관리 방법을 찾도록 돕는 것입니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "헬스아이",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "헬스아이는 스마트 건강 모니터링 장비와 애플리케이션을 제공하는 스타트업입니다.\n\n" +
      "우리는 최신 기술을 활용하여 사용자의 건강 상태를 실시간으로 모니터링하고, 건강 문제를 조기에 발견할 수 있는 솔루션을 제공합니다. 헬스아이는 사용자가 쉽게 접근할 수 있는 스마트 기기와 앱을 통해 건강 데이터를 분석하고, 필요한 정보를 제공합니다.\n\n" +
      "이를 통해 사용자가 자신의 건강 상태를 보다 잘 이해하고 관리할 수 있도록 지원하며, 전반적인 건강 개선을 목표로 하고 있습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "다이어트클래스",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "다이어트클래스는 체중 관리와 건강한 식습관 형성을 위한 종합 솔루션을 제공하는 플랫폼입니다.\n\n" +
      "우리는 개인 맞춤형 다이어트 계획과 식단 조절을 통해 사용자가 건강한 체중을 유지할 수 있도록 돕습니다. 다이어트클래스는 사용자의 신체 상태와 목표에 맞춘 체계적인 프로그램을 제공하며, 실시간 피드백과 지원을 통해 목표 달성을 지원합니다.\n\n" +
      "또한, 다양한 건강 자료와 교육 콘텐츠를 통해 사용자가 스스로 건강을 관리할 수 있는 지식과 도구를 제공합니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에듀파크",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에듀파크는 온라인 교육과 학습 관리 시스템을 제공하는 스타트업으로, 교육의 접근성과 효율성을 높이기 위해 노력하고 있습니다.\n\n" +
      "우리는 다양한 교육 콘텐츠와 기능을 갖춘 플랫폼을 통해 학습자들에게 최적의 학습 환경을 제공합니다. 에듀파크는 학습자의 필요에 맞춰 개별화된 학습 경로를 설계하고, 효율적인 학습 관리를 지원합니다.\n\n" +
      "또한, 실시간 피드백과 분석 기능을 통해 학습자의 성과를 모니터링하며, 지속적인 개선을 통해 교육의 질을 높이고 있습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "스마트스터디",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "스마트스터디는 혁신적인 학습 도구와 자료를 제공하여 학생들의 학습 효과를 극대화하는 스타트업입니다.\n\n" +
      "우리는 최신 기술을 활용하여 학생들이 보다 효과적으로 학습할 수 있는 다양한 도구와 자료를 제공합니다. 스마트스터디는 개별 학습자의 요구에 맞춘 맞춤형 학습 경로를 설계하고, 다양한 학습 자원을 통해 학습의 효과를 높입니다.\n\n" +
      "또한, 학습 데이터 분석을 통해 학생들의 진행 상황을 모니터링하고, 필요한 지원을 적시에 제공하여 학습 목표 달성을 돕습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "헬스프렌드",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "헬스프렌드는 개인 건강 관리와 생활 습관 개선을 위한 맞춤형 솔루션을 제공합니다.\n\n" +
      "우리는 최신 헬스케어 기술을 활용하여 사용자의 건강 데이터를 실시간으로 분석하고, 건강 목표를 달성할 수 있는 계획을 제안합니다. 헬스프렌드는 스마트 기기와 애플리케이션을 통해 건강 관리의 전 과정을 지원하며, 사용자가 보다 건강한 생활을 유지할 수 있도록 돕습니다.\n\n" +
      "또한, 다양한 건강 자료와 전문가의 조언을 제공하여 사용자가 스스로 건강을 관리할 수 있도록 지원합니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "테크에듀",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "테크에듀는 최신 기술을 활용한 혁신적인 교육 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 교육의 효율성을 높이기 위해 다양한 기술적 접근 방식을 도입하고, 학습자의 요구에 맞춘 맞춤형 학습 경로를 설계합니다. 테크에듀는 최신 교육 기술을 통해 학습자의 참여와 성과를 극대화하며, 교육의 질을 향상시키는 것을 목표로 하고 있습니다.\n\n" +
      "또한, 실시간 피드백과 분석 기능을 통해 학습자의 진행 상황을 모니터링하며, 필요한 지원을 적시에 제공하여 학습 목표 달성을 돕습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "코드스쿨",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "코드스쿨은 초급부터 고급까지 모든 수준의 학습자를 대상으로 하는 코딩 부트캠프를 운영합니다.\n\n" +
      "우리의 집중 프로그램은 실무 중심의 교육을 통해 학생들이 빠르게 프로그래밍 실력을 쌓을 수 있도록 지원합니다. 최신 기술 트렌드에 맞춘 커리큘럼으로, 졸업 후 바로 실무에 투입될 수 있는 능력을 갖추게 됩니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "스마트러닝",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "스마트러닝은 첨단 기술을 활용하여 학습의 효율성을 높이는 교육 솔루션을 제공합니다.\n\n" +
      "우리는 인공지능과 데이터 분석을 통해 학습자의 필요에 맞춘 맞춤형 교육 콘텐츠를 제공하며, 학습 성과를 실시간으로 모니터링합니다. 스마트러닝은 학습자의 개별 요구에 맞춰 최적의 학습 경로를 설계하고, 효율적인 학습 환경을 조성하는 것을 목표로 하고 있습니다.\n\n" +
      "또한, 다양한 학습 도구와 자료를 제공하여 학습의 질을 높이고, 학습 목표 달성을 지원합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "헬스케어365",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "헬스케어365는 24/7 건강 모니터링 서비스를 제공하여 사용자의 건강을 지속적으로 관리합니다.\n\n" +
      "우리는 최신 헬스케어 기술을 활용하여 사용자의 건강 데이터를 실시간으로 분석하고, 필요에 따라 건강 관리 계획을 제안합니다. 헬스케어365는 스마트 기기와 애플리케이션을 통해 지속적인 건강 모니터링과 예방적 조치를 지원합니다.\n\n" +
      "또한, 다양한 건강 자료와 전문가의 조언을 제공하여 사용자가 스스로 건강을 관리할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에듀프렌드",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에듀프렌드는 개인 맞춤형 학습 계획을 통해 학생들의 학습 성과를 극대화하는 교육 스타트업입니다.\n\n" +
      "우리는 다양한 학습 도구와 자료를 제공하며, 학습자의 요구에 맞춘 맞춤형 학습 경로를 설계합니다. 에듀프렌드는 실시간 피드백과 분석 기능을 통해 학습자의 진행 상황을 모니터링하고, 필요한 지원을 적시에 제공하여 학습 목표 달성을 돕습니다.\n\n" +
      "또한, 교육의 질을 높이기 위해 최신 교육 기술과 혁신적인 접근 방식을 도입하고 있습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "테크부트",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "테크부트는 최신 IT 기술 교육을 집중적으로 제공하는 부트캠프 스타트업입니다.\n\n" +
      "우리의 목표는 단기간에 고급 IT 인재를 양성하는 것이며, 실습과 프로젝트 기반의 학습으로 학습자가 실무에서 바로 활용할 수 있는 기술을 제공합니다. 기업과의 협업을 통해 졸업생에게 취업 기회를 제공합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에듀마스터",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에듀마스터는 개인 맞춤형 학습 솔루션을 제공하여 학습자의 성과를 극대화하는 교육 스타트업입니다.\n\n" +
      "우리는 최신 기술을 활용하여 학습자의 개별 요구에 맞춘 맞춤형 교육 콘텐츠와 학습 경로를 설계합니다. 에듀마스터는 실시간 피드백과 분석 기능을 통해 학습자의 진행 상황을 모니터링하고, 필요한 지원을 적시에 제공하여 학습 목표 달성을 돕습니다.\n\n" +
      "또한, 다양한 학습 도구와 자료를 제공하여 교육의 질을 높이고, 학습자들이 보다 효과적으로 학습할 수 있도록 지원합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "헬스케어존",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "헬스케어존은 개인 건강 관리와 예방을 위한 종합 헬스케어 솔루션을 제공합니다.\n\n" +
      "우리는 최신 기술을 활용하여 사용자의 건강 상태를 실시간으로 분석하고, 건강 목표 달성을 위한 맞춤형 계획을 제안합니다. 헬스케어존은 스마트 기기와 애플리케이션을 통해 건강 관리를 지원하며, 사용자에게 필요한 건강 자료와 전문가의 조언을 제공합니다.\n\n" +
      "또한, 건강 관리에 필요한 다양한 도구와 자료를 제공하여 사용자가 건강한 생활을 유지할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "테크노에듀",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "테크노에듀는 최신 기술을 활용하여 혁신적인 교육 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 인공지능과 데이터 분석을 통해 학습자의 필요에 맞춘 맞춤형 교육 콘텐츠를 제공하며, 학습 성과를 실시간으로 모니터링합니다. 테크노에듀는 학습자의 개별 요구에 맞춰 최적의 학습 경로를 설계하고, 효율적인 학습 환경을 조성하는 것을 목표로 하고 있습니다.\n\n" +
      "또한, 다양한 학습 도구와 자료를 제공하여 학습의 질을 높이고, 학습 목표 달성을 지원합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "헬스케어랩",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "헬스케어랩은 개인 건강 관리와 예방을 위한 혁신적인 헬스케어 솔루션을 제공합니다.\n\n" +
      "우리는 최신 헬스케어 기술을 활용하여 사용자의 건강 상태를 실시간으로 분석하고, 맞춤형 건강 관리 계획을 제안합니다. 헬스케어랩은 스마트 기기와 애플리케이션을 통해 지속적인 건강 모니터링과 예방적 조치를 지원합니다.\n\n" +
      "또한, 다양한 건강 자료와 전문가의 조언을 제공하여 사용자가 건강을 스스로 관리할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "아이티캠퍼스",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "아이티캠퍼스는 직장인과 학생을 위한 맞춤형 부트캠프 프로그램을 제공하여, 빠르게 IT 역량을 강화할 수 있도록 돕는 스타트업입니다.\n\n" +
      "우리의 프로그램은 파트타임과 풀타임으로 나뉘어 있으며, 학생들이 자신의 스케줄에 맞게 학습할 수 있는 유연성을 제공합니다. 특히, 실제 사례 기반의 교육을 통해 실무에서 바로 활용 가능한 기술을 가르칩니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에듀스마트",
    virtualInvestment: 0,
    description:
      "에듀스마트는 최신 기술을 활용하여 학습 효과를 극대화하는 플랫폼을 제공합니다.\n\n" +
      "우리는 인공지능과 데이터 분석을 통해 학습자의 개별적인 요구에 맞춘 맞춤형 교육 콘텐츠를 제공하며, 학습 성과를 실시간으로 모니터링합니다. 에듀스마트는 학습자의 참여도와 성과를 극대화하고, 학습의 질을 높이는 것을 목표로 하고 있습니다.\n\n" +
      "또한, 다양한 학습 도구와 자료를 제공하여 학습자의 목표 달성을 지원하며, 최신 교육 기술을 도입하여 교육의 혁신을 선도하고 있습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "헬스플러스",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "헬스플러스는 건강 관리와 피트니스 목표 달성을 위한 종합 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 개인 맞춤형 운동 계획과 식이 요법을 통해 사용자가 건강한 생활을 유지할 수 있도록 돕습니다. 헬스플러스는 최신 헬스케어 기술을 활용하여 실시간으로 건강 상태를 모니터링하고, 목표 달성을 지원하는 다양한 도구와 자료를 제공합니다.\n\n" +
      "또한, 전문가의 조언과 피드백을 통해 사용자가 효과적으로 건강을 관리할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "코딩큐브",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "코딩큐브는 혁신적인 코딩 교육을 제공하는 스타트업으로, 최신 기술을 활용한 실습 중심의 교육 과정을 운영하고 있습니다.\n\n" +
      "우리는 실습과 프로젝트 기반의 교육을 통해 학습자들이 코딩 능력을 실질적으로 향상시킬 수 있도록 지원합니다. 코딩큐브는 최신 기술 트렌드와 업계 요구에 맞춘 커리큘럼을 제공하며, 학생들이 실무에서 필요한 기술을 익히고, 실제 문제를 해결할 수 있는 능력을 키우는 데 중점을 두고 있습니다.\n\n" +
      "또한, 개별 학습 진도를 추적하고 피드백을 제공하여 학습자의 진행 상황을 체계적으로 관리하며, 학습 목표 달성을 지원합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에듀퓨처",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에듀퓨처는 인공지능을 활용한 교육 콘텐츠 제작을 선도하는 스타트업입니다.\n\n" +
      "우리는 학습자의 성향과 요구에 맞춘 맞춤형 학습 콘텐츠를 제공하며, 실시간 피드백을 통해 학습 효과를 극대화합니다.\n\n" +
      "에듀퓨처는 최신 AI 기술을 사용하여 학습자가 보다 쉽게 이해할 수 있는 콘텐츠를 제작하고 있으며, 다양한 학습 도구와 자료를 통해 학습의 질을 높입니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "비전캠프",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "비전캠프는 AI와 데이터 사이언스 분야의 전문 인재를 양성하는 부트캠프를 제공하는 스타트업입니다.\n\n" +
      "우리의 프로그램은 최신 머신러닝 기술과 데이터 분석 방법론을 학습할 수 있도록 구성되어 있으며, 실무 프로젝트와 함께 심도 있는 교육을 제공합니다. 학습자들은 이 과정에서 데이터 전문가로서의 역량을 키우게 됩니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "러닝플러스",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "러닝플러스는 교육과 게임을 결합한 혁신적인 학습 플랫폼을 제공하는 스타트업입니다.\n\n" +
      "우리는 학습자가 게임처럼 즐겁게 학습할 수 있는 환경을 조성하여 학습 동기를 높이고, 학습 성과를 향상시키고 있습니다.\n\n" +
      "러닝플러스는 다양한 도전 과제와 보상 시스템을 통해 학습자가 자발적으로 학습에 몰입할 수 있도록 돕습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "피트니스팜",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "피트니스팜은 개인 맞춤형 운동 계획과 식단 관리를 제공하는 헬스케어 스타트업입니다.\n\n" +
      "우리는 사용자의 목표와 현재 상태에 맞춘 최적의 건강 관리 방법을 제안하며, 실시간 피드백과 트래킹 기능을 제공합니다.\n\n" +
      "피트니스팜은 건강한 라이프스타일을 유지할 수 있도록 사용자와 함께 성장합니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "스마트팜랩",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "스마트팜랩은 최첨단 기술을 활용하여 농업 생산성을 극대화하는 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 AI 기반의 작물 관리 시스템과 자동화된 재배 기술을 통해 농업 효율성을 높이고 있습니다.\n\n" +
      "스마트팜랩은 환경 친화적인 농업을 추구하며, 지속 가능한 농업 혁신을 이루고자 합니다.",
    category: "애그테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에코워터",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에코워터는 혁신적인 수처리 기술을 개발하여 깨끗한 물을 제공하는 스타트업입니다.\n\n" +
      "우리는 효율적인 정수 시스템과 재활용 가능한 수처리 솔루션을 통해 환경 보호에 기여하고 있습니다.\n\n" +
      "에코워터는 물 부족 문제 해결에 앞장서며, 지속 가능한 수자원 관리를 목표로 합니다.",
    category: "에너지솔루션",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "메디젠",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "메디젠은 유전자 분석을 통해 개인 맞춤형 의료 서비스를 제공하는 바이오 스타트업입니다.\n\n" +
      "우리는 최신 유전자 분석 기술을 활용하여 사용자의 건강 상태와 유전적 특성을 분석하고, 맞춤형 치료 계획을 수립합니다.\n\n" +
      "메디젠은 정밀 의학을 통해 개인의 건강을 최적화하는 데 주력하고 있습니다.",
    category: "바이오",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "클린에너지",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "클린에너지는 친환경 에너지 솔루션을 제공하여 지속 가능한 에너지 미래를 선도하는 스타트업입니다.\n\n" +
      "우리는 태양광, 풍력 등 다양한 재생 가능 에너지를 활용하여 에너지 효율성을 높이고, 탄소 배출을 줄이는 데 기여하고 있습니다.\n\n" +
      "클린에너지는 글로벌 에너지 전환을 가속화하는 데 중점을 두고 있습니다.",
    category: "에너지솔루션",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "모빌리티플러스",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "모빌리티플러스는 자율 주행 기술을 개발하여 미래의 교통 시스템을 혁신하는 스타트업입니다.\n\n" +
      "우리는 자율 주행차의 안전성과 효율성을 높이기 위해 AI와 빅데이터 분석을 결합한 솔루션을 제공합니다.\n\n" +
      "모빌리티플러스는 교통 혼잡을 줄이고, 지속 가능한 도시 교통 시스템을 구축하는 데 기여하고 있습니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에어텍",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에어텍은 차세대 항공 기술을 개발하여 항공 산업의 혁신을 이끄는 스타트업입니다.\n\n" +
      "우리는 효율적인 비행 시스템과 친환경 연료 기술을 통해 항공기의 성능을 향상시키고, 탄소 배출을 줄이는 데 주력하고 있습니다.\n\n" +
      "에어텍은 지속 가능한 항공 여행을 가능하게 하여, 환경 보호에 앞장서고 있습니다.",
    category: "항공기술",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "그린팜",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "그린팜은 도시 농업 솔루션을 제공하여 도시의 식량 자급률을 높이는 스타트업입니다.\n\n" +
      "우리는 도시 내에서 지속 가능한 농업을 실현할 수 있는 스마트 농업 기술을 개발하고 있습니다.\n\n" +
      "그린팜은 도시 농업을 통해 지역 사회에 신선한 식품을 제공하고, 식량 안보를 강화하는 데 기여하고 있습니다.",
    category: "애그테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 })*100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 })*100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "윈드밀",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "윈드밀 태양광 및 풍력 에너지 시스템을 통해 친환경 에너지 공급을 혁신하는 스타트업입니다.\n\n" +
      "우리는 재생 가능 에너지원의 효율성을 극대화하여 탄소 배출을 줄이고, 지속 가능한 에너지 공급망을 구축하는 데 중점을 두고 있습니다.\n\n" +
      "윈드밀 환경 보호와 에너지 자급률 향상에 기여하고 있습니다.",
    category: "에너지솔루션",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "모션헬스",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "모션헬스는 사용자 맞춤형 운동 및 재활 프로그램을 제공하는 스타트업으로, 건강한 삶을 위한 최적의 솔루션을 제공합니다.\n\n" +
      "우리는 AI를 통해 사용자의 움직임을 분석하고, 실시간 피드백을 통해 운동 성과를 극대화하는 것을 목표로 합니다.\n\n" +
      "모션헬스는 모든 사용자가 자신의 건강 목표를 달성할 수 있도록 지원합니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에어퀄리티",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에어퀄리티는 대기 오염 문제를 해결하기 위한 혁신적인 공기 질 모니터링 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 실시간 대기 오염 데이터 분석과 예측을 통해 사용자에게 맞춤형 공기 질 관리 계획을 제안하며, 공기 정화 솔루션과 결합하여 건강한 생활 환경을 유지할 수 있도록 돕습니다.\n\n" +
      "에어퀄리티는 도시와 산업 현장에서 공기 질을 개선하는 데 중점을 두고 있습니다.",
    category: "에너지솔루션",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에듀봇",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에듀봇은 AI 기반의 교육 로봇을 개발하여 미래 교육을 선도하는 스타트업입니다.\n\n" +
      "우리는 학생들의 학습 스타일에 맞춘 개인화된 교육 경험을 제공하며, 상호작용을 통해 학습 동기를 높이고 학습 성과를 향상시킵니다.\n\n" +
      "에듀봇은 모든 학생이 즐겁고 효과적으로 학습할 수 있는 환경을 조성하는 것을 목표로 합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에코비전",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에코비전은 환경 보호를 위한 혁신적인 IoT 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 스마트 센서를 통해 실시간으로 환경 데이터를 수집하고, 이를 분석하여 환경 개선을 위한 맞춤형 솔루션을 제안합니다.\n\n" +
      "에코비전은 지속 가능한 미래를 위해 환경 보호와 자원 절약에 기여하고 있습니다.",
    category: "에너지솔루션",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "코딩부스트",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "코딩부스트는 완전 초보자를 위한 부트캠프를 제공하여, 비전공자도 쉽게 IT 분야로 진출할 수 있도록 돕는 스타트업입니다.\n\n" +
      "우리의 과정은 기초부터 시작해 점진적으로 난이도를 높여가며, 학습자들이 부담 없이 학습할 수 있는 환경을 제공합니다. 또한, 완벽한 학습 지원 시스템을 통해 학습자들이 혼자 공부하는 것 같은 어려움을 느끼지 않도록 돕습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "러닝포인트",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "러닝포인트는 학습 데이터 분석을 통해 학생들의 학습 성과를 극대화하는 교육 플랫폼을 제공하는 스타트업입니다.\n\n" +
      "우리는 학습자의 데이터와 성향을 분석하여 맞춤형 학습 경로를 설계하고, 실시간 피드백을 통해 학습 목표 달성을 지원합니다.\n\n" +
      "러닝포인트는 개인화된 학습 경험을 통해 학생들이 더 나은 성과를 낼 수 있도록 돕습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "그린팜테크",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "그린팜테크는 스마트 농업 기술을 통해 지속 가능한 농업 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 최신 IoT와 AI 기술을 활용하여 작물의 생육 상태를 모니터링하고, 최적의 성장 환경을 제공합니다.\n\n" +
      "그린팜테크는 농업 생산성을 높이고 환경에 미치는 영향을 최소화하는 데 기여하고 있습니다.",
    category: "애그테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에듀프로그래머",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에듀프로그래머는 코딩 교육을 혁신하는 스타트업으로, 실습 중심의 학습 경험을 제공합니다.\n\n" +
      "우리는 학생들이 실제 문제를 해결하며 코딩 실력을 향상시킬 수 있도록 도와주는 맞춤형 커리큘럼을 개발했습니다.\n\n" +
      "에듀프로그래머는 학생들이 코딩의 기초부터 고급 기술까지 습득할 수 있는 환경을 조성합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "스마트클라우드",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "스마트클라우드는 클라우드 기반의 스마트 농업 솔루션을 제공하여 농업 생산성을 높이는 스타트업입니다.\n\n" +
      "우리는 클라우드 플랫폼을 통해 농업 데이터를 실시간으로 분석하고, 작물 관리와 생산 계획을 최적화합니다.\n\n" +
      "스마트클라우드는 농업의 효율성을 극대화하며, 지속 가능한 농업을 위한 혁신적인 방법을 제시합니다.",
    category: "애그테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에듀윈",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에듀윈은 게임 기반 학습 플랫폼을 제공하여 학습의 재미와 효과를 극대화하는 스타트업입니다.\n\n" +
      "우리는 학습자가 게임처럼 즐겁게 학습할 수 있도록 다양한 도전 과제와 보상 시스템을 도입하여 학습 동기를 높입니다.\n\n" +
      "에듀윈은 학습자가 자발적으로 학습에 몰입할 수 있는 환경을 조성하는 것을 목표로 합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "헬스리커버리",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "헬스리커버리는 맞춤형 재활 프로그램을 제공하는 헬스케어 스타트업으로, 개인의 재활 과정을 최적화합니다.\n\n" +
      "우리는 AI를 통해 사용자 데이터를 분석하고, 재활 목표 달성을 위한 맞춤형 계획을 제안합니다.\n\n" +
      "헬스리커버리는 모든 사용자가 효과적으로 재활을 완료하고, 건강한 삶을 유지할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "그린리프",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "그린리프는 친환경 제품과 솔루션을 제공하여 지속 가능한 소비를 촉진하는 스타트업입니다.\n\n" +
      "우리는 재활용 가능하고 환경 친화적인 제품을 개발하며, 환경 보호에 기여하는 다양한 솔루션을 제공합니다.\n\n" +
      "그린리프는 환경 보호와 지속 가능한 생활 방식을 추구하는 소비자들에게 혁신적인 선택지를 제공합니다.",
    category: "클린테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에듀스토리",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에듀스토리는 창의적 사고와 문제 해결 능력을 키우기 위한 교육 콘텐츠를 제공하는 스타트업입니다.\n\n" +
      "우리는 스토리텔링 기반의 학습 콘텐츠를 통해 학생들이 창의력을 발휘할 수 있는 학습 환경을 조성합니다.\n\n" +
      "에듀스토리는 학생들이 재미있게 학습하면서 동시에 창의적 사고를 키울 수 있도록 돕습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "트랜스포메딕스",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "트랜스포메딕스는 차세대 의료 기기와 진단 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 최신 기술을 활용하여 보다 정확하고 신속한 진단을 가능하게 하며, 환자 맞춤형 치료를 지원하는 혁신적인 제품을 개발하고 있습니다.\n\n" +
      "트랜스포메딕스는 의료의 질을 향상시키고, 환자들의 건강한 삶을 지원합니다.",
    category: "의료",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에너지퀘스트",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에너지퀘스트는 신재생 에너지를 효율적으로 관리하고 최적화하는 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 AI 기반의 에너지 관리 시스템을 통해 에너지 소비를 줄이고, 지속 가능한 에너지 활용을 지원합니다.\n\n" +
      "에너지퀘스트는 에너지 전환을 가속화하여 환경 보호와 경제적 이익을 동시에 추구합니다.",
    category: "에너지솔루션",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "어반이노베이션",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "어반이노베이션은 스마트 시티 솔루션을 제공하여 도시 생활의 질을 향상시키는 스타트업입니다.\n\n" +
      "우리는 AI와 IoT를 결합하여 교통, 에너지, 보안 등 다양한 도시 문제를 해결하는 혁신적인 기술을 개발합니다.\n\n" +
      "어반이노베이션은 도시의 효율성을 극대화하고, 지속 가능한 도시 개발을 지원합니다.",
    category: "스마트시티",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "바이오넥스트",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "바이오넥스트는 개인 맞춤형 바이오 솔루션을 개발하여 건강 관리의 새로운 패러다임을 제시하는 스타트업입니다.\n\n" +
      "우리는 유전자 분석과 맞춤형 건강 관리 계획을 통해 사용자들의 건강을 최적화합니다.\n\n" +
      "바이오넥스트는 정밀 의학을 통해 개인의 건강을 향상시키고, 보다 나은 삶을 제공합니다.",
    category: "바이오",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "디지털헬스케어",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "디지털헬스케어는 헬스케어와 IT 기술을 결합하여 개인 맞춤형 건강 관리 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 스마트 기기와 클라우드 기술을 활용하여 건강 데이터를 분석하고, 사용자 맞춤형 건강 관리 계획을 제안합니다.\n\n" +
      "디지털헬스케어는 모든 사람들이 보다 나은 건강 상태를 유지할 수 있도록 돕습니다.",
    category: "디지털헬스",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "클린워터솔루션",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "클린워터솔루션은 깨끗한 물을 제공하기 위해 혁신적인 정수 기술을 개발하는 스타트업입니다.\n\n" +
      "우리는 첨단 필터링 기술과 에너지 효율적인 시스템을 통해 물 부족 문제를 해결하고, 깨끗한 물을 공급합니다.\n\n" +
      "클린워터솔루션은 지속 가능한 수자원 관리와 환경 보호를 목표로 하고 있습니다.",
    category: "에너지테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "미디어엣지",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "미디어엣지는 AI 기반의 미디어 콘텐츠 생성 및 관리 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 자동화된 콘텐츠 제작 도구와 데이터 분석을 통해 고객 맞춤형 미디어 전략을 수립할 수 있도록 돕습니다.\n\n" +
      "미디어엣지는 미디어 산업의 혁신을 주도하고, 고객의 성공을 지원합니다.",
    category: "미디어테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "스페이스퓨처",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "스페이스퓨처는 우주 탐사와 관련된 혁신적인 기술을 개발하는 스타트업으로, 우주 산업의 미래를 선도합니다.\n\n" +
      "우리는 차세대 로켓과 위성 기술을 개발하여 우주 탐사의 새로운 가능성을 열어가고 있습니다.\n\n" +
      "스페이스퓨처는 우주를 보다 안전하고 효율적으로 탐사할 수 있는 기술을 제공합니다.",
    category: "우주항공",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "로봇공학플러스",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "로봇공학플러스는 산업 자동화를 위한 혁신적인 로봇 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 AI와 로봇 기술을 결합하여 생산성과 효율성을 극대화하는 산업용 로봇을 개발하고 있습니다.\n\n" +
      "로봇공학플러스는 제조업과 물류 산업에서의 자동화를 통해 산업 혁신을 이끌어갑니다.",
    category: "로봇공학",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "크립토가드",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "크립토가드는 블록체인 기반의 보안 솔루션을 제공하여 디지털 자산을 보호하는 스타트업입니다.\n\n" +
      "우리는 최신 블록체인 기술을 활용하여 안전하고 투명한 거래 환경을 제공합니다.\n\n" +
      "크립토가드는 모든 사용자가 디지털 자산을 안전하게 관리할 수 있도록 돕습니다.",
    category: "블록체인",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에너지폴리스",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에너지폴리스은 태양광 및 풍력 에너지 시스템을 통해 친환경 에너지 공급을 혁신하는 스타트업입니다.\n\n" +
      "우리는 재생 가능 에너지원의 효율성을 극대화하여 탄소 배출을 줄이고, 지속 가능한 에너지 공급망을 구축하는 데 중점을 두고 있습니다.\n\n" +
      "에너지폴리스은 환경 보호와 에너지 자급률 향상에 기여하고 있습니다.",
    category: "에너지솔루션",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "어반팜",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "어반팜은 도시 내에서 식량 생산을 극대화하기 위한 스마트 농업 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 도시 환경에 최적화된 작물 재배 기술과 자동화된 관리 시스템을 통해 효율적인 식량 생산을 지원합니다.\n\n" +
      "어반팜은 지속 가능한 도시 농업을 통해 지역 사회에 신선하고 건강한 식품을 공급하는 것을 목표로 합니다.",
    category: "애그테크",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "제로모빌",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "제로모빌은 자율주행 전기차를 개발하여 도시 교통의 혁신을 주도하는 스타트업입니다.\n\n" +
      "우리는 효율적이고 친환경적인 자율주행 기술을 통해 교통 혼잡과 탄소 배출을 줄이는 솔루션을 제공합니다.\n\n" +
      "제로모빌은 지속 가능한 미래 교통을 위한 핵심 기술을 개발하고 있습니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에어로딜리버리",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에어로딜리버리는 드론을 활용한 물류 배송 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 빠르고 안전한 드론 배송 서비스를 통해 물류 산업의 효율성을 극대화하고, 배송 시간을 대폭 단축합니다.\n\n" +
      "에어로딜리버리는 공중 물류 네트워크 구축을 통해 미래의 배송 시스템을 혁신하고 있습니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "어반로버",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "어반로버는 도심 내 자율주행 로봇을 개발하여 라스트 마일 배송 문제를 해결하는 스타트업입니다.\n\n" +
      "우리는 자율주행 기술을 통해 도심 내 물류 서비스를 자동화하여, 효율적이고 친환경적인 배송을 제공합니다.\n\n" +
      "어반로버는 미래 도심 물류의 핵심 솔루션을 제시합니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "그린웨이브",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "그린웨이브는 전기차 충전 인프라를 확장하고, 효율적인 충전 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 친환경 전기차의 대중화를 위해 빠르고 안정적인 충전 네트워크를 구축하고 있습니다.\n\n" +
      "그린웨이브는 미래의 전기차 시대를 준비하며, 지속 가능한 이동 수단을 지원합니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "스마트카고",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "스마트카고는 AI 기반의 물류 관리 시스템을 개발하여 물류 산업의 혁신을 주도하는 스타트업입니다.\n\n" +
      "우리는 효율적인 화물 관리와 경로 최적화를 통해 물류 비용을 절감하고, 배송 시간을 단축합니다.\n\n" +
      "스마트카고는 물류 산업의 디지털 전환을 가속화하는 핵심 기술을 제공합니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "플렉스라이드",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "플렉스라이드는 수요 기반의 자율주행 차량 공유 서비스를 제공하는 스타트업입니다.\n\n" +
      "우리는 사용자의 이동 패턴을 분석하여 최적의 차량을 제공하고, 자율주행 기술을 통해 안전하고 편리한 이동을 지원합니다.\n\n" +
      "플렉스라이드는 도시 교통 문제를 해결하고, 지속 가능한 이동 수단을 제공합니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "로드스마트",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "로드스마트는 스마트 도로 인프라를 개발하여 자율주행 차량의 안전성과 효율성을 높이는 스타트업입니다.\n\n" +
      "우리는 도로에 설치된 스마트 센서를 통해 실시간 교통 정보를 제공하고, 자율주행 차량의 경로를 최적화합니다.\n\n" +
      "로드스마트는 자율주행 시대의 안전한 도로 환경을 구축합니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에어리프트",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에어리프트는 도심 내 고속 이동을 위한 개인용 항공기(PAV)를 개발하는 스타트업입니다.\n\n" +
      "우리는 도시의 교통 혼잡을 줄이고, 빠르고 효율적인 이동 수단을 제공하여 도심 내 이동의 혁신을 주도합니다.\n\n" +
      "에어리프트는 도심 항공 이동의 새로운 패러다임을 제시합니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "하이퍼모션",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "하이퍼모션은 고속 이동 시스템을 개발하여 장거리 교통의 혁신을 이끄는 스타트업입니다.\n\n" +
      "우리는 진공 튜브 내 고속 열차 기술을 통해, 빠르고 효율적인 장거리 이동 수단을 제공합니다.\n\n" +
      "하이퍼모션은 장거리 이동의 시간을 획기적으로 줄이고, 미래 교통의 가능성을 확장합니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "카고플로우",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "카고플로우는 해상 물류와 항만 운영의 효율성을 극대화하는 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 AI와 빅데이터를 활용하여 해상 물류 경로를 최적화하고, 항만 운영을 자동화하여 비용을 절감합니다.\n\n" +
      "카고플로우는 글로벌 물류 산업의 디지털 전환을 가속화합니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "크립토체인",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "크립토체인은 블록체인 기반의 금융 솔루션을 제공하여 글로벌 금융 거래의 투명성과 안전성을 높이는 스타트업입니다.\n\n" +
      "우리는 빠르고 안전한 결제 시스템을 통해 기존 금융의 한계를 뛰어넘는 솔루션을 제공합니다.\n\n" +
      "크립토체인은 글로벌 금융의 새로운 표준을 제시합니다.",
    category: "블록체인",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "블록시큐어",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "블록시큐어는 블록체인 기반의 사이버 보안 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 분산형 보안 시스템을 통해 해킹과 데이터 유출을 방지하고, 디지털 자산을 안전하게 보호합니다.\n\n" +
      "블록시큐어는 기업과 개인 모두가 안심하고 사용할 수 있는 보안 환경을 조성합니다.",
    category: "블록체인",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "디지털레저",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "디지털레저는 블록체인 기술을 활용하여 디지털 자산의 안전한 관리와 거래를 지원하는 스타트업입니다.\n\n" +
      "우리는 투명하고 신뢰할 수 있는 디지털 자산 관리 플랫폼을 제공하여, 개인과 기업의 자산 보호를 돕습니다.\n\n" +
      "디지털레저는 디지털 경제의 새로운 기회를 제공합니다.",
    category: "블록체인",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "스마트컨트랙트",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "스마트컨트랙트는 자동화된 계약 관리와 이행을 지원하는 블록체인 기반의 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 신뢰할 수 있는 스마트 계약 시스템을 통해 계약의 투명성과 효율성을 극대화합니다.\n\n" +
      "스마트컨트랙트는 법적 분쟁을 줄이고, 계약 이행 과정을 혁신적으로 개선합니다.",
    category: "블록체인",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "에코블록",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "에코블록은 블록체인 기술을 활용하여 환경 보호와 지속 가능한 자원 관리를 지원하는 스타트업입니다.\n\n" +
      "우리는 투명한 자원 관리와 친환경 프로젝트의 자금 조달을 가능하게 하는 플랫폼을 제공합니다.\n\n" +
      "에코블록은 환경 보호를 위한 혁신적인 기술을 개발하고, 지속 가능한 미래를 만들어갑니다.",
    category: "블록체인",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "헬스체인",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "헬스체인은 블록체인 기술을 통해 개인의 건강 데이터를 안전하게 관리하고 공유하는 플랫폼을 제공하는 스타트업입니다.\n\n" +
      "우리는 의료 기관 간의 데이터 공유를 촉진하며, 환자의 개인정보를 보호하는 솔루션을 제공합니다.\n\n" +
      "헬스체인은 의료 데이터의 투명성과 신뢰성을 높이는 데 기여합니다.",
    category: "블록체인",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "아트블록",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "아트블록은 블록체인 기술을 활용하여 디지털 아트와 창작물의 소유권을 보호하고 거래를 지원하는 스타트업입니다.\n\n" +
      "우리는 예술가들이 디지털 작품의 진위성과 소유권을 보장받을 수 있도록 돕고, 글로벌 마켓플레이스를 제공합니다.\n\n" +
      "아트블록은 디지털 아트 시장의 투명성과 신뢰를 높입니다.",
    category: "블록체인",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "트랜스체인",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "트랜스체인은 블록체인 기술을 활용하여 글로벌 무역과 물류의 투명성과 효율성을 극대화하는 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 물류 흐름을 실시간으로 추적하고, 거래의 투명성을 보장하는 플랫폼을 개발하고 있습니다.\n\n" +
      "트랜스체인은 글로벌 공급망 관리의 혁신을 주도합니다.",
    category: "블록체인",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 199 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "파이낸스체인",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "파이낸스체인은 블록체인 기반의 탈중앙화 금융(DeFi) 플랫폼을 제공하여 금융 서비스의 혁신을 이끄는 스타트업입니다.\n\n" +
      "우리는 은행 없이도 안전하고 투명한 금융 거래를 가능하게 하며, 금융 접근성을 높이는 솔루션을 제공합니다.\n\n" +
      "파이낸스체인은 모든 사람이 평등하게 금융 서비스를 이용할 수 있는 환경을 구축합니다.",
    category: "블록체인",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  },
  {
    name: "솔라체인",
    logoUrl: `/images/company_logo_${faker.number.int({ min: 2, max: 46 })}.png`,
    description:
      "솔라체인은 블록체인 기술을 활용하여 재생 가능한 에너지 거래와 관리 플랫폼을 제공하는 스타트업입니다.\n\n" +
      "우리는 태양광, 풍력 등의 에너지원 거래를 투명하게 관리하고, 사용자가 직접 에너지를 거래할 수 있는 환경을 제공합니다.\n\n" +
      "솔라체인은 에너지 시장의 탈중앙화와 투명성을 향상시킵니다.",
    category: "블록체인",
    totalInvestment: faker.number.int({ min: 10, max: 199 }) * 100000000,
    virtualInvestment: 0,
    revenue: faker.number.int({ min: 10, max: 100 }) * 100000000,
    employees: faker.number.int({ min: 10, max: 150 }),
    mySelectionCount: faker.number.int({ min: 100, max: 10000 }),
    CompareSelectionCount: faker.number.int({ min: 100, max: 10000 }),
  }
];

export default companyData;
