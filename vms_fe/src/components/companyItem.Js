import React from "react";

const CompanyItem = (logo, name, category) => {
  return (
    <div className="company-item">
      <img src={logo} alt="기업 로고" className="company-logo" />
      <span className="company-name">{name}</span>
      <span className="category">{category}</span>
    </div>
  );
};
