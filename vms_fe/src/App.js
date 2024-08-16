import "./App.css";
import "./styles/reset.css";
import React from "react";

// 컴포넌트
import CompanyListSelect from "./components/companyInfoList.js";

const App = () => {
  return (
    <div>
      <h1>기업 리스트 test</h1>
      <CompanyListSelect />
    </div>
  );
};

export default App;
