import './NewExpenceItem.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/card';
import ExpenceFilter from './ExpenseFilter';
import React, { useState } from 'react'

function NewExpence(props) {
    // const expenses = props.expenses;
    const [filteredYear, setFilterYear] = useState('2020')

    const FilterChangeHandler = selectedYear => {
        console.log(selectedYear);
        setFilterYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenceFilter selected={filteredYear} onChangeFilter={FilterChangeHandler} />
                {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} ></ExpenseItem>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} ></ExpenseItem>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} ></ExpenseItem> */}
            </Card>
        </div>
    );
}

export default NewExpence;