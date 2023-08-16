function Calculator() {
  return (

    <div className="calculator">
      <div className="displayScreen"><span>0</span></div>
      <Buttons />
    </div>

  );
}

function Buttons() {
  return (
    <div className="btns">
      <button type="button" className="operator top">AC</button>
      <button type="button" className="operator top">+/-</button>
      <button type="button" className="operator top">%</button>
      <button type="button" className="operator">/</button>
      <button type="button" className="number">7</button>
      <button type="button" className="number">8</button>
      <button type="button" className="number">9</button>
      <button type="button" className="operator">x</button>
      <button type="button" className="number">4</button>
      <button type="button" className="number">5</button>
      <button type="button" className="number">6</button>
      <button type="button" className="operator">-</button>
      <button type="button" className="number">1</button>
      <button type="button" className="number">2</button>
      <button type="button" className="number">3</button>
      <button type="button" className="operator">+</button>
      <button type="button" className="number zero">0</button>
      <button type="button" className="number">.</button>
      <button type="button" className="operator">=</button>
    </div>
  );
}

export default Calculator;
