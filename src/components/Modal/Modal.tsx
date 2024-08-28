import { useEffect } from "react";
import css from "./Modal.module.css";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  image: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.modalContainer}>
      {isOpen && (
        <div className={css.overlay} onClick={handleOverlayClick}>
          <div className={css.modal}>
            <div>
              <img src={image} alt="Large" />
              <button
                type="button"
                className={css.closeButton}
                onClick={onClose}
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
