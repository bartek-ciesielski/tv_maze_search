import { INPUT_ACTION_TYPES } from './searchForm.types';

const initialState = {
  value: '',
};

const searchFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_ACTION_TYPES.SET_INPUT_VALUE:
      return (state = {
        ...state,
        value: action.value,
      });

    default:
      return state;
  }
};

export default searchFormReducer;
