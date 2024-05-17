'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLogout } from '@/hooks/useLogin';
import { usePathname } from 'next/navigation';
export default function UserMenuBar() {
  const pathname_menu = usePathname();
  return (
    <div className="grid gap-8 mx-8 my-5">
      {pathname_menu == '/user/profile' ? (
        <div className="bg-purple-500 text-white p-2 rounded-full text-center">
          Profile
        </div>
      ) : (
        <Link
          href={'/user/profile'}
          className="bg-white border-2 border-purple-500 hover:bg-purple-50 rounded-full p-2 text-center"
        >
          Profile
        </Link>
      )}
      {pathname_menu == '/user/tickets' ? (
        <div className="bg-purple-500 text-white p-2 rounded-full text-center">
          Tickets
        </div>
      ) : (
        <Link
          href={'/user/tickets'}
          className="bg-white border-2 border-purple-500 hover:bg-purple-50 rounded-full p-2 text-center"
        >
          Tickets
        </Link>
      )}
      {pathname_menu == '/user/transaction' ? (
        <div className="bg-purple-500 text-white p-2 rounded-full text-center">
          Transaction
        </div>
      ) : (
        <Link
          href={'/user/transaction'}
          className="bg-white border-2 border-purple-500 hover:bg-purple-50 rounded-full p-2 text-center"
        >
          Transaction
        </Link>
      )}
      {pathname_menu == '/user/reviews' ? (
        <div className="bg-purple-500 text-white p-2 rounded-full text-center">
          Reviews
        </div>
      ) : (
        <Link
          href={'/user/reviews'}
          className="bg-white border-2 border-purple-500 hover:bg-purple-50 rounded-full p-2 text-center"
        >
          Reviews
        </Link>
      )}
    </div>
  );
}
