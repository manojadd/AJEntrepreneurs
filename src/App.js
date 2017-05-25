import React, { Component } from 'react';
import MainBarContainer from './components/MainBar';
import trekStore from './store/trekStore';
import {Provider} from 'react-redux';
import Body from './components/Body';

class App extends Component {
  
  render() {
    return (
      <div>
      <Provider store={trekStore}>
        <MainBarContainer/>
      </Provider>
      <Body/>
      </div>
     

    );
  }
  
}



export default App;
  