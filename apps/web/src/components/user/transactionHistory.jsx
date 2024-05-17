import { isPast } from 'date-fns';
import CreateReview from './reviewForm';
import { useState } from 'react';
import { IoTicketOutline } from "react-icons/io5";

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
            <h1 className="font-mono text-[10px] text-stone-800">Bill ID: {billId}</h1>
            <p className="text-lg truncate font-medium flex items-center gap-1 lg:text-xl" title={ticketName}>
              <span><IoTicketOutline className='text-[15px]'/></span>
              {ticketName}
            </p>
          </div>

          <div>
            {bookingData.map((x, i) => (
              <p className="italic text-[14px]">
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
        </div>
      </div>
    </div>
  );
}
