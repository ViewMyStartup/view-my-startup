import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import styles from "../styles/pages/DefaultPage.module.css";
import PageNav from "../components/PageNav";
import SearchBar from "../components/common/SearchBar";
import Dropdown from "../components/common/Dropdown";
import DataRowSetRender from "../components/DataRowSetRender";
import Pagination from "../components/common/Pagination";
import fetchData from "../API/DefaultPageAPI";

export default function DefaultPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [tempQuery, setTempQuery] = useState("");
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

  const loadData = useCallback(async () => {
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
  }, [currentPage, companiesPerPage, searchQuery, sortOption]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSearchChange = (value) => {
    setTempQuery(value);
  };

  const handleSearch = () => {
    setSearchQuery(tempQuery);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setTempQuery("");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const handleHomeClick = () => {
    setTempQuery("");
    setSearchQuery("");
    setSortOption("누적 투자금액 높은순");
    setCurrentPage(1);
  };

  return (
    <>
      <Head>
        <title>View My Startup 전체 스타트업 목록</title>
        <meta name="description" content="전체 스타트업 목록 페이지" />
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.nav}>
          <PageNav onHomeClick={handleHomeClick} />
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.searchBarContainer}>
            <h2 className={styles.listTitle}>전체 스타트업 목록</h2>
            <div className={styles.searchBarRight}>
              <SearchBar
                value={tempQuery}
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
    </>
  );
}

