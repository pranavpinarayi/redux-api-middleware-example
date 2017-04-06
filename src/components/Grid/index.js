import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import { getSeatLayout } from '../../redux/modules/SeatLayout/action';
import styles from './styles';

const { object, func } = PropTypes;
const noOfSeats = 2;

@connect(state => ({
  data: state.SeatLayout.seatLayout,
}),
{
  getLayout: getSeatLayout,
})
export default class Grid extends Component {
  static propTypes = {
    data: object,
  };

  static defaultProps = {
    data: {},
  };

  state = {
    seatArray: this.props.data,
  };

  selectedArray = [];

  componentWillMount() {
    this.props.getLayout();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ seatArray: nextProps.data, });
  }

  toggleSelection(array, selected){
    let modifiedArray = array.map((row) =>
      row.map((item) => {
        if( item.seatNo === selected.seatNo ){
          item.isSelected = !item.isSelected;
          return item;
        }
        return item;
      }
      )
    );
    return modifiedArray;
  }

  onSelectSeat(selectedSeat){
    if(selectedSeat.isReserved) return;
    let previoslySelected = false;
    let tempLayout = this.state.seatArray.seats;
    tempLayout = this.toggleSelection(tempLayout, selectedSeat);
    this.selectedArray.map((item, index) => {
      if( item.seatNo === selectedSeat.seatNo ){
        this.selectedArray.splice(index, 1);
        previoslySelected = true;
      }
    });
    if(this.selectedArray.length === noOfSeats) {
      let elementToDelete = this.selectedArray.shift();
      tempLayout = this.toggleSelection(tempLayout, elementToDelete);
    }
    !previoslySelected && this.selectedArray.push(selectedSeat);
    this.setState({ seatArray: {...this.state.seatArray, seats:tempLayout} });
  }

  renderSeat(seatdata, index){
    let seatStyle = [styles.Item,seatdata.isReserved && styles.reserved, seatdata.isLadies && styles.ladies, seatdata.isSelected && styles.selected];
    return (<TouchableOpacity
              style={seatStyle}
              onPress={() => this.onSelectSeat(seatdata)}
              key={index}
            >
              <Text>{seatdata.seatNo}</Text>
            </TouchableOpacity>
    );
  }

  renderBlank(){
    return(
      <View style={styles.empyPos}/>
    );
  }

  renderRow(rowArray, rowindex) {
    return (
      <View style={styles.row} key={rowindex}>
      {rowArray && rowArray.map((seat, colIndex) =>{
        if([0,1].includes(rowindex) && colIndex==this.state.seatArray.doorPos)
          return (<View style={{flexDirection: 'row'}}>{this.renderBlank()}{this.renderSeat(seat, colIndex)}</View>);
        return this.renderSeat(seat, colIndex);
      }
      )}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.grid} >
        <View style={styles.seatLayout} >
          {this.state.seatArray.seats && this.state.seatArray.seats.map((rowArray, index) =>
            this.renderRow(rowArray, index)
          )}
        </View>
        <Image
          style={styles.driver}
          source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1584-200.png'}}
        />
      </View>
    );
  }
}
