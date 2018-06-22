import * as types from '../types';

const initialState = {
    headline: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.NEWS_HEADLINE:
      return {
        ...state,
        status: types.NEWS_HEADLINE,
        headline: action.payload,
      };
    default:
      return state;
  }
};
