import React, { Component } from 'react';
import Watches from './Routes/Products/watches'
import Search from './Routes/Navigation/search-bar/component'
import Account from './Routes/Header/component'

class App extends Component {
  render() {
    return (
      <div>
        <Watches/>
        <Search/>
        <Account/>
      </div>
    );
  }
}

export default App;
