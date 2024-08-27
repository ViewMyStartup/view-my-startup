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
        let sortBy = "virtualInvestment"; // 기본값은 virtualInvestment
        let sortOrder = "desc"; // 기본적으로 높은순

        if (selectedOption.includes("낮은순")) {
          sortOrder = "asc";
        }

        if (selectedOption.includes("실제 누적")) {
          sortBy = "totalInvestment";
        }

        // API 호출
        const response = await getApiData(
          currentPage, // 현재 페이지를 API에 전달
          10, // 페이지당 항목 수
          "", // 검색어 비워둠
          sortBy,
          sortOrder
        );
        console.log("Fetched Data:", response);
        setSortedData(response.companies || []);
        setTotalItems(response.total || 0); // 전체 데이터 수
      } catch (error) {
        console.error("Error fetching data:", error);
        setSortedData([]);
        setTotalItems(0);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedOption, currentPage]);

  // 옵션 변경 핸들러
  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    setCurrentPage(1); // 옵션 변경 시 첫 페이지로 이동
  };

  // 페이지 변경 핸들러
  const handlePageClick = (page) => {
    handlePageChange(page);
  };

  // 현재 페이지의 데이터에 순위 추가
  const addRankToData = (dataList, currentPage, limit) => {
    return dataList.map((item, index) => ({
      ...item,
      rank: (currentPage - 1) * limit + index + 1,
    }));
  };

  // 페이지네이션을 고려한 데이터 슬라이싱 및 순위 추가
  const paginatedData = sortedData; // 이미 현재 페이지 데이터만 가지고 있음
  const rankedData = addRankToData(paginatedData, currentPage, 10);

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
              dataList={rankedData} // 순위가 추가된 데이터
              isloading={loading}
            />
          )}
        </div>
        <div className={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalItems / 10)} // 전체 페이지 수
            onPageChange={handlePageClick}
            hasNext={currentPage < Math.ceil(totalItems / 10)} // 다음 페이지 여부
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentStateInvest;
