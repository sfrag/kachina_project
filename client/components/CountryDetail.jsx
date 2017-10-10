import React from 'react'
import { Link } from 'react-router-dom'
//import { Grid, Image, Container } from 'semantic-ui-react'
import { Row, Col } from 'antd';

var objects = ['Tokyo', 'Kyoto', 'Miyajima', 'Hiroshima'];

const CountryDetail = (props) => (
    <div className="gutter-example">

        {objects.map(function(object, i){
            return <Col xs={24} sm={24} md={8} lg={8} xl={8} key={i}><div className="photo-text"><h1>{object}</h1></div><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>;
        })}

  </div>);


export default CountryDetail