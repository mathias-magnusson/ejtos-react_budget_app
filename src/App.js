import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import { AppProvider } from './context/AppContext';
import CurrencyOption from './components/CurrencyOption';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>     
                        <div className='col-sm'>
                            <Budget />
                        </div>

                        <div className='col-sm'>
                            <Remaining />
                        </div>

                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>

                        <div className='col-sm'>
                        <CurrencyOption />
                        </div>
                    </div>

                    <h3>Allocation</h3>

                    <div>
                        <ExpenseList />
                    </div>

                    <h3>Change allocation</h3>
                    <AllocationForm />

                    
            </div>
        </AppProvider>
    );
};
export default App;
