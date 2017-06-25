import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles,createStyleSheet} from 'material-ui/styles';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Script from 'react-load-script';
import constants from '../../constants';
import trekActionCreator from '../../actions/trekActionCreator';
import Grid from 'material-ui/Grid';
import styles from './styles';


const styleSheet = createStyleSheet('mainbar',()=>(styles));

const mapStateToProps = (state) => {
	return {
		loginStatus : state.trekReducer.loginStatus,
		discoveryUrl : state.trekReducer.discoveryUrl,
		scope: state.trekReducer.scope,
		clientId: state.trekReducer.ClientID,
		googleAuth:state.trekReducer.GoogleAuth,
		googleUser:state.trekReducer.GoogleUser,
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
		if(this.props.loginStatus===constants.mainbar.SIGNED_OUT)
		{
			SignInButton= "SIGN IN";
			
		}
        else if(this.props.loginStatus===constants.mainbar.SIGNED_IN)
        {
        	
        	SignInButton= "SIGN OUT";
			UserDetails = this.props.googleUser.getBasicProfile();
			UserAvatar = <Avatar src={UserDetails.getImageUrl()}/>;
			
        }
        else{
        	SignInButton= "?";
        }
		

		return (
			<div >
			<Grid container gutter={0}  onScroll={()=>{console.log("scrolling");}}>
				<Grid item xs={12} >
        		<AppBar className={this.classes.appBar}>
              
            	<Toolbar>
						<Grid container gutter={0} className={this.classes.stretch}>
							<Grid item  xs={3}  >
              					<img src="http://192.168.2.16:3001/images/Logo.png" className={this.classes.logoImage}/>
              </Grid>
							<Grid item xs={6}  hidden={{ smDown: true }}
              >
								<Grid container gutter={0} justify='center' className={this.classes.stretch}>
              						<Grid item xs={2}>
              							<Button contrast  className={this.classes.bouton}>
              								Home
              							</Button>
              						</Grid>
              						<Grid item xs={2}>
              							<Button  contrast className={this.classes.bouton}>
              								Events
              							</Button>
              						</Grid>
              						<Grid item xs={3}>
              							<Button color='accent'  className={this.classes.bouton}>
              								Information
              								</Button>
              						</Grid>
              						<Grid item xs={2}>
              							<Button  contrast  className={this.classes.bouton}>
              								About Us
              							</Button>
              						</Grid>
              						<Grid item xs={3}>
              							<Button  contrast onClick={this.handleSignInClick} className={this.classes.bouton}>
              								{UserAvatar}
              								{SignInButton}
              							</Button>
              						</Grid>
              					</Grid>
              				</Grid>
                      <Grid item  xs={3} >
                        <ul className={this.classes.ul}>
                          <li className={this.classes.li}>
                            <a href="www.twitter.com"><img src="http://192.168.2.16:3001/icons/twitter_logo_white.svg"
                                                       className={this.classes.icons}/></a>
                          </li>
                          <li className={this.classes.li}>
                            <a href="www.facebook.com"><img src="http://192.168.2.16:3001/icons/facebook_logo_white.svg"
                                                       className={this.classes.icons}/></a>
                          </li>
                          <li className={this.classes.li}>
                            <a href="www.instagram.com"><img src="http://192.168.2.16:3001/icons/instagram_logo_white.svg"
                                                       className={this.classes.icons}/></a>
                          </li>
                          <li className={this.classes.li}>
                            <a href="www.youtube.com"><img src="http://192.168.2.16:3001/icons/youtube_logo_white.svg"
                                                       className={this.classes.icons}/></a>
                          </li>                          
                        </ul>
                      </Grid>
              			</Grid>
            		</Toolbar>
          		</AppBar>
          		</Grid>
          	</Grid>
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
		//console.log("Loaded api.js",);
		window.gapi.load('client:auth2',this.initClient);
	}

	//Will call  sign in and sign out depending on current status
	handleSignInClick(){
		console.log('google auth',this.props.googleAuth);
		if(this.props.loginStatus===constants.mainbar.SIGNED_OUT)
			this.props.googleAuth.signIn();
		else if(this.props.loginStatus===constants.mainbar.SIGNED_IN)
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
