export const REQUEST_SUBSCRIPTIONS_SENT = 'REQUEST_SUBSCRIPTIONS_SENT';

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
      subscriptions
    }
  };
};
