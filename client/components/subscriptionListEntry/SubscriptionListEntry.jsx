import React from 'react';

const SubscriptionListEntry = (props) => {
  return (
    <div className='subscriptionListEntry'>
      <table>
        <tr className='subscriptionRow'>
          <div>
            <td className='subsciptionName'>
              <h4>Name: </h4>
              {props.subscription.name}
            </td>
          </div>
        </tr>
        <tr className='subscriptionRow'>
          <div>
            <td className='subscriptionID'>
              <h4>ID: </h4>
              {props.subscription.id}
            </td>
          </div>
        </tr>
        <tr className='subscriptionRow'>
          <div>
            <td className='subscriptionAmount'>
              <h4>Amount: </h4>
              {props.subscription.amount}
            </td>
          </div>
        </tr>
        <tr className='subscriptionRow'>
          <div>
            <td className='subscriptionPaymentDate'>
              <h4>Payment Date: </h4>
              {props.subscription.date}
            </td>
          </div>
        </tr>
      </table>
    </div>
  );
};

export default SubscriptionListEntry;
