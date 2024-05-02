'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
export default function HomePage() {
  const stateUser = useSelector((state) => state.user);
  
  return (
    <div className="h-screen py-[50px] bg-gradient-to-b from-blue-200 to-cyan-200">
      Hello, {stateUser ? stateUser.uid : 'User'}
    </div>
  );
}
