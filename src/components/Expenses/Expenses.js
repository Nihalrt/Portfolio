import './Expenses.css';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expensefilter.css';
import ExpensesList from './ExpensesList';


/* Expenses component deals with all the items from the expense item component and applies all the 
   attributes to all the items in the expenses list from the App.js.*/

// map functions return new arrays based on some conditions



function Expenses(expense){
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filteredExpenses = expense.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const Changeit = Argu => {
        setFilteredYear(Argu);
    }
    
    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={Changeit}/>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList items={filteredExpenses}></ExpensesList>

            </Card>
        </div>

    );
}

export default Expenses;