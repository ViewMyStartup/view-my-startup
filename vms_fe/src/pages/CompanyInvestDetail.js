import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNav from "components/PageNav";
import DataRowSetRender from "components/DataRowSetRender";
import Pagination from "components/common/Pagination";
import DropdownForEdit from "components/common/DropdownForEdit";
import ModalInvestmentUpdate from "components/ModalInvestmentUpdate";
import ModalPassword from "components/ModalPassword";
import ModalInvestment from "components/ModalInvestment";
import usePageHandler from "hook/usePageHandler";
import { convertToHundredMillion } from "utils/convertTo100mil";
import {
  CompanyDataProvider,
  useCompanyData,
} from "context/CompanyDataContext";
import styles from "./CompanyInvestDetail.module.css";

function CompanyInvestDetail() {
  useEffect(() => {
    const handleResize = () => {
      handleCloseModal(); // Always close the modal on window resize
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { companyData, transformedInvestments, loading } = useCompanyData();

  const [modalInfo, setModalInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [activeDropdownId, setActiveDropdownId] = useState(null); // 드롭다운 상태 관리
  const [modalType, setModalType] = useState(null); // 모달 타입 상태 관리

  const itemsPerPage = 5;
  const totalPages = Math.ceil(
    (transformedInvestments.length || 0) / itemsPerPage
  );

  const { currentPage, handlePageChange } = usePageHandler(totalPages);

  const handleOpenModal = (modalType, dataObject, position, toggleRef) => {
    setModalType(modalType); // 모달 타입 설정
    setModalInfo({
      modalType,
      dataObject,
      position,
      toggleRef,
    });
    setActiveDropdownId(dataObject?.id || null); // 드롭다운 ID 설정
    setIsModalOpen(true); // 모달 열림 상태로 설정
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫힘 상태로 설정
    setActiveDropdownId(null); // 드롭다운 ID 초기화
    setModalType(null); // 모달 타입 초기화
    setModalInfo(null); // 모달 정보 초기화
  };

  const handleEdit = () => {
    if (modalInfo?.dataObject) {
      handleOpenModal(
        "update",
        modalInfo.dataObject,
        modalInfo.position,
        modalInfo.toggleRef
      );
    }
  };

  const handleDelete = () => {
    if (modalInfo?.dataObject) {
      handleOpenModal(
        "password",
        modalInfo.dataObject,
        modalInfo.position,
        modalInfo.toggleRef
      );
    }
  };

  if (loading) {
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
  }

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

          <div className={styles.InvestmentButtonSection}>
            <div className={styles.InvestmentButtonTitle}>
              View My Startup에서 받은 투자
            </div>
            
            <button
              className={styles.InvestmentButton}
              onClick={() => handleOpenModal("investment", companyData)}
            >
              기업투자하기
            </button>
          </div>
          <div
            className={styles.totalVirtualInvestment}
          >총 {convertToHundredMillion(companyData.totalInvestment)}억 원</div>

          {/* 투자 모달 열기 */}
          {modalType === "investment" && (
            <ModalInvestment
              isOpen={true}
              onClose={handleCloseModal}
              selectedCompanies={[companyData]}
            />
          )}

          <div className={styles.dataRowSetRender}>
            <DataRowSetRender
              type="comment"
              dataList={paginatedData}
              onOpenModal={handleOpenModal}
              onCloseModal={handleCloseModal}
              activeDropdownId={activeDropdownId}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            hasNext={currentPage < totalPages}
          />
        </div>

        {/* 모달 렌더링 */}
        {isModalOpen && modalType === "menu" && (
          <DropdownForEdit
            position={modalInfo.position}
            onClose={handleCloseModal}
            onEdit={handleEdit}
            onDelete={handleDelete}
            toggleRef={modalInfo.toggleRef}
          />
        )}

        {isModalOpen && modalType === "update" && (
          <ModalInvestmentUpdate
            isOpen={true}
            onClose={handleCloseModal}
            selectedInvestment={modalInfo.dataObject}
          />
        )}

        {isModalOpen && modalType === "password" && (
          <ModalPassword
            isOpen={true}
            onClose={handleCloseModal}
            investmentId={modalInfo.dataObject.id}
          />
        )}
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
        </div>
      </div>
    </div>
  );
}

export default function CompanyInvestDetailWrapper() {
  const { companyId } = useParams();

  return (
    <CompanyDataProvider companyId={companyId}>
      <CompanyInvestDetail />
    </CompanyDataProvider>
  );
}
