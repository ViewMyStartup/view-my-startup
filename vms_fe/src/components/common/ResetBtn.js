import React from "react";
import styles from "./ResetBtn.module.css";  // 파일 이름도 변경해주어야 합니다

const ResetBtn = ({ text, onClick, disabled = false }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.resetBtn} ${disabled ? styles.disabledBtn : styles.active}`}
        onClick={onClick}
        disabled={disabled}  // 이 속성을 통해 버튼을 비활성화
      >
        {text}
      </button>
    </div>
  );
};

export default ResetBtn;

