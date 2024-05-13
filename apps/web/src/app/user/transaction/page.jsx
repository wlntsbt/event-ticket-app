'use client';

import { useGetUserTransaction } from '@/hooks/user/useGetUserData';
import TransactionComponent from '@/components/user/transactionHistory';
import Spinner from '@/components/general/spinner';

export default function TransactionPage() {
  const { userTransaction } = useGetUserTransaction();

  if (!userTransaction) return <Spinner />;

  console.log(userTransaction);
  return (
    <div className="pt-[20px] scroll-smooth">
      <h1 className="flex justify-center items-center w-full bg-purple-100 h-[50px] text-2xl">
        Transaction
      </h1>
      <div>
        {userTransaction.map((x, i) => (
          <TransactionComponent
            billId={x.id}
            ticketName={
              x.status === 'PAID'
                ? x['AttendeeTicket'][0]?.ticket.event.name
                : x['Booking'][0]?.ticket.event.name
            }
            bookingData={x.Booking}
            total={x.total}
            status={x.status}
          ></TransactionComponent>
        ))}
      </div>
    </div>
  );
}
