import {MONTHLY_REVENUE_GENERATOR} from '../appActions';

const monthlyRevenueReducer = (state = null, action) => {
  switch (action.type) {
    case MONTHLY_REVENUE_GENERATOR:
      return action.payload;
    default: return state;
  }
};

export default monthlyRevenueReducer;
