//lec=7 api exercise3

import './App.css';
import Axios from "axios";
import { useState,useEffect } from 'react';

function App() {
  const [excuse,SetExcuse]=useState("hello");
  const [type,SetType]=useState("");

  const fetchdata=(event) => {
    SetType(event.target.innerHTML);

    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`)
    .then((res) => {
      SetExcuse(res.data[0].excuse);
      // console.log(res.data[0].excuse);
    })
  }

  
  return (
    <div className="App">
      <h1>GENERATE AN EXCUSES : </h1>
      <button onClick={fetchdata}>party</button>
      <button onClick={fetchdata}>family</button>
      <button onClick={fetchdata}>office</button>
      <h1>excuse for {type} : {excuse}</h1>
    </div>
  );
}

export default App;
