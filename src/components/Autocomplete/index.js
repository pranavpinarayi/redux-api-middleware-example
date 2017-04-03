import React, { PropTypes, Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ListView,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';

const { string, func, arrayOf } = PropTypes;
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class Autocomplete extends Component {
  static propTypes = {
    data: arrayOf(string),
    onSelect: func,
    onChange: func,
    hintText: string,
    query: string,
  };

  static defaultProps = {
    onChange: null,
    onSelect: null,
    data: [],
    hintText: '',
  };

  state = {
    showList: false,
    dataSource: ds.cloneWithRows(this.props.data),
  };

  componentWillReceiveProps({ data }) {
    const dataSource = this.state.dataSource.cloneWithRows(data);

    this.setState({ dataSource });
  }

  onChange = (inputValue) => {
    const value = inputValue;

    this.props.onChange(value);
    this.setState({
      showList: true,
    });
  };

  onSelect(item) {
    this.searchInput.setNativeProps({ text: item });
    this.setState({
      showList: false,
    });
  }

  onPress() {
    console.log('clicked');
  }

  renderItem(item) {
    return (
      <TouchableHighlight
        style={styles.item}
        onPress={() => this.onSelect(item)}
      >
        <Text>{item}</Text>
      </TouchableHighlight>
    );
  }

  renderList() {
    const { dataSource, showList } = this.state;

    if (showList && dataSource && dataSource.getRowCount() > 0 ) {
      return (
        <ListView
          contentContainerStyle={styles.listContainer}
          dataSource={dataSource}
          renderRow={item => this.renderItem(item)}
        />);
    }
    return null;

  }

  render() {
    const {
      hintText,
      query,
      style,
    } = this.props;

    return (
      <View style={[styles.autocomplete, style]} >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.field}
            ref={(input) => { this.searchInput = input; }}
            placeholder={hintText}
            onChangeText={value => this.onChange(value)}
            value={query}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.list}>
          {this.renderList()}
        </View>
      </View>
    );
  }
}

export default Autocomplete;
