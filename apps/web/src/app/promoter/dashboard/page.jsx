'use client';

import { useSelector } from 'react-redux';
import PromoterMenuBar from '@/components/promoter/menuBar';
import { useGetAllEvents } from '@/hooks/promoter/useEvent';
import Spinner from '@/components/general/spinner';
import PromoterReviewComponent from '@/components/promoter/reviewComponent';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Dashboard() {
  const { allEventsData } = useGetAllEvents();

  if (!allEventsData) return <Spinner />;

  const salesData = [
    {
      name: 'Jan',
      totalPurchase: 4000,
    },
    {
      name: 'Feb',
      totalPurchase: 3000,
    },
    {
      name: 'Mar',
      totalPurchase: 9800,
    },
    {
      name: 'Apr',
      totalPurchase: 3908,
    },
    {
      name: 'May',
      totalPurchase: 4800,
    },
    {
      name: 'Jun',
      totalPurchase: 3800,
    },
    {
      name: 'Jul',
      totalPurchase: 4000,
    },
    {
      name: 'Aug',
      totalPurchase: 40000,
    },
    {
      name: 'Sept',
      totalPurchase: 40000,
    },
    {
      name: 'Oct',
      totalPurchase: 40000,
    },
    {
      name: 'Nov',
      totalPurchase: 40000,
    },
    {
      name: 'Dec',
      totalPurchase: 40000,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-white flex flex-col gap-4 rounded-md">
          <p className="text-medium text-lg">{label}</p>
          <p className="text-sm text-blue-400">
            Ticket Purchase
            <span className="ml-2">{payload[0].value}</span>
          </p>
        </div>
      );
    }
  };

  const monthCounter = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
  };

  // console.log(
  //   allEventsData.map((x, i) =>
  //     x.Ticket.map((j, k) =>
  //       j.AttendeeTicket.map((m, n) => new Date(m.createdAt)),
  //     ),
  //   ),
  // );

  allEventsData.forEach((x, i) =>
    x.Ticket.forEach((j, k) =>
      j.AttendeeTicket.forEach(
        (m, n) =>
          (monthCounter[new Date(m.createdAt).getMonth().toString()] += 1),
      ),
    ),
  );

  console.log('INI MONTH COUNTER', monthCounter);

  salesData.map((x, i) => (x.totalPurchase = monthCounter[i]));

  console.log(salesData);

  return (
    <div className="pt-32">
      <h1 className="flex justify-center items-center w-full h-[50px] text-2xl lg:w-1/2">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={100}
            height={100}
            data={salesData}
            margin={{
              right: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="bottom" />
            <Line type="monotone" dataKey="totalPurchase" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </h1>
      <div className="pt-32">
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
