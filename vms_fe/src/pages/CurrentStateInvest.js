import React, { useState, useEffect } from "react";
import styles from "./CurrentStateInvest.module.css";
import PageNav from "../components/PageNav";
import Pagination from "../components/common/Pagination";
import DropdownMiddleSize from "../components/common/DropdownMiddleSize";
import usePageHandler from "../hook/usePageHandler";
import DataRowSetRender from "../components/DataRowSetRender";
import { getApiData } from "../API/api"; // 전체 기업리스트 API 호출

// 기본 정렬 옵션
const DEFAULT_SORT_OPTION = "View My Startup 투자 금액 높은순";

function CurrentStateInvest() {
  const { currentPage, totalPages, handlePageChange, setCurrentPage } =
    usePageHandler();
  const [selectedOption, setSelectedOption] = useState(DEFAULT_SORT_OPTION); // 기본 옵션
  const [sortedData, setSortedData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);

  const customOptions = [
    "View My Startup 투자 금액 높은순",
    "View My Startup 투자 금액 낮은순",
    "실제 누적 투자 금액 높은순",
    "실제 누적 투자 금액 낮은순",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 정렬 기준 결정
        let sortBy = "virtualInvestment"; // 기본값은 virtualInvestment
        let sortOrder = "desc"; // 기본적으로 높은순

        // 옵션에 따라 정렬 기준과 순서 설정
        if (selectedOption.includes("낮은순")) {
          sortOrder = "asc";
        }

        // 실제 누적 투자 금액 옵션이 있을 경우 필드 변경
        if (selectedOption.includes("실제 누적")) {
          sortBy = "totalInvestment";
        }

        const response = await getApiData(
          currentPage,
          10,
          "",
          sortBy,
          sortOrder
        );
        console.log("Fetched Data:", response);
        setSortedData(response.companies || []);
        setTotalItems(response.total || 0);
      } catch (error) {
        console.error("Error fetching data:", error);
        setSortedData([]);
        setTotalItems(0);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, selectedOption]);

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    setCurrentPage(1);
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
          <DropdownMiddleSize
            initialLabel={selectedOption}
            options={customOptions}
            handleOptionChange={handleDropdownChange}
          />
        </div>
        <div className={styles.investCompanyList}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <DataRowSetRender
              type="invest"
              dataList={sortedData.slice(
                (currentPage - 1) * 10,
                currentPage * 10
              )}
              isloading={loading}
            />
          )}
        </div>
        <div className={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalItems / 10)}
            onPageChange={handlePageClick}
            hasNext={currentPage < Math.ceil(totalItems / 10)}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentStateInvest;
