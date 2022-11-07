const WelcomeScreen = (props) => {
    const addnewItemHandler = (e) => {
        e.preventDefault();
        props.AddNewItem();
    }

    return (
        <div class="welcome">
            
            <img class="welcome-img" src="img/shopping.png" alt="shopping girl"></img>
            <h1>EIKA's shopping list</h1>
            <p>Welcome to EIKA's shopping list. Here you will be able
                to create a todo list with for the furniture you want
                to buy. </p>
            <p>To get started press the Add new item button and a popup
                will ask you the name and the price of the item you want
                to add. You can also and an image after the item is added
                by touching the camera icon.
            </p>
            <button id="addnewItem" onClick={addnewItemHandler}>Add a new item</button>
        </div>
    );

}

export default WelcomeScreen;