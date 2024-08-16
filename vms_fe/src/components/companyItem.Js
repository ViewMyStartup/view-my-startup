import React, { useState } from "react";
import "./companyItem.module.css";

const CompanyItem = ({ logo, name, category }) => {
  const [selected, setSelected] = useState(false); // 처음에는 선택 안된 상태

  // 선택하기 버튼 클릭 시,
  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="companyItem">
      <img src={logo} alt="기업 로고" className="companyLogo" />
      <span className="companyName">{name}</span>
      <span className="category">{category}</span>
      <button
        className={`selectBtn ${selected ? "selected" : ""}`}
        onClick={handleClick}
      >
        {selected ? "✔ 선택완료" : "선택하기"}
      </button>
    </div>
  );
};

export default CompanyItem;
