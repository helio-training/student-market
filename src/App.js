import React, { Component } from 'react';
import Header from './Routes/Header/component'
// import Chickens from './Routes/Products/chickens'
import Watches from './Routes/Products/watches'
import Shoes from './Routes/Products/shoes'
import Search from './Routes/Navigation/search-bar/component'
import Account from './Routes/Header/component'
import imgUrl from './Assets/img.png'
import './App.css'
class App extends Component {
  render() {
    return (
      <div>

        <img src={imgUrl} />
        <Header/>
        <Shoes/>
      </div>
    );
  }
}

export default App;
