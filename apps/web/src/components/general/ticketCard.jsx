'use client';
import { isPast } from 'date-fns';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  addTicket,
  updateTicket,
  removeTicket,
} from '@/redux/slice/ticketSlice';

export default function TicketComponent({
  ticketId,
  ticketName,
  ticketPrice,
  ticketAmount,
  ticketDescription,
  salesEnd,
}) {
  const ticketState = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  console.log('ticketState', ticketState, ticketId);
  const [numOfTicket, setNumOfTicket] = useState(0);

  const handleAdd = () => {
    setNumOfTicket(numOfTicket + 1);
    dispatch(addTicket({ ticketId: ticketId, qty: numOfTicket + 1 }));
    // let checkIfPresent = ticketState.bookingData.find({
    //   ticketId,
    //   qty: numOfTicket,
    // });
    // if (!checkIfPresent) {

    // } else {
    //   dispatch(updateTicket({ ticketId, qty: numOfTicket }));
    // }
  };

  const handleSubtract = () => {
    setNumOfTicket(numOfTicket - 1);
    dispatch(updateTicket({ ticketId, qty: numOfTicket - 1 }));
  };
  return (
    <div className="border w-[80%] bg-pink-50 rounded-xl">
      <div className="m-8 w-full flex flex-col">
        <div className="text-2xl">{ticketName}</div>
        <div>{ticketDescription}</div>
        <div className="">Price: IDR {ticketPrice}</div>
        <div>
          Sale ends on
          {new Date(salesEnd).toLocaleDateString('us-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        {ticketAmount > 0 ? (
          <div className="flex">
            <button
              disabled={numOfTicket === 0 ? true : false}
              onClick={handleSubtract}
              className="px-5 py-3 disabled:bg-purple-300 justify-center rounded-full bg-purple-500 text-white"
            >
              -
            </button>
            <div className="mx-4 my-3">{numOfTicket}</div>
            <button
              disabled={
                numOfTicket === 5 || numOfTicket >= ticketAmount ? true : false
              }
              onClick={handleAdd}
              className="px-5 py-3 disabled:bg-purple-300 rounded-full  bg-purple-500 text-white"
            >
              +
            </button>
          </div>
        ) : (
          'Sold Out'
        )}
      </div>
    </div>
  );
}
