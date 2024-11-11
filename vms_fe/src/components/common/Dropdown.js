import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({
  options = [
    "누적 투자금액 높은순",
    "누적 투자금액 낮은순",
    "매출액 높은순",
    "매출액 낮은순",
    "고용 인원 많은순",
    "고용 인원 적은순",
  ],
  initialLabel = options[0],
  onOptionSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialLabel);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect(option);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div
        className={`${styles.dropdownToggle} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
      >
        <span className={styles.dropdownLabel}>{selectedOption}</span>
        <img
          src="/assets/images/ic_toggle.svg"
          alt="Toggle Icon"
          className={styles.dropdownIcon}
        />
      </div>
      <ul
        className={`${styles.dropdownMenu} ${
          isOpen ? styles.dropdownMenuOpen : ""
        }`}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={`${styles.dropdownMenuItem} ${
              index === 0 ? styles.dropdownMenuItemFirst : ""
            } ${
              index === options.length - 1 ? styles.dropdownMenuItemLast : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

