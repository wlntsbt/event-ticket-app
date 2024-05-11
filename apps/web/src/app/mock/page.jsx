'use client';
import React, { useState, useEffect } from 'react';
import { useGetUserPromo } from '@/hooks/user/useGetUserData';

const ChildComponent = ({ onClick, text }) => {
  const handleClick = () => {
    const dataFromChild = 'Hello from the child!';
    onClick(dataFromChild);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default function ParentComponent() {
  const { userPromo } = useGetUserPromo();
  const [childText, setChildText] = useState(`Click me! (parent prop)`);

  const handleChildClick = (dataFromChild) => {
    console.log('Data received from child:', dataFromChild);
  };

  console.log('user promo', userPromo);

  return (
    <div className="p-32">
      <ChildComponent onClick={handleChildClick} text={childText} />
    </div>
  );
}
