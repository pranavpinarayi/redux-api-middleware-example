import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Button,
} from 'react-native';
import styles from './styles';
import Autocomplete from '../../components/Autocomplete';
import { loadLocation } from '../../redux/modules/BusSearch/action';

const { func, arrayOf, string } = PropTypes;

@connect(state => ({
  locations: state.BusSearch.locList,
}),
{
  loadLoc: loadLocation,
})
class BusSearch extends Component {
  static propTypes = {
    loadLoc: func,
    locations: arrayOf(string),
  };

  static defaultProps = {
    locations: [],
  };
  static navigationOptions = {
    title: 'Bus Search',
  };

  state = {
    filteredList: [],
  };

  onSelect = (value) => {
    console.log(`${value} selected`);
  };

  onChange = () => {
    this.props.loadLoc();
  };

  next = () => {
    this.props.navigator.push({ title: 'Second Scene', index: 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Autocomplete
          data={this.props.locations}
          hintText={'From'}
          onChange={this.onChange}
          onSelect={this.onSelect}
          style={styles.autoComplete}
        />
        <Autocomplete
          data={this.props.locations}
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

export default BusSearch;
