import React, { Component } from 'react';
import request from 'superagent';
import {connect} from 'react-redux';
import actionCreator from '../../actions/trekActionCreator';
import Card, {CardActions,CardContent,CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('showEvents', {
  card: {
    width: '200px',
    height: '400px',
    display: 'inline-block',
  	margin: '1em',
	
  },
  image:{
  	height:'100%',
  	width:'100%',
  },
  cardMedia:{
  	height:'50%',
  	maxHeight:'50%',
  	overflow:'hidden',
  },
  cardContent:{
  	height:'33%',
  	maxHeight:'33%',	
  	overflow:'hidden',
  	paddingBottom:'0px'
  },
  heading:{
  }


});

const mapStateToProps = (state) =>{
  return {
    serverAddr: state.trekReducer.serverAddr,
    events: state.showEventsReducer.events,
  };
}
const mapDispatchToProps = (dispatch)=>{
  return {
    populate:(data)=>dispatch(actionCreator.populate(data)),
  };
}

const theme = createMuiTheme({
  palette: createPalette({
    type: 'dark', // dark mode
  }),
});

 class showEvents extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		console.log("\n\n\n\n\n\n\n");
		let that = this;
		request.get(this.props.serverAddr+'/events')
      		.end(function(err,res){
        		if(err||!res.body.status){
					console.log("\n\n");
            		console.log('Error in getting events==>',res,err);
         		}
        		else
        		{
					console.log("\n\n");
          			console.log('Got the events',res.body.data);
          			that.props.populate(res.body.data);

        		}
      	});
	}
	render() {
		let cards = this.props.events.map((item)=>{
			if(item.e_type=='night')
			return (
					
					<MuiThemeProvider theme={theme}>
      					<Card className={this.props.classes.card}>
        					<CardMedia className={this.props.classes.cardMedia}>
          						<img src={item.e_picUrl} alt={item.e_name} className={this.props.classes.image}/>
        					</CardMedia>
        					<CardContent className={this.props.classes.cardContent}>
          						<Typography type="headline" component="h3" align='center' className={this.props.classes.heading}>
        	    					{item.e_name}
       	   						</Typography>
          						<Typography component="p" align='center'>
            						{item.e_desc}
          						</Typography>
        					</CardContent>
        					<CardActions>
          						<Button compact primary>More</Button>
        					</CardActions>
      					</Card>
    				</MuiThemeProvider>
    				
			);
		else
			return (
					
      					<Card className={this.props.classes.card}>
        					<CardMedia className={this.props.classes.cardMedia}>
          						<img src={item.e_picUrl} alt={item.e_name} className={this.props.classes.image}/>
        					</CardMedia>
        					<CardContent className={this.props.classes.cardContent}>
          						<Typography type="headline" component="h3" align='center' className={this.props.classes.heading}>
        	    					{item.e_name}
       	   						</Typography>
          						<Typography component="p" align='center'>
            						{item.e_desc}
          						</Typography>
        					</CardContent>
        					<CardActions>
          						<Button compact primary>More</Button>
        					</CardActions>
      					</Card>
    				
			);
		});
		return (
			<div>
				{cards}
			</div>
		);
	}
}


const ShowEventsContainer = connect(mapStateToProps,mapDispatchToProps)(withStyles(styleSheet)(showEvents));
export default ShowEventsContainer;
