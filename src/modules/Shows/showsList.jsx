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

  const isLoading = useSelector((state) => state.shows.isLoading);
  const isError = useSelector((state) => state.shows.isError);
  const modalShow = useSelector((state) => state.shows.modalShow);
  const searchResults = useSelector((state) => state.shows.searchResults);
  const shows = useSelector((state) => state.shows.shows);
  const noResults = useSelector((state) => state.shows.noResults);

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
