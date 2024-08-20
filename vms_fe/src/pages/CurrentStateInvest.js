import React from "react";
import styles from "./CurrentStateInvest.module.css";
import PageNav from "../components/PageNav";
import Pagination from "../components/common/Pagination";
import usePageHandler from "../hook/usePageHandler";
import DropdownComponent from "../components/common/DropdownComponent";
import DataRowSetRender from "../components/DataRowSetRender.js";
import CompanyDataPerRow from "../components/common/CompanyDataPerRow.js";
import HeaderColumns from "../components/common/HeaderColumns.js"; //순위등 메뉴바

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

  const mockData = [
    {
      id: 1,
      rank: 1,
      name: "기업 A",
      img: "path/to/image.jpg",
      description:
        "기업 A의 소개입니다.기업 A의 소개입니다.기업 A의 소개입니다.",
      category: "카테고리 A",
      total_investment: 5000000000,
      revenue: 3000000000,
      employees: 100,
    },
  ];

  return (
    <div>
      <PageNav /> {/* 헤더 부분 */}
      <div className={styles.currentStateInvest}>
        <div className={styles.investStateNav}>
          <p>투자 현황</p>
          <DropdownComponent
            initialLabel="View My Startup 투자 금액 높은순" // 기본 드롭다운 라벨값
            options={customOptions}
          />
        </div>
        <HeaderColumns type="invest" /> {/* 투자부분 */}
        <ul>
          {mockData.map((data) => (
            <CompanyDataPerRow key={data.id} type="invest" dataObject={data} />
          ))}
        </ul>
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
