'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useLogout } from '@/hooks/useLogin';

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const stateUser = useSelector((state) => state.user);
  const { logout } = useLogout();
  return (
    <div className="fixed z-50 border-b border-black bg-transparent backdrop-blur-sm w-full h-[50px] px-[25px] flex justify-between items-center lg:px-[100px]">
      <Link href="/">
        <div
          className="text-white tracking-widest drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] text-lg hover:text-black font-bold"
          onClick={() => setToggleMenu(false)}
        >
          LESGOIN!
        </div>
      </Link>

      {stateUser.uid ? (
        <div className="flex gap-3">
          <Link href={stateUser.role == 'PROMOTER' ? '/promoter' : '/user'}>
            <div>{stateUser.uid}</div>
          </Link>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <div className="hidden md:flex lg:gap-10">
          <Link href={'/auth/login'}>
            <div className="font-bold hover:text-slate-500">LOGIN</div>
          </Link>
          <Link href={'/auth/register'}>
            <div className="font-bold hover:text-teal-500">REGISTER</div>
          </Link>
        </div>
      )}

      <div className="flex gap-5 items-center lg:hidden md:hidden">
        <div>
          <MdOutlineSearch className="text-2xl" />
        </div>
        <div>
          {!toggleMenu && (
            <RxHamburgerMenu
              className="cursor-pointer text-2xl"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              className="cursor-pointer text-2xl"
              onClick={() => setToggleMenu(false)}
            />
          )}
          {toggleMenu && (
            <ul className="fixed bg-transparent backdrop-blur-lg backdrop-grayscale flex flex-col w-screen h-screen inset-0 mt-[50px] pt-5 text-center text-2xl leading-[100px]">
              <Link href={'/auth/login'}>
                <li
                  onClick={() => setToggleMenu(false)}
                  className="font-bold hover:text-white"
                >
                  LOGIN
                </li>
              </Link>
              <Link href={'/auth/register'}>
                <li
                  onClick={() => setToggleMenu(false)}
                  className="font-bold hover:text-teal-500"
                >
                  REGISTER
                </li>
              </Link>
              <li className="font-bold hover:text-white"> ABOUT US</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
