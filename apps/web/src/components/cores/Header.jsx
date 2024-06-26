'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useLogout } from '@/hooks/useLogin';

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const stateUser = useSelector((state) => state.user);
  const { logout } = useLogout();
  const handleClickLogout = () => {
    logout();
    setToggleMenu(false);
  };
  return (
    <div className="fixed z-50 border-black bg-purple-400 bg-opacity-40 backdrop-blur-sm w-full h-[50px] px-[25px] flex justify-between items-center lg:px-[100px]">
      <Link href="/">
        <div
          className="text-white tracking-widest drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] text-lg hover:text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold bg-clip-text"
          onClick={() => setToggleMenu(false)}
        >
          LESGOIN!
        </div>
      </Link>

      {stateUser.role ? (
        <div className="gap-3 hidden lg:flex">
          <Link
            href={
              stateUser.role == 'PROMOTER'
                ? '/promoter/profile'
                : '/user/profile'
            }
          >
            <h1 className="font-bold uppercase text-purple-50 hover:text-fuchsia-500">
              {stateUser.username}
            </h1>
          </Link>

          <h1
            onClick={logout}
            className="font-bold flex items-center gap-1 hover:text-red-500 hover:cursor-pointer"
          >
            LOG OUT <MdLogout />
          </h1>
        </div>
      ) : (
        <div className="hidden md:flex lg:gap-10">
          <Link href={'/auth/login'}>
            <div className="font-bold hover:text-slate-500 hover:cursor-pointer">
              LOG IN
            </div>
          </Link>
          <Link href={'/auth/register'}>
            <div className="font-bold hover:text-purple-500 hover:cursor-pointer">
              REGISTER
            </div>
          </Link>
        </div>
      )}

      <div className="flex gap-5 items-center lg:hidden md:hidden">
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
            <div className="z-0 backdrop-grayscale backdrop-blur-sm bg-black bg-opacity-80 fixed flex flex-col w-full h-screen inset-0 mt-[50px] pt-5 text-center text-2xl leading-[100px]">
              {stateUser.role ? (
                <div className="z-10">
                  <Link
                    href={
                      stateUser.role == 'PROMOTER'
                        ? '/promoter/profile'
                        : '/user/profile'
                    }
                  >
                    <h1
                      className="font-bold uppercase text-white"
                      onClick={() => setToggleMenu(false)}
                    >
                      {stateUser.username}
                    </h1>
                  </Link>
                  <button
                    onClick={handleClickLogout}
                    className="font-bold text-purple-500 hover:cursor-pointer hover:text-red-500"
                  >
                    LOG OUT
                  </button>
                </div>
              ) : (
                <div className="z-10 md:flex lg:gap-10">
                  <Link href={'/auth/login'}>
                    <p
                      className="font-bold text-purple-300 hover:text-white hover:cursor-pointer"
                      onClick={() => setToggleMenu(false)}
                    >
                      LOG IN
                    </p>
                  </Link>
                  <Link href={'/auth/register'}>
                    <p className="font-bold text-white hover:cursor-pointer hover:text-purple-500">
                      REGISTER
                    </p>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
