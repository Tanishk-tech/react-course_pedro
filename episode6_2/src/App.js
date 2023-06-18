//API FETCHING example 2 lec-7

import React from 'react';
import './App.css';
import Axios from "axios";
import { useState , useEffect } from "react";

function App() {
  const [age,setage]=useState(0);
  const [name,setName]=useState("");

  const fetchData=() => {
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => {
      setage(res.data.age);
    });
  }

  return (
    <div className="App">
      <input onChange={(event) => {
        setName(event.target.value);
      } } />

      <button onClick={fetchData}>fetch data</button>
      <h1>age is : {age}</h1>
    </div>
  );
}

export default App;
