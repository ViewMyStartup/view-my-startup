import "./App.css";
import "./styles/reset.css";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// 페이지
import DefaultPage from "pages/DefaultPage";
import CompanyInvestDetail from "pages/CompanyInvestDetail";
import CurrentStateInvest from "pages/CurrentStateInvest";
import MyCompanyCompare from "pages/MyCompanyCompare";
import CurrentStateCompare from "pages/CurrentStateCompare";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route exact path="/mainpage" element={<DefaultPage />} />
        <Route path="/mycompany" element={<MyCompanyCompare />} />
        <Route path="/compare" element={<CurrentStateCompare />} />
        <Route path="/investinfo" element={<CurrentStateInvest />} />
        <Route path="/id/:companyId" element={<CompanyInvestDetail />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
