import styles from "./Popup.module.css";
import LargeBtn from "./LargeBtn";
import closeButton from "../assets/images/ic_delete.svg";

const MessagePopUpOneBtn = ({ text, onClose, onConfirm }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img
          src={closeButton}
          alt="close button"
          className={styles.closeButton}
          onClick={onClose}
        />
        <p className={styles.modalContent}>{text}</p>
        <LargeBtn text="확인" onClick={onConfirm}></LargeBtn>
      </div>
    </div>
  );
};

export default MessagePopUpOneBtn;
