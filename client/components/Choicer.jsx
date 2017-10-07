/*

    ./client/components/App.jsx

*/

import React from 'react'

import MenuComponent from './Menu.jsx'
import Countries from './Countries.jsx'
import CountryDetail from './CountryDetail.jsx'

const ChoicerPage = (props) => (
    <div className="root-wrapper">
        <div className="content-wrapper">
            <MenuComponent>{props}</MenuComponent>
            {!props.match.params.country?
                ( <Countries></Countries> ) :
                ( <CountryDetail>{props}</CountryDetail>) }
        </div>
    </div>
)

export default ChoicerPage
