import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  // Handle button clicks
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(expression)); // Calculate the result
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <div className="display">
        <input type="text" value={expression} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        <button className="clear-btn" onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
