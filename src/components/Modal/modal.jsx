import React, { useEffect } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon/icon';
import styles from './modal.module.css';

const Modal = ({
  closeModal,
  headerContent = '',
  children = '',
  footerContent = '',
}) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const closeIcon = () => (
    <Icon
      icon={faTimes}
      onClick={closeModal}
      color={'white'}
      className={styles.closeIcon}
    />
  );

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        {closeIcon()}
        <div className={styles.modalHeader}>{headerContent} </div>
        <div className={styles.modalContent}> {children}</div>
        <div className={styles.modalFooter}>{footerContent}</div>
      </div>
    </div>
  );
};

export default Modal;
