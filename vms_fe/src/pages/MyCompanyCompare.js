import React, { useState, useEffect, useCallback } from "react";
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
import { fetchCompanies, sortCompanies, getCompaniesForRanking } from "../API/api";

function MyCompanyCompare() {
  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdditionalModalOpen, setIsAdditionalModalOpen] = useState(false);

  // 선택된 기업과 추가된 기업 상태 관리
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [additionalCompanies, setAdditionalCompanies] = useState([]);

  // 비교와 정렬 옵션 상태 관리
  const [isComparisonVisible, setIsComparisonVisible] = useState(false);
  const [sortingOptionForComparison, setSortingOptionForComparison] = useState("매출액 높은순");
  const [sortingOptionForRank, setSortingOptionForRank] = useState("매출액 높은순");

  // 정렬된 기업과 순위 기업 상태 관리
  const [sortedCompaniesForComparison, setSortedCompaniesForComparison] = useState([]);
  const [rankedCompanies, setRankedCompanies] = useState([]);

  // 초기화 버튼 텍스트 상태 관리
  const [resetButtonText, setResetButtonText] = useState("전체 초기화");

  // 모든 기업 데이터 상태 관리
  const [allCompanies, setAllCompanies] = useState([]);

  // 처음에 모든 기업 데이터를 가져오는 역할
  useEffect(() => {
    const getCompanies = async () => {
      try {
        const data = await fetchCompanies();
        setAllCompanies(data);
        console.log("Fetched companies:", data);
      } catch (error) {
        console.error("기업 데이터를 가져오는 데 실패했습니다.", error);
      }
    };

    getCompanies();
  }, []);

  // 선택된 기업들 및 추가된 기업들을 정렬해서 비교용 데이터로 설정하는 역할
  useEffect(() => {
    if (selectedCompanies.length > 0 || additionalCompanies.length > 0) {
      const combinedCompanies = selectedCompanies.concat(additionalCompanies);
      setSortedCompaniesForComparison(sortCompanies(combinedCompanies, sortingOptionForComparison));
    }
  }, [selectedCompanies, additionalCompanies, sortingOptionForComparison]);

  // 선택된 나의 기업의 순위 근처 기업들을 가져오는 역할
  const fetchRankedCompanies = useCallback(async () => {
    if (selectedCompanies.length === 0) return;

    try {
      // 나의 기업 ID 가져오기 (하나만 선택 가능)
      const myCompanyId = selectedCompanies[0].id;

      console.log("Fetching ranked companies for My Company ID:", myCompanyId);

      // 선택된 정렬 옵션에 따른 기업 순위 데이터 가져오기
      const data = await getCompaniesForRanking(myCompanyId, sortingOptionForRank);
      setRankedCompanies(data);
      console.log("Ranked Companies:", data);
    } catch (error) {
      console.error("기업 순위 데이터를 가져오는 데 실패했습니다.", error);
    }
  }, [selectedCompanies, sortingOptionForRank]);

  // "기업 비교 버튼"을 눌러 비교 화면이 보이도록 설정된 후 기업 순위 데이터를 가져오는 역할
  useEffect(() => {
    if (isComparisonVisible && selectedCompanies.length > 0) {
      fetchRankedCompanies();
    }
  }, [isComparisonVisible, selectedCompanies, sortingOptionForRank, fetchRankedCompanies]);

  // 모달 열기
  const openModal = () => setIsModalOpen(true);

  // 추가 모달 열기
  const openAdditionalModal = () => setIsAdditionalModalOpen(true);

  // 모달 닫고 선택된 기업 설정
  const closeModal = (companies) => {
    setSelectedCompanies(companies);
    setIsModalOpen(false);
  };

  // 추가 모달 닫고 추가된 기업 설정
  const closeAdditionalModal = (companies) => {
    setAdditionalCompanies(companies);
    setIsAdditionalModalOpen(false);
  };

  // 기업 삭제 (추가된 기업인지 선택된 기업인지에 따라)
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

  // 비교를 위한 정렬 옵션 변경
  const handleSortingChangeForComparison = (option) => {
    setSortingOptionForComparison(option);
  };

  // 순위 확인을 위한 정렬 옵션 변경
  const handleSortingChangeForRank = (option) => {
    setSortingOptionForRank(option);
  };

  // 비교 버튼 클릭 시 동작
  const handleComparisonClick = () => {
    if (selectedCompanies.length > 0 && additionalCompanies.length > 0) {
      setIsComparisonVisible(true);
      setResetButtonText("다른 기업 비교하기");
    } else {
      console.error("비교를 위해 충분한 기업이 선택되지 않았습니다.");
    }
  };

  // 비교 버튼 활성화 여부
  const isCompareButtonEnabled = selectedCompanies.length > 0 && additionalCompanies.length > 0;

  // 초기화 버튼 클릭 시 동작
  const handleResetButtonClick = () => {
    if (resetButtonText === "전체 초기화") {
      setSelectedCompanies([]);
      setAdditionalCompanies([]);
    } else if (resetButtonText === "다른 기업 비교하기") {
      openAdditionalModal();
    }
  };

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

