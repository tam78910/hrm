import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { withNamespaces } from 'react-i18next';
import MainLayout from './components/MainLayout';

class App extends Component {

  render() {

      return (
          <div>
             <MainLayout />
          </div>
      );
  }
}

export default withNamespaces("translations")(App);
