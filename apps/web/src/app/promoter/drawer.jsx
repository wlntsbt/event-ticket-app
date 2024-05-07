'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PromoterMenuBar from '@/components/promoter/menuBar';
import Drawer from 'react-modern-drawer';
import Loading from './loading';
import 'react-modern-drawer/dist/index.css';
import Dashboard from './dashboard/page';

export default function PromoterPage() {
  const stateUser = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Suspense fallback={Loading}>
      <div className="pt-[80px] pl-5">
        <button
          onClick={toggleDrawer}
          className="w-[200px] border-purple-500 border-2 relative h-12 rounded-full hover:border-purple-500 text-purple-500 hover:bg-purple-100"
        >
          <span className="font-medium flex h-full justify-center items-center">
            Show Menu
          </span>
        </button>
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

        <Dashboard />
      </div>
    </Suspense>
  );
}
