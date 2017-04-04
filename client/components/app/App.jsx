import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './appActions.js';
import axios from 'axios';

class App extends React.Component {

  getSubscriptionData() {
    axios.get('/subscriptions')
    .then(subscriptions => {
      console.log(subscriptions);
    })
    .catch(error => {
      console.log(error);
    });
  }


  componentWillMount() {
    this.getSubscriptionData();
  }

  render() {
    return (
      <div>Hello from mightySignal</div>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    subscriptions: state.subscriptions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
