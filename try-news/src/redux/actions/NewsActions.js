import * as types from '../types';
import store from '../store';
import * as api from '../../common/api';

// MARK - Setter

export const setHeadlineNews = () => {
  api.fetchHeadlineNews().then(news => {
    store.dispatch(storeHeadlineNews(news));
  });
};

// MARK - Getter

export const getHeadlineNews = () => {
  const state = store.getState();
  return state.news.headline;
};

// MARK - Actions

const storeHeadlineNews = news => {
  return dispatch => {
    dispatch({
      type: types.NEWS_HEADLINE,
      payload: news,
    });
  };
};
