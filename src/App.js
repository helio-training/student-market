import React, { Component } from 'react';
import Header from './Routes/Header/component'
// import Chickens from './Routes/Products/chickens'
import Watches from './Routes/Products/watches'
import Search from './Routes/Navigation/search-bar/component'
import Account from './Routes/Header/component'
import Navigation from './Routes/Navigation/component'


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>
        {/*<Chickens/>*/}
        <Watches/>
      </div>
    );
  }
}

export default App;
