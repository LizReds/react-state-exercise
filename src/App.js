import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState();

  const updateValue = () => {
    setCount(count + 1);
    setDate(Date());
  };

  return (
    <div className="container">
      <div className="card" onClick={() => updateValue()}>
        Click here
      </div>
      <div className="counter">{count}</div>
      {count !== 0 ? <div className="info">Last click : {date} </div> : <></>}
    </div>
  );
}
