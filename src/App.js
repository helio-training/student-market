import React, {Component} from 'react';
import Header from './Routes/Header/component'
// import Chickens from './Routes/Products/chickens'
// import Watches from './Routes/Products/watches'
import Wine from './Routes/Products/wine'
import Search from './Routes/Navigation/search-bar/component'
import Account from './Routes/Header/component'

import Navigation from './Routes/Navigation/component';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Search/>
                <Account/>
                <Navigation/>

                {/*<Chickens/>*/}
                {/*<Watches/>*/}
                <Wine></Wine>
            </div>
        );
    }
}

export default App;
