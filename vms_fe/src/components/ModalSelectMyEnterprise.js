import React, { useState, useMemo, useCallback } from "react";
import style from "./ModalSelectMyEnterprise.module.css";
import mockupData from "assets/mock/mockData";
import Pagination from "components/common/Pagination";
import SearchBar from "components/common/SearchBar";
import logo from "assets/images/company_logo_1.svg";
import SelectBtn from "./common/SelectBtn";
import deleteIcon from "assets/images/ic_delete.svg";

const ModalSelectMyEnterprise = ({ isOpen, onClose }) => {
  // 검색어 상태 (검색창의 입력 값을 관리)
  const [searchTerm, setSearchTerm] = useState("");

  // 최근 선택한 기업 목록 (최근에 선택한 기업을 저장)
  const [recentlySelected, setRecentlySelected] = useState([]);

  // 현재 선택된 기업 목록 (현재 선택된 기업을 저장)
  const [currentSelection, setCurrentSelection] = useState([]);

  // 에러 메시지 상태 (선택 가능한 기업 수 초과 시 에러 메시지 저장)
  const [error, setError] = useState("");

  // 현재 페이지 상태 (페이지네이션을 위해 현재 페이지 번호를 저장)
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지당 항목 수 (한 페이지에 표시할 기업 수)
  const itemsPerPage = 5;

  // 검색어에 따라 필터링된 기업 목록을 메모이제이션하여 성능 최적화
  const filteredCompanies = useMemo(() => {
    return mockupData.filter((company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // 전체 페이지 수 계산 (총 기업 수를 페이지당 항목 수로 나눠서 계산)
  const totalPages = useMemo(
    () => Math.ceil(filteredCompanies.length / itemsPerPage),
    [filteredCompanies.length, itemsPerPage]
  );

  // 검색어 변경 핸들러 (검색창 입력 값이 변경될 때 호출)
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  // 기업 선택 핸들러 (기업을 선택할 때 호출)
  const handleSelect = useCallback(
    (companyName) => {
      const company = mockupData.find((c) => c.name === companyName);

      // 현재 선택된 기업이 최대 5개를 초과할 경우 에러 메시지 설정
      if (currentSelection.length >= 5) {
        setError("*비교할 기업은 최대 5개까지 선택 가능합니다.");
        return;
      }

      // 기업이 현재 선택된 목록에 없으면 추가
      if (!currentSelection.some((selected) => selected.name === companyName)) {
        setCurrentSelection((prev) => [...prev, company]);

        setRecentlySelected((prev) => {
          // 최근 선택 목록에서 이미 선택된 기업이 있으면 제거
          const newRecentlySelected = prev.filter(
            (c) => c.name !== companyName
          );
          // 새로 추가된 기업을 목록의 앞에 추가
          newRecentlySelected.unshift(company);
          // 최신 5개 기업만 유지
          return newRecentlySelected.slice(0, 5);
        });
        setError(""); // 에러 메시지 초기화
      }
    },
    [currentSelection]
  );

  // 기업 선택 해제 핸들러 (선택된 기업을 해제할 때 호출)
  const handleDeselect = useCallback((companyName) => {
    setCurrentSelection((prev) =>
      prev.filter((company) => company.name !== companyName)
    );
    setError(""); // 에러 메시지 초기화
  }, []);

  // 페이지 변경 핸들러 (페이지네이션에서 페이지를 변경할 때 호출)
  const handlePageChange = useCallback(
    (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  // 모달 닫기 핸들러 (모달을 닫을 때 현재 선택된 기업 목록을 부모 컴포넌트로 전달합니다, 사용시 추가 수정사항 필요해보일경우 말씀주세요)
  const handleClose = () => {
    onClose(currentSelection);
  };

  // 현재 페이지의 기업 목록 (현재 페이지에 맞는 기업을 슬라이스하여 반환)
  const currentCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCompanies.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCompanies, currentPage, itemsPerPage]);

  // 모달이 열리지 않은 경우 null을 반환하여 렌더링을 막음
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContainer}>
        <div className={style.modalContent}>
          <div className={style.modalHeadText}>
            나의 기업 선택하기
            <img
              src={deleteIcon}
              className={style.deleteLogo}
              alt="deleteLogo"
              onClick={handleClose} // 모달 닫기 버튼 클릭 시 handleClose 호출
            />
          </div>

          <SearchBar
            value={searchTerm}
            onChange={handleSearchChange}
            onClear={() => setSearchTerm("")} // 검색어 지우기 버튼 클릭 시 검색어를 비우도록 설정
          />

          {recentlySelected.length > 0 && (
            <div className={style.PartitionHug}>
              <h2 className={style.CompaniesColumnText}>
                최근 선택한 기업 ({recentlySelected.length})
              </h2>
              <ul className={style.companyColumnsHug}>
                {recentlySelected.map((company) => (
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

                    {currentSelection.some(
                      (selected) => selected.name === company.name
                    ) ? (
                      <SelectBtn
                        onClick={() => handleDeselect(company.name)}
                        text="선택 해제" // 선택 해제 버튼
                        status="deselected"
                      />
                    ) : (
                      <SelectBtn
                        onClick={() => handleSelect(company.name)}
                        text="선택하기" // 선택하기 버튼
                        status="default"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {searchTerm && (
            <div className={style.PartitionHug}>
              <h2 className={style.CompaniesColumnText}>
                검색 결과 ({filteredCompanies.length})
              </h2>
              {filteredCompanies.length === 0 ? (
                <div className={style.noResultsMessage}>
                  검색결과가 없습니다
                </div>
              ) : (
                <>
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

                        {currentSelection.some(
                          (selected) => selected.name === company.name
                        ) ? (
                          <SelectBtn
                            onClick={() => handleDeselect(company.name)}
                            text="선택완료" // 선택된 기업 해제 버튼
                            status="selected"
                          />
                        ) : (
                          <SelectBtn
                            onClick={() => handleSelect(company.name)}
                            text="선택하기" // 선택하기 버튼
                            status="default"
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                  {error && <div className={style.errorMessage}>{error}</div>}
                </>
              )}
            </div>
          )}

          {searchTerm && filteredCompanies.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              hasNext={currentPage < totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalSelectMyEnterprise;
