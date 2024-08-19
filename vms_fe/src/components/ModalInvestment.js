import React from "react";
import style from "./ModalInvestment.module.css"; // CSS 모듈
import deleteIcon from "assets/images/ic_delete.svg";
import logo from "assets/images/company_logo_1.svg";
import InputBar from "./common/InputBar";

const ModalInvestment = ({ isOpen, onClose, selectedCompanies }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContainer}>
        <div className={style.modalContent}>
          <div className={style.modalHeadText}>
            기업에 투자하기
            <img
              src={deleteIcon}
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
          <InputBar onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default ModalInvestment;
