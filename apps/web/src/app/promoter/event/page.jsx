'use client';

import Link from 'next/link';
import { useGetAllEvents } from '@/hooks/promoter/useEvent';
import EventDraftComponent from '@/components/promoter/eventDraftComponent';
import PromoComponent from '@/components/promoter/promoComponent';
import Spinner from '@/components/general/spinner';
import { FaPlus } from 'react-icons/fa6';

export default function PromoterPage() {
  const { allEventsData } = useGetAllEvents();

  if (!allEventsData) return <Spinner />;
  return (
    <div className="pt-[20px] scroll-smooth">
      <h1 className="flex justify-center items-center w-full h-[50px] bg-purple-600 font-bold text-xl text-white uppercase tracking-wider">
        EVENT DRAFT
      </h1>

      <div className="lg:mx-[100px]">
        <div className="flex justify-center pt-5 gap-5 lg:justify-start w-full">
          <Link href={'/promoter/event/new'}>
            <button className="w-[200px] font-bold relative bg-purple-500 rounded-full h-12 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full">
              <span className="relative text-white tracking-widest flex items-center justify-center gap-2">
                <FaPlus />
                CREATE EVENT
              </span>
            </button>
          </Link>

          <Link href={'/promoter/event/promo'}>
            <button className="w-[200px] font-bold relative bg-purple-500 rounded-full h-12 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full">
              <span className="relative text-white tracking-widest flex items-center justify-center gap-2">
                <FaPlus />
                CREATE PROMO
              </span>
            </button>
          </Link>
        </div>

        <div className="flex p-7">
          {allEventsData?.map((x, i) =>
            x.Discount.map((j, k) => (
              <PromoComponent
                expiredAt={j.expiredAt}
                eventName={x.name}
                amount={j.amount}
                description={j.description}
                stock={j.stock}
              />
            )),
          )}
        </div>

        <div className="grid w-full justify-center lg:flex lg:flex-wrap pt-5 lg:gap-x-[85px] lg:justify-start">
          {allEventsData?.map((x, i) => (
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
    </div>
  );
}
