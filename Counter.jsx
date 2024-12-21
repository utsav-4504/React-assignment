import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file

function Counter() {
  const [data, setData] = useState(0);

  const add = () => {
    setData(data + 1);
  };

  const minus = () => {
    setData(data - 1);
  };

  return (
<>
<h1>Counter</h1>
    <div className="counter-container">
      <h1 className="counter-display">{data}</h1>
      <div className="button-container">
        <button className="counter-button add-button" onClick={add}>
          Add
        </button>
        <button className="counter-button minus-button" onClick={minus}>
          Minus
        </button>
      </div>
    </div>
    </>
  );
}

export default Counter;
