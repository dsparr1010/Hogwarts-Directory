import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
//import BackgroundImg from './components/BackgroundImg/BackgroundImg';
import Wrapper from '../src/components/Wrapper/Wrapper';

function App() {
 
  return (
    <div className="App">
      <Wrapper>
        <CardContainer />
      </Wrapper>
    </div>
  );
}

export default App;
