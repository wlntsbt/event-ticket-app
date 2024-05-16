'use client';

import { useGetUserTransaction } from '@/hooks/user/useGetUserData';
import TransactionComponent from '@/components/user/transactionHistory';
import { useSelector } from 'react-redux';
import Spinner from '@/components/general/spinner';
import { useGetUserReview } from '@/hooks/user/useGetUserData';
import CreateReview from '@/components/user/reviewForm';
import { isPast } from 'date-fns';
import { useState } from 'react';

export default function TransactionPage() {
  const { userTransaction } = useGetUserTransaction();
  const { userReview } = useGetUserReview();
  const userState = useSelector((state) => state.user);
  const [activeReviewIndex, setActiveReviewIndex] = useState(null);

  if (!userTransaction || !userReview) return <Spinner />;

  const reviewed = [];
  userReview.forEach((x, i) => reviewed.push(x.eventId));

  return (
    <div className="pt-[20px] scroll-smooth">
      <h1 className="flex justify-center items-center w-full bg-purple-100 h-[50px] text-2xl">
        Transaction
      </h1>

      <div className="flex flex-col p-5 gap-5 mx-auto lg:w-1/2 relative">
        {userTransaction.map((x, i) => (
          <div key={i} className="flex gap-8 w-full relative">
            <div
              className="flex w-full gap-8"
              style={{ position: 'relative', zIndex: 1 }}
            >
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
              />
              {x.status === 'PAID' &&
              !isPast(
                new Date(x['Booking'][0]?.ticket.event.startDate),
              ) ? null : reviewed.includes(x['Booking'][0]?.ticket.event.id) ? (
                <p className="outline outline-purple-500 mt-5 relative w-[113px] rounded-full h-[35px] font-bold text-[10px] bg-purple-50 flex items-center justify-center">
                  Review Published!
                </p>
              ) : (
                <button
                  onClick={() => setActiveReviewIndex(i)}
                  type="submit"
                  className="p-[8px] mt-5 font-bold relative w-[113px] bg-purple-500 rounded-full h-[35px] before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:origin-bottom before:rounded-full"
                >
                  <span className="relative text-white tracking-wide font-bold flex justify-center text-[11px] hover:text-black">
                    Write a Review
                  </span>
                </button>
              )}
            </div>
            {activeReviewIndex === i && (
              <div
                style={{
                  position: 'absolute',
                  zIndex: 10,
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <CreateReview
                  close={() => setActiveReviewIndex(null)}
                  open={true}
                  eventId={x['Booking'][0]?.ticket.event.id}
                  eventName={x['Booking'][0]?.ticket.event.name}
                  className="z-10"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
