import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import store from './store'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
