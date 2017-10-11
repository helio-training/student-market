import React, { Component } from 'react';
import Header from './Routes/Header/component'
import Chickens from './Routes/Products/chickens'
import Watches from './Routes/Products/watches'
import Search from './Routes/Navigation/search-bar/component'
import Account from './Routes/Header/component'


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Chickens/>
        <Watches/>
        <Search/>
        <Account/>
      </div>
    );
  }
}

export default App;
