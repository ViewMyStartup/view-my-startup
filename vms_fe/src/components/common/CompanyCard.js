import React from "react";
import styles from "./CompanyCard.module.css";

const CompanyCard = ({ name, category, logoUrl, onDelete, showDeleteButton, showBackground }) => {
  return (
    <div
      className={`${styles.companyCard} ${!showBackground ? styles.noBackground : ''}`}
    >
      {showDeleteButton && (
        <img
          src="/assets/images/ic_minus.svg"
          alt="delete button"
          className={styles.deleteButton}
          onClick={onDelete}
        />
      )}
      <img src={logoUrl} alt={`${name} logo`} className={styles.logo} />
      <p className={styles.companyName}>{name}</p>
      <p className={styles.companyCategory}>{category}</p>
    </div>
  );
};

export default CompanyCard;

