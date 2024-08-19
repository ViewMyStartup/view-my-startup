import "./App.css";
import "./styles/reset.css";
import React, { useState } from "react";

// 컴포넌트 임포트
import CompanyListSelect from "./components/companyInfoList.js";
import Pagination from "./components/common/Pagination";
import HeaderColumns from "./components/common/HeaderColumns";
import CompanyDataPerRow from "./components/common/CompanyDataPerRow";
import InputBar from "./components/common/InputBar";
import InvestmentComment from "./components/common/InvestmentComment";
import DropdownComponent from "./components/common/DropdownComponent";
import SearchBar from "./components/common/SearchBar.js";
import CompanyCard from "./components/common/CompanyCard.js";

import ModalSelectComparision from "./components/ModalSelectComparision";
import PageNav from "./components/PageNav.js";
import ModalPassword from "./components/ModalPassword";
import MediumBtn from "./components/common/MediumBtn.js"; // MediumBtn 임포트
import LargeBtn from "./components/common/LargeBtn.js";
import MessagePopUpOneBtn from "./components/MessagePopUpOneBtn.js";
import MessagePopUpTwoBtn from "./components/MessagePopUpTwoBtn.js";
import DataRowSetRender from "components/DataRowSetRender";

//커스텀 훅
import usePageHandler from "hook/usePageHandler";

//테스트용 이미지
import Companyimg from "./assets/images/mock_img/company_temp.svg";
import defaultLogo from "./assets/images/company_logo_1.svg";

// 테스트용 이미지
import Companyimg from "./assets/images/mock_img/company_temp.svg";
import defaultLogo from "./assets/images/company_logo_1.svg";
import ToggleIcon from "./assets/images/ic_toggle.svg";

const App = () => {
  // 커스텀 훅 적용
  const { currentPage, totalPages, handlePageChange } = usePageHandler();

  // 모달 핸들러
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  // ModalPassword 모달 상태 관리
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const openPasswordModal = () => {
    setPasswordModalOpen(true);
  };
  const closePasswordModal = () => {
    setPasswordModalOpen(false);
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

  const dataObject = {
    id: "1",
    rank: "3",
    name: "코딩마스터",
    img: Companyimg,
    description: "코딩마스터는 청소년들을 위한 코딩 교육 플랫폼을 운영하는 기업입니다.",
    category: "에듀테크",
    total_investment_vms: 100000000,
    total_investment_infact: 9988776655
  }

  // 테스트용 데이터 세트
  const dataList = [dataObject, dataObject, dataObject, dataObject, dataObject, dataObject, dataObject, dataObject, dataObject, dataObject, ]

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
      <h1>CompanyPerRow & HeaderColumns 컴포넌트 테스트 * 테스트 코드 수정</h1> 
      <HeaderColumns type="invest" />
      <CompanyDataPerRow type="invest" dataObject={dataObject} />
      <HeaderColumns type="invest" />
      <DataRowSetRender type="invest" dataList={dataList} />
      
      <h1>InvestmentComment Component 테스트</h1>
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
      <h1>PageNav Component 테스트</h1>
      <PageNav />
      {/* 하단 보더 확인을 위한 Nav 1개 더 추가 */}
      <PageNav /> 

      <h1>모달 테스트입니다</h1>
      <button onClick={openModal}>Open Investment Modal</button>
      <ModalSelectComparision isOpen={isModalOpen} onClose={closeModal} />
        
      <h1>기업 리스트 test</h1>
      <CompanyListSelect />

      <h1>one button popup 테스트</h1>
      <LargeBtn text="팝업 열기" onClick={handleOpenPopup} />
      <br />
      {isPopupOpen && (
        <MessagePopUpOneBtn
          text="팝업 내용이 들어갑니다"
          onClose={handleClosePopup}
          onConfirm={handleConfirm}
        />
      )}
      <br />
      {isPopupOpen && (
        <MessagePopUpTwoBtn
          text="팝업 내용이 들어갑니다"
          onClose={handleClosePopup}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      <br />

      <h1>MediumBtn 테스트</h1>
      <MediumBtn text="Medium Button" onClick={() => alert("버튼 클릭됨!")} />

      <h1>비밀번호 모달 테스트</h1>
      <button onClick={openPasswordModal}>Open Password Modal</button>
      {isPasswordModalOpen && (
        <ModalPassword onClose={closePasswordModal} />
      )}
    </div>
  );


};

export default App;