import React from 'react';

const AddSubscriptionForm = (props) => {
  return (
    <form
      onChange={event => props.updateFormData(event.target.name, event.target.value)}
      onSubmit={event => props.submitFormData(event)}
      >
      <label htmlFor='nameInput'>
        <div>
          <span className='fa fa-building fa-lg'></span>
          <input className='nameInput' type='text' placeholder='Company name' required  name='name' value={props.value.name}></input>
        </div>
      </label>
      <label htmlFor='amountInput'>
        <div>
          <span className='fa fa-usd fa-lg'></span>
          <input className='amountInput' type='text' pattern='\d+\.\d{1,2}' placeholder='Payment amount' required name='amount' value={props.value.amount}></input>
        </div>
      </label>
      <label htmlFor='dateInput'>
        <div>
          <span className='fa fa-calendar fa-lg'></span>
          <input className='dateInput' type='date' required name='date' value={props.value.date}></input>
        </div>
      </label>
      <input type='submit' value='Add subscription'></input>
    </form>
  );
};

export default AddSubscriptionForm;
