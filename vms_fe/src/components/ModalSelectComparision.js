import React, { useState } from "react";
import style from "./ModalSelectComparision.module.css";
import mockupData from "assets/mock/mockData";
import Pagination from "components/common/Pagination";
import SearchBar from "components/common/SearchBar";
import logo from "assets/images/company_logo_1.svg";
import SelectBtn from "./common/SelectBtn";

const ModalSelectComparision = ({ isOpen, onClose }) => {
  // 상태 변수 선언
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const [selectedCompanies, setSelectedCompanies] = useState([]); // 선택된 기업 목록 상태
  const [error, setError] = useState(""); // 오류 메시지 상태

  // 검색어에 따라 필터링된 회사 목록을 반환
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

    // 선택 가능한 기업 수를 5개로 제한
    if (selectedCompanies.length >= 5) {
      setError("*비교할 기업은 최대 5개까지 선택 가능합니다.");
      return;
    }

    // 이미 선택되지 않은 기업을 선택 목록에 추가
    if (!selectedCompanies.some((selected) => selected.name === companyName)) {
      setSelectedCompanies([...selectedCompanies, company]);
      setError(""); // 유효한 선택일 경우 오류 메시지 초기화
    }
  };

  // 회사 선택 해제 핸들러
  const handleDeselect = (companyName) => {
    setSelectedCompanies(
      selectedCompanies.filter((company) => company.name !== companyName)
    );
    setError(""); // 선택 해제 시 오류 메시지 초기화
  };

  // 페이지네이션 상태 관리
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 5; // 페이지당 항목 수
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage); // 전체 페이지 수

  // 페이지 변경 핸들러
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 현재 페이지의 회사 목록 가져오기
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCompanies = filteredCompanies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // 모달이 열려있지 않으면 아무것도 렌더링하지 않음
  if (!isOpen) return null;

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
              onClick={onClose} // 모달 닫기 버튼 클릭 핸들러
            />
          </div>

          <SearchBar
            value={searchTerm}
            onChange={handleSearchChange} // 검색어 변경 핸들러
            onClear={() => setSearchTerm("")} // 검색어 초기화 핸들러
          />

          <div className={style.PartitionHug}>
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
                        {company.name}
                      </div>
                      <div className={style.companyColumnsCategory}>
                        {company.category}
                      </div>
                    </div>
                  </div>

                  <SelectBtn
                    onClick={() => handleDeselect(company.name)}
                    text="선택 해제"
                    status="deselected" // 버튼 상태
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className={style.PartitionHug}>
            <h2 className={style.CompaniesColumnText}>
              검색 결과 ({filteredCompanies.length})
            </h2>
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
                        {company.name}
                      </div>
                      <div className={style.companyColumnsCategory}>
                        {company.category}
                      </div>
                    </div>
                  </div>

                  {selectedCompanies.some(
                    (selected) => selected.name === company.name
                  ) ? (
                    <SelectBtn
                      onClick={() => handleDeselect(company.name)}
                      text="선택완료"
                      status="selected" // 선택된 상태의 버튼
                    />
                  ) : (
                    <SelectBtn
                      onClick={() => handleSelect(company.name)}
                      text="선택하기"
                      status="default" // 기본 상태의 버튼
                    />
                  )}
                </li>
              ))}
            </ul>
            {error && <div className={style.errorMessage}>{error}</div>}{" "}
            {/* 오류 메시지 표시 */}
          </div>

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
