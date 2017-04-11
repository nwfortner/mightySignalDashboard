import React from 'react';
import Moment from 'moment';

const GrowthMonthOverMonthTable = (props) => {
  const generateListItems = props.monthlyRevenue.map((data, index) => {
    return (
      <tr key={index}>
        <td>{Moment(data.date).format('MM/YY')}</td>
        <td>{(+data.monthlyGrowth * 100).toFixed(2)}%</td>
        <td>${+data.amount.toFixed(2)}</td>
      </tr>

      // <li key={index} className='revenueListItem'>
      //   <span className='revenuelistMonth'>{Moment(data.date).format('MM/YY')}</span> : <span className='revenueListAmount'>{(+data.monthlyGrowth * 100).toFixed(2)}%</span>
      // </li>
    );
  });
  return (
    <table className='revenueGrowthTable'>
      <thead>
        <tr>
          <th>Month</th>
          <th>%Growth</th>
          <th>Total Revenue</th>
        </tr>
      </thead>
      <tbody>
        {generateListItems}
      </tbody>

    </table>
    // <ul className='revenueGrowthList'>
    //   {generateListItems}
    // </ul>
  );
};

export default GrowthMonthOverMonthTable;
