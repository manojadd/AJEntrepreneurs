import React, { Component } from 'react';
import constants from '../constants';
import trekActionCreator from '../actions/trekActionCreator';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import AddEvent from './AddEvent';
import MuiThemeProvider from 'material-ui-old/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export default class Body extends Component {
	render() {
		return (
			<Grid container gutter={0} style={{marginTop:'6em'}}  >
				<Grid item xs={6}>
					<Paper>Hello sldfjslkdjf lskd flks dfjl sdflk sdjf sdlk flksd flksd jflk sjdf l 
					sdfjlsdk flsd fklsd fkl sdklf sdjlk flsd fl sdklf lskd fjlsdjf
					s fsdjflsj dfjlk sdl flskd flsdfjsldk f sdlkfjsd lkfjsd flskd fskldj fklsd fkls dfsj dfsj flskjd fslkdj
					lsd kfjsdlkf sjdlkf sdlkf sd {}</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper>Im LKSDJF LSKDF SDLK FSLKD FKLSD FLKSD FJSLKD FLKSDJ FLKS JFLKSD 
					 LKSJ FLSDK JFLKSD JFSLDK FJSDKL FJ</Paper>
				</Grid>
				<Grid item xs={3}>
				<MuiThemeProvider>
					<AddEvent/>
  				</MuiThemeProvider>
					
				</Grid>
			</Grid>
			
		);
	}
}



