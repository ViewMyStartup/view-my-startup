import "./App.css";
import "./styles/reset.css";
import React, { useState } from "react";

// 기존 임포트
import Pagination from "./components/common/Pagination.js";
import HeaderColumns from "./components/common/HeaderColumns.js";
import CompanyDataPerRow from "./components/common/CompanyDataPerRow.js";
import InputBar from "./components/common/InputBar.js";
import InvestmentComment from "./components/common/InvestmentComment.js";
import DropdownComponent from "./components/common/Dropdown.js";
import SearchBar from "./components/common/SearchBar.js";
import CompanyCard from "./components/common/CompanyCard.js";
import ModalSelectComparision from "components/ModalSelectComparision";
import PageNav from "./components/PageNav.js";
import DataRowSetRender from "components/DataRowSetRender";

// 새로운 임포트 추가
import CompanyListSelect from "./components/companyInfoList"; // companyInfoList.js 파일을 임포트

//커스텀 훅
import usePageHandler from "hook/usePageHandler";

//테스트용 이미지
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

  const dataObject = {
    id: "1",
    rank: "3",
    name: "코딩마스터",
    img: Companyimg,
    description: "코딩마스터는 청소년들을 위한 코딩 교육 플랫폼을 운영하는 기업입니다.",
    category: "에듀테크",
    total_investment: 12312959459,
    revenue: 3245204304,
    employees: 5230,
    investmentVmsTotal: 200342345,
    investmentInfactTotal: 342534123124,
    myCompanyChooseCount: 124123,
    CompareChoohseCount: 12315565,
    userName: "정준호", 
    userRank: 3, 
    userTotalInvestment: 3423401234, 
    userComment: "테스트입니다." 
  }

  // 테스트용 데이터 세트
  const dataList = [
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
  ];

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
      <h1>CompanyPerRow & HeaderColumns 컴포넌트 테스트 * 테스트 코드 수정</h1> 
      <DataRowSetRender type="rank" dataList={dataList} />
      <DataRowSetRender type="norank" dataList={dataList} />
      <DataRowSetRender type="comment" dataList={dataList} />
      <DataRowSetRender type="invest" dataList={dataList} />
      <DataRowSetRender type="choose" dataList={dataList} />


      <h1>InvestmentComment Component 테스트</h1>
      <InvestmentComment
        headerText="투자 코멘트"
        placeholderText="비밀번호를 입력해 주세요"
        errorMessage="비밀번호를 입력해야 합니다."
      />

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

      <h1>PageNav Component 테스트</h1>
      <PageNav />
      {/* 하단 보더 확인을 위한 Nav 1개 더 추가 */}
      <PageNav />

      <h1>모달 테스트입니다</h1>
      <button onClick={openModal}>Open Investment Modal</button>
      <ModalSelectComparision isOpen={isModalOpen} onClose={closeModal} />

      {/* companyInfoList.js와 companyItem.js 테스트 추가 */}
      <h1>Company List Select 테스트</h1>
      <CompanyListSelect />

    </div>
  );
};

export default App;
