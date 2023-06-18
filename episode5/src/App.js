//component life cycle ,use effect hook lec6

import './App.css';
import { useState } from 'react';
import {Text} from './text';

function App() {
  const [showtext,setShowtext]=useState(false);
  return (
    <div className="App">
      <div>
        <button onClick={() => {
          setShowtext(!showtext);
        }}>Hide Button</button><br></br><br></br>

        {showtext && <Text/>}
      </div>
    </div>
  );
}

export default App;
