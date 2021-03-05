import Modal from '../../../components/Modal/modal';
import * as showDetails from './renderShowCard';
import styles from '../../../components/Modal/modal.module.css';

export const renderModalPhoto = (
  isError,
  isLoading,
  setStatus,
  modalShow,
  status
) => {
  const cast =
    modalShow._embedded && modalShow._embedded.cast.length ? (
      <ul className={styles.modalList}>
        <h4> CAST</h4>
        {modalShow._embedded.cast.map((actor, i) => (
          <li key={i}>
            {actor.person.name} : {actor.character.name}
          </li>
        ))}
      </ul>
    ) : null;

  const crew =
    modalShow._embedded && modalShow._embedded.crew.length ? (
      <ul className={styles.modalList}>
        <h4>CREW</h4>
        {modalShow._embedded.crew.map((person, i) => (
          <li key={i}>
            {person.type} : {person.person.name}
          </li>
        ))}
      </ul>
    ) : null;

  const modalHeader = (
    <h1>
      <a href={modalShow.url} rel="noopener noreferrer" target="_blank">
        {modalShow.name}
      </a>{' '}
      | {showDetails.premiereDate(modalShow)}
    </h1>
  );

  const modalFooter = modalShow.rating && (
    <h2 style={{ display: 'flex' }}>{showDetails.rating(modalShow)}</h2>
  );

  const modalImg = (
    <img
      className={styles.modalPhoto}
      src={
        modalShow.image
          ? modalShow.image.original
          : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
      }
      alt={`Movie poster of: ${modalShow.name}`}
    />
  );

  return (
    status &&
    !isLoading &&
    !isError && (
      <Modal
        closeModal={() => setStatus(false)}
        headerContent={modalHeader}
        footerContent={modalFooter}
      >
        {modalImg}
        <div className={styles.modalListContainer}>
          {cast}
          {crew}
        </div>
      </Modal>
    )
  );
};
