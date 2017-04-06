export const REQUEST_SUBSCRIPTIONS_SENT = 'REQUEST_SUBSCRIPTIONS_SENT';
export const REQUEST_SUBSCRIPTION_RECIEVED = 'REQUEST_SUBSCRIPTION_RECIEVED';
export const MONTHLY_REVENUE_GENERATOR = 'MONTHLY_REVENUE_GENERATOR';

export const requestSubsciptionsSent = () => {
  return {
    type:'REQUEST_SUBSCRIPTIONS_SENT',
    payload: {
      isFetching: true
    }
  };
};

export const requestSubscriptionsRecieved = (subscriptions) => {
  return {
    type: 'REQUEST_SUBSCRIPTION_RECIEVED',
    payload: {
      isFetching: false,
      subscriptions: subscriptions.data
    }
  };
};

export const monthlyRevenueGenerator = (monthlyRevenue) => {
  return {
    type: 'MONTHLY_REVENUE_GENERATOR',
    payload: {
      monthlyRevenue: monthlyRevenue
    }
  };
};
