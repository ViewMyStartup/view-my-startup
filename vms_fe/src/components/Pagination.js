import React from "react";

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.button} ${styles.leftPageButton}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
    </div>
  );
};

export default Pagination;
