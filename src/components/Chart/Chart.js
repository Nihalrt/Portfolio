import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const ValuePoints = props.dataPoints.map(dataPoint => dataPoint.value);
    const max_value = Math.max(...ValuePoints);

    return (<div className="chart">
        {props.dataPoints.map((dataPoint) => (<ChartBar key={dataPoint.label}  value={dataPoint.value} maxValue={max_value} label={dataPoint.label}/>))}</div>);


};

export default Chart;