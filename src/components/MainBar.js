import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles,createStyleSheet} from 'material-ui/styles';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
//import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Script from 'react-load-script';
import constants from '../constants';
import trekActionCreator from '../actions/trekActionCreator';



const styleSheet = createStyleSheet('mainbar',()=>({
  appBar:{
    position: 'relative',
  },
  display:{
    display:'flex',
  },
  flex:{
    flexGrow:20,
  },
  flexSingle:{
    flexGrow:1,
  }
}));

const mapStateToProps = (state) => {
	return {
		loginStatus : state.loginStatus,
		discoveryUrl : state.discoveryUrl,
		scope: state.scope,
		clientId: state.ClientID,
		googleAuth:state.GoogleAuth,
		googleUser:state.GoogleUser,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSignIn:() => dispatch(trekActionCreator.signIn()),
		onSignedIn:() => dispatch(trekActionCreator.signedIn()),
		onSignOut:() => dispatch(trekActionCreator.signOut()),
		onSignedOut:() => dispatch(trekActionCreator.signedOut()),
		onGoogleAuth: (googleAuth) => dispatch(trekActionCreator.googleAuthSave(googleAuth)),
		onGoogleUser: (googleUser) => dispatch(trekActionCreator.googleUserSave(googleUser)),		
	};
}



class MainBar extends Component {

	constructor(props){
    	super(props);
    	this.classes = props.classes;
    	this.handleClientLoad = this.handleClientLoad.bind(this);
    	this.initClient = this.initClient.bind(this);
    	this.handleSignInChange = this.handleSignInChange.bind(this);
    	this.handleSignInClick = this.handleSignInClick.bind(this);

	}

	componentDidMount(){
    	//currently empty.
	}

	render() {
		let SignInButton = "";
		let UserDetails = null;
		let UserAvatar = null;
		if(this.props.loginStatus===constants.SIGNED_OUT)
		{
			SignInButton= "SIGN IN";
			
		}
        else if(this.props.loginStatus===constants.SIGNED_IN)
        {
        	
        	SignInButton= "SIGN OUT";
			UserDetails = this.props.googleUser.getBasicProfile();
			UserAvatar = <Avatar src={UserDetails.getImageUrl()}/>;
			
        }
        else{
        	SignInButton= "?";
        }
		

		return (
			<div>
        		<AppBar className={this.classes.appBar}>
            		<Toolbar className={this.classes.display}>
              			<Typography type="title" colorInherit className={this.classes.flex}>
              				AJ Entreprenuers'
              			</Typography>
              			<Typography type="title" colorInherit className={this.classes.flexSingle}>
              				{this.props.loginStatus===constants.SIGNED_IN?("Hello "+UserDetails.getName()):""}
              			</Typography>
              			<Button raised primary onClick={this.handleSignInClick}>
              				{UserAvatar}
              				{SignInButton}

              			</Button>
            		</Toolbar>
          		</AppBar>
          		<Script
            		url="https://apis.google.com/js/api.js"
            		onLoad={this.handleClientLoad}
            		onError={function(){}}
        		/>
        	</div>
		);
	}

	//To load the client and auth2 modules from script.
	handleClientLoad(){
		console.log("Loaded api.js",);
		window.gapi.load('client:auth2',this.initClient);
	}

	//Will call  sign in and sign out depending on current status
	handleSignInClick(){
		console.log('google auth',this.props.googleAuth);
		if(this.props.loginStatus===constants.SIGNED_OUT)
			this.props.googleAuth.signIn();
		else if(this.props.loginStatus===constants.SIGNED_IN)
			this.props.googleAuth.signOut();
		else
		{}

	}

	//Sign in status listener for ui button change
	handleSignInChange(status){
		if(status){
			let googleUser = this.props.googleAuth.currentUser.get();
        	this.props.onGoogleUser(googleUser);
			this.props.onSignedIn(); // call this at last.
		}
		else{
			this.props.onSignedOut();
		}
	}



	//initialise GoogleAuth object using given options.
	initClient(){
		
		window.gapi.client.init({
     		'discoveryDocs':this.props.discoveryUrl,
     		'clientId':this.props.clientId,
     		'scope':this.props.scope,
    		}
    	).then(()=>{ //sets the user details.
    		let googleAuth = window.gapi.auth2.getAuthInstance(); 
    		let signInStatus = googleAuth.isSignedIn.get(); 
    		
    		console.log(" This User Status",signInStatus);
    		googleAuth.isSignedIn.listen(this.handleSignInChange);
    		
    		this.props.onGoogleAuth(googleAuth); 
    		this.handleSignInChange(signInStatus);
    		
   		});
	}
}


MainBar.propTypes={
	classes: PropTypes.object.isRequired,
	loginStatus : PropTypes.string.isRequired,
		discoveryUrl : PropTypes.array.isRequired ,
		scope: PropTypes.string.isRequired,
		clientId: PropTypes.string.isRequired,
		googleAuth: PropTypes.object.isRequired,
		onSignIn:PropTypes.func.isRequired,
		onSignedIn:PropTypes.func.isRequired,
		onSignOut:PropTypes.func.isRequired,
		onSignedOut:PropTypes.func.isRequired,
		onGoogleAuth:PropTypes.func.isRequired,
		onGoogleUser:PropTypes.func.isRequired,

};

const MainBarContainer = connect(mapStateToProps,mapDispatchToProps)(withStyles(styleSheet)(MainBar));	
export default MainBarContainer;
