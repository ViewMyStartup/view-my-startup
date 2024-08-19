import "./App.css";
import "./styles/reset.css";
import React, { useState } from "react";

// 컴포넌트
import Pagination from "./components/common/Pagination.js";
import HeaderColumns from "./components/common/HeaderColumns.js";
import CompanyDataPerRow from "./components/common/CompanyDataPerRow.js";
import InputBar from "./components/common/inputBar.js";
import InvestmentComment from "./components/common/InvestmentComment";
import DropdownComponent from "./components/common/DropdownComponent";
import SearchBar from "./components/common/SearchBar.js";
import CompanyCard from "./components/common/CompanyCard.js";
import MessagePopUpOneBtn from "./components/MessagePopUpOneBtn.js";
import MessagePopUpTwoBtn from "./components/MessagePopUpTwoBtn.js";
import LargeBtn from "./components/common/LargeBtn.js";
import ToggleIcon from "./assets/images/ic_toggle.svg";

//테스트용 이미지
import Companyimg from "./assets/images/mock_img/company_temp.svg";
import defaultLogo from "./assets/images/company_logo_1.svg";

const App = () => {
  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // 테스트를 위해 총 페이지 수를 설정

  // 페이지네이션 핸들러
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

  //SearchBar 테스트
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  //CompanyCard 테스트
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
  // 원버튼 팝업 테스트
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleConfirm = () => {
    console.log("확인");
    setIsPopupOpen(false);
  };

  const handleCancel = () => {
    console.log("취소");
    setIsPopupOpen(false);
  };

  return (
    <div>
      <h1>inputBar(유효성 검사 포함) test</h1>
      <InputBar />
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

      <h1>InvestmentComment Component 테스트</h1>
      <InvestmentComment
        headerText="투자 코멘트"
        placeholderText="비밀번호를 입력해 주세요"
        errorMessage="비밀번호를 입력해야 합니다."
      />

      <h1>DropdownComponent 테스트</h1>
      <DropdownComponent />
      <h1>검색창 테스트</h1>
      <SearchBar
        value={searchQuery}
        onChange={handleSearchChange}
        onClear={handleClearSearch}
      />
      <h1>CompanyCard 테스트</h1>
      {startups.map((startup, index) => (
        <CompanyCard
          key={index}
          name={startup.name}
          category={startup.category}
          logoSrc={Companyimg}
          onDelete={() => handleDelete(startup.name)}
        />
      ))}
      <h1>one button popup 테스트</h1>
      <LargeBtn text="팝업 열기" onClick={handleOpenPopup} />
      {isPopupOpen && (
        <MessagePopUpOneBtn
          text="팝업 내용이 들어갑니다"
          onClose={handleClosePopup}
          onConfirm={handleConfirm}
        />
      )}
      {isPopupOpen && (
        <MessagePopUpTwoBtn
          text="팝업 내용이 들어갑니다"
          onClose={handleClosePopup}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default App;
