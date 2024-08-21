import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import mockupData from "assets/mock/mockData";
import userData from "assets/mock/userData";
import PageNav from "components/PageNav";
import styles from "./CompanyInvestDetail.module.css";
import ModalInvestment from "components/ModalInvestment"; // 모달 컴포넌트 import
import DataRowSetRender from "components/DataRowSetRender";
import { findClosestMatch } from "utils/similarity"; // 유틸리티 함수들 import
import { convertToHundredMillion } from "utils/convertTo100mil";
import Pagination from "components/common/Pagination";
import usePageHandler from "hook/usePageHandler"; // usePageHandler 훅 import

function CompanyInvestDetail() {
  const { name } = useParams(); // URL에서 회사 이름을 가져옴
  const [companyData, setCompanyData] = useState(null);
  const [closestMatch, setClosestMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  // 페이지당 항목 수 설정
  const itemsPerPage = 5;

  // 총 페이지 수를 데이터 길이에 따라 동적으로 계산
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  // 페이지 관련 상태 관리
  const { currentPage, handlePageChange } = usePageHandler();

  // 현재 페이지에 맞는 데이터 슬라이스
  const paginatedData = userData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetchCompanyData = () => {
      // 정확한 이름이 있는지 찾기
      const company = mockupData.find((company) => company.name === name);

      if (company) {
        setCompanyData(company);
      } else {
        // 정확히 일치하는 이름이 없을 경우 유사한 이름을 찾음
        const closest = findClosestMatch(name, mockupData);

        // 유사도 및 길이 기반 임계값 설정
        if (closest.similarity >= 0.7 && closest.lengthDifference <= 2) {
          // 유사도 0.7 이상, 길이 차이 2 이하인 경우
          setClosestMatch(closest);
        }
      }

      setLoading(false);
    };

    fetchCompanyData();
  }, [name]);

  if (loading) return <div>Loading...</div>;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (companyData) {
    return (
      <div className={styles.pageContainer}>
        <PageNav />
        <div className={styles.contentsContainer}>
          <div className={styles.titleSection}>
            <div className={styles.titleHug}>
              <img
                src={companyData.logoUrl}
                alt={`${companyData.name} logo`}
                className={styles.titleLogo}
              />
              <div className={styles.titleTextHug}>
                <div className={styles.titleTitle}>{companyData.name}</div>
                <div className={styles.titleCategory}>
                  {companyData.category}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.companyDataGrid}>
            <div className={styles.companyDataItem}>
              <div className={styles.companyDataTitle}>누적 투자 금액</div>
              <div className={styles.companyDataValue}>
                {convertToHundredMillion(companyData.total_investment)}억 원
              </div>
            </div>
            <div className={styles.companyDataItem}>
              <div className={styles.companyDataTitle}>매출액</div>
              <div className={styles.companyDataValue}>
                {convertToHundredMillion(companyData.revenue)}억 원
              </div>
            </div>
            <div className={styles.companyDataItem}>
              <div className={styles.companyDataTitle}>고용 인원</div>
              <div className={styles.companyDataValue}>
                {companyData.employees}명
              </div>
            </div>
          </div>
          <div className={styles.CompanyDescriptionSection}>
            <div className={styles.CompanyDescriptionContent}>
              <div className={styles.CompanyDescriptionTitle}>기업 소개</div>
              <div className={styles.CompanyDescriptionValue}>
                {companyData.description}
              </div>
            </div>
          </div>
          <div className={styles.InvestmentButtonSection}>
            <div className={styles.InvestmentButtonTitle}>
              View My Startup에서 받은 투자
            </div>
            <button
              className={styles.InvestmentButton}
              onClick={handleOpenModal}
            >
              기업투자하기
            </button>
          </div>
          {isModalOpen && (
            <ModalInvestment
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              selectedCompanies={[companyData]}
            />
          )}
          <div className={styles.dataRowSetRender}>
            {/* 슬라이스된 데이터만 전달 */}
            <DataRowSetRender type={"comment"} dataList={paginatedData} />
          </div>
          {/* Pagination 컴포넌트에 props 전달 */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            hasNext={currentPage < totalPages} // 다음 페이지가 있는지 여부
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageNav />
      <div className={styles.notFoundContainer}>
        <div className={styles.notFoundContents}>
          <h1 className={styles.notFoundTitle}>404</h1>
          <p className={styles.notFoundMessage}>
            이런! 찾으시던 페이지는 존재하지 않는 것 같아요!
          </p>
          <p className={styles.notFoundSubmessage}>
            존재하지 않는 페이지이거나, 오타일 가능성이 높아요!
          </p>
          {closestMatch ? (
            <>
              <p>
                혹시 찾으신 회사가{" "}
                <Link
                  to={`/id/${closestMatch.name}`}
                  className={styles.closestMatchLink}
                >
                  {closestMatch.name}
                </Link>{" "}
                인가요? 아니라면,
              </p>
              <Link to="/" className={styles.notFoundHomeButton}>
                홈페이지로 이동하기
              </Link>
            </>
          ) : (
            <Link to="/" className={styles.notFoundHomeButton}>
              홈페이지로 이동하기
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyInvestDetail;
