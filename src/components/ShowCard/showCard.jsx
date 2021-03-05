import React from 'react';
import styles from './showCard.module.css';

function ShowCard({ show, image, alt, children }) {
  return (
    <li className={styles.showCard}>
      <div className={styles.cardContent}>
        <img className={styles.photo} src={image} alt={alt} />
        <div>{show.name}</div>
        <div className={styles.cardFooter}>{children}</div>
      </div>
    </li>
  );
}

export default ShowCard;
