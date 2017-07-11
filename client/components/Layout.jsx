import React from 'react';

import ImageGrid from './ImageGrid.jsx';
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export default class LayoutX extends React.Component {

render() {
        return (
            <Layout>
                <Sider breakpoint="xl"
                       collapsedWidth="0"
                       onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="user" />
                        <span className="nav-text">nav 4</span>
                    </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ background: '#fff'}}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <h1>ELIGE TU PAIS</h1>
                        <ImageGrid></ImageGrid>
                    </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', background: 'white' }}>
                    Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
            
        );
    }

}