import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/pages/MyCompanyCompare.module.css";
import PageNav from "../components/PageNav";
import AddCompanyBtn from "../components/common/AddCompanyBtn";
import CompareCompanyBtn from "../components/common/CompareCompanyBtn";
import CompareOtherCompanyBtn from "../components/common/CompareOtherCompanyBtn";
import ResetBtn from "../components/common/ResetBtn";
import DropdownSmallSize from "../components/common/DropdownSmallSize";
import DataRowSetRenderNoRank from "../components/DataRowSetRenderNoRank";
import DataRowSetRender from "../components/DataRowSetRender";
import ModalSelectComparision from "../components/ModalSelectComparision";
import CompanyCard from "../components/common/CompanyCard";
import {
  fetchCompanies,
  sortCompanies,
  getCompaniesForRanking,
} from "../API/api";

export default function MyCompanyCompare() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdditionalModalOpen, setIsAdditionalModalOpen] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [additionalCompanies, setAdditionalCompanies] = useState([]);
  const [isComparisonVisible, setIsComparisonVisible] = useState(false);
  const [sortingOptionForComparison, setSortingOptionForComparison] = useState("매출액 높은순");
  const [sortingOptionForRank, setSortingOptionForRank] = useState("매출액 높은순");
  const [sortedCompaniesForComparison, setSortedCompaniesForComparison] = useState([]);
  const [rankedCompanies, setRankedCompanies] = useState([]);
  const [resetButtonText, setResetButtonText] = useState("전체 초기화");
  const [allCompanies, setAllCompanies] = useState([]);
  const [isLoadingComparison, setIsLoadingComparison] = useState(false);
  const [isLoadingRank, setIsLoadingRank] = useState(false);

  const router = useRouter();

  // 회사 데이터 초기 로드
  useEffect(() => {
    const getCompanies = async () => {
      setIsLoadingComparison(true);
      try {
        const data = await fetchCompanies();
        setAllCompanies(data);
      } catch (error) {
        console.error("기업 데이터를 가져오는 데 실패했습니다.", error);
      } finally {
        setIsLoadingComparison(false);
      }
    };

    getCompanies();
  }, []);

  // 선택된 회사와 추가된 회사를 정렬
  useEffect(() => {
    if (selectedCompanies.length > 0 || additionalCompanies.length > 0) {
      setIsLoadingComparison(true);
      const combinedCompanies = selectedCompanies.concat(additionalCompanies);
      setSortedCompaniesForComparison(
        sortCompanies(combinedCompanies, sortingOptionForComparison)
      );
      setIsLoadingComparison(false);
    }
  }, [selectedCompanies, additionalCompanies, sortingOptionForComparison]);

  // 순위 회사 데이터 로드
  const fetchRankedCompanies = useCallback(async () => {
    if (selectedCompanies.length === 0) return;

    setIsLoadingRank(true);
    try {
      const myCompanyId = selectedCompanies[0].id;
      const data = await getCompaniesForRanking(
        myCompanyId,
        sortingOptionForRank
      );
      setRankedCompanies(data);
    } catch (error) {
      console.error("기업 순위 데이터를 가져오는 데 실패했습니다.", error);
    } finally {
      setIsLoadingRank(false);
    }
  }, [selectedCompanies, sortingOptionForRank]);

  // 비교 결과가 보이는 상태에서 순위 데이터를 로드
  useEffect(() => {
    if (isComparisonVisible && selectedCompanies.length > 0) {
      setIsLoadingRank(true);
      const fetchData = async () => {
        await fetchRankedCompanies();
        setIsLoadingRank(false);
      };
      fetchData();
    }
  }, [
    isComparisonVisible,
    selectedCompanies,
    sortingOptionForRank,
    fetchRankedCompanies,
  ]);

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

  const handleSortingChangeForComparison = async (option) => {
    setIsLoadingComparison(true);
    setSortingOptionForComparison(option);

    const combinedCompanies = selectedCompanies.concat(additionalCompanies);
    const sortedData = sortCompanies(combinedCompanies, option);
    setSortedCompaniesForComparison(sortedData);

    await fetchRankedCompanies();
    setIsLoadingComparison(false);
  };

  const handleSortingChangeForRank = async (option) => {
    setIsLoadingRank(true);
    setSortingOptionForRank(option);

    await fetchRankedCompanies();

    const combinedCompanies = selectedCompanies.concat(additionalCompanies);
    const sortedData = sortCompanies(
      combinedCompanies,
      sortingOptionForComparison
    );
    setSortedCompaniesForComparison(sortedData);

    setIsLoadingRank(false);
  };

  const handleComparisonClick = () => {
    if (selectedCompanies.length > 0 && additionalCompanies.length > 0) {
      setIsComparisonVisible(true);
      setResetButtonText("다른 기업 비교하기");
    } else {
      console.error("비교를 위해 충분한 기업이 선택되지 않았습니다.");
    }
  };

  const isCompareButtonEnabled =
    selectedCompanies.length > 0 && additionalCompanies.length > 0;

  const handleResetButtonClick = () => {
    if (resetButtonText === "전체 초기화") {
      setSelectedCompanies([]);
      setAdditionalCompanies([]);
    } else if (resetButtonText === "다른 기업 비교하기") {
      openAdditionalModal();
    }
  };

  const myCompanyId = selectedCompanies.length > 0 ? selectedCompanies[0].id : null;

  const handleInvestmentClick = () => {
    if (selectedCompanies.length > 0) {
      const companyId = selectedCompanies[0].id;
      router.push(`/id/${companyId}`);
    }
  };

  return (
    <>
      <Head>
        <title>View My Startup 나의 기업 비교</title>
        <meta name="description" content="비교할 회사 선택 페이지" />
      </Head>
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
                        src="/assets/images/ic_restart.svg"
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
                      src="/assets/images/ic_circle.svg"
                      alt="circle"
                      className={styles.icCircle}
                    />
                    <img src="/assets/images/ic_plus.svg" alt="plus" className={styles.icPlus} />
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
                    myCompanyId={myCompanyId}
                    isloading={isLoadingComparison}
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
                  <DataRowSetRender
                    type="rank"
                    dataList={rankedCompanies}
                    myCompanyId={myCompanyId}
                    isloading={isLoadingRank}
                  />
                </div>
              </div>

              <div className={styles.btnWrapper}>
                <CompareCompanyBtn
                  text="나의 기업에 투자하기"
                  onClick={handleInvestmentClick}
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
                    isCompareButtonEnabled
                      ? styles.activeBtn
                      : styles.disabledBtn
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
    </>
  );
}

