import './GetItemInput.css';
import React, { useState, } from 'react';

const GetItemInput = (props) => {

    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        props.AddItem(e);        
    }

    return (
        <div className="InputLst">
            <div className="InputLst_header"><h2> Welcome to Shopping ToDo List App</h2></div>
            <form className="InputLst_form" onSubmit={submitHandler}>
                <label>Item Name: </label>
                <input type="text" value={itemName} id="ItmName" placeholder="Enter Item name" onChange={(e) => setItemName(e.target.value)}>
                </input>
                <br /> <br />
                <label>Item Price: </label>
                <input type="number" value={itemPrice} id="ItmPrice" placeholder="Enter Number only" onChange={(e) => setItemPrice(e.target.value)}>
                </input>
                <br /> <br />
                <button type="submit" id="formButton">save</button>
            </form>
        </div>
    )
}

export default GetItemInput;