'use client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PromoterMenuBar from '@/components/promoter/menuBar';

export default function PromoterPage() {
  const stateUser = useSelector((state) => state.user);
  return <div className="pt-32">INI PROMOTER DASHBOARD</div>;
}
