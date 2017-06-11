/*

    ./client/components/App.jsx

*/

import React from 'react';
import HeaderComponent from './Header.jsx';

import { Button } from 'semantic-ui-react';

require("!style-loader!css-loader!sass-loader!../stylesheets/main.scss");

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div style={{textAlign: 'center'}}>
                    <h1>Kachina project</h1>
                    <Button>Click Here</Button>
                </div>
            </div>
            );
    }
}