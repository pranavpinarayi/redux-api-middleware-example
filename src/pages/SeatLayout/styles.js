import React, { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = React.StyleSheet.create({
  page: {
    height: HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = styles;
