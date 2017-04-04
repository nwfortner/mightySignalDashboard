import {combineReducers} from 'redux';
import subscriptions from './components/app/reducers/subscriptionsReducer.js';


const rootReducer = combineReducers({
  subscriptions
});

export default rootReducer;
