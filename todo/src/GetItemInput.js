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
            <div className="InputLst-header"><h2> ADD NEW ITEM </h2></div>
            
            <form className="InputLst-form" onSubmit={submitHandler}>
                <div class="form">
                <label for="ItmName">Item Name: </label><span/>
                <input type="text" name="ItmName "value={itemName} id="ItmName" placeholder="Enter Item name" onChange={(e) => setItemName(e.target.value)}>
                </input>
                <br /> <br />
                <label for="ItmPrice">Item Price: </label><span/>
                <input type="number" name="ItmPrice" value={itemPrice} id="ItmPrice" placeholder="Enter Number only" onChange={(e) => setItemPrice(e.target.value)}>
                </input> </div>
                <br /> <br />
                <center><button class="form-button" type="submit" id="formButton">save</button></center>
            </form>
        </div>
    )
}

export default GetItemInput;