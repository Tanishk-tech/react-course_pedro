//module 4 -state in react and usestate in hooks
import { isVisible } from '@testing-library/user-event/dist/utils';
import './App.css';
import {useState} from "react";

function App() {
  // let age=21;
  const [age,setAge]=useState(0);
  const [name,setName]=useState("tanishk");
  const [showtext,setShowText]=useState(true);
  const [colors,setColor]=useState("red");

  const increaseAge= (event) => {
    setAge(age+1);
    console.log(event);
  }

  const changeName= (event) =>{
    setName(event.target.value);
  }

  const isVisible=() => {
    setShowText(!showtext);
    setColor(colors==="red" ? "black" : "red");
  }

  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>INCREASE AGE</button><br></br><br></br>

      <input type="text" onChange={changeName} /><br></br>
      {name}<br></br><br></br>

      <button onClick={isVisible}>SHOW / HIDE TEXT</button><br></br>

      {/* && use here for hide */}
      
      {showtext === true ? <h1 style={{color:colors}}>MY NAME IS TANISHK.....</h1> : <h1>hide content</h1>}
    </div>
  );
}

export default App;
