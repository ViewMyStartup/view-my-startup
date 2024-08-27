import React, { useState, useEffect } from "react";
import styles from "./MyCompanyCompare.module.css";
import PageNav from "components/PageNav";
import AddCompanyBtn from "components/common/AddCompanyBtn";
import CompareCompanyBtn from "components/common/CompareCompanyBtn";
import CompareOtherCompanyBtn from "components/common/CompareOtherCompanyBtn";
import ResetBtn from "components/common/ResetBtn";
import DropdownSmallSize from "components/common/DropdownSmallSize";
import DataRowSetRenderNoRank from "../components/DataRowSetRenderNoRank";
import DataRowSetRender from "../components/DataRowSetRender";
import icCircle from "../assets/images/ic_circle.svg";
import icPlus from "../assets/images/ic_plus.svg";
import icRestart from "../assets/images/ic_restart.svg";
import ModalSelectComparision from "../components/ModalSelectComparision";
import CompanyCard from "../components/common/CompanyCard";
import axios from "axios";

function MyCompanyCompare() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdditionalModalOpen, setIsAdditionalModalOpen] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [additionalCompanies, setAdditionalCompanies] = useState([]);
  const [isComparisonVisible, setIsComparisonVisible] = useState(false);
  const [sortingOptionForComparison, setSortingOptionForComparison] = useState("매출액 높은순");
  const [sortingOptionForRank, setSortingOptionForRank] = useState("매출액 높은순");
  const [sortedCompaniesForComparison, setSortedCompaniesForComparison] = useState([]);
  const [sortedCompaniesForRank, setSortedCompaniesForRank] = useState([]);
  const [resetButtonText, setResetButtonText] = useState("전체 초기화");
  const [allCompanies, setAllCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('/api/companies');
        setAllCompanies(response.data);
      } catch (error) {
        console.error("기업 데이터를 가져오는 데 실패했습니다.", error);
      }
    };

    fetchCompanies();
  }, []);

  useEffect(() => {
    if (selectedCompanies.length > 0 || additionalCompanies.length > 0) {
      const combinedCompanies = selectedCompanies.concat(additionalCompanies);
      sortCompanies(combinedCompanies, sortingOptionForComparison, "comparison");
      sortCompanies(combinedCompanies, sortingOptionForRank, "rank");
    }
  }, [selectedCompanies, additionalCompanies, sortingOptionForComparison, sortingOptionForRank]);

  const openModal = () => setIsModalOpen(true);
  const openAdditionalModal = () => setIsAdditionalModalOpen(true);
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

  const handleSortingChangeForComparison = (option) => {
    setSortingOptionForComparison(option);
  };

  const handleSortingChangeForRank = (option) => {
    setSortingOptionForRank(option);
  };

  const sortCompanies = (companies, option, type) => {
    const sortedList = [...companies];

    switch (option) {
      case "누적 투자금액 높은순":
        sortedList.sort((a, b) => b.totalInvestment - a.totalInvestment);
        break;
      case "누적 투자금액 낮은순":
        sortedList.sort((a, b) => a.totalInvestment - b.totalInvestment);
        break;
      case "매출액 높은순":
        sortedList.sort((a, b) => b.revenue - a.revenue);
        break;
      case "매출액 낮은순":
        sortedList.sort((a, b) => a.revenue - b.revenue);
        break;
      case "고용 인원 많은순":
        sortedList.sort((a, b) => b.employees - a.employees);
        break;
      case "고용 인원 적은순":
        sortedList.sort((a, b) => a.employees - b.employees);
        break;
      default:
        break;
    }

    const rankedList = sortedList.map((company, index) => ({
      ...company,
      rank: index + 1,
    }));

    if (type === "comparison") {
      setSortedCompaniesForComparison(rankedList);
    } else if (type === "rank") {
      setSortedCompaniesForRank(rankedList);
    }
  };

  const handleComparisonClick = () => {
    setIsComparisonVisible(true);
    setResetButtonText("다른 기업 비교하기");
  };

  const isCompareButtonEnabled = selectedCompanies.length > 0 && additionalCompanies.length > 0;

  const handleResetButtonClick = () => {
    if (resetButtonText === "전체 초기화") {
      setSelectedCompanies([]);
      setAdditionalCompanies([]);
    } else if (resetButtonText === "다른 기업 비교하기") {
      openAdditionalModal();
    }
  };

  const getRankedCompanies = (sortedCompanies, rankOption) => {
    const rankSortedList = [...sortedCompanies];
    let myCompanyIndex = rankSortedList.findIndex(company => selectedCompanies.some(selected => selected.id === company.id));

    if (myCompanyIndex === -1) return []; // 내 기업이 없다면 빈 배열 반환

    if (myCompanyIndex > 2) {
      return [
        rankSortedList[myCompanyIndex],
        ...rankSortedList.slice(myCompanyIndex - 2, myCompanyIndex),
        ...rankSortedList.slice(myCompanyIndex + 1, myCompanyIndex + 3),
      ];
    } else {
      return [
        ...rankSortedList.slice(0, 5)
      ];
    }
  };

  const rankedCompanies = getRankedCompanies(sortedCompaniesForRank, sortingOptionForRank);

  return (
    <div className={styles.pageContainer}>
      <PageNav />
      <div className={styles.content}>
        <div className={styles.subheadingWrapper}>
          <h1 className={styles.heading}>나의 기업을 선택해 주세요!</h1>
          <div className={styles.addCompanyBtnWrapper}>
            {resetButtonText === "전체 초기화" ? (
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
            ) : (
              <CompareOtherCompanyBtn
                text="다른 기업 비교하기"
                onClick={handleResetButtonClick}
              />
            )}
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
                    logoUrl={company.logoUrl}
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
            <div className={styles.sectionWrapper}>
              <div className={styles.headingWrapper}>
                <h1 className={styles.heading}>비교 결과 확인하기</h1>
                <DropdownSmallSize
                  initialLabel={sortingOptionForComparison}
                  options={[
                    "누적 투자금액 높은순",
                    "누적 투자금액 낮은순",
                    "매출액 높은순",
                    "매출액 낮은순",
                    "고용 인원 많은순",
                    "고용 인원 적은순",
                  ]}
                  handleOptionChange={handleSortingChangeForComparison}
                  className={styles.dropdown}
                />
              </div>
              <div className={styles.dataRowWrapper}>
                <DataRowSetRenderNoRank
                  type="noRank"
                  dataList={sortedCompaniesForComparison}
                />
              </div>
            </div>

            <div className={styles.sectionWrapper}>
              <div className={styles.headingWrapper}>
                <h1 className={styles.heading}>기업 순위 확인하기</h1>
                <DropdownSmallSize
                  initialLabel={sortingOptionForRank}
                  options={[
                    "누적 투자금액 높은순",
                    "누적 투자금액 낮은순",
                    "매출액 높은순",
                    "매출액 낮은순",
                    "고용 인원 많은순",
                    "고용 인원 적은순",
                  ]}
                  handleOptionChange={handleSortingChangeForRank}
                  className={styles.dropdown}
                />
              </div>
              <div className={styles.dataRowWrapper}>
                <DataRowSetRender type="rank" dataList={rankedCompanies} />
              </div>
            </div>

            <div className={styles.btnWrapper}>
              <CompareCompanyBtn
                text="나의 기업에 투자하기"
                onClick={() => {}}
                disabled={!isCompareButtonEnabled}
              />
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
                    <AddCompanyBtn
                      text="기업 추가하기"
                      className={styles.addCompanyBtn}
                      onClick={openAdditionalModal}
                    />
                  </div>
                </div>

                <div className={styles.addOtherCompany}>
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
                            logoUrl={company.logoUrl}
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
              <CompareCompanyBtn
                text="기업 비교하기"
                className={
                  isCompareButtonEnabled ? styles.activeBtn : styles.disabledBtn
                }
                disabled={!isCompareButtonEnabled}
                onClick={handleComparisonClick}
              />
            </div>
          </>
        )}
      </div>

      <ModalSelectComparision
        isOpen={isModalOpen}
        onClose={closeModal}
        title="나의 기업 선택하기"
        text="최근 선택된 기업"
        autoClose={true}
        preSelectedCompanies={selectedCompanies}
        allCompanies={allCompanies}
      />

      <ModalSelectComparision
        isOpen={isAdditionalModalOpen}
        onClose={closeAdditionalModal}
        title="비교할 기업 선택하기"
        text="선택한 기업"
        autoCloseOnSelect={false}
        preSelectedCompanies={additionalCompanies}
        allCompanies={allCompanies}
      />
    </div>
  );
}

export default MyCompanyCompare;

