import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import {connect} from 'react-redux';
import {withStyles,createStyleSheet} from 'material-ui/styles';
import styles from './styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';




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
		<Grid container gutter={0} justify = {'center'}  style={{marginTop:'80px'}}>
			<Grid item xs = {6}>
				<div className={this.classes.row1}>
				<Typography type='display2' color='accent' align='center' className={this.classes.type1}>
				 	Discover with
				</Typography>
				<Typography type='display4' color='accent' align='center' className={this.classes.type2}>
				 	WEJUSTREK
				</Typography>
				<Typography type='headline' color='accent' align='center' className={this.classes.type3}>
				 The thrill of the outdoors, the beauty of nature, the serenity of being unplugged.
				  We offers you all
				  of these experiences, with many more outdoor activities and miles of natural beauty.
				</Typography>
				<Button color='contrast' className={this.classes.putCenter}>
					Explore Now
				</Button>
				</div>
			</Grid>

			<Grid item xs={12}>		
				<div className={this.classes.row2}>
					<Typography type='headline' color='default' align='center' className={this.classes.type2}>
				 	VISIT
					</Typography>
					<Typography type='title' color='accent' align='center' className={this.classes.info}>
				 Montana Mountain is a magical place. In the winter, the mountains 
				 are covered with virgin snow and winter wildlife.
				  In the summer, you’ll find delicate wildflowers and an abundance of 
				 beautiful wild animals. Montana Mountain is one of the most beautiful national
				  parks in the region, attracting visitors from around the world.
				   Come to discover nature - and yourself. 
				</Typography>
				</div>
			</Grid>
			<Grid item xs={12}>		
				<div className={this.classes.row3}>
					<Typography type='headline' color='default' align='center' className={this.classes.type2}>
				 	VISIT
					</Typography>
					<Typography type='title' color='accent' align='center' className={this.classes.info}>
				 Montana Mountain is a magical place. In the winter, the mountains 
				 are covered with virgin snow and winter wildlife.
				  In the summer, you’ll find delicate wildflowers and an abundance of 
				 beautiful wild animals. Montana Mountain is one of the most beautiful national
				  parks in the region, attracting visitors from around the world.
				   Come to discover nature - and yourself. 
				</Typography>
				</div>
			</Grid>
		</Grid>
		);
	}
}

const MainPageContainer = connect(mapStateToProps,mapDispatchToProps)(withStyles(styleSheet)(mainPage));	
export default MainPageContainer;
