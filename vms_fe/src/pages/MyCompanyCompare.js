import React, { useState } from "react";
import styles from "./MyCompanyCompare.module.css";
import PageNav from "components/PageNav";
import MediumBtn from "components/common/MediumBtn";
import DropdownMiddleSize from "components/common/DropdownMiddleSize";
import DataRowSetRenderNoRank from "../components/DataRowSetRenderNoRank";
import icCircle from "../assets/images/ic_circle.svg";
import icPlus from "../assets/images/ic_plus.svg";
import icRestart from "../assets/images/ic_restart.svg";
import ModalSelectComparision from "../components/ModalSelectComparision";
import CompanyCard from "../components/common/CompanyCard";

function MyCompanyCompare() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdditionalModalOpen, setIsAdditionalModalOpen] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [additionalCompanies, setAdditionalCompanies] = useState([]);
  const [isComparisonVisible, setIsComparisonVisible] = useState(false);
  const [sortingOption, setSortingOption] = useState("매출액 높은순");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openAdditionalModal = () => {
    setIsAdditionalModalOpen(true);
  };

  const closeModal = (companies) => {
    setSelectedCompanies(companies);
    setIsModalOpen(false);
  };

  const closeAdditionalModal = (companies) => {
    setAdditionalCompanies(companies);
    setIsAdditionalModalOpen(false);
  };

  const removeCompany = (index, isAdditional) => {
    const newCompanies = isAdditional
      ? [...additionalCompanies]
      : [...selectedCompanies];
    newCompanies.splice(index, 1);
    if (isAdditional) {
      setAdditionalCompanies(newCompanies);
    } else {
      setSelectedCompanies(newCompanies);
    }
  };

  const handleSortingChange = (option) => {
    setSortingOption(option);
  };

  const handleComparisonClick = () => {
    setIsComparisonVisible(true);
  };

  return (
    <div className={styles.pageContainer}>
      <PageNav />
      <div className={styles.content}>
        {/* "나의 기업을 선택해 주세요!" 부분 */}
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
              disabled={selectedCompanies.length === 0}
              onClick={() => setSelectedCompanies([])}
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
                    onClick={() => removeCompany(index, false)}
                  >
                    선택 취소
                  </p>
                </div>
              ))
            ) : (
              <div className={styles.addButtonWrapper}>
                <div className={styles.addButton} onClick={openModal}>
                  <img
                    src={icCircle}
                    alt="circle"
                    className={styles.icCircle}
                  />
                  <img src={icPlus} alt="plus" className={styles.icPlus} />
                </div>
                <p className={styles.addText}>기업 추가</p>
              </div>
            )}
          </div>
        </div>

        {isComparisonVisible ? (
          <>
            {/* 비교 결과 확인하기 섹션 */}
            <div className={styles.sectionWrapper}>
              <div className={styles.headingWrapper}>
                <h1 className={styles.heading}>비교 결과 확인하기</h1>
                <DropdownMiddleSize
                  initialLabel="매출액 높은순"
                  options={[
                    "누적 투자금액 높은순",
                    "누적 투자금액 낮은순",
                    "매출액 높은순",
                    "매출액 낮은순",
                    "고용 인원 많은순",
                    "고용 인원 적은순",
                  ]}
                  handleOptionChange={handleSortingChange}
                  className={styles.dropdown}
                />
              </div>
              <div className={styles.dataRowWrapper}>
                <DataRowSetRenderNoRank
                  type="noRank" // 다시 noRank 타입으로 전달
                  dataList={selectedCompanies.concat(additionalCompanies)}
                />
              </div>
            </div>

            {/* 기업 순위 확인하기 섹션 */}
            <div className={styles.sectionWrapper}>
              <div className={styles.headingWrapper}>
                <h1 className={styles.heading}>기업 순위 확인하기</h1>
                <DropdownMiddleSize
                  initialLabel="매출액 높은순"
                  options={[
                    "누적 투자금액 높은순",
                    "누적 투자금액 낮은순",
                    "매출액 높은순",
                    "매출액 낮은순",
                    "고용 인원 많은순",
                    "고용 인원 적은순",
                  ]}
                  handleOptionChange={handleSortingChange}
                  className={styles.dropdown}
                />
              </div>
              <div className={styles.dataRowWrapper}>
                <DataRowSetRenderNoRank
                  type="rank" // rank 타입으로 전달
                  dataList={selectedCompanies.concat(additionalCompanies)}
                />
              </div>
            </div>

            {/* "나의 기업에 투자하기" 버튼 */}
            <div className={styles.btnWrapper}>
              <MediumBtn text="나의 기업에 투자하기" />
            </div>
          </>
        ) : (
          <>
            {selectedCompanies.length > 0 && (
              <>
                <div className={styles.subheadingWrapper}>
                  <h2 className={styles.subheading}>어떤 기업이 궁금하세요?</h2>
                  <p className={styles.maxCompaniesText}>(최대 5개)</p>
                  <div className={styles.addCompanyBtnWrapper}>
                    <MediumBtn
                      text="기업 추가하기"
                      className={styles.addCompanyBtn}
                      onClick={openAdditionalModal}
                    />
                  </div>
                </div>

                <div className={styles.infoBox}>
                  <div className={styles.innerBox}>
                    {additionalCompanies.length > 0 ? (
                      additionalCompanies.map((company, index) => (
                        <div
                          key={index}
                          className={styles.comparisonCompanyCardWrapper}
                        >
                          <CompanyCard
                            name={company.name}
                            category={company.category}
                            logoSrc={company.logoSrc}
                            showDeleteButton={true}
                            showBackground={true}
                            onDelete={() => removeCompany(index, true)}
                          />
                        </div>
                      ))
                    ) : (
                      <div className={styles.noCompaniesInfo}>
                        아직 추가한 기업이 없어요,
                        <br />
                        버튼을 눌러 기업을 추가해보세요!
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            <div className={styles.btnWrapper}>
              <MediumBtn
                text="기업 비교하기"
                className={selectedCompanies.length === 0 ? styles.disabledBtn : ""}
                disabled={selectedCompanies.length === 0}
                onClick={handleComparisonClick}
              />
            </div>
          </>
        )}
      </div>

      {/* 나의 기업 선택하기 모달 */}
      <ModalSelectComparision
        isOpen={isModalOpen}
        onClose={closeModal}
        title="나의 기업 선택하기"
        text="최근 선택된 기업"
      />

      {/* 비교할 기업 선택하기 모달 */}
      <ModalSelectComparision
        isOpen={isAdditionalModalOpen}
        onClose={closeAdditionalModal}
        title="비교할 기업 선택하기"
        text="선택한 기업"
      />
    </div>
  );
}

export default MyCompanyCompare;

