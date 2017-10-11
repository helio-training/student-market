import React, { Component } from 'react';
import Navigation from "./Routes/Navigation/component";

import WineProducts from './Routes/Products/wine'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <WineProducts/>
      </div>
    );
  }
}

export default App;
