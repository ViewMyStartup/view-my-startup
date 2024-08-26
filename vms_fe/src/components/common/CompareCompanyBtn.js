import React from "react";
import styles from "./CompareCompanyBtn.module.css";

const CompareCompanyBtn = ({ text, onClick, disabled = false }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.compareCompanyBtn} ${disabled ? styles.disabledBtn : styles.active}`}
        onClick={onClick}
        disabled={disabled}  // 이 속성을 통해 버튼을 비활성화
      >
        {text}
      </button>
    </div>
  );
};

export default CompareCompanyBtn;

