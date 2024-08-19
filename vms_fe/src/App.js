import "./App.css";
import "./styles/reset.css";
import React, { useState } from "react";

// 컴포넌트 임포트
import Pagination from "./components/common/Pagination";
import HeaderColumns from "./components/common/HeaderColumns";
import CompanyDataPerRow from "./components/common/CompanyDataPerRow";
import InputBar from "./components/common/InputBar";
import InvestmentComment from "./components/common/InvestmentComment";
import DropdownComponent from "./components/common/DropdownComponent";
import SearchBar from "./components/common/SearchBar";
import CompanyCard from "./components/common/CompanyCard";
import ModalSelectMyEnterprise from "./components/ModalSelectMyEnterprise";
import ModalInvestment from "./components/ModalInvestment";

import Companyimg from "./assets/images/mock_img/company_temp.svg";
import defaultLogo from "./assets/images/company_logo_1.svg";
import ToggleIcon from "./assets/images/ic_toggle.svg";
import PageNav from "./components/PageNav";

const App = () => {
  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // 페이지네이션 핸들러
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 모달 상태
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  const [isInvestmentModalOpen, setIsInvestmentModalOpen] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  // 선택 모달 열기 및 닫기 핸들러
  const openSelectModal = () => setIsSelectModalOpen(true);
  const closeSelectModal = () => setIsSelectModalOpen(false);

  // 투자 모달 열기 및 닫기 핸들러
  const openInvestmentModal = () => setIsInvestmentModalOpen(true);
  const closeInvestmentModal = () => setIsInvestmentModalOpen(false);

  // 선택 모달 닫기 핸들러
  const handleSelectModalClose = (companies) => {
    setSelectedCompanies(companies); // 선택된 기업 목록 업데이트
    closeSelectModal(); // 선택 모달 닫기
    // 투자 모달을 열려면 별도의 사용자 조작이 필요하도록 합니다.
  };

  // 투자 모달 닫기 핸들러
  const handleInvestmentModalClose = () => {
    closeInvestmentModal(); // 투자 모달 닫기
  };

  // CompanyPerRow & HeaderColumns 컴포넌트 테스트용 데이터
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

  // SearchBar 테스트
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  // CompanyCard 테스트
  const initialStartups = [
    {
      name: "코드잇",
      category: "에듀테크",
      logoSrc: defaultLogo,
    },
    {
      name: "코딩마스터",
      category: "에듀테크",
      logoSrc: defaultLogo,
    },
    {
      name: "러닝큐브",
      category: "에듀테크",
      logoSrc: defaultLogo,
    },
  ];

  const [startups, setStartups] = useState(initialStartups);

  const handleDelete = (name) => {
    const updatedStartups = startups.filter((startup) => startup.name !== name);
    setStartups(updatedStartups);
  };

  return (
    <div>
      <h1>InputBar (유효성 검사 포함) Test</h1>
      <InputBar />
      <h1>Pagination Test</h1>
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
      <h1>InvestmentComment Component Test</h1>
      <InvestmentComment
        headerText="투자 코멘트"
        placeholderText="비밀번호를 입력해 주세요"
        errorMessage="비밀번호를 입력해야 합니다."
      />
      <h1>DropdownComponent Test</h1>
      <DropdownComponent />
      <h1>검색창 Test</h1>
      <SearchBar
        value={searchQuery}
        onChange={handleSearchChange}
        onClear={handleClearSearch}
      />
      <h1>CompanyCard Test</h1>
      {startups.map((startup, index) => (
        <CompanyCard
          key={index}
          name={startup.name}
          category={startup.category}
          logoSrc={Companyimg}
          onDelete={() => handleDelete(startup.name)}
        />
      ))}
      <h1>PageNav Component Test</h1>
      <PageNav />
      <h1>모달 테스트입니다</h1>
      <button onClick={openSelectModal}>기업 선택하기</button>
      <button onClick={openInvestmentModal}>투자하기</button>

      {/* 기업 선택 모달 */}
      <ModalSelectMyEnterprise
        isOpen={isSelectModalOpen}
        onClose={handleSelectModalClose}
      />

      {/* 투자 모달 */}
      <ModalInvestment
        isOpen={isInvestmentModalOpen}
        onClose={handleInvestmentModalClose}
        selectedCompanies={selectedCompanies}
      />
    </div>
  );
};

export default App;
