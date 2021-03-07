import * as actions from './showsList.actions.js';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader/loader';
import Modal from '../../components/Modal/modal';
import { renderModalPhoto } from './helpers/renderModal.js';
import { renderShows } from './helpers/renderShows.js';
import styles from './shows.module.css';

function ShowsList() {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    dispatch(actions.fetchShows());
  }, []);

  const showsState = useSelector((state) => state.shows);

  const {
    isLoading,
    isError,
    modalShow,
    searchResults,
    shows,
    noResults,
  } = showsState;

  const dispatch = useDispatch();

  const handleClick = (show) => {
    setStatus(true);
    dispatch(actions.fetchModalShow(show.id));
  };
  const handleKeyDown = (e, show) => {
    if (e.keyCode === 13) {
      handleClick(show);
    }
  };

  return (
    <ul className={styles.showsContainer}>
      {isLoading ? <Loader /> : null}
      {isError ? (
        <Modal closeModal={() => setStatus(false)}>
          Something went wrong!!! Try again later
        </Modal>
      ) : null}
      {renderModalPhoto(isError, isLoading, setStatus, modalShow, status)}
      {renderShows(noResults, searchResults, handleClick, handleKeyDown, shows)}
    </ul>
  );
}

export default ShowsList;
