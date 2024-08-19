//여러 개의 CompanyItem 컴포넌트를 포함하는 컴포넌트
import React from "react";
import CompanyItem from "./companyItem.js";
import mockupData from "../assets/mock/mockData.js"; // mockData

const CompanyListSelect = () => {
  return (
    <div className="company-list">
      {mockupData.map((company, index) => (
        <CompanyItem
          key={index}
          logo={company.logoUrl}
          name={company.name}
          category={company.category}
        />
      ))}
    </div>
  );
};

export default CompanyListSelect;
