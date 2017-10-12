import React, {Component} from 'react';

import Header from './Routes/Header/component'
// import Chickens from './Routes/Products/chickens'
// import Watches from './Routes/Products/watches'
import wine from './Routes/Products/wine'
import Search from './Routes/Navigation/search-bar/component'
import Account from './Routes/Header/component'

import Navigation from './Routes/Navigation/component';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/*<Chickens/>*/}
                {/*<Watches/>*/}
                <wine/>
                <Search/>
                <Account/>
                <Navigation/>
            </div>
        );
    }
}

export default App;
