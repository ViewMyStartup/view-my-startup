import "./App.css";
import "./styles/reset.css";
import React, { useState } from "react";

// 컴포넌트
import CompanyListSelect from "./components/companyInfoList.js";

const App = () => {
  return (
    <div>
      <CompanyListSelect />
    </div>
  );
};

export default App;
