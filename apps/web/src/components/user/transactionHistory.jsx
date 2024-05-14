import { isPast } from 'date-fns';
import CreateReview from './reviewForm';
import { useState } from 'react';

export default function TransactionComponent({
  billId,
  ticketName,
  bookingData,
  total,
  status,
  startDate,
  eventId,
  eventName,
  isReviewPublished,
}) {
  return (
    <div className="border border-purple-500 w-[70%] rounded-lg bg-gradient-to-r from-purple-200 drop-shadow-md">
      <div className="flex justify-between">
        <div className="flex flex-col p-5 w-[70%]">
          <div>
            <h1 className="font-mono text-[10px]">Bill ID: {billId}</h1>
            <p className="text-xl truncate font-medium" title={ticketName}>
              {ticketName}
            </p>
          </div>

          <div>
            {bookingData.map((x, i) => (
              <p className="italic">
                {x.ticket.ticketName} -{' '}
                <span className="text-red-500">x{x.qty}</span>
              </p>
            ))}
          </div>

          <p className="font-bold pt-2">
            Total:{' '}
            {total.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
            })}
          </p>
        </div>

        <div className="flex-col flex justify-center items-center p-5 w-[30%]">
          <p
            className={`${
              status == 'PAID' ? 'bg-green-600' : 'bg-red-500'
            } border rounded-full text-white font-bold px-3 py-[2px]`}
          >
            {status}
          </p>
          {/* {status === 'PAID' &&
          !isPast(new Date(startDate)) ? null : isReviewPublished ? (
            <p className="border border-purple-500 p-[8px] rounded-full font-bold text-[11px] bg-white">
              Review Published!
            </p>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              type="submit"
              className="p-[8px] mt-5 font-bold relative w-[113px] bg-purple-500 rounded-full h-[35px] before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full "
            >
              <span className="relative text-white tracking-wide font-bold flex justify-center text-[11px] hover:text-black">
                Write a Review
              </span>
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
}
