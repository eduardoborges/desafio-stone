import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as sw from './sw';

import 'bulma/css/bulma.css';

ReactDOM.render(<App />, document.getElementById('root'));

sw.unregister();
