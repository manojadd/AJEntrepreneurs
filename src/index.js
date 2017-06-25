import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { purple, green, red,white } from 'material-ui/styles/colors';
import 'typeface-roboto';


class Index extends Component {
	render() {
		return (
			<MuiThemeProvider >
				<App />
				
			</MuiThemeProvider>
		);
	}
}


ReactDOM.render(
	<Index />,document.getElementById('root')
);
