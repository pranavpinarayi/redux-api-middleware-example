'use strict';
var React = require('react-native');
import { Dimensions } from 'react-native';

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'nowrap',
    padding: 30,
    backgroundColor: '#E0FFFF',
    flexDirection: 'column'
  },
  button: {
    marginTop: 30,
  },
  autoComplete: {
    marginBottom: 30,
  },
});

module.exports = styles;
