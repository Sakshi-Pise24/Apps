import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter Application</h2>
      <h1>{count}</h1>
      <div className="button-group">
        <button onClick={increment} className="increment">Increment</button>
        <button onClick={decrement} className="decrement">Decrement</button>
        <button onClick={reset} className="reset">Reset</button>
      </div>
    </div>
  );
}

export default Counter;
