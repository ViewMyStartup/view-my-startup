import { useState } from "react";
import Head from "next/head";
import styles from "../styles/pages/CurrentStateCompare.module.css";
import PageNav from "../components/PageNav";
import DataRowSetRender from "../components/DataRowSetRender";
import Pagination from "../components/common/Pagination";
import DropdownMiddleSize from "../components/common/DropdownMiddleSize";
import useGetCompanyData from "../hook/useGetCompanyData";

export default function CurrentStateCompare() {
  const [sortBy, setSortBy] = useState("mySelectionCount");
  const [order, setOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    companyList,
    isLoading,
    error,
    totalPages,
  } = useGetCompanyData(currentPage, 10, "", sortBy, order);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
      <Head>
        <title>View My Startup 비교 현황</title>
        <meta name="description" content="기업 선택 횟수를 비교하는 페이지입니다." />
      </Head>
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
      <div className={styles.pagination}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          hasNext={currentPage < totalPages}
        />
      </div>
    </div>
  );
}
