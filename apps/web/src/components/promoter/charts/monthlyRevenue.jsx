import { useGetAllEvents } from '@/hooks/promoter/useEvent';
import {
  BarChart,
  Bar,
  Rectangle,
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
      totalRevenue: 4.000,
    },
    {
      name: 'Feb',
      totalRevenue: 3.000,
    },
    {
      name: 'Mar',
      totalRevenue: 9.800,
    },
    {
      name: 'Apr',
      totalRevenue: 3.908,
    },
    {
      name: 'May',
      totalRevenue: 4.800,
    },
    {
      name: 'Jun',
      totalRevenue: 3.800,
    },
    {
      name: 'Jul',
      totalRevenue: 4.000,
    },
    {
      name: 'Aug',
      totalRevenue: 40.000,
    },
    {
      name: 'Sept',
      totalRevenue: 40.000,
    },
    {
      name: 'Oct',
      totalRevenue: 40.000,
    },
    {
      name: 'Nov',
      totalRevenue: 40.000,
    },
    {
      name: 'Dec',
      totalRevenue: 40.000,
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
    x.totalRevenue = monthCounter[i].totalRevenue
  });

  const CustomTooltip2 = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-1 flex flex-col rounded-md bg-purple-50">
          <p className="text-medium text-lg">{label}</p>
          <p className="text-sm text-purple-500">
            Total Revenue
            <span className="ml-2">{payload[0].value.toLocaleString(('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }))}</span>
          </p>
        </div>
      );
    }
  };
  return (
    <div className='w-full'>
      <h1 className="text-left pl-5">Total Revenue per month</h1>
      <ResponsiveContainer width="100%" height={300} className="pt-5 pl-5">
        <BarChart
          barSize={20}
          width={100}
          height={100}
          data={revenueData}
          margin={{
            right: 10,
            left: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickSize={5} tickFormatter={value => `${value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`}/>
          <Tooltip content={<CustomTooltip2 />} />
          <Legend verticalAlign="bottom" />
          <Bar dataKey="totalRevenue" fill="#82ca9d" activeBar={<Rectangle fill="pink" stroke="pink" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
