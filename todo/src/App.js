import './App.css';
import GetItemInput from './GetItemInput';
import ViewToDoList from './ViewToDoList';
import WelcomeScreen from './WelcomeScreen';
import Header from './Header';
import Footer from './Footer';
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
        price: Number(e.target.ItmPrice.value),
        img: { preview: null, 
          raw: {
          lastModified: null,
          lastModifiedDate: null,
          name: null,
          size: null,
          type: null,
          }
        }
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
        price: task[e.target.id].price,
        img: task[e.target.id].img
      };
      setCompleteTask([...completeTask, movetask]);
      completeTask.push(movetask);
      window.localStorage.setItem('myCompleteList', JSON.stringify(completeTask));

      task.splice(e.target.id, 1);
      window.localStorage.setItem('myToDoList', JSON.stringify(task));

    }
  };

// const [image, setImage] = useState({ preview: "", raw: "" });

const addImgHandler = (e) => {
    let itemIdx = (e.target.id).substring(11);
    let image;

    
    if (e.target.files.length) {
      console.log(e.target.files[0]);
      image = {
          preview: URL.createObjectURL(e.target.files[0])
          // raw: e.target.files[0]
      };
      task[itemIdx].img.preview=image.preview;
      
      
    } 
 
    window.localStorage.setItem('myToDoList', JSON.stringify(task));
    console.log(task);
    setAnotherTask(0);
};

  return (
    <div className="App">
      <Header/>
      {
        ((ToDoList === null) && (anotherTask===0))
          ?
          ( <WelcomeScreen AddNewItem={AddAnotherItem}/>) : ((anotherTask === 1) ?
            (<div> <GetItemInput AddItem={AddItemHandler} /></div>)
            :
            (<div> <ViewToDoList listData={task} completeData={completeTask} addAnotherItem={AddAnotherItem}
              checkboxHandle={markItemComplete} addImage={addImgHandler}/></div>)
          )

      }
      <Footer/>
    </div>
  );
}

export default App;
