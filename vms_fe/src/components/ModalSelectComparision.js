import React, { useEffect, useState, useMemo, useCallback } from "react";
import { debounce } from "lodash";
import style from "./ModalSelectComparision.module.css";
import Pagination from "components/common/Pagination";
import SearchBar from "components/common/SearchBar";
import SelectBtn from "./common/SelectBtn";
import { getApiData } from "../API/api";

const ModalSelectComparision = ({
  isOpen,
  onClose,
  title,
  text,
  autoClose = false,
  autoCloseOnLimit = false,
  preSelectedCompanies = [],
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [companyList, setCompanyList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    setSelectedCompanies(preSelectedCompanies);
  }, [preSelectedCompanies, isOpen]);

  const fetchCompanies = async () => {
    setIsLoading(true);
    try {
      const data = await getApiData(1, 84, searchTerm, "name", "asc");
      setCompanyList(data.companies || []);
    } catch (error) {
      console.error("기업 데이터를 가져오는 중 오류가 발생했습니다:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedFetchCompanies = useMemo(
    () => debounce(fetchCompanies, 200),
    [searchTerm]
  );

  useEffect(() => {
    if (isOpen && searchTerm) {
      debouncedFetchCompanies();
    }
    return () => {
      debouncedFetchCompanies.cancel();
    };
  }, [isOpen, searchTerm, debouncedFetchCompanies]);

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, []);

  const totalPages = useMemo(
    () => Math.ceil(companyList.length / itemsPerPage),
    [companyList.length, itemsPerPage]
  );

  const handleSelect = useCallback(
    (companyName) => {
      const company = companyList.find((c) => c.name === companyName);

      if (selectedCompanies.length >= 5) {
        setError("*비교할 기업은 최대 5개까지 선택 가능합니다.");
        return;
      }

      if (
        !selectedCompanies.some((selected) => selected.name === companyName)
      ) {
        const newSelectedCompanies = [...selectedCompanies, company];
        setSelectedCompanies(newSelectedCompanies);
        setError("");

        // autoClose가 true일 경우 1개 선택 시 닫기 - 나의 기업 선택하기
        if (autoClose) {
          onClose(newSelectedCompanies);
        }

        // autoCloseOnLimit이 true이고 5개 선택 시 모달 자동 닫기 - 비교할 기업 선택하기
        if (autoCloseOnLimit && newSelectedCompanies.length === 5) {
          onClose(newSelectedCompanies);
        }
      }
    },
    [companyList, selectedCompanies, onClose, autoClose, autoCloseOnLimit]
  );

  const handleSearch = () => {
    debouncedFetchCompanies();
  };

  const handleDeselect = useCallback((companyName) => {
    setSelectedCompanies((prev) =>
      prev.filter((company) => company.name !== companyName)
    );
    setError("");
  }, []);

  const handlePageChange = useCallback(
    (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  const currentCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return companyList.slice(startIndex, startIndex + itemsPerPage);
  }, [companyList, currentPage, itemsPerPage]);

  const handleClose = () => {
    onClose(selectedCompanies);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay} onClick={handleOverlayClick}>
      <div className={style.modalContainer}>
        <div className={style.modalContent}>
          <div className={style.modalHeadText}>
            {title}
            <img
              src="/assets/images/ic_delete.svg"
              className={style.deleteLogo}
              alt="deleteLogo"
              onClick={handleClose}
            />
          </div>

          <SearchBar
            value={searchTerm}
            onChange={handleSearchChange}
            onClear={() => handleSearchChange("")}
            onSearch={handleSearch}
          />

          {selectedCompanies.length > 0 && (
            <div className={style.PartitionHug}>
              <h2 className={style.CompaniesColumnText}>
                {text} ({selectedCompanies.length})
              </h2>
              <ul className={style.companyColumnsHug}>
                {selectedCompanies.map((company) => (
                  <li key={company.name} className={style.companyColumns}>
                    <div className={style.companyColumnsLogoTextHug}>
                      <img
                        src={company.logoUrl}
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
                      status="deselected"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {searchTerm && (
            <div className={style.PartitionHug}>
              <h2 className={style.CompaniesColumnText}>
                검색 결과 ({companyList.length})
              </h2>
              {companyList.length === 0 ? (
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
                            src={company.logoUrl}
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
                            status="selected"
                          />
                        ) : (
                          <SelectBtn
                            onClick={() => handleSelect(company.name)}
                            text="선택하기"
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

          {searchTerm && companyList.length > 0 && (
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

export default ModalSelectComparision;

