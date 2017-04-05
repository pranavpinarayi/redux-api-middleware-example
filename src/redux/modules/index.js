import { combineReducers } from 'redux';
import BusSearch from './BusSearch';
import BusList from './BusList';
import SeatLayout from './SeatLayout';

export default combineReducers({
  BusSearch,
  BusList,
  SeatLayout,
});
