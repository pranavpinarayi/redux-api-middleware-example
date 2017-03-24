/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import Header from './components/Header';
 import Autocomplete from './components/Autocomplete';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';

export default class Bus extends Component {
  filteredList = ['aa', 'bb', 'cc', 'dd', 'aab', 'aac', 'bbd'];
  onSelect = (value) => {
    console.log(`${value} selected`);
  };

  onChange = (value) => {
    console.log('value', value);
    console.log('this.filteredList', this.filteredList);
    this.setState({filteredList: this.filteredList.filter((listItem) => listItem.includes(value))});
  };

  state = {
    filteredList: [],
  };

  render() {
    return (
      <View style={styles.container}>
        <Autocomplete
         data={this.state.filteredList}
         hintText={'From'}
         onChange={this.onChange}
         onSelect={this.onSelect}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 30,
    backgroundColor: '#E0FFFF',
    flexDirection: 'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    flex:1,
  }
});

AppRegistry.registerComponent('Bus', () => Bus);
