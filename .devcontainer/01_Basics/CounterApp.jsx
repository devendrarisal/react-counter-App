
import React, { useState } from 'react';
import './CounterApp.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const setCustomValue = () => {
    const num = parseInt(inputValue, 10);
    if (!isNaN(num)) {
      setCount(num);
    }
  };

  return (
    <div className="counter-container">
      <nav className="navbar">
        <span>Custom Counter</span>
        <span>Counter Two</span>
        <span>Counter One</span>
        <span>BuggyCounter</span>
        <span>ErrorPage</span>
      </nav>
      <div className="counter-box">
        <h1>Count = {count}</h1>
        <div className="button-group">
          <button className="increment-btn" onClick={increment}>
            Increment
          </button>
          <button className="decrement-btn" onClick={decrement}>
            Decrement
          </button>
          <button className="reset-btn" onClick={reset}>
            RESET
          </button>
        </div>
        <div className="input-group">
          <input
            type="number"
            placeholder="Number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="set-btn" onClick={setCustomValue}>
            Set
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
