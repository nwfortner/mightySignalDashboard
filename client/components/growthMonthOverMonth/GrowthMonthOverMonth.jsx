import React from 'react';
import Moment from 'moment';

const GrowthMonthOverMonth = (props) => {
  const generateListItems = props.monthlyRevenue.map((data, index) => {
    return (
      <li key={index} className='revenueListItem'>
        <span className='revenuelistMonth'>{Moment(data.date).format('MM/YY')}</span> : <span className='revenueListAmount'>{(+data.monthlyGrowth * 100).toFixed(2)}%</span>
      </li>
    );
  });
  return (
    <ul className='revenueGrowthList'>
      {generateListItems}
    </ul>
  );
};

export default GrowthMonthOverMonth;
