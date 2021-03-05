import { SHOWS_ACTION_TYPES } from './showsList.types';

const INITIAL_STATE = {
  shows: [],
  searchResults: [],
  noResults: false,
  modalShow: {},
  isLoading: false,
  isError: false,
};

const showsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOWS_ACTION_TYPES.SHOWS_LOADING:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case SHOWS_ACTION_TYPES.FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        shows: action.shows,
        isError: false,
        isLoading: false,
      };
    case SHOWS_ACTION_TYPES.FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        searchResults: action.shows.map((show) => show.show),
        noResults: !action.shows.length ? true : false,
        isError: false,
        isLoading: false,
      };
    case SHOWS_ACTION_TYPES.FETCH_SHOWS_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case SHOWS_ACTION_TYPES.FETCH_MODAL_SHOW_SUCCESS:
      return {
        ...state,
        modalShow: action.show,
        isError: false,
        isLoading: false,
      };
    case SHOWS_ACTION_TYPES.SET_NO_RESULTS:
      return {
        ...state,
        noResults: false,
      };

    default:
      return state;
  }
};

export default showsReducer;
