import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import ToggleIcon from "./../../assets/images/ic_toggle.svg";

const Dropdown = ({ options, initialLabel, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialLabel);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect(option); // 선택된 옵션을 부모 컴포넌트로 전달
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownToggle} onClick={toggleDropdown}>
        <span className={styles.dropdownLabel}>{selectedOption}</span>
        <img src={ToggleIcon} alt="Toggle Icon" />
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
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
      )}
    </div>
  );
};

export default Dropdown;
