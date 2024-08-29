import React, { useEffect, useState } from "react";
import styles from "./DefaultPage.module.css";

import PageNav from "components/PageNav.js";
import SearchBar from "components/common/SearchBar.js";
import Dropdown from "components/common/Dropdown.js";
import DataRowSetRender from "components/DataRowSetRender.js";
import Pagination from "components/common/Pagination.js";
import usePageHandler from "hook/usePageHandler.js";
import fetchData from "API/DefaultPageAPI.js";

function DefaultPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("누적 투자금액 높은순");
  const [companies, setCompanies] = useState([]);
  const [totalPages, setTotalPages] = useState(5);
  const [isloading, setIsLoading] = useState(false);

  const companiesPerPage = 10;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    const result = await fetchData(
      currentPage,
      companiesPerPage,
      searchQuery,
      sortOption
    );

    setCompanies(result.companies);
    setTotalPages(Math.ceil(result.total / companiesPerPage));
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [currentPage, sortOption]);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    loadData();
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setCurrentPage(1);
    loadData();
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const handleHomeClick = () => {
    setSearchQuery("");
    setSortOption("누적 투자금액 높은순");
    setCurrentPage(1);
    loadData();
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.nav}>
        <PageNav onHomeClick={handleHomeClick} />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.searchBarContainer}>
          <h2 className={styles.listTitle}>전체 스타트업 목록</h2>
          <div className={styles.searchBarRight}>
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              onClear={handleClearSearch}
              onSearch={handleSearch}
            />
            <Dropdown onOptionSelect={handleSortChange} />
          </div>
        </div>
        <div className={styles.listContainer}>
          <DataRowSetRender
            type="rank"
            dataList={companies}
            currentPage={currentPage}
            isloading={isloading}
          />
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
