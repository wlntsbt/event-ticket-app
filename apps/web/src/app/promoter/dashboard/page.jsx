'use client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PromoterMenuBar from '@/components/promoter/menuBar';

export default function Dashboard() {
  const stateUser = useSelector((state) => state.user);
  return <div className="bg-slate-500 h-screen pt-[50px]">INI PROMOTER DASHBOARD</div>;
}
