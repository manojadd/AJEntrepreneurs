import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import {connect} from 'react-redux';
import {withStyles,createStyleSheet} from 'material-ui/styles';
import styles from './styles';
import Grid from 'material-ui/Grid';



const mapStateToProps = (state)=>{
	return {};
}
const mapDispatchToProps = (dispatch)=>{
	return {};
}

const styleSheet = createStyleSheet('mainpage',(theme)=>(styles));

class mainPage extends Component {
	constructor(props){
		super(props);
		this.classes = props.classes;
	}

	render() {
		return (
		<Grid container gutter={0} justify = {'space-around'}  style={{marginTop:'100px',backgroundColor:'white'}}>
			<Grid item xs = {6}>
				<Typography type='display1' color='accent' align='center'>
				 	WE ARE
				</Typography>
			</Grid>
		</Grid>
		);
	}
}

const MainPageContainer = connect(mapStateToProps,mapDispatchToProps)(withStyles(styleSheet)(mainPage));	
export default MainPageContainer;
