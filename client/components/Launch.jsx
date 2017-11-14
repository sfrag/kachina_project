import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'


const LaunchPage = () => (
    <div className="launch-page">
        <Button ghost><Link to='/countries'>Seleccionar País</Link></Button>
    </div>
);


export default LaunchPage