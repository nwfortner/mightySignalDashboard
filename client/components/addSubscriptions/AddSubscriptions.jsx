import React from 'react';
import AddSubscriptionForm from '../addSubscriptionForm/AddSubscriptionForm.jsx';

class AddSubscriptions extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amount: '',
      date: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addSubscription(this.state);
    this.setState({
      name: '',
      amount: '',
      date: ''
    });
  }

  handleChange(newSubscriptionDataName, newSubscriptionDataValue) {
    this.setState({
      [newSubscriptionDataName]: newSubscriptionDataValue
    });
  }

  render() {
    return (
      <div className='addSubscriptions'>
        <AddSubscriptionForm value={this.state} updateFormData={this.handleChange.bind(this)} submitFormData={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

export default AddSubscriptions;
