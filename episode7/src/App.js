//lec8-routes in react and react router dom

import './App.css';
import { BrowserRouter as Router , Routes , Route ,Link } from 'react-router-dom';
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contact} from "./pages/Contact";
import {Nav} from "./navBar";


function App() {
  return (
    <div className="App">
      
      <Router>

        <Nav/>

        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/menu' element={ <Menu/> } />
          <Route path='/contact' element={ <Contact/> } />

          {/* for some path that not exist or error */}
          <Route path='*' element={ <h1>PAGE NOT FOUND</h1> } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
