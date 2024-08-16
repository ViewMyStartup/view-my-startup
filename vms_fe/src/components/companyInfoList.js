//여러 개의 CompanyItem 컴포넌트를 포함하는 컴포넌트
import React from "react";
import CompanyItem from "./companyItem.js";
import companyLogo1 from "../assets/images/company_logo_1.svg";

// 테스트를 위해 mock데이터 넣음( 삭제하거나 수정 가능 / 나중에 seed.js로 이미지도 같이 넣을예정 )
const companies = [
  { logo: companyLogo1, name: "코드잇", category: "에듀테크" },
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
