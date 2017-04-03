import React, { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = React.StyleSheet.create({
  page: {
    backgroundColor: '#EEE',
    height: HEIGHT,
  },
  busList: {
    backgroundColor: '#E77',
  },
  listRow: {
    backgroundColor: '#FEF',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: WIDTH * .02,
  },
  listItem: {
    justifyContent: 'center',
    width: WIDTH * .24,
  },
  listItemHead: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#A22',
  },
});

module.exports = styles;
