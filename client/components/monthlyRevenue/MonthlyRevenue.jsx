import React from 'react';
import Moment from 'moment';
import GrowthOverTimeTable from '../growthOverTimeTable/GrowthOverTimeTable.jsx';
import GrowthMonthOverMonth from '../growthMonthOverMonth/GrowthMonthOverMonth.jsx';

class MonthlyRevenue extends React.Component {

  renderGrowthOverTimeData(revenueData) {
    const currentMonthIndex = revenueData.findIndex(data => {
      return Moment(data.date).format('MM/YY') === Moment().format('MM/YY');
    });
    const past5MonthsToDate = revenueData.slice(currentMonthIndex - 5, currentMonthIndex);
    const growthOverTimeData = [
      past5MonthsToDate[past5MonthsToDate.length - 1].amount / past5MonthsToDate[0].amount,
      past5MonthsToDate[past5MonthsToDate.length - 1].amount / past5MonthsToDate[past5MonthsToDate.length - 3].amount,
      past5MonthsToDate[past5MonthsToDate.length - 1].monthlyGrowth
    ];
    return growthOverTimeData;
  }

  renderMonthlyRevenueDOM() {
    return (
      <div className='monthlyRevenue'>
        <div className='monthlyGrowth'>
          <h4>Growth Month Over Month (%)</h4>
          <GrowthMonthOverMonth monthlyRevenue={this.props.monthlyRevenue}/>
        </div>
        <div className='growthOverTime'>
          <h4>Growth Over Time (%)</h4>
          <GrowthOverTimeTable growthOverTimeData={this.renderGrowthOverTimeData(this.props.monthlyRevenue)}/>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='monthlyRevenue'>
        {this.props.monthlyRevenue ? this.renderMonthlyRevenueDOM() : 'loading'}
      </div>
    );
  }
}

export default MonthlyRevenue;
