import React from "react";
import styles from "./CompanyCard.module.css";
import deleteIcon from "../../assets/images/ic_minus.svg";

const CompanyCard = ({ name, category, logoUrl, onDelete, showDeleteButton, showBackground }) => {
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
      {/* 로고를 직접 props로 전달받아 표시 */}
      <img src={logoUrl} alt={`${name} logo`} className={styles.logo} />
      <p className={styles.companyName}>{name}</p>
      <p className={styles.companyCategory}>{category}</p>
    </div>
  );
};

export default CompanyCard;

