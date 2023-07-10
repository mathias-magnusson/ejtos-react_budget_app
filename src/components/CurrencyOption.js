import React, { useContext, useState } from 'react';

const CurrencyOption = () => {
    const { name, setName } = useState('');

    return(
        <div className="input-group mb-3">
        <div>
            <label className="input-group-text">Currency</label>
        </div>
        <select className="custom-select" onChange={(event) => setName(event.target.value)}>
            <option value="Dollar" name="dollar">$ Dollar</option>
            <option value="Pound" name="pound">£ Pound</option>
            <option value="Euro" name="euro">€ Euro</option>
            <option value="Rupee" name="rupee">₹ Rupee</option>
        </select>

        </div>
    );
}

export default CurrencyOption;