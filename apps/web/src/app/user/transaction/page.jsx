'use client';

import { useGetUserTransaction } from '@/hooks/user/useGetUserData';
import TransactionComponent from '@/components/user/transactionHistory';
import { useSelector } from 'react-redux';
import Spinner from '@/components/general/spinner';
import { useGetUserReview } from '@/hooks/user/useGetUserData';

export default function TransactionPage() {
  const { userTransaction } = useGetUserTransaction();
  const { userReview } = useGetUserReview();
  const userState = useSelector((state) => state.user);

  if (!userTransaction || !userReview) return <Spinner />;

  const reviewed = [];
  userReview.forEach((x, i) => reviewed.push(x.eventId));

  return (
    <div className="pt-[20px] scroll-smooth">
      <h1 className="flex justify-center items-center w-full bg-purple-100 h-[50px] text-2xl">
        Transaction
      </h1>

      <div className='flex flex-col p-5 gap-5 mx-auto lg:w-1/2 '>
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
            startDate={x['Booking'][0]?.ticket.event.startDate}
            eventId={x['Booking'][0]?.ticket.event.id}
            eventName={x['Booking'][0]?.ticket.event.name}
            isReviewPublished={reviewed.includes(
              x['Booking'][0]?.ticket.event.id,
            )}
          ></TransactionComponent>
        ))}
      </div>
    </div>
  );
}
