import { faker } from '@faker-js/faker/locale/ko';

const companyData = [
  {
    name: "에듀넥스트",
    description:
      "에듀넥스트는 현대 교육의 혁신을 선도하는 스타트업으로, 인공지능 기술을 활용하여 개인 맞춤형 학습 플랫폼을 제공합니다.\n\n" +
      "최근 교육 분야에서 인공지능의 중요성이 급부상함에 따라, 에듀넥스트는 학습자의 개별적인 학습 스타일과 속도에 맞춘 최적의 학습 경험을 설계하고 있습니다. 우리의 플랫폼은 최신 AI 알고리즘을 통해 학생들의 강점과 약점을 분석하고, 맞춤형 학습 경로를 제시하여 학습 효율성을 극대화합니다.\n\n" +
      "다양한 교육 데이터를 기반으로 하는 이 시스템은 학습자의 성과를 실시간으로 모니터링하고, 필요에 따라 조정할 수 있는 유연성을 제공합니다. 우리는 교육의 개인화와 최적화를 통해 학습자들이 자신의 목표를 효과적으로 달성할 수 있도록 지원하며, 전 세계 학습자들에게 혁신적인 교육 솔루션을 제공하는 것을 목표로 하고 있습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo1.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "코딩마스터",
    description:
      "코딩마스터는 청소년을 위한 코딩 교육에 특화된 플랫폼을 운영하는 기업으로, 미래의 디지털 리더를 양성하기 위해 최선을 다하고 있습니다.\n\n" +
      "코딩마스터는 컴퓨터 프로그래밍의 기초부터 고급 기술까지 포괄적인 교육 과정을 제공하며, 특히 실습 중심의 접근 방식을 채택하여 학습자들이 실제 문제를 해결하며 코딩 능력을 쌓을 수 있도록 돕습니다. 우리의 커리큘럼은 최신 기술 트렌드와 업계 요구에 맞춰 지속적으로 업데이트되며, 학생들이 글로벌 경쟁력을 갖출 수 있도록 지원합니다.\n\n" +
      "또한, 개별 학습 진도를 추적하고 피드백을 제공하는 기능을 통해 학습자의 진행 상황을 체계적으로 관리하며, 더 나아가 코딩 교육의 새로운 기준을 제시하고자 합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo2.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "러닝큐브",
    description:
      "러닝큐브는 게이미피케이션을 기반으로 한 온라인 학습 플랫폼을 제공하여 학습의 재미와 효율성을 동시에 추구합니다.\n\n" +
      "우리는 전통적인 학습 방법에서 벗어나 학습자가 게임처럼 학습 목표를 달성할 수 있도록 다양한 도전 과제와 보상 시스템을 도입하고 있습니다. 이러한 접근 방식은 학습자의 참여를 유도하고, 자연스럽게 학습 동기를 부여하여 효과적인 학습을 가능하게 합니다.\n\n" +
      "또한, 실시간 피드백과 학습 진도 분석 기능을 통해 학습자의 성과를 면밀히 모니터링하며, 필요한 지원을 적시에 제공하여 학습자의 성공적인 목표 달성을 돕습니다. 러닝큐브는 학습의 즐거움을 극대화하고, 학생들이 자발적으로 학습에 몰입할 수 있는 환경을 조성하는 데 중점을 두고 있습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo3.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "스터디온",
    description:
      "스터디온은 실시간 온라인 튜터링 서비스를 제공하는 선도적인 스타트업으로, 학생들에게 고품질의 학습 경험을 제공하기 위해 지속적으로 노력하고 있습니다.\n\n" +
      "우리는 다양한 분야의 전문 튜터와 실시간으로 연결하여 학생들이 필요한 시간에 맞춤형 지도를 받을 수 있도록 지원합니다. 이를 통해 학생들은 어려운 개념을 즉시 해결하고, 학습 과정에서 발생할 수 있는 문제를 실시간으로 해결할 수 있습니다.\n\n" +
      "또한, 튜터링 세션은 모두 녹화되어 복습이 가능하며, 학생들이 스스로 학습 내용을 되새기고, 자신감을 가질 수 있도록 돕습니다. 스터디온은 학습자 중심의 서비스를 제공하며, 개인의 학습 목표 달성을 위한 최적의 솔루션을 제공합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo4.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "코드잇",
    description:
      "코드잇은 '온라인 코딩 교육 서비스'를 운영하는 EdTech 스타트업입니다.\n\n" +
      "코딩 교육과 데이터 사이언스 교육에 대한 수요는 급격히 늘어나고 있지만, 아직까지 좋은 교육 서비스를 찾기란 쉽지 않습니다. 이를 해결하고자 코드잇은 모든 강의를 자체 제작하여 퀄리티 높은 콘텐츠를 제공하고, 동시에 코딩 교육에 최적화된 플랫폼을 개발하고 있습니다.\n\n" +
      "모든 강의를 마음껏 들을 수 있는 '코드잇 무제한 멤버십'을 제공하고 있으며, 지난 5년 동안 21만 명의 수강생과 평균 만족도 4.9점이라는 국내 교육 업계에서 보기 드문 성과를 달성하였습니다. 또한 콘텐츠와 기술력을 인정받아 2021년 10월 Series B 투자를 받아 누적 140억 원의 투자를 받았고, 현재 40여 명의 팀원이 같은 목표를 향해 나아가고 있습니다.\n\n" +
      "‘배움의 기쁨을 세상 모두에게.’\n\n" +
      "이것이 코드잇의 비전입니다. 현재는 최고의 코딩 교육 서비스를 국내에서 제공하고 있지만, 이보다 더 큰 그림을 그리고 있습니다. 2021년 상반기부터 영어권 시장 진출을 시작했고, 코딩과 인접한 분야부터 스펙트럼을 넓혀 나갈 계획입니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo1.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "헬스체크",
    description:
      "헬스체크는 개인 건강 관리와 예방을 위한 맞춤형 헬스케어 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 최첨단 기술을 활용하여 개인의 건강 상태를 실시간으로 모니터링하고, 필요한 조치를 취할 수 있는 솔루션을 제공합니다. 헬스체크는 스마트 웨어러블 기기와 모바일 애플리케이션을 통해 건강 데이터를 수집하고 분석하며, 사용자가 건강 목표를 효과적으로 달성할 수 있도록 돕습니다.\n\n" +
      "또한, 개인 맞춤형 건강 관리 계획과 예방적 건강 조언을 통해 보다 건강한 생활을 지원하며, 전반적인 건강 개선을 목표로 하고 있습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo1.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "메디브레인",
    description:
      "메디브레인은 인공지능을 활용한 진단 및 치료 지원 솔루션을 제공하는 헬스케어 스타트업입니다.\n\n" +
      "우리는 최신 AI 기술을 활용하여 의료 전문가들이 보다 정확하고 신속하게 진단과 치료 결정을 내릴 수 있도록 지원합니다. 메디브레인은 방대한 의료 데이터를 분석하여 질병의 조기 발견과 예방을 가능하게 하며, 효율적인 치료 계획을 수립하는 데 도움을 줍니다.\n\n" +
      "이러한 접근 방식은 의료 서비스의 질을 향상시키고, 환자들에게 보다 나은 건강 관리 솔루션을 제공하는 것을 목표로 하고 있습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo2.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "핏라인",
    description:
      "핏라인은 개인의 운동과 식단을 통합적으로 관리하는 플랫폼을 제공합니다.\n\n" +
      "우리는 사용자가 자신의 건강 목표를 설정하고, 이를 달성하기 위해 맞춤형 운동 및 식단 계획을 제안합니다. 핏라인은 실시간 데이터 추적과 분석 기능을 통해 사용자의 진행 상황을 모니터링하며, 필요한 조언과 피드백을 제공합니다.\n\n" +
      "우리의 목표는 사용자가 건강한 생활 습관을 형성하고, 자신에게 맞는 최적의 건강 관리 방법을 찾도록 돕는 것입니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo3.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "헬스아이",
    description:
      "헬스아이는 스마트 건강 모니터링 장비와 애플리케이션을 제공하는 스타트업입니다.\n\n" +
      "우리는 최신 기술을 활용하여 사용자의 건강 상태를 실시간으로 모니터링하고, 건강 문제를 조기에 발견할 수 있는 솔루션을 제공합니다. 헬스아이는 사용자가 쉽게 접근할 수 있는 스마트 기기와 앱을 통해 건강 데이터를 분석하고, 필요한 정보를 제공합니다.\n\n" +
      "이를 통해 사용자가 자신의 건강 상태를 보다 잘 이해하고 관리할 수 있도록 지원하며, 전반적인 건강 개선을 목표로 하고 있습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo4.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "다이어트클래스",
    description:
      "다이어트클래스는 체중 관리와 건강한 식습관 형성을 위한 종합 솔루션을 제공하는 플랫폼입니다.\n\n" +
      "우리는 개인 맞춤형 다이어트 계획과 식단 조절을 통해 사용자가 건강한 체중을 유지할 수 있도록 돕습니다. 다이어트클래스는 사용자의 신체 상태와 목표에 맞춘 체계적인 프로그램을 제공하며, 실시간 피드백과 지원을 통해 목표 달성을 지원합니다.\n\n" +
      "또한, 다양한 건강 자료와 교육 콘텐츠를 통해 사용자가 스스로 건강을 관리할 수 있는 지식과 도구를 제공합니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo5.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "에듀파크",
    description:
      "에듀파크는 온라인 교육과 학습 관리 시스템을 제공하는 스타트업으로, 교육의 접근성과 효율성을 높이기 위해 노력하고 있습니다.\n\n" +
      "우리는 다양한 교육 콘텐츠와 기능을 갖춘 플랫폼을 통해 학습자들에게 최적의 학습 환경을 제공합니다. 에듀파크는 학습자의 필요에 맞춰 개별화된 학습 경로를 설계하고, 효율적인 학습 관리를 지원합니다.\n\n" +
      "또한, 실시간 피드백과 분석 기능을 통해 학습자의 성과를 모니터링하며, 지속적인 개선을 통해 교육의 질을 높이고 있습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo1.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "스마트스터디",
    description:
      "스마트스터디는 혁신적인 학습 도구와 자료를 제공하여 학생들의 학습 효과를 극대화하는 스타트업입니다.\n\n" +
      "우리는 최신 기술을 활용하여 학생들이 보다 효과적으로 학습할 수 있는 다양한 도구와 자료를 제공합니다. 스마트스터디는 개별 학습자의 요구에 맞춘 맞춤형 학습 경로를 설계하고, 다양한 학습 자원을 통해 학습의 효과를 높입니다.\n\n" +
      "또한, 학습 데이터 분석을 통해 학생들의 진행 상황을 모니터링하고, 필요한 지원을 적시에 제공하여 학습 목표 달성을 돕습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo2.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "헬스프렌드",
    description:
      "헬스프렌드는 개인 건강 관리와 생활 습관 개선을 위한 맞춤형 솔루션을 제공합니다.\n\n" +
      "우리는 최신 헬스케어 기술을 활용하여 사용자의 건강 데이터를 실시간으로 분석하고, 건강 목표를 달성할 수 있는 계획을 제안합니다. 헬스프렌드는 스마트 기기와 애플리케이션을 통해 건강 관리의 전 과정을 지원하며, 사용자가 보다 건강한 생활을 유지할 수 있도록 돕습니다.\n\n" +
      "또한, 다양한 건강 자료와 전문가의 조언을 제공하여 사용자가 스스로 건강을 관리할 수 있도록 지원합니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo3.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "테크에듀",
    description:
      "테크에듀는 최신 기술을 활용한 혁신적인 교육 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 교육의 효율성을 높이기 위해 다양한 기술적 접근 방식을 도입하고, 학습자의 요구에 맞춘 맞춤형 학습 경로를 설계합니다. 테크에듀는 최신 교육 기술을 통해 학습자의 참여와 성과를 극대화하며, 교육의 질을 향상시키는 것을 목표로 하고 있습니다.\n\n" +
      "또한, 실시간 피드백과 분석 기능을 통해 학습자의 진행 상황을 모니터링하며, 필요한 지원을 적시에 제공하여 학습 목표 달성을 돕습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo4.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "헬스온",
    description:
      "헬스온은 개인의 건강 상태를 분석하고 개선하기 위한 종합 헬스케어 솔루션을 제공합니다.\n\n" +
      "우리는 사용자에게 맞춤형 건강 관리 계획을 제안하고, 실시간 데이터를 통해 건강 상태를 모니터링합니다. 헬스온은 최신 기술을 활용하여 건강 문제를 조기에 발견하고, 예방적인 조치를 취할 수 있도록 지원합니다.\n\n" +
      "또한, 건강 관리에 필요한 다양한 도구와 자료를 제공하여 사용자가 건강한 생활을 유지할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo5.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "스마트러닝",
    description:
      "스마트러닝은 첨단 기술을 활용하여 학습의 효율성을 높이는 교육 솔루션을 제공합니다.\n\n" +
      "우리는 인공지능과 데이터 분석을 통해 학습자의 필요에 맞춘 맞춤형 교육 콘텐츠를 제공하며, 학습 성과를 실시간으로 모니터링합니다. 스마트러닝은 학습자의 개별 요구에 맞춰 최적의 학습 경로를 설계하고, 효율적인 학습 환경을 조성하는 것을 목표로 하고 있습니다.\n\n" +
      "또한, 다양한 학습 도구와 자료를 제공하여 학습의 질을 높이고, 학습 목표 달성을 지원합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo1.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "헬스케어365",
    description:
      "헬스케어365는 24/7 건강 모니터링 서비스를 제공하여 사용자의 건강을 지속적으로 관리합니다.\n\n" +
      "우리는 최신 헬스케어 기술을 활용하여 사용자의 건강 데이터를 실시간으로 분석하고, 필요에 따라 건강 관리 계획을 제안합니다. 헬스케어365는 스마트 기기와 애플리케이션을 통해 지속적인 건강 모니터링과 예방적 조치를 지원합니다.\n\n" +
      "또한, 다양한 건강 자료와 전문가의 조언을 제공하여 사용자가 스스로 건강을 관리할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo2.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "에듀프렌드",
    description:
      "에듀프렌드는 개인 맞춤형 학습 계획을 통해 학생들의 학습 성과를 극대화하는 교육 스타트업입니다.\n\n" +
      "우리는 다양한 학습 도구와 자료를 제공하며, 학습자의 요구에 맞춘 맞춤형 학습 경로를 설계합니다. 에듀프렌드는 실시간 피드백과 분석 기능을 통해 학습자의 진행 상황을 모니터링하고, 필요한 지원을 적시에 제공하여 학습 목표 달성을 돕습니다.\n\n" +
      "또한, 교육의 질을 높이기 위해 최신 교육 기술과 혁신적인 접근 방식을 도입하고 있습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo3.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "헬스매니저",
    description:
      "헬스매니저는 개인 건강 관리와 체중 조절을 위한 종합 솔루션을 제공합니다.\n\n" +
      "우리는 사용자의 신체 상태와 목표에 맞춘 맞춤형 건강 관리 계획을 제안하며, 실시간 데이터를 통해 건강 상태를 모니터링합니다. 헬스매니저는 스마트 기기와 애플리케이션을 통해 건강 관리를 지원하며, 체중 조절과 건강 유지에 필요한 다양한 도구와 자료를 제공합니다.\n\n" +
      "또한, 건강 관리에 필요한 전문가의 조언을 제공하여 사용자가 건강한 생활을 유지할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo4.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "에듀마스터",
    description:
      "에듀마스터는 개인 맞춤형 학습 솔루션을 제공하여 학습자의 성과를 극대화하는 교육 스타트업입니다.\n\n" +
      "우리는 최신 기술을 활용하여 학습자의 개별 요구에 맞춘 맞춤형 교육 콘텐츠와 학습 경로를 설계합니다. 에듀마스터는 실시간 피드백과 분석 기능을 통해 학습자의 진행 상황을 모니터링하고, 필요한 지원을 적시에 제공하여 학습 목표 달성을 돕습니다.\n\n" +
      "또한, 다양한 학습 도구와 자료를 제공하여 교육의 질을 높이고, 학습자들이 보다 효과적으로 학습할 수 있도록 지원합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo5.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "헬스케어존",
    description:
      "헬스케어존은 개인 건강 관리와 예방을 위한 종합 헬스케어 솔루션을 제공합니다.\n\n" +
      "우리는 최신 기술을 활용하여 사용자의 건강 상태를 실시간으로 분석하고, 건강 목표 달성을 위한 맞춤형 계획을 제안합니다. 헬스케어존은 스마트 기기와 애플리케이션을 통해 건강 관리를 지원하며, 사용자에게 필요한 건강 자료와 전문가의 조언을 제공합니다.\n\n" +
      "또한, 건강 관리에 필요한 다양한 도구와 자료를 제공하여 사용자가 건강한 생활을 유지할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo1.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "테크노에듀",
    description:
      "테크노에듀는 최신 기술을 활용하여 혁신적인 교육 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 인공지능과 데이터 분석을 통해 학습자의 필요에 맞춘 맞춤형 교육 콘텐츠를 제공하며, 학습 성과를 실시간으로 모니터링합니다. 테크노에듀는 학습자의 개별 요구에 맞춰 최적의 학습 경로를 설계하고, 효율적인 학습 환경을 조성하는 것을 목표로 하고 있습니다.\n\n" +
      "또한, 다양한 학습 도구와 자료를 제공하여 학습의 질을 높이고, 학습 목표 달성을 지원합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo2.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "헬스케어랩",
    description:
      "헬스케어랩은 개인 건강 관리와 예방을 위한 혁신적인 헬스케어 솔루션을 제공합니다.\n\n" +
      "우리는 최신 헬스케어 기술을 활용하여 사용자의 건강 상태를 실시간으로 분석하고, 맞춤형 건강 관리 계획을 제안합니다. 헬스케어랩은 스마트 기기와 애플리케이션을 통해 지속적인 건강 모니터링과 예방적 조치를 지원합니다.\n\n" +
      "또한, 다양한 건강 자료와 전문가의 조언을 제공하여 사용자가 건강을 스스로 관리할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo3.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "헬스앤피트니스",
    description:
      "헬스앤피트니스는 체중 감량과 피트니스 목표 달성을 위한 맞춤형 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 사용자의 체형과 목표에 맞춘 맞춤형 운동 및 식이 계획을 제공하며, 실시간으로 건강 상태를 모니터링합니다. 헬스앤피트니스는 스마트 기기와 애플리케이션을 통해 사용자가 목표를 달성할 수 있도록 지원하며, 체중 감량과 건강 유지를 위한 다양한 도구와 자료를 제공합니다.\n\n" +
      "또한, 건강 관리에 필요한 전문가의 조언을 제공하여 사용자가 건강한 생활을 유지할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo2.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "에듀스마트",
    description:
      "에듀스마트는 최신 기술을 활용하여 학습 효과를 극대화하는 플랫폼을 제공합니다.\n\n" +
      "우리는 인공지능과 데이터 분석을 통해 학습자의 개별적인 요구에 맞춘 맞춤형 교육 콘텐츠를 제공하며, 학습 성과를 실시간으로 모니터링합니다. 에듀스마트는 학습자의 참여도와 성과를 극대화하고, 학습의 질을 높이는 것을 목표로 하고 있습니다.\n\n" +
      "또한, 다양한 학습 도구와 자료를 제공하여 학습자의 목표 달성을 지원하며, 최신 교육 기술을 도입하여 교육의 혁신을 선도하고 있습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo3.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "헬스플러스",
    description:
      "헬스플러스는 건강 관리와 피트니스 목표 달성을 위한 종합 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 개인 맞춤형 운동 계획과 식이 요법을 통해 사용자가 건강한 생활을 유지할 수 있도록 돕습니다. 헬스플러스는 최신 헬스케어 기술을 활용하여 실시간으로 건강 상태를 모니터링하고, 목표 달성을 지원하는 다양한 도구와 자료를 제공합니다.\n\n" +
      "또한, 전문가의 조언과 피드백을 통해 사용자가 효과적으로 건강을 관리할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo4.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "코딩큐브",
    description:
      "코딩큐브는 혁신적인 코딩 교육을 제공하는 스타트업으로, 최신 기술을 활용한 실습 중심의 교육 과정을 운영하고 있습니다.\n\n" +
      "우리는 실습과 프로젝트 기반의 교육을 통해 학습자들이 코딩 능력을 실질적으로 향상시킬 수 있도록 지원합니다. 코딩큐브는 최신 기술 트렌드와 업계 요구에 맞춘 커리큘럼을 제공하며, 학생들이 실무에서 필요한 기술을 익히고, 실제 문제를 해결할 수 있는 능력을 키우는 데 중점을 두고 있습니다.\n\n" +
      "또한, 개별 학습 진도를 추적하고 피드백을 제공하여 학습자의 진행 상황을 체계적으로 관리하며, 학습 목표 달성을 지원합니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo5.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "에듀퓨처",
    description:
      "에듀퓨처는 인공지능을 활용한 교육 콘텐츠 제작을 선도하는 스타트업입니다.\n\n" +
      "우리는 학습자의 성향과 요구에 맞춘 맞춤형 학습 콘텐츠를 제공하며, 실시간 피드백을 통해 학습 효과를 극대화합니다.\n\n" +
      "에듀퓨처는 최신 AI 기술을 사용하여 학습자가 보다 쉽게 이해할 수 있는 콘텐츠를 제작하고 있으며, 다양한 학습 도구와 자료를 통해 학습의 질을 높입니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo1.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "헬스캔",
    description:
      "헬스캔은 개인의 건강 상태를 실시간으로 모니터링하고, 맞춤형 건강 솔루션을 제공하는 헬스케어 스타트업입니다.\n\n" +
      "우리는 스마트 기기와 AI 기술을 결합하여 사용자의 건강 데이터를 분석하고, 필요한 건강 관리 계획을 제안합니다.\n\n" +
      "헬스캔은 예방적 건강 관리와 조기 진단을 목표로 하며, 사용자가 보다 건강한 생활을 유지할 수 있도록 돕습니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo2.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "러닝플러스",
    description:
      "러닝플러스는 교육과 게임을 결합한 혁신적인 학습 플랫폼을 제공하는 스타트업입니다.\n\n" +
      "우리는 학습자가 게임처럼 즐겁게 학습할 수 있는 환경을 조성하여 학습 동기를 높이고, 학습 성과를 향상시키고 있습니다.\n\n" +
      "러닝플러스는 다양한 도전 과제와 보상 시스템을 통해 학습자가 자발적으로 학습에 몰입할 수 있도록 돕습니다.",
    category: "에듀테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo3.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "피트니스팜",
    description:
      "피트니스팜은 개인 맞춤형 운동 계획과 식단 관리를 제공하는 헬스케어 스타트업입니다.\n\n" +
      "우리는 사용자의 목표와 현재 상태에 맞춘 최적의 건강 관리 방법을 제안하며, 실시간 피드백과 트래킹 기능을 제공합니다.\n\n" +
      "피트니스팜은 건강한 라이프스타일을 유지할 수 있도록 사용자와 함께 성장합니다.",
    category: "헬스케어",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo4.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "스마트팜랩",
    description:
      "스마트팜랩은 최첨단 기술을 활용하여 농업 생산성을 극대화하는 솔루션을 제공하는 스타트업입니다.\n\n" +
      "우리는 AI 기반의 작물 관리 시스템과 자동화된 재배 기술을 통해 농업 효율성을 높이고 있습니다.\n\n" +
      "스마트팜랩은 환경 친화적인 농업을 추구하며, 지속 가능한 농업 혁신을 이루고자 합니다.",
    category: "애그리테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo5.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "에코워터",
    description:
      "에코워터는 혁신적인 수처리 기술을 개발하여 깨끗한 물을 제공하는 스타트업입니다.\n\n" +
      "우리는 효율적인 정수 시스템과 재활용 가능한 수처리 솔루션을 통해 환경 보호에 기여하고 있습니다.\n\n" +
      "에코워터는 물 부족 문제 해결에 앞장서며, 지속 가능한 수자원 관리를 목표로 합니다.",
    category: "클린테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo3.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "메디젠",
    description:
      "메디젠은 유전자 분석을 통해 개인 맞춤형 의료 서비스를 제공하는 바이오테크 스타트업입니다.\n\n" +
      "우리는 최신 유전자 분석 기술을 활용하여 사용자의 건강 상태와 유전적 특성을 분석하고, 맞춤형 치료 계획을 수립합니다.\n\n" +
      "메디젠은 정밀 의학을 통해 개인의 건강을 최적화하는 데 주력하고 있습니다.",
    category: "바이오테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo1.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "클린에너지",
    description:
      "클린에너지는 친환경 에너지 솔루션을 제공하여 지속 가능한 에너지 미래를 선도하는 스타트업입니다.\n\n" +
      "우리는 태양광, 풍력 등 다양한 재생 가능 에너지를 활용하여 에너지 효율성을 높이고, 탄소 배출을 줄이는 데 기여하고 있습니다.\n\n" +
      "클린에너지는 글로벌 에너지 전환을 가속화하는 데 중점을 두고 있습니다.",
    category: "에너지테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo3.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "모빌리티플러스",
    description:
      "모빌리티플러스는 자율 주행 기술을 개발하여 미래의 교통 시스템을 혁신하는 스타트업입니다.\n\n" +
      "우리는 자율 주행차의 안전성과 효율성을 높이기 위해 AI와 빅데이터 분석을 결합한 솔루션을 제공합니다.\n\n" +
      "모빌리티플러스는 교통 혼잡을 줄이고, 지속 가능한 도시 교통 시스템을 구축하는 데 기여하고 있습니다.",
    category: "모빌리티",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo4.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "에어텍",
    description:
      "에어텍은 차세대 항공 기술을 개발하여 항공 산업의 혁신을 이끄는 스타트업입니다.\n\n" +
      "우리는 효율적인 비행 시스템과 친환경 연료 기술을 통해 항공기의 성능을 향상시키고, 탄소 배출을 줄이는 데 주력하고 있습니다.\n\n" +
      "에어텍은 지속 가능한 항공 여행을 가능하게 하여, 환경 보호에 앞장서고 있습니다.",
    category: "에어로스페이스",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo1.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
  {
    name: "그린팜",
    description:
      "그린팜은 도시 농업 솔루션을 제공하여 도시의 식량 자급률을 높이는 스타트업입니다.\n\n" +
      "우리는 도시 내에서 지속 가능한 농업을 실현할 수 있는 스마트 농업 기술을 개발하고 있습니다.\n\n" +
      "그린팜은 도시 농업을 통해 지역 사회에 신선한 식품을 제공하고, 식량 안보를 강화하는 데 기여하고 있습니다.",
    category: "애그리테크",
    totalInvestment: faker.number.int({ min: 1, max: 1000 })*10000000,
    revenue: faker.number.int({ min: 1, max: 1000 })*10000000,
    employees: faker.number.int({ min: 1, max: 100 }),
    logoUrl: "/images/logo1.svg",
    mySelectionCount: faker.number.int({ min: 50, max: 500 }),
    CompareSelectionCount: faker.number.int({ min: 50, max: 500 }),
  },
];

export default companyData;
