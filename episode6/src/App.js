//fetching data from API's in React
import React from "react";
import './App.css';
import Axios from "axios";
import { useState,useEffect } from "react";

function App() {
  // fetch("https://catfact.ninja/fact")
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data);
  // })

  const [catFact,setCatFact]=useState("");

  const fetchCatFact= () => {
    Axios.get("https://catfact.ninja/fact")
    .then((res)=> {
      setCatFact(res.data.fact);
    });
  }

  //use for first time mounting of app component after each update it is not take care
  useEffect(() => {
    fetchCatFact();
  },[])

  return (
    <div className="App">
      <button onClick={fetchCatFact}>GENERATE CAT FACT</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
