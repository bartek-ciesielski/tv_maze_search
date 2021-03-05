import * as showsApi from '../../services/showsService/showsAPI';
import { SHOWS_ACTION_TYPES } from './showsList.types';

export const showsLoading = () => {
  return {
    type: SHOWS_ACTION_TYPES.SHOWS_LOADING,
  };
};

export const fetchShowsSuccess = (shows) => {
  return {
    type: SHOWS_ACTION_TYPES.FETCH_SHOWS_SUCCESS,
    shows: shows,
  };
};

export const fetchSearchResultsSuccess = (shows) => {
  return {
    type: SHOWS_ACTION_TYPES.FETCH_SEARCH_RESULTS_SUCCESS,
    shows: shows,
  };
};

export const fetchShowsError = () => {
  return {
    type: SHOWS_ACTION_TYPES.FETCH_SHOWS_ERROR,
  };
};

export const fetchModalShowSuccess = (show) => {
  return {
    type: SHOWS_ACTION_TYPES.FETCH_MODAL_SHOW_SUCCESS,
    show: show,
  };
};

export const setNoResults = () => {
  return {
    type: SHOWS_ACTION_TYPES.SET_NO_RESULTS,
  };
};

export const fetchShows = () => async (dispatch) => {
  dispatch(showsLoading());
  try {
    const results = await showsApi.requestAllShows();
    dispatch(fetchShowsSuccess(results));
  } catch (err) {
    dispatch(fetchShowsError());
  }
};

export const fetchSearchResults = (query) => async (dispatch) => {
  dispatch(showsLoading());
  try {
    const results = await showsApi.requestSearchResults(query);
    dispatch(fetchSearchResultsSuccess(results));
  } catch (err) {
    dispatch(fetchShowsError());
  }
};

export const fetchModalShow = (showId) => async (dispatch) => {
  dispatch(showsLoading());
  try {
    const results = await showsApi.requestModalShow(showId);
    dispatch(fetchModalShowSuccess(results));
  } catch (err) {
    dispatch(fetchShowsError());
  }
};
