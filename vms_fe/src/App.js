import "./App.css";
import "./styles/reset.css";
import React, { useState } from "react";

// 컴포넌트
import Pagination from "./components/Pagination.js";
import HeaderColumns from "./components/HeaderColumns";
import CompanyDataPerRow from "./components/CompanyDataPerRow";

//테스트용 이미지
import Companyimg from "./assets/images/mock_img/company_temp.svg";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // 테스트를 위해 총 페이지 수를 설정

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // CompanyPerRow & HeaderColumns 컴포넌트 테스트용 데이터 데이터
  const data = {
    rank: 1,
    name: "에듀넥스트",
    img: Companyimg,
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    total_investment: 5000000,
    revenue: 12000000,
    employees: 50,
  };

  const vmsData = {
    total_investment_vms: 500000000,
    total_investment_infact: 120000000000,
  };

  const userData = {
    userName: "정준호",
    userRank: 1,
    user_total_investment: 9999000000,
    user_comment: "너무 어려워요",
  };

  // 
  return (
    <div>
      <h1>Pagination test</h1>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        hasNext={currentPage < totalPages}
      />
      <h1>CompanyPerRow & HeaderColumns 컴포넌트 테스트</h1>
      <HeaderColumns />
      <CompanyDataPerRow type="rank" companyData={data} />
      <HeaderColumns type="noRank" />
      <CompanyDataPerRow type="noRank" companyData={data} />
      <HeaderColumns type="invest" />
      <CompanyDataPerRow type="invest" companyData={data} vmsData={vmsData} />
      <HeaderColumns type="comment" />
      <CompanyDataPerRow type="comment" userData={userData} />
    </div>
  );
};

export default App;

