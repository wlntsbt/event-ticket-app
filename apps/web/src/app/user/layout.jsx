'use client';

import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import UserMenuBar from '@/components/user/userMenuBar';
import { FaChevronLeft } from 'react-icons/fa6';

export default function Attendee({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="pt-[70px] pl-10">
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="mt-[50px]"
          enableOverlay={true}
          overlayColor="transparent"
        >
          <div>
            <UserMenuBar />
          </div>
        </Drawer>
        <button
          onClick={toggleDrawer}
          className="w-[150px] border-purple-500 border-2 relative h-12 rounded-full hover:border-purple-500 text-purple-500 hover:bg-purple-100"
        >
          <span className="font-medium flex h-full justify-center items-center gap-2">
            <FaChevronLeft />
            Show Menu
          </span>
        </button>
      </div>

      {children}
    </div>
  );
}
