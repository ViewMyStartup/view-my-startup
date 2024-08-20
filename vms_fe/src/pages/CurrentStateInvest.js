import React from "react";
import styles from "./CurrentStateInvest.module.css";

import PageNav from "../components/PageNav";
import Pagination from "../components/common/Pagination";
import usePageHandler from "../hook/usePageHandler";
import DropdownComponent from "../components/common/DropdownComponent";
import DataRowSetRender from "../components/DataRowSetRender.js";
import CompanyDataPerRow from "../components/common/CompanyDataPerRow.js";

function CurrentStateInvest() {
  const { currentPage, totalPages, handlePageChange } = usePageHandler();

  // 페이지 변경 함수
  const handlePageClick = (page) => {
    handlePageChange(page);
  };

  // 드롭다운 메뉴 변경
  const customOptions = [
    "View My Startup 투자 금액 높은순",
    "View My Startup 투자 금액 낮은순",
    "실제 누적 투자 금액 높은순",
    "실제 누적 투자 금액 낮은순",
  ];

  return (
    <div>
      <PageNav /> {/* 헤더 부분 */}
      <div className={styles.currentStateInvest}>
        <div className={styles.investStateNav}>
          <p>투자 현황</p>
          <DropdownComponent
            initialLabel="View My Startup 투자 금액 높은순" // 기본 드롭다운 값
            options={customOptions}
          />
        </div>
        <DataRowSetRender />
        <CompanyDataPerRow />
        <div className={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageClick}
            hasNext={currentPage < totalPages} // 다음 페이지 여부
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentStateInvest;
