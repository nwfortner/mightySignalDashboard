import React from 'react';
import RevenueGraph from '../revenueGraph/RevenueGraph.jsx';
import MonthlyRevenue from '../monthlyRevenue/MonthlyRevenue.jsx';

class RevenueMain extends React.Component {
  render() {
    return (
      <section className='revenueMain'>
        <MonthlyRevenue monthlyRevenue={this.props.monthlyRevenue}></MonthlyRevenue>
        <RevenueGraph monthlyRevenue={this.props.monthlyRevenue}></RevenueGraph>
      </section>
    );
  }
}

export default RevenueMain;
