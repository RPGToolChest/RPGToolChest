import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './Pages/Home/home';
import About from './Pages/About/about'
import DiceRoller from './Pages/DiceRoller/diceroller';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/diceroller" element={<DiceRoller/>}/>
          {/* <Route path="/example" element={<examplePage/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}
