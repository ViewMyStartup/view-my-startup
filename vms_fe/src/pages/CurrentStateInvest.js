import React, { useState, useEffect } from "react";
import styles from "./CurrentStateInvest.module.css";

import PageNav from "../components/PageNav";
import Pagination from "../components/common/Pagination";
import DropdownMiddleSize from "../components/common/DropdownMiddleSize";
import usePageHandler from "../hook/usePageHandler";
import CompanyDataPerRow from "../components/common/CompanyDataPerRow";
import HeaderColumns from "../components/common/HeaderColumns";
import mockData from "../assets/mock/mockData.js";

function CurrentStateInvest() {
  const { currentPage, totalPages, handlePageChange } = usePageHandler();

  const [selectedOption, setSelectedOption] = useState(
    "View My Startup 투자 금액 높은순"
  );
  const [sortedData, setSortedData] = useState([]);

  // 투자현황 페이지에서 사용될 드롭다운 옵션 수정
  const customOptions = [
    "View My Startup 투자 금액 높은순",
    "View My Startup 투자 금액 낮은순",
    "실제 누적 투자 금액 높은순",
    "실제 누적 투자 금액 낮은순",
  ];

  // 드롭다운 정렬
  useEffect(() => {
    let sorted = [...mockData];
    switch (selectedOption) {
      case "View My Startup 투자 금액 높은순":
        sorted.sort((a, b) => b.investmentVmsTotal - a.investmentVmsTotal);
        break;
      case "View My Startup 투자 금액 낮은순":
        sorted.sort((a, b) => a.investmentVmsTotal - b.investmentVmsTotal);
        break;
      case "실제 누적 투자 금액 높은순":
        sorted.sort(
          (a, b) => b.investmentInfactTotal - a.investmentInfactTotal
        );
        break;
      case "실제 누적 투자 금액 낮은순":
        sorted.sort(
          (a, b) => a.investmentInfactTotal - b.investmentInfactTotal
        );
        break;
      default:
        break;
    }
    setSortedData(sorted);
  }, [selectedOption]);

  // 드롭다운 옵션 변경 핸들러
  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  // 페이지 변경 핸들러
  const handlePageClick = (page) => {
    handlePageChange(page);
  };

  return (
    <div>
      <PageNav />
      <div className={styles.currentStateInvest}>
        <div className={styles.investStateNav}>
          <p>투자 현황</p>
          <DropdownMiddleSize
            initialLabel={selectedOption}
            options={customOptions}
            handleOptionChange={handleDropdownChange}
          />
        </div>
        <div className={styles.scrollableWrapper}>
          <HeaderColumns type="invest" />
          <div className={styles.scrollableContainer}>
            <ul className={styles.scrollableList}>
              {sortedData
                .slice((currentPage - 1) * 10, currentPage * 10)
                .map((data) => (
                  <CompanyDataPerRow
                    key={data.id}
                    type="invest"
                    dataObject={data}
                  />
                ))}
            </ul>
          </div>
        </div>
        <div className={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageClick}
            hasNext={currentPage < totalPages}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentStateInvest;
