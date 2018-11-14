import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import 'antd/dist/antd.css';
import {Link,
} from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


class MenuSide extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };

    render() {
        const { t, i18n } = this.props;
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };

        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse} >
                <div className="logo" />
                    <Menu theme="dark"  mode="inline">
                        <Menu.Item key="1">
                            <Link to="/"><Icon type="pie-chart" />
                                <span>{ t("menu.home") }</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/about">
                                <Icon type="desktop" />
                                <span>{ t("menu.about") }</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/users">
                                <Icon type="user" />
                                <span>{ t("menu.user") }</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="global" /><span>{ t("menu.language")}</span></span>}>
                            <Menu.Item key="6"><Link to="/" onClick={() => changeLanguage("en")}>EN</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/" onClick={() => changeLanguage("th")}>TH</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
            </Sider>

        );
    }
}

export default withNamespaces("translations")(MenuSide);
