//module3 -ternary operator,list,css in react

import './App.css';
import {User} from './User' ;

function App() {
  const age=21;
  const isGreen=false;
  const names=["tanishk","jai","divya","udit"];
  const users=[
    {name:"tanishk" , age:21},
    {name:"jai" , age:20},
    {name:"divya" , age:24}
  ];

  const planets=[
    {name: "mars" , isGasplanet:false},
    {name: "earth" , isGasplanet:false},
    {name: "jupiter" , isGasplanet:true},
    {name: "venus" , isGasplanet:false},
    {name: "neptune" , isGasplanet:true},
    {name: "uranus" , isGasplanet:true},
  ]

  return (
    <div className="App">
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}

      {/* inline style  */}
      <h1 style={{color: isGreen ? "green" : "white"  ,background:"lightgray"}}>THIS HAS COLOR</h1> 

      {isGreen && <button>This is button</button>}

      {/* list */}
      {names.map(value => {
        return <h1>{value}</h1>
      })};

      {
        users.map(user=>{
          return <User name={user.name} age={user.age} />
        })
      };

      {/* list homework */}
      {planets.map(planet => {
        if(planet.isGasplanet){
          return <h1>{planet.name}</h1>
        }
      })}

    </div>
  );
}



export default App;
