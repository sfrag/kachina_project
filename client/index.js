/*

    ./client/index.js
    wich is the webpack entry file

*/

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './components/App.jsx';

//ReactDOM.render(<App />, document.getElementById('root'));

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));



