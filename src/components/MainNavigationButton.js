import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import {withStyles,createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet('MainNavigationButtonStyle',{
	bouton:{
		height:'100%',
		width:'100%',
	}
});

class MainNavigationButton extends Component {
	constructor(props){
		super(props);
		this.classes = props.classes;

	}
	render() {
			console.log('this is props',this.props);

		return (
			<Button className={this.classes.bouton} contrast>
				{this.props.children}
			</Button>
		);
	}
}

MainNavigationButton.propTypes={
	classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(MainNavigationButton);