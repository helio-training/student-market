import React, { Component } from 'react';

import Search from './Routes/Navigation/search-bar/component'
import Account from './Routes/Header/component'

class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <Account/>
      </div>
    );
  }
}

export default App;
