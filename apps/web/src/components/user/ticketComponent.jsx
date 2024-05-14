'use client';
import { isPast } from 'date-fns';
import Image from 'next/image';

export default function AttendeeTicketComponent({ eventName, tickets, key }) {
  return (
    <>
      <div key={key} className=" w-[50%]">
        <div className="text-xl">{eventName}</div>
        {tickets.map((j, k) => (
          <div key={k} className="p-5 mb-5 flex gap-5 border rounded-xl">
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
      </div>
    </>
  );
}
