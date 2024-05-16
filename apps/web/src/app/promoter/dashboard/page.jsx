'use client';

import { useGetAllEvents } from '@/hooks/promoter/useEvent';
import Spinner from '@/components/general/spinner';
import PromoterReviewComponent from '@/components/promoter/reviewComponent';
import MonthlyTicketSales from '@/components/promoter/charts/monthlyTicketSales';
import MonthlyRevenue from '@/components/promoter/charts/monthlyRevenue';

export default function Dashboard() {
  const { allEventsData } = useGetAllEvents();
  if (!allEventsData) return <Spinner />;

  console.log('>>>>>>', allEventsData);
  return (
    <div className="pt-10">
      <h1 className="flex justify-center items-center w-full h-[50px] bg-purple-600 font-bold text-xl text-white uppercase tracking-wider">
        PROMOTER STATISTIC
      </h1>

      <div className="pt-5 flex flex-col justify-center w-full lg:flex-row">
        <MonthlyTicketSales />
        <MonthlyRevenue />
      </div>

      <div className="pt-10">
        <h1 className="flex justify-center items-center w-full h-[50px] bg-purple-600 font-bold text-xl text-white uppercase tracking-wider">
          Attendee Reviews
        </h1>
        <div className="">
          {allEventsData.map((x, i) =>
            x.Review.map((j, k) => (
              <div className="flex flex-col justify-center items-center">
                <PromoterReviewComponent
                  key={k}
                  username={j.attendee.username}
                  eventName={j.eventName.name}
                  rating={j.rating}
                  feedback={j.feedback}
                />
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
}
