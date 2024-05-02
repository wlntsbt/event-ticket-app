'use client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PromoterMenuBar from '@/components/promoter/menuBar';
import Link from 'next/link';
export default function PromoterPage() {
  const stateUser = useSelector((state) => state.user);
  return (
    <div className="pt-32">
      <div>INI EVENT PAGE PUNYA PROMOTER</div>
      <Link href={'/promoter/event/new'}>
        <div className="bg-pink-200">Create New Event</div>
      </Link>
    </div>
  );
}
