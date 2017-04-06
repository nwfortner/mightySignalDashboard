import React from 'react';
import RevenueGraph from '../revenueGraph/RevenueGraph.jsx';
import MonthlyRevenue from '../monthlyRevenue/MonthlyRevenue.jsx';

class RevenueMain extends React.Component {
  render() {
    return (
      <section className='revenueMain'>
        <MonthlyRevenue></MonthlyRevenue>
        <RevenueGraph></RevenueGraph>
      </section>
    );
  }
}

export default RevenueMain;
