//what is react ,props ,component and js ,lec1-2

import './App.css';

function App() {
  const name="Tanishk";
  const email="tanishk@gmail.com";
  const age=20;
  const topic=<h1>React</h1>;

  const user=(
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
    </div>)

  return (
    <div className="App">
      hello {name}...
      {topic}
      <h1>user wala div</h1>
      {user}

      <User name="Tanishk" age={21} email="tanishk@gmail.com"/>
      <User name="Jai" age={20} email="jai@gmail.com"/>
      <User name="Divya" age={24} email="divya@gmail.com"/>
    </div>
  );
}

const getname= () => {   //javascript function
  return "tanishk";
};

//props is like object BTS is look like that only for understand 
// const props={
//   name:"tanishk",
//   age:21,
//   email:"tanishk@gmail.com"
// }

const User=(props) => {   //react component  , GetNameComponent==User
  return(
    <div>
      <h1>React component</h1>
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
      <h1>{props.age}</h1>
    </div>
  )
};

export default App;
