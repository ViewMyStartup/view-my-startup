import React, { useCallback, useEffect } from "react";
import style from "./ModalInvestment.module.css";
import InputBar from "./common/InputBar";
import { createInvestment } from "API/CompanyInvestDetailAPI";
import { useCompanyData } from "context/CompanyDataContext";

const ModalInvestment = ({ isOpen, onClose, selectedCompanies }) => {
  const { fetchData } = useCompanyData();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleInvestmentSubmit = useCallback(
    async (investmentData) => {
      try {
        const companyId = selectedCompanies[0]?.id;
        if (!companyId) throw new Error("기업 ID가 없습니다.");

        await createInvestment({
          companyId,
          ...investmentData,
        });

        alert("투자가 성공적으로 저장되었습니다.");
        fetchData();
        onClose();
      } catch (error) {
        console.error("투자에 실패했습니다", error);
        alert("투자 저장에 실패했습니다.");
      }
    },
    [selectedCompanies, onClose]
  );

  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContainer}>
        <div className={style.modalContent}>
          <div className={style.modalHeadText}>
            기업에 투자하기
            <img
              src="/assets/images/ic_delete.svg"
              className={style.deleteLogo}
              alt="deleteLogo"
              onClick={onClose}
            />
          </div>

          <div className={style.PartitionHug}>
            <h2 className={style.CompaniesColumnText}>투자 기업 정보</h2>
            <ul>
              {selectedCompanies.map((company) => (
                <div
                  className={style.companyColumnsLogoTextHug}
                  key={company.name}
                >
                  <img
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    className={style.companyLogo}
                  />
                  <div className={style.companyColumnsNameCategoryHug}>
                    <div className={style.companyColumnsName}>
                      {company.name}
                    </div>
                    <div className={style.companyColumnsCategory}>
                      {company.category}
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <InputBar onSubmit={handleInvestmentSubmit} onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default ModalInvestment;
