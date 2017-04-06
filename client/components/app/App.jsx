import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './appActions.js';
import axios from 'axios';
import _ from 'underscore';
import SubscriptionMain from '../subscriptionMain/SubscriptionMain.jsx';
import RevenueMain from '../revenueMain/RevenueMain.jsx';


class App extends React.Component {

  getSubscriptionData() {
    this.props.actions.requestSubsciptionsSent();
    axios.get('/subscriptions')
    .then(subscriptions => {
      this.props.actions.requestSubscriptionsRecieved(subscriptions);
    })
    .catch(error => {
      console.log(error);
    });
  }

  generateMothlyRevenue(subscriptions) {
    const monthlyRevenue = subscriptions.reduce((init, curr, index, array) => {
      const currMonth = new Date(curr.date).getMonth();
      const currYear = new Date(curr.date).getFullYear();
      const currAmount = +curr.amount.substr(1);
      if(!init.length) {
        init.push({
          date: new Date(currYear, currMonth, 1, 0),
          amount: currAmount,
          monthlyGrowth: 0
        });
      }
      if(currMonth === init[init.length - 1].date.getMonth()) {
        init[init.length - 1].amount += currAmount;
        if(array.length - 1 === index || init.length !== 1) {
          init[init.length - 1].monthlyGrowth = init[init.length - 1].amount / init[init.length - 2].amount;
        }
      }else {
        init.push({
          date: new Date(currYear, currMonth, 1, 0),
          amount: currAmount,
          monthlyGrowth: 0
        });
      }
      return init;
    }, []);
    this.props.actions.monthlyRevenueGenerator(monthlyRevenue);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.subscriptions && !nextProps.subscriptions.isFetching) {
      if(!_.isEqual(this.props, nextProps)) {
        this.generateMothlyRevenue(nextProps.subscriptions.subscriptions);
      }
    }
  }

  componentWillMount() {
    this.getSubscriptionData();
  }

  render() {
    return (
      <main className='dashboardMain'>
        <SubscriptionMain subscriptions={this.props.subscriptions}></SubscriptionMain>
        <RevenueMain></RevenueMain>
      </main>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    subscriptions: state.subscriptions,
    monthlyRevenue: state.monthlyRevenue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
