

import { useGetAllEvents } from '@/hooks/promoter/useEvent';

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

export default function MonthlyTicketSales() {
  const { allEventsData } = useGetAllEvents();
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

  salesData.map((x, i) => {
    x.totalTicketPurchased = monthCounter[i].totalTicket;
  });

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
    <div className='w-full'>
      <h1 className="text-left pl-5">Total Ticket Purchased per month</h1>
      <ResponsiveContainer width="100%" height={300} className="pt-5">
        <LineChart
          width={100}
          height={100}
          data={salesData}
          margin={{
            right: 50,
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
    </div>
  );
}
