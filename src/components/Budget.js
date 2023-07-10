import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { budget, setBudget } = useState("");

    const submitEvent = () => {
        if(budget > 20000) {
            alert("Too high");
            setBudget("");
            return;
        }
    }

    return (
        <div className='alert alert-secondary'>
            Budget: £<input
                type="number"
                value={budget}
                onChange={(event) => submitEvent()}>
            </input>
        </div>
    );
};
export default Budget;
