/*

    ./client/components/App.jsx

*/

import React from 'react'

import MenuComponent from './Menu.jsx'
import BackButton from './BackButton.jsx'
import Countries from './Countries.jsx'
import CountryDetail from './CountryDetail.jsx'

const ChoicerPage = (props) => (
    <div className="root-wrapper">
        <div className="content-wrapper">
            <MenuComponent></MenuComponent>
            <BackButton>{props}</BackButton>
            {!props.match.params.country?
                ( <Countries></Countries> ) :
                ( <CountryDetail>{props}</CountryDetail>) }
        </div>
    </div>
)

export default ChoicerPage
