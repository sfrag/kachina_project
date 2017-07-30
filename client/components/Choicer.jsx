/*

    ./client/components/App.jsx

*/

import React from 'react'

import MenuComponent from './Menu.jsx'
import ImageGrid from './ImageGrid.jsx'

//import { Button } from 'semantic-ui-react';

const ChoicerPage = () => (
    <div className="root-wrapper">
        <MenuComponent></MenuComponent>
        <div className="content-wrapper">
        <ImageGrid></ImageGrid>
        </div>
    </div>
)

export default ChoicerPage
