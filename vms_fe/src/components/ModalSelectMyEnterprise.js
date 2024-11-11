import React, { useState, useMemo, useCallback } from "react";
import style from "./ModalSelectMyEnterprise.module.css";
import mockupData from "assets/mock/mockData";
import Pagination from "components/common/Pagination";
import SearchBar from "components/common/SearchBar";
import SelectBtn from "./common/SelectBtn";

const ModalSelectMyEnterprise = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentlySelected, setRecentlySelected] = useState([]);
  const [currentSelection, setCurrentSelection] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredCompanies = useMemo(() => {
    return mockupData.filter((company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = useMemo(
    () => Math.ceil(filteredCompanies.length / itemsPerPage),
    [filteredCompanies.length, itemsPerPage]
  );

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const handleSelect = useCallback(
    (companyName) => {
      const company = mockupData.find((c) => c.name === companyName);

      if (currentSelection.length >= 5) {
        setError("*비교할 기업은 최대 5개까지 선택 가능합니다.");
        return;
      }

      if (!currentSelection.some((selected) => selected.name === companyName)) {
        setCurrentSelection((prev) => [...prev, company]);

        setRecentlySelected((prev) => {
          const newRecentlySelected = prev.filter((c) => c.name !== companyName);
          newRecentlySelected.unshift(company);
          return newRecentlySelected.slice(0, 5);
        });
        setError("");
      }
    },
    [currentSelection]
  );

  const handleDeselect = useCallback((companyName) => {
    setCurrentSelection((prev) =>
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

  const handleClose = () => {
    onClose(currentSelection);
  };

  const currentCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCompanies.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCompanies, currentPage, itemsPerPage]);

  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContainer}>
        <div className={style.modalContent}>
          <div className={style.modalHeadText}>
            나의 기업 선택하기
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
            onClear={() => setSearchTerm("")}
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

                    {currentSelection.some(
                      (selected) => selected.name === company.name
                    ) ? (
                      <SelectBtn
                        onClick={() => handleDeselect(company.name)}
                        text="선택 해제"
                        status="deselected"
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

                        {currentSelection.some(
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
