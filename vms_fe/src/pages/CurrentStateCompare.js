import React, { useState } from "react";
import styles from "./CurrentStateCompare.module.css";

// 컴포넌트
import PageNav from "components/PageNav";
import DataRowSetRender from "components/DataRowSetRender";
import Pagination from "components/common/Pagination";
import DropdownMiddleSize from "components/common/DropdownMiddleSize";

// 커스텀 훅
import {usePageHandlerForPagination} from "hook/usePageHandler";
import useGetCompanyData from "hook/useGetCompanyData";

//테스트 이미지
import Companyimg from "../assets/images/mock_img/company_temp.svg";

function CurrentStateCompare() {
  // CompanyPerRow & HeaderColumns 컴포넌트 테스트용 데이터 데이터

  const [sortBy, setSortBy] = useState("totalInvestment");
  const [oder, setOrder] = useState("desc");
  const { currentPage, handlePageChange } = usePageHandlerForPagination();
  const { companyList, isLoading, error, totalPages } = useGetCompanyData(
    currentPage,
    10,
    "",
    sortBy,
    oder
  );

  const handleOptionChange = (option) => {
    setSortBy(option);
  };

  const handleOderChange = (option) => {
    setOrder(option);
  };

  const options = [
    "나의 기업 선택 횟수 높은순",
    "나의 기업 선택 횟수 낮은순",
    "실제 누적 투자 금액 높은순",
    "실제 누적 투자 금액 낮은순",
  ];

  return (
    <div className={styles.bgSet}>
      <nav className={styles.navSet}>
        <PageNav />
      </nav>
      <main className={styles.mainContainer}>
        <header className={styles.headerBox}>
          <span className={styles.headerText}>비교 현황</span>
          <DropdownMiddleSize
            options={options}
            handleOptionChange={handleOptionChange}
          />
        </header>
        <section>
          <DataRowSetRender
            type="choose"
            dataList={companyList}
            currentPage={currentPage}
          />
        </section>
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

// const [dataObject, setDataObject] = useState({});

// const dataObject = {
//   id: "1",
//   rank: "3",
//   name: "코딩마스터",
//   img: Companyimg,
//   description:
//     "코딩마스터는 청소년들을 위한 코딩 교육 플랫폼을 운영하는 기업입니다.",
//   category: "에듀테크",
//   total_investment: 12312959459,
//   revenue: 3245204304,
//   employees: 5230,
//   investmentVmsTotal: 200342345,
//   investmentInfactTotal: 342534123124,
//   myCompanyChooseCount: 124123,
//   CompareChoohseCount: 12315565,
//   userName: "정준호",
//   userRank: 3,
//   userTotalInvestment: 3423401234,
//   userComment: "테스트입니다.",
// };

// // 테스트용 데이터 세트
// const dataList = [
//   dataObject,
//   dataObject,
//   dataObject,
//   dataObject,
//   dataObject,
//   dataObject,
//   dataObject,
//   dataObject,
//   dataObject,
//   dataObject,
// ];
