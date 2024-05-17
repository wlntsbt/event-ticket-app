'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { VscAccount, VscGraph, VscFolder } from 'react-icons/vsc';
export default function PromoterMenuBar() {
  const pathname_menu = usePathname();
  return (
    <div className="grid gap-8 mx-8 my-5">
      {pathname_menu == '/promoter/profile' ? (
        <div className="bg-purple-500 text-white p-2 rounded-full flex items-center gap-2 pl-[40px]">
          <VscAccount />
          Profile
        </div>
      ) : (
        <Link
          href={'/promoter/profile'}
          className="bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-50 rounded-full p-2 flex items-center gap-2 pl-[40px]"
        >
          <VscAccount />
          Profile
        </Link>
      )}
      {pathname_menu == '/promoter/dashboard' ? (
        <div className="bg-purple-500 text-white p-2 rounded-full flex items-center gap-2 pl-[40px]">
          <VscGraph />
          Dashboard
        </div>
      ) : (
        <Link
          href={'/promoter/dashboard'}
          className="bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-50 rounded-full p-2 flex items-center gap-2 pl-[40px]">
          <VscGraph />
          Dashboard
        </Link>
      )}
      {pathname_menu == '/promoter/event' ? (
        <div className="bg-purple-500 text-white p-2 rounded-full flex items-center gap-2 pl-[40px]">
          <VscFolder/>
          Draft Event
        </div>
      ) : (
        <Link
          href={'/promoter/event'}
          className="bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-50 rounded-full p-2 flex items-center gap-2 pl-[40px]"
        >
          <VscFolder/>
          Draft Event
        </Link>
      )}
    </div>
  );
}
