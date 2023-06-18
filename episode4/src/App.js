//module5= crud in react

import './App.css';
import { useState } from 'react';
import {Task} from './task';


function App() {
  const [toDoList,SetToDoList]=useState([]);
  const [task,setTask]=useState("");
  const [ colors , setColor] = useState("black");

  const handleChange= (event) => {
    setTask(event.target.value);
  }

  const addTask=() => {
    const taskObject={
      taskName:task,
      id: toDoList.length===0 ? 1 : toDoList[toDoList.length -1].id+1,
      complete:false,
    };
    SetToDoList([...toDoList,taskObject]);
  }

  const deleted=(id) =>{
    SetToDoList(toDoList.filter(element => element.id !== id ));
  }

  const completed= (id) => {

    SetToDoList(toDoList.map(item =>{
      if(item.id===id){
        return {...item , complete : !item.complete};
      }
      else{
        return item;
      }
    }))
  }

  return (
    <div className="App">
      <div className="AddTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>ADD TASK</button>
      </div>
      <div className="AddList">
        {toDoList.map(item =>{
          return <Task  taskName={item.taskName} id={item.id} complete={item.complete} deleted={deleted}  completion={completed} colors={colors}/>
        })}
      </div>
    </div>
  );
}

export default App;
