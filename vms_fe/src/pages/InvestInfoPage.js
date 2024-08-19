import React from "react";

// 컴포넌트
import PageNav from "components/PageNav";
import HeaderColumns from "components/common/HeaderColumns";
import styles  from "./InvestInfoPage.module.css"
import CompanyDataPerRow from "components/common/CompanyDataPerRow";

//테스트 이미지
import Companyimg from "../assets/images/mock_img/company_temp.svg";

function InvestInfoPage() {

  // CompanyPerRow & HeaderColumns 컴포넌트 테스트용 데이터 데이터
  const data = {
    rank: 1,
    name: "에듀넥스트",
    img: Companyimg,
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    total_investment: 5000000,
    revenue: 12000000,
    employees: 50,
  };

  const vmsData = {
    total_investment_vms: 500000000,
    total_investment_infact: 120000000000,
  };

  const userData = {
    userName: "정준호",
    userRank: 1,
    user_total_investment: 9999000000,
    user_comment: "너무 어려워요",
  };



  return (
    <div className={styles.bgSet}>
      <nav className={styles.navSet}>
        <PageNav />
      </nav>
      <main className={styles.mainContainer}>
        <header className={styles.headerBox}>
          <span className={styles.headerText}>투자 현황</span>
          <HeaderColumns type="invest" />
        </header>
        <section>
          <CompanyDataPerRow type="invest" companyData={data} vmsData={vmsData} />
        </section>
      </main>

    </div>
  );
}

export default InvestInfoPage;
