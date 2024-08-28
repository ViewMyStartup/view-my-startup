import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [dropdownVisible, setDropdownVisible] = useState({});

  const handleToggleDropdown = (commentId) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <DropdownContext.Provider value={{ dropdownVisible, handleToggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => useContext(DropdownContext);
