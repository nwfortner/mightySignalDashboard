import React from 'react';

const SubscriptionListEntry = (props) => {
  return (
    <div className='subscriptionListEntry'>
      <table>
        <tbody>
          <tr className='subscriptionRow'>
            <td className='subsciptionName'>
              <h4>Name : </h4>
              &emsp; {props.subscription.name}
            </td>
          </tr>
          <tr className='subscriptionRow'>
            <td className='subscriptionID'>
              <h4>ID : </h4>
                &emsp; {props.subscription.id}
            </td>
          </tr>
          <tr className='subscriptionRow'>
            <td className='subscriptionAmount'>
              <h4>Amount : </h4>
                &emsp; {props.subscription.amount}
            </td>
          </tr>
          <tr className='subscriptionRow'>
            <td className='subscriptionPaymentDate'>
              <h4>Payment Date : </h4>
                &emsp; {new Date(props.subscription.date).toLocaleDateString('en-US')}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionListEntry;
