import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Breadcrumb } from 'antd';


class User extends Component {

    render() {

        const { t } = this.props;

        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{ t("menu.user")}</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

                </div>
            </div>
        );
    }
}

export default withNamespaces("translations")(User);
