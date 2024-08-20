import React, { useState, useEffect } from "react";
import styles from "./CurrentStateInvest.module.css";
import PageNav from "../components/PageNav";
import Pagination from "../components/common/Pagination";
import DropdownComponent from "../components/common/DropdownComponent";
import DataRowSetRender from "../components/DataRowSetRender.js";
import CompanyDataPerRow from "../components/common/CompanyDataPerRow.js";
import HeaderColumns from "../components/common/HeaderColumns.js";
import usePageHandler from "../hook/usePageHandler";

function CurrentStateInvest() {
  const { currentPage, totalPages, handlePageChange } = usePageHandler();

  const [selectedOption, setSelectedOption] = useState(
    "View My Startup 투자 금액 높은순"
  );
  const [sortedData, setSortedData] = useState([]);

  const customOptions = [
    "View My Startup 투자 금액 높은순",
    "View My Startup 투자 금액 낮은순",
    "실제 누적 투자 금액 높은순",
    "실제 누적 투자 금액 낮은순",
  ];

  const mockData = [
    {
      id: 1,
      rank: 1,
      name: "기업 A",
      img: "path/to/image.jpg",
      description:
        "기업 A의 소개입니다.기업 A의 소개입니다.기업 A의 소개입니다.",
      category: "카테고리 A",
      investmentVmsTotal: 5000000000,
      investmentInfactTotal: 3000000000,
    },
    {
      id: 2,
      rank: 2,
      name: "기업 B",
      img: "path/to/image.jpg",
      description:
        "기업 B의 소개입니다.기업 B의 소개입니다.기업 B의 소개입니다.",
      category: "카테고리 A",
      investmentVmsTotal: 800000000,
      investmentInfactTotal: 50000000,
    },
  ];

  // 정렬 옵션
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

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  const handlePageClick = (page) => {
    handlePageChange(page);
  };

  return (
    <div>
      <PageNav />
      <div className={styles.currentStateInvest}>
        <div className={styles.investStateNav}>
          <p>투자 현황</p>
          <DropdownComponent
            initialLabel={selectedOption}
            options={customOptions}
            customClass={styles.customDropdown}
            onChange={handleDropdownChange}
          />
        </div>
        <HeaderColumns type="invest" />
        <ul>
          {sortedData.map((data) => (
            <CompanyDataPerRow key={data.id} type="invest" dataObject={data} />
          ))}
        </ul>
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
