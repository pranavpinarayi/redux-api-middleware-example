import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.js';
import Autocomplete from '../../components/Autocomplete'
import { loadLocation } from '../../redux/modules/BusSearch/action';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

const { string, func } = PropTypes;

@connect(state => ({
  value: state.data,
}),
{
  loadLoc:loadLocation,
})
class BusSearch extends React.Component {
  static navigationOptions = {
    title: 'Bus Search',
  };

  onSelect = (value) => {
    console.log(`${value} selected`);
  };

  onChange = (value) => {
    this.props.loadLoc();
  };

  next = () => {
    this.props.navigator.push({title: 'Second Scene', index: 1});
  }

  state = {
    filteredList: [],
  };

  render() {
    return (
      <View style={styles.container}>
        <Autocomplete
         data={this.props.value}
         hintText={'From'}
         onChange={this.onChange}
         onSelect={this.onSelect}
         style={styles.autoComplete}
        />
        <Autocomplete
         data={this.props.value}
         hintText={'To'}
         onChange={this.onChange}
         onSelect={this.onSelect}
         style={styles.autoComplete}
        />
        <Button
          onPress={this.next}
          title="Search"
          color="#40bf80"
          style={styles.button}
        />
      </View>
    );
  }
}

const Bus = StackNavigator({
  search: { screen: BusSearch },
});


export default BusSearch;
