import React, { useEffect, useState } from "react";
import styles from "./DefaultPage.module.css";

import PageNav from "components/PageNav.js";
import SearchBar from "components/common/SearchBar.js";
import Dropdown from "components/common/Dropdown.js";
import DataRowSetRender from "components/DataRowSetRender.js";
import Pagination from "components/common/Pagination.js";
import usePageHandler from "hook/usePageHandler.js";
import { getApiData } from "API/api.js";
import { SortingOptions } from "utils/sorting.js";

function DefaultPage() {
  const { currentPage, handlePageChange } = usePageHandler();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("누적 투자금액 높은순");
  const [companies, setCompanies] = useState([]);
  const [totalPages, setTotalPages] = useState(5);
  const companiesPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const { sortBy, order } = SortingOptions(sortOption);
      try {
        const data = await getApiData(
          currentPage,
          companiesPerPage,
          searchQuery,
          sortBy,
          order
        );
        setCompanies(data.companies);
        setTotalPages(Math.ceil(data.total / companiesPerPage)); // totalPages 설정
      } catch (error) {
        console.error("fetch error:", error);
      }
    };

    fetchData();
  }, [currentPage, searchQuery, sortOption]);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    handlePageChange(1); // 검색 시 페이지를 첫 페이지로 리셋
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    handlePageChange(1); // 검색어 초기화 시 페이지를 첫 페이지로 리셋
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    handlePageChange(1);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.nav}>
        <PageNav />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.searchBarContainer}>
          <h2 className={styles.listTitle}>전체 스타트업 목록</h2>
          <div className={styles.searchBarRight}>
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              onClear={handleClearSearch}
            />
            <Dropdown onOptionSelect={handleSortChange} />
          </div>
        </div>
        <div className={styles.listContainer}>
          <DataRowSetRender type="rank" dataList={companies} />
        </div>
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

export default DefaultPage;
