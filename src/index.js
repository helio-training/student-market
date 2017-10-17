import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import store from './store'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
