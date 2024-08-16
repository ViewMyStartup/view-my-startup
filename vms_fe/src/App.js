import "./App.css";
import "./styles/reset.css";
import React, { useState } from "react";
import Pagination from "./components/Pagination.js";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // 테스트를 위해 총 페이지 수를 설정

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  return (
    <div>
      <h1>Pagination test</h1>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        hasNext={currentPage < totalPages}
      />
    </div>
  );
};

export default App;


