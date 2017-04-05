import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Grid from '../../components/Grid';
import {
  View,
} from 'react-native';
import styles from './styles';

export default class SeatLayout extends Component {

  render() {
    return (
      <View style={styles.page} >
        <Grid
        />
      </View>
    );
  }
}
