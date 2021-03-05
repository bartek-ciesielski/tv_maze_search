import React, { useCallback } from 'react';
import { setInputValue } from './searchForm.actions';
import * as actions from '../Shows/showsList.actions';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '../../components/Icon/icon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './searchForm.module.css';

const SearchForm = () => {
  const value = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const handleSetValue = useCallback((e) => {
    e.preventDefault();
    const query = e.target.value;

    dispatch(setInputValue(query));
    if (query) {
      dispatch(actions.fetchSearchResults(query));
    } else {
      dispatch(actions.fetchSearchResultsSuccess([]));
      dispatch(actions.setNoResults(false));
    }
  }, []);

  const handleClick = () => {
    dispatch(setInputValue(''));
    dispatch(actions.fetchSearchResultsSuccess([]));
    dispatch(actions.setNoResults(false));
  };

  const renderIcon = () => {
    return value ? (
      <Icon
        icon={faTimes}
        onClick={handleClick}
        className={styles.icon}
        color={'black'}
      />
    ) : (
      <Icon icon={faSearch} className={styles.icon} color={'black'} />
    );
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleSetValue}
        placeholder="Start searching shows"
      />
      {renderIcon()}
    </form>
  );
};

export default SearchForm;
