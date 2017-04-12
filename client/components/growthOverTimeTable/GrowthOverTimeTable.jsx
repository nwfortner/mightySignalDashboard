import React from 'react';

const GrowthOverTimeTable = (props) => {
  return (
    <table className='growthOverTimeTable'>
      <thead>
        <tr>
          <th>1 Month</th>
          <th>2 Months</th>
          <th>5 Months</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {+props.growthOverTimeData[2].toFixed(2)}%
          </td>
          <td>
            {+props.growthOverTimeData[1].toFixed(2)}%
          </td>
          <td>
            {+props.growthOverTimeData[0].toFixed(2)}%
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GrowthOverTimeTable;
