import React from 'react';
import Chart from "react-google-charts";

const gauge = () => {
  return (
    <>
      <div style={{ display: 'flex', maxWidth: 900, justifyContent: 'center' }}>

        <Chart
          width={'50vw'}
          height={'50vh'}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Year', 'Sales', 'Expenses'],
            ['1 hr', -20, -10],
            ['2 hr', -10, -10],
            ['3 hr', -5, -10],
            ['4 hr', -22, -10],
            ['5 hr', -27, -10],
            ['6 hr', -15, -10],
            ['7 hr', -15, -10],
          ]}
          options={{
            title: 'Company Performance',
            hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: '50%', height: '70%' },
            // lineWidth: 25
          }}
        />
      </div>
    </>
  );
}

export default gauge;