import { INPUT_ACTION_TYPES } from './searchForm.types';

export const setInputValue = (value) => {
  return { type: INPUT_ACTION_TYPES.SET_INPUT_VALUE, value };
};
