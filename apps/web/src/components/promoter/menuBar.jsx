'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLogout } from '@/hooks/useLogin';
import { usePathname } from 'next/navigation';
export default function PromoterMenuBar() {
  const pathname_menu = usePathname();
  return (
    <div className="grid gap-8 mx-8 my-5">
      {pathname_menu == '/promoter/dashboard' ? (
        <div className="bg-purple-500 text-white p-2 rounded-full text-center">
          Dashboard
        </div>
      ) : (
        <Link
          href={'/promoter/dashboard'}
          className="bg-white border-2 border-purple-500 hover:bg-purple-50 rounded-full p-2 text-center"
        >
          Dashboard
        </Link>
      )}
      {pathname_menu == '/promoter/event' ? (
        <div className="bg-purple-500 text-white p-2 rounded-full text-center">
          Draft Event
        </div>
      ) : (
        <Link
          href={'/promoter/event'}
          className="bg-white border-2 border-purple-500 hover:bg-purple-50 rounded-full p-2 text-center"
        >
          Draft Event
        </Link>
      )}
      {pathname_menu == '/promoter/transaction' ? (
        <div className="bg-purple-500 text-white p-2 rounded-full text-center">
          Transaction
        </div>
      ) : (
        <Link
          href={'/promoter/transaction'}
          className="bg-white border-2 border-purple-500 hover:bg-purple-50 rounded-full p-2 text-center"
        >
          Transaction
        </Link>
      )}
    </div>
  );
}
