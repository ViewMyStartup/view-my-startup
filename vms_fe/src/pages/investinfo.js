import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/pages/CurrentStateInvest.module.css";
import PageNav from "../components/PageNav";
import Pagination from "../components/common/Pagination";
import DropdownMiddleSize from "../components/common/DropdownMiddleSize";
import DataRowSetRender from "../components/DataRowSetRender";
import { getApiData } from "../API/api";

const DEFAULT_SORT_OPTION = "View My Startup 투자 금액 높은순";

function CurrentStateInvest() {
  const [selectedOption, setSelectedOption] = useState(DEFAULT_SORT_OPTION);
  const [sortedData, setSortedData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
      const sortBy = selectedOption.includes("실제 누적") ? "totalInvestment" : "virtualInvestment";
      const sortOrder = selectedOption.includes("낮은순") ? "asc" : "desc";

      // API 호출
      const response = await getApiData(currentPage, 10, "", sortBy, sortOrder);
      setSortedData(response.companies || []);
      setTotalItems(response.total || 0);
      setTotalPages(Math.ceil(response.total / 10));
    } catch (error) {
      console.error("Error fetching data:", error);
      setSortedData([]);
      setTotalItems(0);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

  // 정렬 옵션과 현재 페이지가 바뀔 때마다 데이터 가져오기
  useEffect(() => {
    fetchData();
  }, [selectedOption, currentPage]);

  // 옵션 변경 핸들러
  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    setCurrentPage(1); // 페이지를 1로 리셋
  };

  // 페이지 변경 핸들러
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // 현재 페이지의 데이터에 순위 계산
  const addRankToData = (dataList, currentPage, limit) => {
    return dataList.map((item, index) => ({
      ...item,
      rank: (currentPage - 1) * limit + index + 1,
    }));
  };

  const rankedData = addRankToData(sortedData, currentPage, 10);

  return (
    <div className={styles.bodyBackground}>
      <Head>
        <title>View My Startup 투자 현황</title>
        <meta name="description" content="투자 현황을 보여주는 페이지입니다." />
      </Head>
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
