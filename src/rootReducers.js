import { combineReducers } from 'redux';
import { reducers as hackerNews} from './data/hackerNews';
import { reducers as apis } from 'data/Apis';

export default combineReducers({
  hackerNews,
  apis,
});


