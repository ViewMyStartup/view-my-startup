import React from "react";
import styles from "./MediumBtn.module.css";

const MediumBtn = ({ text, onClick, disabled = false }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.mediumBtn} ${disabled ? styles.disabledBtn : styles.active}`}
        onClick={onClick}
        disabled={disabled}  // 이 속성을 통해 버튼을 비활성화
      >
        {text}
      </button>
    </div>
  );
};

export default MediumBtn;

