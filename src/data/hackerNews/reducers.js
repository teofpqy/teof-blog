import { fetchNewsActionsTypes, TopStorieActionTypes } from './actions';

const InitState = {
  topstories: [],
  news: {},
};

const hackerNews = (state = InitState, action) => {
  switch(action.type) {
    case fetchNewsActionsTypes.success: {
      const news = {...state.news, ...{[action.id]: action.payload }};
      return {...state, news};
    }
    case TopStorieActionTypes.success:
      return {...state,...{topstories: action.payload}};
    default:
      return state;
  }
};

export default hackerNews;
