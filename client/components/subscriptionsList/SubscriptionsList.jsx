import React from 'react';
import SubscriptionListEntry from '../subscriptionListEntry/SubscriptionListEntry.jsx';

class SubscriptionsList extends React.Component {


  generateSubscriptionListEntries(subscriptions) {
    return subscriptions.map((subscription) => {
      return <SubscriptionListEntry key={subscription.id} subscription={subscription}/>;
    }).reverse();
  }

  render() {
    return (
      <div className='subscriptionsList'>
        <div className='listFrame'>
          {this.props.subscriptions && !this.props.subscriptions.isFetching ?
            this.generateSubscriptionListEntries(this.props.subscriptions.subscriptions) : 'loading'
          }
        </div>
      </div>
    );
  }
}

export default SubscriptionsList;
