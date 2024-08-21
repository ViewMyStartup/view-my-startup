import React, { useState } from "react";
import styles from "./DefaultPage.module.css";

import PageNav from "components/PageNav.js";
import SearchBar from "components/common/SearchBar.js";
import Dropdown from "components/common/Dropdown.js";
import HeaderColumns from "components/common/HeaderColumns.js";
import CompanyDataPerRow from "components/common/CompanyDataPerRow.js";
import Pagination from "components/common/Pagination.js";
import mockupData from "assets/mock/mockData.js";
import usePageHandler from "hook/usePageHandler.js";

function DefaultPage() {
  const { currentPage, totalPages, handlePageChange } = usePageHandler();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("누적 투자금액 높은순");
  const companiesPerPage = 10;

  // 검색어 필터링
  let filteredCompanies = mockupData.filter((company) =>
    company.name.includes(searchQuery)
  );
  // dropdown 정렬
  filteredCompanies = filteredCompanies.sort((a, b) => {
    switch (sortOption) {
      case "누적 투자금액 높은순":
        return b.total_investment - a.total_investment;
      case "누적 투자금액 낮은순":
        return a.total_investment - b.total_investment;
      case "매출액 높은순":
        return b.revenue - a.revenue;
      case "매출액 낮은순":
        return a.revenue - b.revenue;
      case "고용 인원 많은순":
        return b.employees - a.employees;
      case "고용 인원 적은순":
        return a.employees - b.employees;
      default:
        return 0;
    }
  });

  const displayedCompanies = filteredCompanies
    .slice((currentPage - 1) * companiesPerPage, currentPage * companiesPerPage)
    .map((company, index) => ({
      ...company,
      rank: (currentPage - 1) * companiesPerPage + index + 1, // 순위 부여
    }));

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
      <PageNav />
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
          <HeaderColumns type="rank" />
          <ul className={styles.companyTable}>
            {displayedCompanies.map((company) => (
              <CompanyDataPerRow
                key={company.name}
                type="rank"
                dataObject={company}
              />
            ))}
          </ul>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredCompanies.length / companiesPerPage)}
          onPageChange={handlePageChange}
          hasNext={currentPage < totalPages}
        />
      </div>
    </div>
  );
}

export default DefaultPage;
