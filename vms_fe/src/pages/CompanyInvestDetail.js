import React from "react";
import { useParams, Link } from "react-router-dom";
import PageNav from "components/PageNav";
import ModalInvestment from "components/ModalInvestment";
import DataRowSetRender from "components/DataRowSetRender";
import Pagination from "components/common/Pagination";
import usePageHandler from "hook/usePageHandler";
import { convertToHundredMillion } from "utils/convertTo100mil";
import {
  CompanyDataProvider,
  useCompanyData,
} from "context/CompanyDataContext";
import DropdownForEdit from "components/common/DropdownForEdit"
import styles from "./CompanyInvestDetail.module.css";

function CompanyInvestDetail() {
  const { companyData, transformedInvestments, loading } = useCompanyData();
  const [modalInfo, setModalInfo] = useState(null);
  
  const itemsPerPage = 5;
  const totalPages = Math.ceil(
    (transformedInvestments.length || 0) / itemsPerPage
  );

  const { currentPage, handlePageChange } = usePageHandler(totalPages);

  if (loading)
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.notFoundMessage}>
          로딩중입니다, 잠시만 기다려주세요
        </p>
        <p className={styles.notFoundSubmessage}>
          해당 화면이 지속된다면, 관리자에게 문의해주세요!
        </p>
      </div>
    );

  if (companyData) {
    const paginatedData =
      transformedInvestments?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ) || [];

    return (
      <div className={styles.pageContainer}>
        <PageNav />
        <div className={styles.contentsContainer} data-modal-container>
          {/* 회사 정보 렌더링 */}
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
          {/* 회사 데이터 */}
          <div className={styles.companyDataGrid}>
            <div className={styles.companyDataItem}>
              <div className={styles.companyDataTitle}>누적 투자 금액</div>
              <div className={styles.companyDataValue}>
                {convertToHundredMillion(companyData.totalInvestment)}억 원
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
          {/* 투자 모달 열기 */}
          <div className={styles.InvestmentButtonSection}>
            <div className={styles.InvestmentButtonTitle}>
              View My Startup에서 받은 투자
            </div>
            <button
              className={styles.InvestmentButton}
              onClick={() => handleOpenModal("investment")}
            >
              기업투자하기
            </button>
          </div>
          {modalType === "investment" && (
            <ModalInvestment
              isOpen={modalType === "investment"}
              onClose={handleCloseModal}
              selectedCompanies={[companyData]}
            />
          )}
          {/* 투자 데이터 */}
          <div className={styles.dataRowSetRender}>
            <DataRowSetRender
              type="comment"
              dataList={paginatedData}
              onOpenModal={handleOpenModal}
              onToggleDropdown={handleToggleDropdown}
              dropdownVisible={dropdownVisible}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            hasNext={currentPage < totalPages}
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
          <Link to="/" className={styles.notFoundHomeButton}>
            홈페이지로 이동하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CompanyInvestDetailWrapper() {
  const { companyId } = useParams();

  return (
    <CompanyDataProvider companyId={companyId}>
      <ModalProvider>
        <DropdownProvider>
          <CompanyInvestDetail />
        </DropdownProvider>
      </ModalProvider>
    </CompanyDataProvider>
  );
}
