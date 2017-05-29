import React, { Component } from 'react';
import Input from 'material-ui/Input/Input';
import Radio from 'material-ui/Radio/Radio';
import TimePicker from 'material-ui-old/TimePicker';
import TextField from 'material-ui-old/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class AddEvent extends Component {
	render() {
		return (
		<div style={{height:'900px',maxWidth:'100%',backgroundColor:'red'}}>
    			
    			
    	<TimePicker
      	hintText="12hr Format"
    	/>
    	<TextField
      		hintText="Event name"
    	/>
		<br/>
		<TextField
      		hintText="Event Description"
    	/>
		<br/>	
		<TextField
      		hintText="Event name"
    	/>
		<br/>

    	
  		</div>
		);
	}
}

export default AddEvent;
