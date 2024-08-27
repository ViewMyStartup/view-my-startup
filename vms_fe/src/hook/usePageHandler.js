import { useState } from "react";

export function usePageHandler() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // 테스트를 위해 총 페이지 수를 설정, 추후 별도 계산 필요

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return { currentPage, totalPages, handlePageChange, setCurrentPage };
}

export default usePageHandler;
