import React from 'react';
import './newExpence.css';
import Card from '../UI/card'
import ExpenceForm from './ExpenceForm'
const NewExpene = (props) => {
    const SaveExpenceDataHadler =(enterExpenceData) =>{
        const expenseData= {
            ...enterExpenceData,
            id: Math.random().toString()
        };
        props.onAddExpence(expenseData);
    };

    return (
        <Card className="new-expense">
            <ExpenceForm onSaveExpenceData={SaveExpenceDataHadler}/>
        </Card>
    );
};

export default NewExpene;