import constants from '../constants';
import update from 'immutability-helper';

const initialState = {
    canSubmit: false,
    snackbarData: '',
    openSnackbar: false,
};

const eventReducer = (state = initialState, action) => {
    //console.log("eventReducer", state, action);

    switch (action.type) {
        case constants.addEvent.E_SUBMIT:
            return update(state, { $merge: { canSubmit: true } });
        case constants.addEvent.D_SUBMIT:
            return update(state, { $merge: { canSubmit: false } });
        case constants.addEvent.O_SNACK:
            return update(state,{$merge: {snackbarData:action.result,openSnackbar:true}});
        case constants.addEvent.C_SNACK:
            return update(state,{$merge: {snackbarData:'',openSnackbar:false}});
        default:
        	return state;
    }
}

export default eventReducer;