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
      totalTicketPurchased: 4000,
    },
    {
      name: 'Feb',
      totalTicketPurchased: 3000,
    },
    {
      name: 'Mar',
      totalTicketPurchased: 9800,
    },
    {
      name: 'Apr',
      totalTicketPurchased: 3908,
    },
    {
      name: 'May',
      totalTicketPurchased: 4800,
    },
    {
      name: 'Jun',
      totalTicketPurchased: 3800,
    },
    {
      name: 'Jul',
      totalTicketPurchased: 4000,
    },
    {
      name: 'Aug',
      totalTicketPurchased: 40000,
    },
    {
      name: 'Sept',
      totalTicketPurchased: 40000,
    },
    {
      name: 'Oct',
      totalTicketPurchased: 40000,
    },
    {
      name: 'Nov',
      totalTicketPurchased: 40000,
    },
    {
      name: 'Dec',
      totalTicketPurchased: 40000,
    },
  ];

  const revenueData = [
    {
      name: 'Jan',
      totalRevenue: 4000,
    },
    {
      name: 'Feb',
      totalRevenue: 3000,
    },
    {
      name: 'Mar',
      totalRevenue: 9800,
    },
    {
      name: 'Apr',
      totalRevenue: 3908,
    },
    {
      name: 'May',
      totalRevenue: 4800,
    },
    {
      name: 'Jun',
      totalRevenue: 3800,
    },
    {
      name: 'Jul',
      totalRevenue: 4000,
    },
    {
      name: 'Aug',
      totalRevenue: 40000,
    },
    {
      name: 'Sept',
      totalRevenue: 40000,
    },
    {
      name: 'Oct',
      totalRevenue: 40000,
    },
    {
      name: 'Nov',
      totalRevenue: 40000,
    },
    {
      name: 'Dec',
      totalRevenue: 40000,
    },
  ];

  const monthCounter = {
    0: {
      totalTicket: 0,
      totalRevenue: 0,
    },
    1: {
      totalTicket: 0,
      totalRevenue: 0,
    },
    2: {
      totalTicket: 0,
      totalRevenue: 0,
    },
    3: {
      totalTicket: 0,
      totalRevenue: 0,
    },
    4: {
      totalTicket: 0,
      totalRevenue: 0,
    },
    5: {
      totalTicket: 0,
      totalRevenue: 0,
    },
    6: {
      totalTicket: 0,
      totalRevenue: 0,
    },
    7: {
      totalTicket: 0,
      totalRevenue: 0,
    },
    8: {
      totalTicket: 0,
      totalRevenue: 0,
    },
    9: {
      totalTicket: 0,
      totalRevenue: 0,
    },
    10: {
      totalTicket: 0,
      totalRevenue: 0,
    },
    11: {
      totalTicket: 0,
      totalRevenue: 0,
    },
  };

  // console.log('apakah ada rev', allEventsData);

  allEventsData.forEach((x, i) =>
    x.Ticket.forEach((j, k) =>
      j.AttendeeTicket.forEach((m, n) => {
        monthCounter[new Date(m.createdAt).getMonth().toString()].totalTicket +=
          1;
        monthCounter[
          new Date(m.createdAt).getMonth().toString()
        ].totalRevenue += 1 * j.ticketPrice;
      }),
    ),
  );

  // console.log('INI MONTH COUNTER', monthCounter);

  salesData.map((x, i) => {
    x.totalTicketPurchased = monthCounter[i].totalTicket;
  });

  revenueData.map((x, i) => {
    x.totalRevenue = monthCounter[i].totalRevenue;
  });

  console.log(salesData);

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

  return (
    <div className="pt-32 px-16">
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
            <Line
              type="monotone"
              dataKey="totalTicketPurchased"
              stroke="#3b82f6"
            />
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
