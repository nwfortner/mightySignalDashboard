import {REQUEST_SUBSCRIPTIONS_SENT} from '../appActions.js';
import {REQUEST_SUBSCRIPTION_RECIEVED} from '../appActions.js';

const subscriptionsReducer = (state = null, action) => {
  switch (action.type) {
    case REQUEST_SUBSCRIPTIONS_SENT:
      return action.payload;
    case REQUEST_SUBSCRIPTION_RECIEVED:
      return  action.payload;
    default: return state;
  }
};

export default subscriptionsReducer;
