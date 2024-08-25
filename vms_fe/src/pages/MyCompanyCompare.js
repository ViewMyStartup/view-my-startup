import React, { useState } from "react";
import styles from "./MyCompanyCompare.module.css";
import PageNav from "components/PageNav";
import ResetBtn from "components/common/ResetBtn";
import icRestart from "../assets/images/ic_restart.svg";
import ModalSelectComparision from "../components/ModalSelectComparision";
import CompanyCard from "../components/common/CompanyCard";

function MyCompanyCompare() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [isComparisonVisible, setIsComparisonVisible] = useState(false);
  const [resetButtonText, setResetButtonText] = useState("전체 초기화");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (companies) => {
    setSelectedCompanies(companies);
    setIsModalOpen(false);
  };

  const handleComparisonClick = () => {
    setIsComparisonVisible(true);
    setResetButtonText("다른 기업 비교하기"); // 버튼 텍스트 변경
  };

  const handleResetButtonClick = () => {
    if (resetButtonText === "전체 초기화") {
      setSelectedCompanies([]);
    } else if (resetButtonText === "다른 기업 비교하기") {
      // 다른 동작 추가 예정
    }
  };

  return (
    <div className={styles.pageContainer}>
      <PageNav />
      <div className={styles.content}>
        <div className={styles.subheadingWrapper}>
          <h1 className={styles.heading}>나의 기업을 선택해 주세요!</h1>
          <div className={styles.addCompanyBtnWrapper}>
            <ResetBtn
              text={
                <>
                  <img
                    src={icRestart}
                    alt="restart"
                    className={styles.icRestart}
                  />
                  &nbsp;{resetButtonText}
                </>
              }
              disabled={selectedCompanies.length === 0}
              onClick={handleResetButtonClick}
            />
          </div>
        </div>

        <div className={styles.addMyCompany}>
          <div className={styles.innerBox}>
            {selectedCompanies.length > 0 ? (
              selectedCompanies.map((company, index) => (
                <div key={index} className={styles.myCompanyCardWrapper}>
                  <CompanyCard
                    name={company.name}
                    category={company.category}
                    logoSrc={company.logoSrc}
                    showDeleteButton={false}
                    showBackground={false}
                  />
                  <p
                    className={styles.removeText}
                    onClick={() => {
                      const newCompanies = [...selectedCompanies];
                      newCompanies.splice(index, 1);
                      setSelectedCompanies(newCompanies);
                    }}
                  >
                    선택 취소
                  </p>
                </div>
              ))
            ) : (
              <div className={styles.addButtonWrapper}>
                <div className={styles.addButton} onClick={openModal}>
                  {/* 모달 열기 버튼 */}
                </div>
                <p className={styles.addText}>기업 추가</p>
              </div>
            )}
          </div>
        </div>

        {isComparisonVisible && (
          <div className={styles.btnWrapper}>
            <button
              onClick={handleComparisonClick}
              className={styles.compareButton}
            >
              기업 비교하기
            </button>
          </div>
        )}
      </div>

      {/* 나의 기업 선택하기 모달 */}
      <ModalSelectComparision
        isOpen={isModalOpen}
        onClose={closeModal}
        title="나의 기업 선택하기"
        text="최근 선택된 기업"
      />
    </div>
  );
}

export default MyCompanyCompare;

