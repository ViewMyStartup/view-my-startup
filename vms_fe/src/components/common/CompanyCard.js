import React from "react";
import styles from "./CompanyCard.module.css";
import deleteIcon from "../../assets/images/ic_minus.svg";
import mockupData from "../../assets/mock/mockData";  // mockupData를 가져옴

const CompanyCard = ({ name, category, onDelete, showDeleteButton, showBackground }) => {
  // mockupData에서 이름이 일치하는 기업 데이터를 찾기
  const company = mockupData.find(company => company.name === name);

  return (
    <div
      className={`${styles.companyCard} ${!showBackground ? styles.noBackground : ''}`}
    >
      {showDeleteButton && (
        <img
          src={deleteIcon}
          alt="delete button"
          className={styles.deleteButton}
          onClick={onDelete}
        />
      )}
      {/* 일치하는 기업이 있는 경우 로고를 표시 */}
      {company && <img src={company.logoUrl} alt={`${name} logo`} className={styles.logo} />}
      <p className={styles.companyName}>{name}</p>
      <p className={styles.companyCategory}>{category}</p>
    </div>
  );
};

export default CompanyCard;

