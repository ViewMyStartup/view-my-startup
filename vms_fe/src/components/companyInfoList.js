//여러 개의 CompanyItem 컴포넌트를 포함하는 컴포넌트
import React from "react";
import CompanyItem from "./companyItem.Js";

// 테스트를 위해 mock데이터 넣음
const companies = [
  { logo: "logo1.png", name: "기업명 1", category: "에듀테크" },
  { logo: "logo2.png", name: "기업명 2", category: "핀테크" },
];

const CompanyListSelect = () => {
  return (
    <div className="company-list">
      {companies.map((company, index) => (
        <CompanyItem
          key={index}
          logo={company.logo}
          name={company.name}
          category={company.category}
        />
      ))}
    </div>
  );
};

export default CompanyListSelect;
