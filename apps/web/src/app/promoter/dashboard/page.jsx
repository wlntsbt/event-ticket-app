'use client';

import { useGetAllEvents } from '@/hooks/promoter/useEvent';
import Spinner from '@/components/general/spinner';
import PromoterReviewComponent from '@/components/promoter/reviewComponent';
import MonthlyTicketSales from '@/components/promoter/charts/monthlyTicketSales';
import MonthlyRevenue from '@/components/promoter/charts/monthlyRevenue';

export default function Dashboard() {
  const { allEventsData } = useGetAllEvents();
  if (!allEventsData) return <Spinner />


  return (
    <div className="pt-10">
      <h1 className="flex justify-center items-center w-full bg-purple-100 h-[50px] text-2xl">
        PROMOTER STATISTIC
      </h1>

      <div className="pt-5 flex flex-col justify-center w-full lg:flex-row">
        <MonthlyTicketSales />
        <MonthlyRevenue />
      </div>

      <div className="pt-10 mx-auto">
        {allEventsData.map((x, i) =>
          x.Review.map((j, k) => (
            <PromoterReviewComponent
              key={k}
              username={j.attendee.username}
              eventName={j.eventName.name}
              rating={j.rating}
              feedback={j.feedback}
            />
          )),
        )}
      </div>
    </div>
  );
}
