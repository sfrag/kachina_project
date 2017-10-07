import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LaunchPage from './Launch.jsx'
import ChoicerPage from './Choicer.jsx'

const Main = () => (
    <main className="route-page">
        <Switch>
            <Route exact path='/' component={LaunchPage}/>
            <Route exact path='/countries' component={ChoicerPage}/>
            <Route exact path='/countries/:country' component={ChoicerPage}/>
        </Switch>
    </main>
)

export default Main