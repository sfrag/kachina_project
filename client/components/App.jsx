/*

    ./client/components/App.jsx

*/

import React, { Component } from 'react';

import MenuComponent from './Menu.jsx';
import ImageGrid from './ImageGrid.jsx';

//import { Button } from 'semantic-ui-react';

require("!style-loader!css-loader!sass-loader!../stylesheets/main.scss");

export default class App extends React.Component {
    render() {
        return (
            <div className="root-wrapper">
                <MenuComponent></MenuComponent>
                <div className="content-wrapper">
                <ImageGrid></ImageGrid>
                </div>
            </div>
            );
    }
}