import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';
import CalculatorComponent from './routes/CalculatorComponent';
import Quote from './routes/GetQuoteComponent';
import Home from './routes/HomeComponent';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="appName">
            <h1>Math Magicians</h1>
          </div>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li>|</li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li>|</li>
            <li><Link to="/quote">Quote</Link></li>
          </ul>
        </nav>
        <div className="contain">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/calculator" element={<CalculatorComponent />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
