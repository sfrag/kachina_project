/*

    ./client/components/App.jsx

*/

import React from 'react'
import Main from './Main.jsx'
import LaunchPage from './Launch.jsx'

//import { Button } from 'semantic-ui-react';

require("!style-loader!css-loader!sass-loader!../stylesheets/main.scss");

const App = () => (
    <div>
        <Main/>
    </div>
)

export default App
