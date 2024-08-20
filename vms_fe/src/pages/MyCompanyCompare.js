import React, { useState } from "react";
import styles from "./MyCompanyCompare.module.css";
import PageNav from "components/PageNav";
import MediumBtn from "components/common/MediumBtn.js";
import icCircle from "../assets/images/ic_circle.svg";
import icPlus from "../assets/images/ic_plus.svg";
import icRestart from "../assets/images/ic_restart.svg";
import ModalSelectComparision from "../components/ModalSelectComparision"; 
import CompanyCard from "../components/common/CompanyCard"; // CompanyCard 가져오기

function MyCompanyCompare() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]); // 선택된 회사들 상태

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (companies) => {
    setSelectedCompanies(companies); // 선택된 회사들 업데이트
    setIsModalOpen(false);
  };

  const removeCompany = (index) => {
    const newCompanies = [...selectedCompanies];
    newCompanies.splice(index, 1);
    setSelectedCompanies(newCompanies);
  };

  return (
    <div className={styles.pageContainer}>
      <PageNav />
      <div className={styles.content}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>나의 기업을 선택해 주세요!</h1>
          <div className={styles.resetBtnWrapper}>
            <MediumBtn
              text={
                <>
                  <img
                    src={icRestart}
                    alt="restart"
                    className={styles.icRestart}
                  />
                  &nbsp;전체 초기화
                </>
              }
              disabled={selectedCompanies.length === 0} // 선택된 회사가 있을 때만 활성화
              onClick={() => setSelectedCompanies([])} // 전체 초기화
            />
          </div>
        </div>
        <div className={styles.addMyCompany}>
          <div className={styles.innerBox}>
            {selectedCompanies.length > 0 ? (
              selectedCompanies.map((company, index) => (
                <div key={index} className={styles.companyCardWrapper}>
                  <CompanyCard
                    name={company.name}
                    category={company.category}
                    logoSrc={company.logoSrc}
                    showDeleteButton={false} // 삭제 아이콘 숨기기
                    showBackground={false} // 배경색 없음
                  />
                  <p
                    className={styles.removeText}
                    onClick={() => removeCompany(index)}
                  >
                    선택 취소
                  </p>
                </div>
              ))
            ) : (
              <div className={styles.addButtonWrapper}>
                <div className={styles.addButton} onClick={openModal}>
                  <img src={icCircle} alt="circle" className={styles.icCircle} />
                  <img src={icPlus} alt="plus" className={styles.icPlus} />
                </div>
                <p className={styles.addText}>기업 추가</p>
              </div>
            )}
          </div>
          <div className={styles.btnWrapper}>
            <MediumBtn text="기업 비교하기" disabled={selectedCompanies.length === 0} />
          </div>
        </div>
      </div>
      <ModalSelectComparision
        isOpen={isModalOpen}
        onClose={closeModal}
        title="나의 기업 선택하기"  // 모달의 고정된 제목
        text="최근 선택된 기업"  // 동적으로 변경되는 텍스트
      />
    </div>
  );
}

export default MyCompanyCompare;

