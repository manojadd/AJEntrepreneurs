import React, { Component } from 'react';
import constants from '../constants';
import trekActionCreator from '../actions/trekActionCreator';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import AddEvent from './AddEvent';
import ShowEvents from './showEvents';
import MuiThemeProvider from 'material-ui-old/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import trekStore from '../store/trekStore';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export default class Body extends Component {
	render() {
		return (
			<Grid container gutter={0} style={{marginTop:'6em'}}  >
				
				<Grid item xs={9}>
					<Provider store={trekStore}>
						<ShowEvents/>	
					</Provider>
				</Grid>
				<Grid item xs={3}>
				<MuiThemeProvider>
					<Provider store={trekStore}>
					<AddEvent/>
					</Provider>
  				</MuiThemeProvider>
					
				</Grid>
			</Grid>
			
		);
	}
}



