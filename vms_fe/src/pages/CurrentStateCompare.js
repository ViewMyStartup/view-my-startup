import React from "react";

// 컴포넌트
import PageNav from "components/PageNav";
import styles from "./CurrentStateCompare.module.css";
import Pagination from "components/common/Pagination";

import DataRowSetRender from "components/DataRowSetRender";

// 커스텀 훅
import usePageHandler from "hook/usePageHandler";

//테스트 이미지
import Companyimg from "../assets/images/mock_img/company_temp.svg";

function CurrentStateCompare() {
  const { currentPage, totalPages, handlePageChange } = usePageHandler();
  // CompanyPerRow & HeaderColumns 컴포넌트 테스트용 데이터 데이터
  const dataObject = {
    id: "1",
    rank: "3",
    name: "코딩마스터",
    img: Companyimg,
    description: "코딩마스터는 청소년들을 위한 코딩 교육 플랫폼을 운영하는 기업입니다.",
    category: "에듀테크",
    total_investment: 12312959459,
    revenue: 3245204304,
    employees: 5230,
    investmentVmsTotal: 200342345,
    investmentInfactTotal: 342534123124,
    myCompanyChooseCount: 124123,
    CompareChoohseCount: 12315565,
    userName: "정준호", 
    userRank: 3, 
    userTotalInvestment: 3423401234, 
    userComment: "테스트입니다." 
  }

  // 테스트용 데이터 세트
  const dataList = [
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
  ];

  return (
    <div className={styles.bgSet}>
      <nav className={styles.navSet}>
        <PageNav />
      </nav>
      <main className={styles.mainContainer}>
        <div className={styles.headerText}>투자 현황</div>
        <DataRowSetRender type="choose" dataList={dataList}/>
      </main>
      <footer className={styles.footerSet}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          hasNext={currentPage < totalPages}
        />
      </footer>
    </div>
  );
}

export default CurrentStateCompare;
