import React, { Component } from 'react'
import Routes from './Routes/component'
import imgUrl from './Assets/img.png'
import './App.css'
class App extends Component {
  render() {
    return (
      <div>
        <img src={imgUrl}/>
        <Routes/>
      </div>
    );
  }
}

export default App;
