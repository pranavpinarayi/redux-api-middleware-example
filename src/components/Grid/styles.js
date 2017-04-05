import React, { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const border = {
  borderColor: '#b9b9b9',
  borderRadius: 1,
  borderWidth: 1,
};
const styles = React.StyleSheet.create({
  grid: {
    ...border,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 10,
  },
  seatLayout: {
  },
  driver: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  Item: {
    ...border,
    width: 30,
    height: 30,
  },
  row: {
    flexDirection: 'row',
  },
  reserved: {
    backgroundColor: '#ff918c',
  },
  ladies: {
    backgroundColor: '#fffbc6',
  },
  selected: {
    backgroundColor: '#9dcc94',
  },
});

module.exports = styles;
