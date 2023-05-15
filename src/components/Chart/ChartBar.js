import React from 'react';

import './ChartBar.css';

const ChartBar = props => {

    let limitheight = '0%';
    if(props.max > 0){
        limitheight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return ( 
        <div className="chart-bar">
            <div className="char-bar__inner">
                <div className='chart-bar__fill' style={{height: limitheight}}></div>
            </div> 
            <div className='chart-bar__label'>
                {props.label}
            </div>
        </div>
    );
};

export default ChartBar;