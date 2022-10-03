import React from 'react';
import React, { useState } from 'react';
import './style.css';

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState('Pedro');

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};
export default function App() {}
