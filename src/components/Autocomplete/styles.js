import React from 'react-native';

const border = {
  borderColor: '#b9b9b9',
  borderRadius: 1,
  borderWidth: 1,
};

const styles = React.StyleSheet.create({
  autocomplete: {
    position: 'relative',
  },
  field: {
    fontSize: 12,
    backgroundColor: '#FFF',
    color: '#000',
  },
  listContainer: {
    backgroundColor: '#DADADA',
  },
  list: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 40,
    zIndex: 2,
    alignSelf: 'stretch',
  },
  item: {
    padding: 5,
  },
  inputContainer: {
    ...border,
    marginBottom: 0,
    height: 40,
  },
});

module.exports = styles;
