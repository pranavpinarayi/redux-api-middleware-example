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
import MockAdapter from 'axios-mock-adapter';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import BusSearch from './src/pages/BusSearch';
import BusList from './src/pages/BusList';
import reducer from './src/redux/modules';
import apiMiddleware from './src/redux/middlewares/apiMiddleware';

const mock = new MockAdapter(axios);

mock.onGet('/locations').reply(200, ['aa', 'bb', 'cc', 'dd', 'aab', 'aac', 'bbd']);
mock.onGet('/buses').reply(200, [
  {
    no: 'RAC122',
    arrival: '11.30',
    depart: '2:00',
  },
  {
    no: 'TVP122',
    arrival: '12.30',
    depart: '2:45',
  },
  {
    no: 'RAC322',
    arrival: '2.30',
    depart: '12:00',
  },
]);

const middleware = applyMiddleware(apiMiddleware.withExtraArgument(axios), logger);
const store = createStore(reducer, middleware);

export default class Bus extends Component {
  renderScene = (props, navigator) => {
    switch (props.index) {
      case 0:
        return <BusSearch navigator={navigator} />;
      case 1:
        return <BusList navigator={navigator} />;
      default:
        return <BusSearch navigator={navigator} />;
    }
  };
  render() {
    const routes = [
      { title: 'Search', index: 0 },
      { title: 'Second Scene', index: 1 },
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
