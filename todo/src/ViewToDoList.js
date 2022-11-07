import { useState, } from "react";

function ViewToDoList(props) {

    let data = props.listData;
    let completeData = props.completeData;
    const [displayFlag, setDisplayFlag] = useState(false);
    const [sortFlag, setSortFlag] = useState(false);

    const [sortData, setSortData] = useState([]);
    // const [sortObj, setSortObj] = useState({
    //     sortBy: null,
    //     sortOrder: null
    // });
    let sortObj = {
        sortBy: null,
        sortOrder: null
    };


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
        console.log(sortObj);
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

    if (sortFlag) {
        setSortFlag(false);
        console.log(sortData[sortData.length - 1].sortBy + ',' + sortData[sortData.length - 1].sortOrder);
        console.log(sortObj);
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
                (displayFlag === true) ? renderCompleteItem : null
            }
        </div>
    );
}

export default ViewToDoList;