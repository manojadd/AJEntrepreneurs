import React, { Component } from 'react';
import MainBarContainer from './components/MainBar';
import trekStore from './store/trekStore';
import {Provider} from 'react-redux';


class App extends Component {
  
  render() {
    return (
      <Provider store={trekStore}>
        <MainBarContainer/>
      </Provider>
    );
  }
  
}



export default App;
  