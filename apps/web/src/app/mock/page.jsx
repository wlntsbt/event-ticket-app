'use client';
import React, { useState, useEffect } from 'react';

const ChildComponent = ({ onClick, text }) => {
  const handleClick = () => {
    const dataFromChild = 'Hello from the child!';
    onClick(dataFromChild);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default function ParentComponent() {
  const [childText, setChildText] = useState(`Click me! (parent prop)`);

  const handleChildClick = (dataFromChild) => {
    console.log('Data received from child:', dataFromChild);
  };

  return (
    <div className="p-32">
      <ChildComponent onClick={handleChildClick} text={childText} />
    </div>
  );
}
