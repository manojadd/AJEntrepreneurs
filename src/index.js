import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

const theme = createMuiTheme({
	overrides: {
		MuiButton: {
		}
	}
});

class Index extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		);
	}
}


ReactDOM.render(
	<Index />,document.getElementById('root')
);
