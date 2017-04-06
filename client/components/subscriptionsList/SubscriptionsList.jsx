import React from 'react';
import SubscriptionListEntry from '../subscriptionListEntry/SubscriptionListEntry.jsx';
import _ from 'underscore';

class SubscriptionsList extends React.Component {
  constructor() {
    super();
    this.state = {
      filterString: null
    };
    this.debounceFilterStringInput = _.debounce(this.generateFilterString, 500);
  }

  generateFilterString(filterString) {
    this.setState({
      filterString: `${filterString}`
    });
  }


  generateSubscriptionListEntries(subscriptions, filterString = null) {
    return subscriptions.filter((subscription) => {
      if(filterString) {
        return subscription.name.toLowerCase().includes(filterString.toLowerCase()) ? true : false;
      }else {
        return true;
      }
    })
    .map((subscription) => {
      return <SubscriptionListEntry key={subscription.id} subscription={subscription}/>;
    })
    .reverse();
  }

  render() {
    return (
      <div className='subscriptionsList'>
        <input
          className='subscriptionFilter'
          placeholder='Filter subscriptions by name'
          type='search' name='suscriptionsFilter'
          onChange={(event) => {this.debounceFilterStringInput(event.target.value);}}
        />
        <div className='listFrame'>
          {this.props.subscriptions && !this.props.subscriptions.isFetching ?
            this.generateSubscriptionListEntries(this.props.subscriptions.subscriptions, this.state.filterString) : 'loading'
          }
        </div>
      </div>
    );
  }
}

export default SubscriptionsList;
