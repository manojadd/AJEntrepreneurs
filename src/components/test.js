import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import {withStyles,createStyleSheet} from 'material-ui/styles';
import Grid from 'material-ui/Grid';



const mapStateToProps = (state)=>{
  return {};
}
const mapDispatchToProps = (dispatch)=>{
  return {};
}


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

export default mainPage;
