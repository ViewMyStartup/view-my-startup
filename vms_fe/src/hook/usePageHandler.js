import { useState } from "react";

function usePageHandler( totalPages = 1) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return { currentPage, handlePageChange, setCurrentPage };
}

export default usePageHandler;
