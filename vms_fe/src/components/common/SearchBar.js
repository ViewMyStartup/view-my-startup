import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ value, onChange, onClear, onSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={`${styles.searchInput} ${value ? styles.textShift : ""} ${styles.inputWithPlaceholder}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="검색어를 입력해주세요"
      />
      <img
        src="/assets/images/ic_search.svg"
        alt="Search button"
        className={`${styles.searchIcon} ${value ? styles.searchIconActive : ""}`}
        onClick={onSearch}
      />
      {value && (
        <img
          src="/assets/images/ic_delete_circle_small.svg"
          alt="Delete button"
          className={styles.deleteButton}
          onClick={onClear}
        />
      )}
    </div>
  );
};

export default SearchBar;
