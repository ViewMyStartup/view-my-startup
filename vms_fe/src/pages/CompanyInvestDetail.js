import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageNav from "components/PageNav";
import ModalInvestment from "components/ModalInvestment";
import ModalPassword from "components/ModalPassword";
import DataRowSetRender from "components/DataRowSetRender";
import Pagination from "components/common/Pagination";
import usePageHandler from "hook/usePageHandler";
import {
  fetchCompanyData,
  createInvestment,
  updateInvestment,
  deleteInvestment,
  fetchUserData,
} from "./CompanyInvestDetailAPI";
import { convertToHundredMillion } from "utils/convertTo100mil";
import styles from "./CompanyInvestDetail.module.css";

function CompanyInvestDetail() {
  const { companyId } = useParams();
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalType, setModalType] = useState(null);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState({});
  const [transformedInvestments, setTransformedInvestments] = useState([]);

  // 페이지당 항목 수 설정
  const itemsPerPage = 5;
  const { currentPage, handlePageChange } = usePageHandler();

  const transformInvestmentData = (data) => {
    return data.map((item) => ({
      id: item.investment.id,
      userName: item.investment.investorName, // 변환된 필드 이름
      userRank: item.rank || "Unknown", // 예를 들어, rank가 없으면 'Unknown'으로 대체
      userTotalInvestment: item.investment.investmentAmount,
      userComment: item.investment.investmentComment,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 회사 데이터 가져오기
        const companyResponse = await fetchCompanyData(companyId);
        if (companyResponse) {
          setCompanyData(companyResponse);

          // 투자자 데이터 가져오기
          const investments = companyResponse.investments || [];
          const userDataPromises = investments.map((inv) =>
            fetchUserData(inv.id)
          );
          const userDataResponses = await Promise.all(userDataPromises);

          // 투자 데이터와 사용자 데이터 통합
          const investmentsWithRank =
            transformInvestmentData(userDataResponses);
          setTransformedInvestments(investmentsWithRank);
        } else {
          console.error("No data received from API");
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [companyId]);

  // 모달 열기 핸들러
  const handleOpenModal = (type, commentId = null) => {
    setModalType(type);
    if (commentId) setSelectedCommentId(commentId);
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setModalType(null);
    setSelectedCommentId(null);
  };

  // 드롭다운 토글 핸들러
  const handleToggleDropdown = (commentId) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  // 투자 생성 핸들러
  const handleCreateInvestment = async (investmentData) => {
    try {
      const newInvestment = await createInvestment(investmentData);
      setCompanyData((prevData) => ({
        ...prevData,
        investments: [...prevData.investments, newInvestment],
      }));
    } catch (error) {
      console.error("Error creating investment:", error);
    }
  };

  // 투자 수정 핸들러
  const handleUpdateInvestment = async (investmentId, investmentData) => {
    try {
      const updatedInvestment = await updateInvestment(
        investmentId,
        investmentData
      );
      setCompanyData((prevData) => ({
        ...prevData,
        investments: prevData.investments.map((inv) =>
          inv.id === investmentId ? updatedInvestment : inv
        ),
      }));
    } catch (error) {
      console.error("Error updating investment:", error);
    }
  };

  // 투자 삭제 핸들러
  const handleDeleteInvestment = async (investmentId, password) => {
    try {
      await deleteInvestment(investmentId, password);
      setCompanyData((prevData) => ({
        ...prevData,
        investments: prevData.investments.filter(
          (inv) => inv.id !== investmentId
        ),
      }));
    } catch (error) {
      console.error("Error deleting investment:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  if (companyData) {
    const paginatedData =
      transformedInvestments?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ) || [];

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
              onCreateInvestment={handleCreateInvestment}
              onUpdateInvestment={handleUpdateInvestment}
              onDeleteInvestment={handleDeleteInvestment}
            />
          )}
          {modalType === "password" && (
            <ModalPassword
              isOpen={modalType === "password"}
              onClose={handleCloseModal}
              onConfirm={(investmentId, password) =>
                handleDeleteInvestment(investmentId, password)
              }
            />
          )}
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
            totalPages={Math.ceil(
              (transformedInvestments.length || 0) / itemsPerPage
            )}
            onPageChange={handlePageChange}
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

export default CompanyInvestDetail;
