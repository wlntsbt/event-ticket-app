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
  const salesData = [];

  const eventKeys = [];

  const monthCounter = {
    0: {
      name: 'Jan',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
    1: {
      name: 'Feb',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
    2: {
      name: 'Mar',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
    3: {
      name: 'Apr',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
    4: {
      name: 'May',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
    5: {
      name: 'Jun',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
    6: {
      name: 'Jul',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
    7: {
      name: 'Aug',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
    8: {
      name: 'Sept',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
    9: {
      name: 'Oct',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
    10: {
      name: 'Nov',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
    11: {
      name: 'Dec',
      'Total Ticket': 0,
      totalRevenue: 0,
    },
  };

  for (let key in monthCounter) {
    allEventsData.forEach((x, i) => {
      monthCounter[key][x.name] = 0;
      if (!eventKeys.includes(x.name)) eventKeys.push(x.name);
    });
  }

  allEventsData.forEach((x, i) =>
    x.Ticket.forEach((j, k) =>
      j.AttendeeTicket.forEach((m, n) => {
        monthCounter[new Date(m.createdAt).getMonth().toString()][
          'Total Ticket'
        ] += 1;
        monthCounter[
          new Date(m.createdAt).getMonth().toString()
        ].totalRevenue += 1 * j.ticketPrice;
        monthCounter[new Date(m.createdAt).getMonth().toString()][x.name] += 1;
      }),
    ),
  );

  for (let key in monthCounter) {
    salesData.push(monthCounter[key]);
  }

  console.log('new sales data', salesData);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-1 flex flex-col rounded-md bg-purple-50">
          <p className="text-medium text-lg">{label}</p>
          {/* {console.log('***', payload[0].payload['Scent of Indonesia'])} */}
          {payload.map((x, i) => (
            <p className="text-sm text-blue-400">
              {x.dataKey}
              <span className="ml-2">{payload[i].payload[x.dataKey]}</span>
            </p>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="w-full">
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
          <Line type="monotone" dataKey="Total Ticket" stroke="#3b82f6" />
          {eventKeys?.map((x, i) => (
            <Line type="monotone" dataKey={x} stroke="#3b82f6" />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
