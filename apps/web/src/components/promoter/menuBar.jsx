'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLogout } from '@/hooks/useLogin';

export default function PromoterMenuBar() {
  return (
    <div className="flex gap-8 mx-8">
      <Link href={'/promoter/dashboard'} className="bg-pink-100 p-2 rounded-md">
        Dashboard
      </Link>
      <Link href={'/promoter/event'} className="bg-pink-100 p-2 rounded-md">
        Event
      </Link>
      <Link
        href={'/promoter/transaction'}
        className="bg-pink-100 p-2 rounded-md"
      >
        Transaction
      </Link>
    </div>
  );
}
