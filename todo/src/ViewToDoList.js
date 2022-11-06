import { useState } from "react";

function ViewToDoList(props) {

    let data = props.listData;
    let completeData = props.completeData;
    const [displayFlag, setDisplayFlag] = useState(false);
    const [sortFlag, setSortFlag] = useState(false);
    const [sortOrder, setSortOrder] = useState(1);

    const sortName = (e) => {
        setSortOrder (sortOrder>1 ? 0 : sortOrder+1);
        switch(sortOrder) {
            case 1:
                data.sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name ? -1 : 0));  
                break;
            case 2:
                data.sort((a, b) => (a.name > b.name) ? -1 : (a.name < b.name ? 1 : 0));  
                break;
            default:
                window.location.reload();
                data = props.listData;
                break;
        }       
        e.preventDefault();
        setSortFlag(true);
        // console.log(data);
    }

    const sortPrice = (e) => {
        data.sort((a, b) => (a.price > b.price) ? 1 : (a.price < b.price ? -1 : 0));
        e.preventDefault();
        setSortFlag(true);
    }

    const addNewItem = (e) => {
        e.preventDefault();
        props.addAnotherItem(e);
    }

    const handleView = (e) => {
        e.preventDefault();
        props.checkboxHandle(e);
    }

    const handleComplete = (e) => {
        setDisplayFlag(!displayFlag);
        e.preventDefault();
    }

    if(sortFlag) {
        setSortFlag(false);
        console.log(data);
    }

    const renderViewItem =  data.map((recs, index) => {
                return (
                    <div key={index}>
                        <input type="checkBox" id={`${index}`} onChange={handleView}></input>
                        <label><span> {recs.name}</span> , <span>{recs.price}</span></label>
                    </div>
                );
            });

        
    

    const renderCompleteItem = completeData.map((recs, index) => {
        return (
            <div key={index}>
                <label><span> {recs.name}</span> , <span>{recs.price}</span></label>
                <br />
            </div>
        );
    });

    return (
        <div style={{ textAlign: "center" }}>
            <h1> welcome to List page.</h1>
                <h3> Sort by:
                    <span /> <button onClick={sortName}>name </button>
                    <span /> <button onClick={sortPrice}>price</button>
                </h3>
                {renderViewItem}
                <br />
            <button onClick={addNewItem}> Add New Item </button>
            <br /> <br />
            <button onClick={handleComplete}> view completed items</button>
            <br /><br />
            {
                (displayFlag === true) ? renderCompleteItem : null
            }
        </div>
    );
}

export default ViewToDoList;