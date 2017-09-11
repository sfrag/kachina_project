import React from 'react'
import { Link } from 'react-router-dom'
//import { Grid, Image, Container } from 'semantic-ui-react'
import { Row, Col } from 'antd';

const Countries = () => (
    <div className="gutter-example">
        <Row className="grid-margins" gutter={16}>
            <Link to='/japan'><Col xs={24} sm={24} md={8} lg={8} xl={8}><div className="photo-text"><h1>JAPAN</h1></div><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col></Link>
            <Link to='/spain'><Col xs={24} sm={24} md={8} lg={8} xl={8}><div className="photo-text"><h1>SPAIN</h1></div><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col></Link>
            <Link to='/china'><Col xs={24} sm={24} md={8} lg={8} xl={8}><div className="photo-text"><h1>CHINA</h1></div><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col></Link>
        </Row>
        <Row className="grid-margins" gutter={16}>
            <Link to='/india'><Col xs={24} sm={24} md={8} lg={8} xl={8}><div className="photo-text"><h1>INDIA</h1></div><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col></Link>
            <Link to='/malasia'><Col xs={24} sm={24} md={8} lg={8} xl={8}><div className="photo-text"><h1>MALASIA</h1></div><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col></Link>
            <Link to='/tailandia'><Col xs={24} sm={24} md={8} lg={8} xl={8}><div className="photo-text"><h1>TAILANDIA</h1></div><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col></Link>
        </Row>
        <Row className="grid-margins" gutter={16}>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
        </Row>
        <Row className="grid-margins" gutter={16}>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
        </Row>
        <Row className="grid-margins" gutter={16}>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6}><img alt="example" width="100%" src="https://res.cloudinary.com/dri9jzjlr/image/upload/v1499018451/jpn_01.jpg" /></Col>
        </Row>
  </div>);


export default Countries