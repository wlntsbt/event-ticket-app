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
      <Dashboard />
    </Suspense>
  );
}
