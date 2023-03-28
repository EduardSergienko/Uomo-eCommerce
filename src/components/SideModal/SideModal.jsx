import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './SideModal.module.scss';
const modalRoot = document.querySelector('#sideModal-root');

export default function SideModal({ onShowModal, children }) {
  useEffect(() => {
    const handleEscClick = e => {
      if (e.code === 'Escape') {
        onShowModal();
      }
    };
    window.addEventListener('keydown', handleEscClick);

    return () => {
      window.removeEventListener('keydown', handleEscClick);
    };
  }, [onShowModal]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onShowModal();
    }
  };

  return createPortal(
    <div onClick={handleOverlayClick} className={styles.Overlay}>
      {children}
    </div>,
    modalRoot
  );
}
