import constants from './../constants';

const trekActionCreator = {
    signIn() {
        return {
            type: constants.SIGN_IN,

        }
    },
    signedIn() {
        return {
            type: constants.SIGNED_IN,

        }
    },
    signOut() {
        return {
            type: constants.SIGN_OUT,

        }
    },
    signedOut() {
        return {
            type: constants.SIGNED_OUT,
        }
    },
    googleAuthSave(googleAuth) {
        return {
            type: constants.GOOGLE_AUTH_OB,
            data: googleAuth,
        }
    },
    googleUserSave(googleUser){
    	return{
    		type:constants.GOOGLE_USER_OB,
    		data: googleUser,
    	}
    }
}

export default trekActionCreator;
