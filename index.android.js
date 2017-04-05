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
import BusSearch from './src/pages/BusSearch';
import BusList from './src/pages/BusList';
import SeatLayout from './src/pages/SeatLayout';
import reducer from './src/redux/modules';
import apiMiddleware from './src/redux/middlewares/apiMiddleware';
import mockApi from './src/api/mock';
mockApi();
const middleware = applyMiddleware(apiMiddleware.withExtraArgument(axios), logger);
const store = createStore(reducer, middleware);

export default class Bus extends Component {
  renderScene = (props, navigator) => {
    switch (props.index) {
      case 0:
        return <BusSearch navigator={navigator} />;
      case 1:
        return <BusList navigator={navigator} />;
      case 2:
        return <SeatLayout navigator={navigator} />;
      default:
        return <BusSearch navigator={navigator} />;
    }
  };
  render() {
    const routes = [
      { title: 'Search', index: 0 },
      { title: 'Second Scene', index: 1 },
      { title: 'Second Scene', index: 2 },
    ];

    return (
      <Provider key="provider" store={store}>
        <Navigator
          initialRoute={routes[2]}
          renderScene={this.renderScene}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Bus', () => Bus);
