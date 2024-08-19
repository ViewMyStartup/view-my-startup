import React, { useState } from "react";
import styles from "./companyItem.module.css"; // CSS 모듈 import

const CompanyItem = ({ logo, name, category }) => {
  const [selected, setSelected] = useState(false); // 처음에는 선택 안된 상태

  // 선택하기 버튼 클릭 시,
  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className={styles.companyItem}>
      <div className={styles.companyItemContainer}>
        <img src={logo} alt="기업 로고" className={styles.companyLogo} />
        <span className={styles.companyName}>{name}</span>
        <span className={styles.category}>{category}</span>
      </div>
      <button
        className={`${styles.selectBtn} ${selected ? styles.selected : ""}`}
        onClick={handleClick}
      >
        {selected ? "선택완료" : "선택하기"}
      </button>
    </div>
  );
};

export default CompanyItem;
