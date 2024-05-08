'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useGetAllPublishedEvents } from '@/hooks/useGetPublicData';
import EventCardComponent from '@/components/general/eventCard';
import HeroCarousel from '@/components/general/heroCarousel';

export default function HomePage() {
  const stateUser = useSelector((state) => state.user);
  const { allPublishedEvents } = useGetAllPublishedEvents();

  if (!allPublishedEvents) return <div>Loading...</div>;

  return (
    <div className="py-[80px] lg:px-[100px]">
      <div>
        <p>Hello, {stateUser ? stateUser.uid : 'User'}</p>
      </div>

      <div className="px-5">
        <HeroCarousel />
      </div>
      <div className="grid justify-center lg:flex">
        {allPublishedEvents.map((x, i) => (
          <Link href={`/home/${x.id}`}>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
