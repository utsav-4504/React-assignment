import React, { useState, useRef } from 'react';

function Rerender() {
    const [count, setCount] = useState(0);
    const previousCount = useRef(count); 
  
    const increment = () => {
      previousCount.current = count;
      setCount(count + 1);
    };
  
    const decrement = () => {
      previousCount.current = count;
            setCount(count - 1);
    };
    return (
    <>
     <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter with useRef</h1>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count (using useRef): {previousCount.current}</h3>
      <button
        onClick={increment}
        style={{
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Increment
      </button>
      <button
        onClick={decrement}
        style={{
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Decrement
      </button>
    </div>
  
    </>
  )
}

export default Rerender
