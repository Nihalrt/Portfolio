import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';




function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);
    console.log('Expense Item printed')
    
    // const month = props.date.toLocaleString('en-US', {month:'long'});
    // const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    // const year = props.date.getFullYear();


    return (
    <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
        
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>

        </Card>

    </li>
    
    ); 
}

export default ExpenseItem;