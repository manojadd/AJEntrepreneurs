import constants from '../constants';
import update from 'immutability-helper';

const initialState={
	loginStatus : constants.mainbar.SIGNED_OUT,
	discoveryUrl : ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
	scope: 'https://www.googleapis.com/auth/calendar.readonly',
	ClientID: '398976507069-voajeksquek54m466ed4l6027dul1hrm.apps.googleusercontent.com',
	GoogleAuth:{},
	GoogleUser:{},
	serverAddr:'http://localhost:3001/api'
};

const trekReducer = (state = initialState,action) => {
	//console.log("trekReducer",state,action);

	switch(action.type){
		case constants.mainbar.SIGN_IN:
			return update(state,{$merge:{loginStatus:constants.mainbar.SIGN_IN}});
		case constants.mainbar.SIGNED_IN:
			return update(state,{$merge:{loginStatus:constants.mainbar.SIGNED_IN}});
		case constants.mainbar.SIGN_OUT:
			return update(state,{$merge:{loginStatus:constants.mainbar.SIGN_OUT}});
		case constants.mainbar.SIGNED_OUT:
			return update(state,{$merge:{loginStatus:constants.mainbar.SIGNED_OUT}});
		case constants.mainbar.GOOGLE_AUTH_OB:
			return update(state,{$merge:{GoogleAuth:action.data}});
		case constants.mainbar.GOOGLE_USER_OB:
			return update(state,{$merge:{GoogleUser:action.data}});
		default:
			return state;
	}

}

export default trekReducer;