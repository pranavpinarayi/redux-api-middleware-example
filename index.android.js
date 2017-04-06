/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
 AppRegistry,
 Navigator,
} from 'react-native';
import axios from 'axios';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import SeatLayout from './src/pages/SeatLayout';
import reducer from './src/redux/modules';
import apiMiddleware from  'redux-api-handling-middleware';
import mockApi from './src/api/mock';
mockApi();
const middleware = applyMiddleware(apiMiddleware.withClient(axios), logger);
const store = createStore(reducer, middleware);

export default class Bus extends Component {
  renderScene = (props, navigator) => {
    switch (props.index) {
      case 0:
        return <SeatLayout navigator={navigator} />;
      default:
        return <SeatLayout navigator={navigator} />;
    }
  };
  render() {
    const routes = [
      { title: 'Search', index: 0 },
    ];

    return (
      <Provider key="provider" store={store}>
        <Navigator
          initialRoute={routes[0]}
          renderScene={this.renderScene}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Bus', () => Bus);
