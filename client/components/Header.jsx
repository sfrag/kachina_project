/*

    ./client/components/Header.jsx

*/

import React from 'react';

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                <div id="navbar-collapse" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                    <li>Home</li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    </ul>
                </div>
                </div>
            </nav>
            );
    }
}