import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './calculator.css';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const calcButton = (value) => {
    if (value === 'AC') {
      setCalculatorState({
        total: '0',
        next: null,
        operation: null,
      });
    } else {
      const updatedState = calculate(calculatorState, value);
      setCalculatorState(updatedState);
    }
  };

  return (

    <div className="calculator">
      <div className="displayScreen">
        <span>
          {calculatorState.total}
          {calculatorState.operation}
          {calculatorState.next}
        </span>
      </div>
      <Buttons numberAndOperator={calcButton} />
    </div>
  );
}
function Buttons({ numberAndOperator }) {
  const calcButton = (event) => {
    const value = event.target.innerHTML;
    numberAndOperator(value);
  };

  return (
    <div className="btns">
      <button type="button" className="operator top" onClick={calcButton}>AC</button>
      <button type="button" className="operator top" onClick={calcButton}>+/-</button>
      <button type="button" className="operator top" onClick={calcButton}>%</button>
      <button type="button" className="operator" onClick={calcButton}>÷</button>
      <button type="button" className="number" onClick={calcButton}>7</button>
      <button type="button" className="number" onClick={calcButton}>8</button>
      <button type="button" className="number" onClick={calcButton}>9</button>
      <button type="button" className="operator" onClick={calcButton}>x</button>
      <button type="button" className="number" onClick={calcButton}>4</button>
      <button type="button" className="number" onClick={calcButton}>5</button>
      <button type="button" className="number" onClick={calcButton}>6</button>
      <button type="button" className="operator" onClick={calcButton}>-</button>
      <button type="button" className="number" onClick={calcButton}>1</button>
      <button type="button" className="number" onClick={calcButton}>2</button>
      <button type="button" className="number" onClick={calcButton}>3</button>
      <button type="button" className="operator" onClick={calcButton}>+</button>
      <button type="button" className="number zero" onClick={calcButton}>0</button>
      <button type="button" className="number" onClick={calcButton}>.</button>
      <button type="button" className="operator" onClick={calcButton}>=</button>
    </div>
  );
}

Buttons.propTypes = {
  numberAndOperator: PropTypes.func.isRequired,
};

export default Calculator;
