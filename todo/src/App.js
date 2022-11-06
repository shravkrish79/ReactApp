import './App.css';
import GetItemInput from './GetItemInput';
import ViewToDoList from './ViewToDoList';
import React, { useState, useEffect } from 'react';

function App() {

  const [task, setTask] = useState([]);
  const [completeTask, setCompleteTask] = useState([]);
  const [anotherTask, setAnotherTask] = useState(0);

  useEffect(() => {
    let myLocalToDoList = JSON.parse(window.localStorage.getItem('myToDoList'));
    if (myLocalToDoList) {
      setTask(myLocalToDoList);
    }
  }, []);

  useEffect(() => {
    let myLocalCompleteList = JSON.parse(window.localStorage.getItem('myCompleteList'));
    if (myLocalCompleteList) {
      setCompleteTask(myLocalCompleteList);
    }
  }, []);

  let ToDoList = JSON.parse(window.localStorage.getItem('myToDoList'));

  const AddItemHandler = (e) => {
    if (e.target.ItmName.value !== '' && e.target.ItmPrice.value !== '') {
      const newTask = {
        // id: new Date(),
        name: e.target.ItmName.value,
        price: e.target.ItmPrice.value
      };
      setTask([...task, newTask]);
      task.push(newTask);
      localStorage.setItem('myToDoList', JSON.stringify(task));
      setAnotherTask(0);
    }
  };


  const AddAnotherItem = () => {
    setAnotherTask(1);
  };

  const markItemComplete = (e) => {
    if (e.target.checked) {
      let movetask = {
        name: task[e.target.id].name,
        price: task[e.target.id].price
      };
      setCompleteTask([...completeTask,movetask]);
      completeTask.push(movetask);
      window.localStorage.setItem('myCompleteList',JSON.stringify(completeTask));
      
      task.splice(e.target.id,1);
      window.localStorage.setItem('myToDoList', JSON.stringify(task));
      
      // let ToDoListCount = JSON.parse(window.localStorage.getItem('myToDoList')).length;
      // if (ToDoListCount===0) {
      //   window.localStorage.removeItem('myToDoList');
      // }

    }
  };

  //  console.log(anotherTask);


  return (
    <div className="App">
      {
        ((ToDoList === null) || (anotherTask === 1)) 
          ?
          (<div> <GetItemInput AddItem={AddItemHandler} /></div>)
          :
          (<div> <ViewToDoList listData={task} completeData={completeTask} addAnotherItem={AddAnotherItem} 
            checkboxHandle={markItemComplete}/></div>)

      }
    </div>
  );
}

export default App;
