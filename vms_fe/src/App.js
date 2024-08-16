// src/App.js
import React, { useState } from "react";
import ModalSelectComparision from "components/ModalSelectComparision";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Investment Modal</button>
      <ModalSelectComparision isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
