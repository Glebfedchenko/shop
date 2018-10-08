import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {categories} from './categories';
import {users} from './users';

const index = combineReducers({categories, users, form: formReducer});
export default index;
