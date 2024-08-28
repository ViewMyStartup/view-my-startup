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
    usePageHandler(); // 커스텀 훅 사용
  const [selectedOption, setSelectedOption] = useState(DEFAULT_SORT_OPTION); // 기본 옵션
  const [sortedData, setSortedData] = useState([]); // 정렬된 데이터
  const [totalItems, setTotalItems] = useState(0); // 전체 데이터 수
  const [loading, setLoading] = useState(true); // 로딩 상태

  // 정렬 옵션 리스트
  const customOptions = [
    "View My Startup 투자 금액 높은순",
    "View My Startup 투자 금액 낮은순",
    "실제 누적 투자 금액 높은순",
    "실제 누적 투자 금액 낮은순",
  ];

  const fetchData = async () => {
    try {
      setLoading(true);

      // 정렬 기준과 순서 설정
      const sortBy = selectedOption.includes("실제 누적")
        ? "totalInvestment"
        : "virtualInvestment";
      const sortOrder = selectedOption.includes("낮은순") ? "asc" : "desc";

      // API 호출
      const response = await getApiData(currentPage, 10, "", sortBy, sortOrder);
      setSortedData(response.companies || []); // 가져온 데이터 저장
      setTotalItems(response.total || 0); // 전체 데이터 수 저장
    } catch (error) {
      console.error("Error fetching data:", error);
      setSortedData([]);
      setTotalItems(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedOption, currentPage]);

  // 옵션 변경 핸들러
  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    setCurrentPage(1);
  };

  // 페이지 변경 핸들러
  const handlePageClick = (page) => {
    handlePageChange(page);
  };

  // 현재 페이지의 데이터에 순위 계산
  const addRankToData = (dataList, currentPage, limit) => {
    return dataList.map((item, index) => ({
      ...item,
      rank: (currentPage - 1) * limit + index + 1,
    }));
  };

  // 페이지네이션을 고려한 데이터 슬라이싱 및 직접 순위를 추가
  const rankedData = addRankToData(sortedData, currentPage, 10);

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
          <DataRowSetRender
            type="invest"
            dataList={rankedData}
            isloading={loading} // 로딩 상태 전달
          />
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
