import React, { useState } from "react";
import styles from "./CurrentStateCompare.module.css";

// 컴포넌트
import PageNav from "components/PageNav";
import DataRowSetRender from "components/DataRowSetRender";
import Pagination from "components/common/Pagination";
import DropdownMiddleSize from "components/common/DropdownMiddleSize";

// 커스텀 훅
import useGetCompanyData from "hook/useGetCompanyData";

function CurrentStateCompare() {
  const [sortBy, setSortBy] = useState("mySelectionCount");
  const [oder, setOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    companyList,
    isLoading,
    error,
    totalPages,
  } = useGetCompanyData(currentPage, 10, "", sortBy, oder);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }
  
  const handleOptionChange = (option) => {
    if (option === "나의 기업 선택 횟수 높은순") {
      setSortBy("mySelectionCount");
      setOrder("desc");
    } else if (option === "나의 기업 선택 횟수 낮은순") {
      setSortBy("mySelectionCount");
      setOrder("asc");
    } else if (option === "비교 기업 선택 횟수 높은순") {
      setSortBy("CompareSelectionCount");
      setOrder("desc");
    } else if (option === "비교 기업 선택 횟수 낮은순") {
      setSortBy("CompareSelectionCount");
      setOrder("asc");
    }
    setCurrentPage(1);
  };


  const options = [
    "나의 기업 선택 횟수 높은순",
    "나의 기업 선택 횟수 낮은순",
    "비교 기업 선택 횟수 높은순",
    "비교 기업 선택 횟수 낮은순",
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
            isloading={isLoading}
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
