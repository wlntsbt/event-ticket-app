'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
export default function HomePage() {
  const stateUser = useSelector((state) => state.user);
  console.log(stateUser);
  return (
    <div className="flex gap-8 bg-pink-200">
      Hello, {stateUser ? stateUser.uid : 'User'}
      <Link href={'/auth/register'}>Register</Link>
      <Link href={'/auth/login'}>Login</Link>
    </div>
  );
}
