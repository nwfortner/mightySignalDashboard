import {combineReducers} from 'redux';
import subscriptionsReducer from './components/app/reducers/subscriptionsReducer.js';
import monthlyRevenueReducer from './components/app/reducers/monthlyRevenueReducer.js';

const rootReducer = combineReducers({
  subscriptions: subscriptionsReducer,
  monthlyRevenue: monthlyRevenueReducer
});

export default rootReducer;
