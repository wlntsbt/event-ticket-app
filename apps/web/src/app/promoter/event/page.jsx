'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useGetAllEvents } from '../../../hooks/promoter/useEvent';
import EventDraftComponent from '@/components/promoter/eventDraftComponent';

export default function PromoterPage() {
  const { allEventsData } = useGetAllEvents();
  if (allEventsData == undefined) return <div>Loading...</div>;
  console.log('page fetch', allEventsData);

  return (
    <div className="pt-32">
      <div>INI EVENT PAGE PUNYA PROMOTER</div>
      <Link href={'/promoter/event/new'}>
        <div className="bg-pink-200">Create New Event</div>
      </Link>
      <div className='flex gap-8'>
        {allEventsData.map((x, i) => (
          <EventDraftComponent
            name={x.name}
            key={i}
            ticketId={x.id}
            createdAt={x.createdAt}
            imageLink={x.imageLink}
            isPublished={x.isPublished}
          />
        ))}
      </div>
    </div>
  );
}
