import React, { useContext, useState } from 'react';

const CurrencyOption = () => {
    const { name, setName } = useState('');

    return(
        <div className="alert alert-secondary">
            <label style={{marginRight:'2rem'}}>Currency: </label>
            <select className="btn btn-success" onChange={(event) => setName(event.target.value)}>
                <option value="Dollar" name="dollar">$ Dollar</option>
                <option value="Pound" name="pound">£ Pound</option>
                <option value="Euro" name="euro">€ Euro</option>
                <option value="Rupee" name="rupee">₹ Rupee</option>
            </select>

        </div>
    );
}

export default CurrencyOption;