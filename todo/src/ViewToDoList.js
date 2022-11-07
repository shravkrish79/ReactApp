import { useState, } from "react";

function ViewToDoList(props) {

    /* copying properties from */
    let data = props.listData;
    let completeData = props.completeData;

    /* sort data variable declaration */
    const [displayFlag, setDisplayFlag] = useState(false);
    const [sortFlag, setSortFlag] = useState(false);
    const [sortData, setSortData] = useState([]);
    let sortObj = {
        sortBy: null,
        sortOrder: null
    };


    /* Sort data based on user's input */
    const sortDataHandle = (e) => {
        e.preventDefault();
        let objIndex = sortData.findIndex(id => id.sortBy === e.target.id);
        if (objIndex === -1) {
            sortObj=({
                sortBy: e.target.id,
                sortOrder: 'asc'
            });
            setSortData([...sortData, sortObj]);
        }
        else if (objIndex > -1) {
            let objOrder = sortData[objIndex].sortOrder;
            sortObj=({
                sortBy: e.target.id,
                sortOrder: (objOrder === 'asc') ? 'desc' : 'asc'
            });

            sortData[objIndex] = sortObj;
        }
        // console.log(sortObj);
        setSortFlag(true);
        switch (sortObj.sortOrder) {
            case 'asc':
                data.sort((a, b) => (a[sortObj.sortBy] > b[sortObj.sortBy]) ? 1 : (a[sortObj.sortBy] < b[sortObj.sortBy] ? -1 : 0));
                break;
            case 'desc':
                data.sort((a, b) => (a[sortObj.sortBy] > b[sortObj.sortBy]) ? -1 : (a[sortObj.sortBy] < b[sortObj.sortBy] ? 1 : 0));
                break;
            default:
                break;
        }
    };

    /* Handler for Add new item */
    const addNewItem = (e) => {
        e.preventDefault();
        props.addAnotherItem(e);
    }

    /* Handler for view todo list items*/
    const handleView = (e) => {
        e.preventDefault();
        props.checkboxHandle(e);
    }

    /* Handler for view completed todo list items*/
    const handleComplete = (e) => {
        setDisplayFlag(!displayFlag);
        e.preventDefault();
    }

    if (sortFlag) {
        setSortFlag(false);
    }

    const renderViewItem = data.map((recs, index) => {
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
                <span /> <button id="name" onClick={sortDataHandle}>name </button>
                <span /> <button id="price" onClick={sortDataHandle}>price</button>
            </h3>
            {renderViewItem}
            <br />
            <button onClick={addNewItem}> Add New Item </button>
            <br /> <br />
            <button onClick={handleComplete}> view completed items</button>
            <br /><br />
            {
                //check display condition to view completed items
                (displayFlag === true) ? renderCompleteItem : null
            }
        </div>
    );
}

export default ViewToDoList;