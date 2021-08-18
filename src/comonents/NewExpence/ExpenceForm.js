import React, { useState } from 'react';
import './ExpenceForm.css';
const ExpenceForm = () => {
    const [enterTitle, setenterTitle] = useState('');
    const [enterAmount, setenterAmount] = useState('');
    const [enterDate, setenterDate] = useState('');
    // const [userInput, setUserInput ]=useState({
    //     enteredTitle: '',
    //     enteredAmout: '',
    //     enteredDate: ''
    // })
    const titeChangeHandler = (event) => {
        setenterTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // })
        //alternative approch to updatinig state
        // console.log(event.target.value);
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredTitle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {
        setenterAmount(event.target.value);        
        // setUserInput({
        //     ...userInput,
        //     enteredAmout : event.target.value,
        // })
        //alternative approch to updatinig state
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredAmout : event.target.value}
        // });
        console.log(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setenterDate(event.target.valueAsDate);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.valueAsDate,
        // })
        console.log(event.target.valueAsDate);
    };

    // Submit handler
    const submitHandler =(event)=>{
        event.preventDefault();

        const expendata = {
            title: enterTitle,
            amount : enterAmount,
            date: new Date(enterDate)
        };
        console.log(expendata)
    };
    return <form onSubmit={submitHandler}>
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