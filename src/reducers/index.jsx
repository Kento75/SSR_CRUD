import { combineReducers } from 'redux';
import search from './search';


// 各reducerを束ねる
const rootReducer = combineReducers({
  search
});

export default rootReducer;