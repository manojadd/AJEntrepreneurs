import React, { Component } from 'react';
import MainBarContainer from './components/mainBar/MainBar';
import trekStore from './store/trekStore';
import {Provider} from 'react-redux';
import Body from './components/Body';
import MainPageContainer from './components/mainPage/mainPage';
import Test from './components/test';

class App extends Component {
  
  render() {
    return (
      <div style={{backgroundImage: "url('http://localhost:3001/images/winter_mountain.jpg')",
                        backgroundSize:'cover',
                        backgroundColor: 'rgba(100,100,150,.5)', 
                        backgroundBlendMode: 'multiply',
                        backgroundAttachment:'fixed',
                  }}  
      >
        <Provider store={trekStore}>
         <MainBarContainer/>
        </Provider>
        <Provider store={trekStore}>
         <MainPageContainer/>
        </Provider>
      </div>
     

    );
  }
  
}



export default App;
  