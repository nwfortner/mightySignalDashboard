import React from 'react';
import AddSubscriptions from '../addSubscriptions/AddSubscriptions.jsx';
import SubscriptionsList from '../subscriptionsList/SubscriptionsList.jsx';


class SubscriptionMain extends React.Component {
  render() {
    return (
      <section className='subscriptionMain'>
        <AddSubscriptions addSubscription={this.props.addSubscription}></AddSubscriptions>
        <SubscriptionsList subscriptions={this.props.subscriptions}></SubscriptionsList>
      </section>
    );
  }
}

export default SubscriptionMain;
