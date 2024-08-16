import React, { useState } from "react";
import style from "./ModalSelectComparision.module.css";
import mockupData from "assets/mock/mockData";
import Pagination from "components/common/Pagination";
import SearchBar from "components/common/SearchBar";
import logo from "assets/images/company_logo_1.svg"; // 로고를 직접 import 합니다.

const ModalSelectComparision = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [error, setError] = useState("");

  // 필터링된 회사 목록
  const filteredCompanies = mockupData.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 검색어 변경 핸들러
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  // 회사 선택 핸들러
  const handleSelect = (companyName) => {
    const company = mockupData.find((c) => c.name === companyName);

    if (selectedCompanies.length >= 5) {
      setError("*비교할 기업은 최대 5개까지 선택 가능합니다.");
      return;
    }

    if (!selectedCompanies.some((selected) => selected.name === companyName)) {
      setSelectedCompanies([...selectedCompanies, company]);
      setError(""); // Clear error when a valid selection is made
    }
  };

  // 회사 선택 해제 핸들러
  const handleDeselect = (companyName) => {
    setSelectedCompanies(
      selectedCompanies.filter((company) => company.name !== companyName)
    );
    setError(""); // Clear error when deselecting
  };

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  // 페이지네이션 핸들러
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 페이지네이션에 따라 현재 페이지의 회사 목록 가져오기
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCompanies = filteredCompanies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContainer}>
        <div className={style.modalContent}>
          <div className={style.modalHeadText}>
            비교할 기업 선택하기
            <img
              src={require("assets/images/ic_delete.svg").default}
              className={style.deleteLogo}
              alt="deleteLogo"
              onClick={onClose}
            />
          </div>

          <SearchBar
            value={searchTerm}
            onChange={handleSearchChange}
            onClear={() => setSearchTerm("")}
          />

          <h2 className={style.CompaniesColumnText}>
            선택한 기업 ({selectedCompanies.length})
          </h2>
          <ul className={style.companyColumnsHug}>
            {selectedCompanies.map((company) => (
              <li key={company.name} className={style.companyColumns}>
                <div className={style.companyColumnsLogoTextHug}>
                  <img
                    src={logo}
                    alt={`${company.name} logo`}
                    className={style.companyLogo}
                  />
                  <div className={style.companyColumnsNameCategoryHug}>
                    <div className={style.companyColumnsName}>
                      {company.name}{" "}
                    </div>
                    <div className={style.companyColumnsCategory}>
                      {company.category}
                    </div>
                  </div>
                </div>

                <button onClick={() => handleDeselect(company.name)}>
                  선택해제
                </button>
              </li>
            ))}
          </ul>
          {error && <div className={style.errorMessage}>{error}</div>}

          <h2 className={style.CompaniesColumnText}>검색 결과</h2>
          <ul className={style.companyColumnsHug}>
            {currentCompanies.map((company) => (
              <li key={company.name} className={style.companyColumns}>
                <div className={style.companyColumnsLogoTextHug}>
                  <img
                    src={logo}
                    alt={`${company.name} logo`}
                    className={style.companyLogo}
                  />
                  <div className={style.companyColumnsNameCategoryHug}>
                    <div className={style.companyColumnsName}>
                      {company.name}{" "}
                    </div>
                    <div className={style.companyColumnsCategory}>
                      {company.category}
                    </div>
                  </div>
                </div>
                {selectedCompanies.some(
                  (selected) => selected.name === company.name
                ) ? (
                  <>
                    <button onClick={() => handleDeselect(company.name)}>
                      선택해제
                    </button>
                  </>
                ) : (
                  <button onClick={() => handleSelect(company.name)}>
                    선택하기
                  </button>
                )}
              </li>
            ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            hasNext={currentPage < totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalSelectComparision;
