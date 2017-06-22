import constants from '../constants';
import update from 'immutability-helper';

const initialState = {
    events:[],
};

const showEventsReducer = (state = initialState, action) => {
    //console.log("eventReducer", state, action);

    switch (action.type) {
        case constants.showEvents.POPULATE:
            return update(state, { $merge: { events: action.data } });
        default:
        	return state;
    }
}

export default showEventsReducer;
