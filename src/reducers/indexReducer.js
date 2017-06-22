import {combineReducers} from 'redux';
import addEventReducer from './addEventReducer';
import trekReducer from './trekReducer';
import showEventsReducer from './showEventsReducer';

export default combineReducers({
	addEventReducer,
	trekReducer,
	showEventsReducer,
});