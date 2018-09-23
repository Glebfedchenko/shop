import {combineReducers} from 'redux';
import {coins} from './coinReducer';

const index = combineReducers({coins});
export default index;
