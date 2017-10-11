import React, { Component } from 'react';
import Header from './Routes/Header/component'
import Chickens from './Routes/Products/chickens'


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Chickens/>
      </div>
    );
  }
}

export default App;
