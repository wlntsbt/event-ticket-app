'use client';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { FaChevronLeft } from 'react-icons/fa6';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PromoterMenuBar from '@/components/promoter/menuBar';
import { usePathname } from 'next/navigation';
export default function Promotor({ children }) {
  const pathname = usePathname();
  const stateUser = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      {pathname == '/promoter/event/new' ? null : (
        <div className="pt-[80px] pl-5">
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="mt-[50px]"
            enableOverlay={true}
            overlayColor="transparent"
          >
            <div>
              <PromoterMenuBar />
            </div>
          </Drawer>
          <button
            onClick={toggleDrawer}
            className="w-[200px] border-purple-500 border-2 relative h-12 rounded-full hover:border-purple-500 text-purple-500 hover:bg-purple-100"
          >
            <span className="font-medium flex h-full justify-center items-center gap-2">
              <FaChevronLeft />
              Show Menu
            </span>
          </button>
        </div>
      )}
      {children}
    </div>
  );
}
