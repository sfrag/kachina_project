/*

    ./client/components/App.jsx

*/

import React from 'react';
import HeaderComponent from './Header.jsx';
import CardExampleCard from './Card.jsx';


import { Button } from 'semantic-ui-react';

require("!style-loader!css-loader!sass-loader!../stylesheets/main.scss");

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div style={{textAlign: 'center'}}>
                    <h1>Kachina tonto project</h1>
                    <Button>Click Here</Button>
                </div>
                <div class="col"><CardExampleCard></CardExampleCard></div>
            </div>
            );
    }
}