import React, { useState } from "react";
import styles from "./DefaultPage.module.css";

import PageNav from "components/PageNav.js";
import SearchBar from "components/common/SearchBar.js";
import DropdownComponent from "components/common/DropdownComponent.js";
import HeaderColumns from "components/common/HeaderColumns.js";
import CompanyDataPerRow from "components/common/CompanyDataPerRow.js";
import Pagination from "components/common/Pagination.js";
import mockupData from "assets/mock/mockData";
import usePageHandler from "hook/usePageHandler";

function DefaultPage() {
  const { currentPage, totalPages, handlePageChange } = usePageHandler();
  const [searchQuery, setSearchQuery] = useState("");
  const companiesPerPage = 10;

  const filteredCompanies = mockupData.filter((company) =>
    company.name.includes(searchQuery)
  );

  const displayedCompanies = filteredCompanies.slice(
    (currentPage - 1) * companiesPerPage,
    currentPage * companiesPerPage
  );

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    handlePageChange(1); // 검색 시 페이지를 첫 페이지로 리셋
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    handlePageChange(1); // 검색어 초기화 시 페이지를 첫 페이지로 리셋
  };

  return (
    <div className={styles.pageContainer}>
      <PageNav />
      <div className={styles.searchBarContainer}>
        <h2 className={styles.listTitle}>전체 스타트업 목록</h2>
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          onClear={handleClearSearch}
        />
        <DropdownComponent />
      </div>
      <HeaderColumns type="invest" />
      <CompanyDataPerRow type="rank" />
      <Pagination />
    </div>
  );
}

export default DefaultPage;
