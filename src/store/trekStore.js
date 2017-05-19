import {createStore} from 'redux';
import trekReducer from '../reducers/trekReducer';

const trekStore = createStore(trekReducer);
export default trekStore;