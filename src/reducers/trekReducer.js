import constants from '../constants';
import update from 'immutability-helper';

const initialState={
	loginStatus : constants.SIGNED_OUT,
	discoveryUrl : ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
	scope: 'https://www.googleapis.com/auth/calendar.readonly',
	ClientID: '398976507069-voajeksquek54m466ed4l6027dul1hrm.apps.googleusercontent.com',
	GoogleAuth:{},
	GoogleUser:{},
};

const trekReducer = (state = initialState,action) => {
	console.log(state,action);

	switch(action.type){
		case constants.SIGN_IN:
			return update(state,{$merge:{loginStatus:constants.SIGN_IN}});
		case constants.SIGNED_IN:
			return update(state,{$merge:{loginStatus:constants.SIGNED_IN}});
		case constants.SIGN_OUT:
			return update(state,{$merge:{loginStatus:constants.SIGN_OUT}});
		case constants.SIGNED_OUT:
			return update(state,{$merge:{loginStatus:constants.SIGNED_OUT}});
		case constants.GOOGLE_AUTH_OB:
			return update(state,{$merge:{GoogleAuth:action.data}});
		case constants.GOOGLE_USER_OB:
			return update(state,{$merge:{GoogleUser:action.data}});
		default:
			return state;
	}

}

export default trekReducer;