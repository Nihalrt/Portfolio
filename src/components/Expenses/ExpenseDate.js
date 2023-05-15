import './ExpenseDate.css';
import React from 'react'


/* the expense date file is component that uses props to extract eacn date from the expenses list in the App.js file 
   and applies the ExpenseDate.css file on month, year and day. */ 

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>

    );
}
export default ExpenseDate;