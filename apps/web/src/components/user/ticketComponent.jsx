'use client';
import { isPast } from 'date-fns';
import Image from 'next/image';

export default function AttendeeTicketComponent({ eventName, tickets, key }) {
  return (
    <div key={key} className="py-5 flex-col p-5 lg:w-1/2 lg:mx-auto">
      <h1 className="text-xl py-2 text-center">{eventName}</h1>
      {tickets.map((j, k) => (
        <div className="p-2 lg:flex">
          <div className="flex h-[100px] bg-yellow-200 border-2 border-b-0 border-slate-500 rounded-b-lg rounded-t-md lg:w-[560px] lg:border-b-2 lg:border-r-0 lg:rounded-r-lg lg:rounded-md lg:h-[150px]">
            <div className="h-full">
              <Image
                src={`http://localhost:8000/${j.ticket.event.imageLink}`}
                width={100}
                height={100}
                alt="Event Picture"
                unoptimized={true}
                className=" rounded-l h-full w-full pb-[1px] object-right object-cover"
              />
            </div>

            <div key={k} className="text-left p-2 w-full flex-col flex justify-between h-full">
              <h1 className="text-md truncate font-medium" title={j.ticket.event.name}>
                {j.ticket.event.name}
              </h1>
              <p className="font-mono text-[12px]">TICKET ID {j.id}</p>
            </div>
          </div>

          <div className="border-slate-500 mx-[9px] border-dotted border lg:mx-0 lg:border-t-0 lg:border-b-0 lg:border-r-0 lg:h-[140px] lg:border-2 lg:mt-[5px]"></div>

          <div className="h-[50px] bg-yellow-100 border-slate-500 border-2 rounded-t-lg rounded-b-md border-t-0 lg:w-[220px] lg:border-l-0 lg:border-t-2 lg:rounded-l-lg lg:rounded-r-md lg:h-[150px]">
            <h1 className='flex items-center justify-start w-full h-full p-5'>{j.ticket.ticketName}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <div className="text-xl">{eventName}</div>
      {tickets.map((j, k) => (
        <div key={k} className="p-5 mb-5 flex gap-5 border rounded-xl w-full">
          <Image
            src={`http://localhost:8000/${j.ticket.event.imageLink}`}
            width={100}
            height={100}
            alt="Event Picture"
            unoptimized
            className="rounded-md object-cover"
          />
          <div>
            <div>{j.ticket.event.name}</div>
            <div>TICKET ID {j.id}</div>
            <div>{j.ticket.ticketName}</div>
          </div>
        </div>
      ))}
    </div> */
}
