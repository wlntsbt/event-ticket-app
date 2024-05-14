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

export default function MonthlyRevenue() {
  const { allEventsData } = useGetAllEvents();

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
  
  revenueData.map((x, i) => {
    x.totalRevenue = monthCounter[i].totalRevenue;
  });

  const CustomTooltip2 = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-white flex flex-col gap-4 rounded-md">
          <p className="text-medium text-lg">{label}</p>
          <p className="text-sm text-purple-500">
            Total Revenue
            <span className="ml-2">{payload[0].value}</span>
          </p>
        </div>
      );
    }
  };
  return (
    <div className='w-full'>
      <h1 className="text-left pl-5">Total Revenue per month</h1>
      <ResponsiveContainer width="100%" height={300} className="pt-5">
        <LineChart
          width={100}
          height={100}
          data={revenueData}
          margin={{
            right: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip2 />} />
          <Legend verticalAlign="bottom" />
          <Line type="monotone" dataKey="totalRevenue" stroke="violet" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
