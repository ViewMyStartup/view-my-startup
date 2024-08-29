import React, { useState, useRef, useEffect } from "react";
import styles from "./DropdownSmallSize.module.css";
import ToggleIcon from "./../../assets/images/ic_toggle.svg";

function DropdownSmallSize({
  options = [
    "누적 투자금액 높은순",
    "누적 투자금액 낮은순",
    "매출액 높은순",
    "매출액 낮은순",
    "고용 인원 많은순",
    "고용 인원 적은순",
  ],
  initialLabel = options[0],
  handleOptionChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialLabel);

  //드랍다운 참조값
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleOptionChange(option);
  };

    // 이벤트 리스너 등록
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    //드랍다운 밖을 선택하면 실행할 핸들러 함수
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
          src={ToggleIcon}
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
            className={styles.dropdownMenuItem}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownSmallSize;

