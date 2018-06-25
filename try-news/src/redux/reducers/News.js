import * as types from '../types';

const initialState = {
    headline: null,
    bitcoin: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.NEWS_HEADLINE:
      return {
        ...state,
        status: types.NEWS_HEADLINE,
        headline: action.payload,
      };
    case types.NEWS_BITCOIN:
      return {
        ...state,
        status: types.NEWS_HEADLINE,
        bitcoin: action.payload,
      };
    default:
      return state;
  }
};
