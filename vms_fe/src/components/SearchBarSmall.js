import searchIcon from "../assets/images/ic_search.svg";
import styles from "./SearchBarSmall.module.css";

const SearchBarSmall = ({ value, onChange }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="검색"
      />
      <img
        src={searchIcon}
        alt="Search button"
        className={`${styles.searchIcon} ${
          value ? styles.searchIconActive : ""
        }`}
      />
    </div>
  );
};

export default SearchBarSmall;
