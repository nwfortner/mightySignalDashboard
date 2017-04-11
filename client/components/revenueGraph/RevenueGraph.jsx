import React from 'react';
import Moment from 'moment';
import {LineChart} from 'rd3';


class RevenueGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: null
    };
  }

  renderLineChart(data) {
    return (
      <LineChart
        data={data}
        width='90%'
        height='90%'
        margins={{
          top: 80,
          right: 20,
          bottom: 50,
          left: 150
        }}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 900,
          height: 500
        }}
        title='Monthly Revenue'
        yAxisLabel='Revenue ($)'
        xAxisLabel='Month'
        xAxisLabelOffset={50}
        yAxisLabelOffset={60}
        xAxisTickInterval={{
          unit: 'Month',
          interval: 1
        }}
        xAccessor={data => {
          return data.values.x;
        }}
        yAccessor={data => data.values.y}
      />
    );
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.monthlyRevenue) {
      this.setState({
        chartData: [
          {
            values: nextProps.monthlyRevenue.map(data => {
              return {
                values: {
                  x: data.date,
                  y: +data.amount.toFixed(2)
                }
              };
            })
          }
        ]
      });
    }
  }

  render() {
    return (
      <div className='revenueGraph'>
        {this.state.chartData ? this.renderLineChart(this.state.chartData) : 'Loading'}
      </div>
    );
  }
}

export default RevenueGraph;
