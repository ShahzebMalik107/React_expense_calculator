import React, { useState } from 'react';
import './ExpenceForm.css';
const ExpenceForm = () => {
    // const [enterTitle, setenterTitle] = useState('');
    // const [enterAmount, setenterAmount] = useState('');
    // const [enterDate, setenterDate] = useState('');
    const [userInput, setUserInput ]=useState({
        enteredTitle: '',
        enteredAmout: '',
        enteredDate: ''
    })
    const titeChangeHandler = (event) => {
        // setenterTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle : event.target.value,
        })
        console.log(event.target.value);
    };

    const amountChangeHandler = (event) => {
        // setenterAmount(event.target.value);        
        setUserInput({
            ...userInput,
            enteredAmout : event.target.value,
        })
        console.log(event.target.value);
    };
    const dateChangeHandler = (event) => {
        // setenterDate(event.target.valueAsDate);
        setUserInput({
            ...userInput,
            enteredDate : event.target.valueAsDate,
        })
        console.log(event.target.valueAsDate);
    };
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="Title">Title</label>
                <input type="text" onChange={titeChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="Amount">Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="Date">Date</label>
                <input type="Date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
        </div>

        <div className="new-expense__actions">
            <button type="submit">Add Expence</button>
        </div>
    </form>
}

export default ExpenceForm;