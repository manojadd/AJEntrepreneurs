import {applyMiddleware,createStore} from 'redux';
import indexReducer from '../reducers/indexReducer';
import logger from 'redux-logger'

const trekStore = createStore(indexReducer,applyMiddleware(logger));
console.log("initial state",trekStore.getState());
export default trekStore;