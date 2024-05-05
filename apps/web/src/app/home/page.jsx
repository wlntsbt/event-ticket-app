'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useGetAllPublishedEvents } from '@/hooks/useGetPublicData';
import EventCardComponent from '@/components/general/eventCard';

export default function HomePage() {
  const stateUser = useSelector((state) => state.user);
  const { allPublishedEvents } = useGetAllPublishedEvents();

  if (!allPublishedEvents) return <div>Loading...</div>;

  console.log('all published events', allPublishedEvents);
  return (
    <div className="h-screen py-[50px] bg-gradient-to-b from-blue-200 to-cyan-200">
      Hello, {stateUser ? stateUser.uid : 'User'}
      {allPublishedEvents.map((x, i) => (
        <EventCardComponent
          key={i}
          name={x.name}
          startDate={x.startDate}
          endDate={x.endDate}
          location={x.location}
          promoter={x.promotor?.name}
          price={x.Ticket[0]?.ticketPrice}
          image={x.imageLink}
        ></EventCardComponent>
      ))}
    </div>
  );
}
