'use client';
import React from 'react';
import Image from 'next/image';
import { useGetUserTransaction } from '@/hooks/user/useGetUserData';
import AttendeeTicketComponent from '@/components/user/ticketComponent';
import Spinner from '@/components/general/spinner';

function TicketPage() {
  const { userTransaction } = useGetUserTransaction();

  if (!userTransaction) return <Spinner />;

  userTransaction.sort(
    (a, b) =>
      new Date(b.AttendeeTicket[0]?.createdAt) -
      new Date(a.AttendeeTicket[0]?.createdAt),
  );

  return (
    //
    <div className="pt-[20px] scroll-smooth">
      <h1 className="flex justify-center items-center w-full bg-purple-100 h-[50px] text-2xl">
        Tickets
      </h1>
      {userTransaction.map((x, i) => (
        <AttendeeTicketComponent
          eventName={x.AttendeeTicket[0]?.ticket.event.name}
          key={i}
          tickets={x.AttendeeTicket}
        />
      ))}
    </div>
  );
}

export default TicketPage;
