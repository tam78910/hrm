import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import MenuSide from './MenuSide';
import MainContent from './MainContent';
import About from './About';
import User from './User';
import 'antd/dist/antd.css';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

class MainLayout extends Component {
    render() {
        return (
            <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <MenuSide />
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>

                            <div>
                                <Switch>
                                    <Route exact path="/" component={MainContent} />
                                    <Route path="/about" component={About} />
                                    <Route path="/users" component={User} />
                                </Switch>
                            </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Owndays Tech and Media ©2018
                    </Footer>
                </Layout>
            </Layout>
            </Router>
        );
    }
}

export default withNamespaces("translations")(MainLayout);
