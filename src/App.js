import React, { Component } from 'react';
import './App.css';
import Screen from './Screen/Screen.js';

class App extends Component {
    
    //    метод вызывается непосредственно перед первым рендером
    
    componentWillMount(){
        
    }
    
//    метод вызывается сразу после обновления
    
    componentDidMount(){
        
    }
    
  render() {
      
    return (
      <div className="App">
        <Screen />
      </div>
    );
  }
}

export default App;
