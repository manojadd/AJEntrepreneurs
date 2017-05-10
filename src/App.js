import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles,createStyleSheet} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet('App',()=>({
  appBar:{
    position: 'relative',
  },
  flex:{
    flex:1,
  }
}));

class App extends Component {
  constructor(props){
    super(props);
    this.classes = props.classes;
  }
  render() {
    return (
        <div>
          <AppBar className={this.classes.appBar}>
            <Toolbar>
              <Typography type="title" colorInherit className={this.classes.flex} >AJ Enterprenuers</Typography>
              <Button contrast>LOGIN</Button>
            </Toolbar>
          </AppBar>
        </div>
    );
  }
}

App.propTypes={
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(App);
  