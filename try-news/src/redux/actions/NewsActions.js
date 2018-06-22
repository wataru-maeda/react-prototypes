import * as types from '../types';
import store from '../store';

// MARK - Setter

export const setHeadlineNews = news => {
  store.dispatch(storeHeadlineNews(news));
};

// MARK - Getter

export const getHeadlineNews = () => {
  const state = store.getState();
  return state.user.name;
};

// MARK - Actions

const storeHeadlineNews = news => {
  return dispatch => {
    dispatch({
      type: types.NEWS_HEADLINE,
      payload: name,
    });
  };
};
