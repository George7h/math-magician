import Calculator from './components/calculator';
import GetQuote from './components/getQuote';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="appName">
          <h1>Math Magicians</h1>
        </div>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li>|</li>
          <li><a href="#calculator">Calculator</a></li>
          <li>|</li>
          <li><a href="#quote">Quote</a></li>
        </ul>
      </nav>
      <div className="contain">
        <div className="quoteApp">
          <GetQuote />
        </div>
        <div className="calculatorApp">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
