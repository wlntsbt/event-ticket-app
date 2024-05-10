'use client';
import { isPast } from 'date-fns';
import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
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
  };

  const handleSubtract = () => {
    setNumOfTicket(numOfTicket - 1);
    dispatch(updateTicket({ ticketId, qty: numOfTicket - 1 }));
  };

  return (
    <div className="lg:flex py-5">
      <div className="h-[150px] bg-yellow-200 border-2 border-b-0 border-slate-500 rounded-b-lg rounded-t-md lg:w-[500px] lg:border-b-2 lg:border-r-0 lg:rounded-r-lg lg:rounded-md lg:h-[183px]">
        <div className="text-left p-5">
          <h1 className="text-2xl underline">{ticketName}</h1>
          <p className="text-[14px]">{ticketDescription}</p>
          <p className="italic font-medium">Price: IDR {ticketPrice}</p>
        </div>
      </div>

      <div className="border-slate-500 mx-[9px] border-dashed border lg:w-0 lg:mx-0 lg:rounded-l-lg lg:border-t-0 lg:border-b-0 lg:border-r-0 lg:h-[155px] lg:mt-[18px] lg:border-2"></div>

      <div className="h-[120px] bg-yellow-100 border-slate-500 border-2 rounded-t-lg rounded-b-md border-t-0 lg:w-[220px] lg:border-l-0 lg:border-t-2 lg:rounded-l-lg lg:rounded-r-md lg:h-[183px]">
        <div className="flex gap-2 p-2 lg:flex-col lg:gap-0">
          <h1>Sale ends on</h1>
          <p>
            {new Date(salesEnd).toLocaleDateString('us-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {ticketAmount > 0 ? (
          <div className="flex justify-end w-full pr-5 lg:pt-5 lg:justify-center lg:pr-0">
            <button
              disabled={numOfTicket === 0 ? true : false}
              onClick={handleSubtract}
              className="px-4 py-3 disabled:bg-purple-300 justify-center rounded-full bg-purple-500 text-white border-black border"
            >
              <FaMinus/>
            </button>
            <div className="mx-4 my-3">{numOfTicket}</div>
            <button
              disabled={
                numOfTicket === 5 || numOfTicket >= ticketAmount ? true : false
              }
              onClick={handleAdd}
              className="px-4 py-3 disabled:bg-purple-300 rounded-full  bg-purple-500 text-white border-black border"
            >
              <FaPlus/>
            </button>
          </div>
        ) : (
          'Sold Out'
        )}
        <p className='italic w-full text-right p-2 text-[12px] text-slate-600 lg:text-center lg:pt-5'>*maximal 5 tickets per user</p>
      </div>

    </div>
  );
}
