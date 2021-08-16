import React from 'react';
import './newExpence.css';
import Card from '../UI/card'
import ExpenceForm from './ExpenceForm'
const NewExpene = () => {

    return (
        <Card className="new-expense">
            <ExpenceForm/>
        </Card>
    )

}

export default NewExpene;