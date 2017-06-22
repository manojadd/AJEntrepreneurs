import constants from './../constants';

const trekActionCreator = {
    signIn() {
        return {
            type: constants.mainbar.SIGN_IN,

        }
    },
    signedIn() {
        return {
            type: constants.mainbar.SIGNED_IN,

        }
    },
    signOut() {
        return {
            type: constants.mainbar.SIGN_OUT,

        }
    },
    signedOut() {
        return {
            type: constants.mainbar.SIGNED_OUT,
        }
    },
    googleAuthSave(googleAuth) {
        return {
            type: constants.mainbar.GOOGLE_AUTH_OB,
            data: googleAuth,
        }
    },
    googleUserSave(googleUser){
    	return{
    		type:constants.mainbar.GOOGLE_USER_OB,
    		data: googleUser,
    	};
    },

    //below are the addEventReducerActionCreators
    enableSubmit(){
        return{
            type:constants.addEvent.E_SUBMIT,
        };
    },
    disableSubmit(){
        return {
            type:constants.addEvent.D_SUBMIT,
        };
    },
    snackbarOpen(data){
        return {
            type:constants.addEvent.O_SNACK,
            result:data,
        }
    },
    snackbarClose(){
        return {
            type:constants.addEvent.C_SNACK,
        }
    },
    //showEventsActionCreators
    populate(data){
        return{
            type:constants.showEvents.POPULATE,
            data:data,
        }
    }
}

export default trekActionCreator;
