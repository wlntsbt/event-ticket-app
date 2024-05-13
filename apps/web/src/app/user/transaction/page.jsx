'use client';
import { useGetUserTransaction } from '@/hooks/user/useGetUserData';
import TransactionComponent from '@/components/user/transactionHistory';
import { useSelector } from 'react-redux';

export default function TransactionPage() {
  const { userTransaction } = useGetUserTransaction();
  const userState = useSelector((state) => state.user);

  console.log('userState', userState);
  if (!userTransaction) return <div>Loading...</div>;

  console.log(userTransaction);
  return (
    <div className="pt-32">
      User Transaction Page
      <div>
        {userTransaction.map((x, i) => (
          <TransactionComponent
            billId={x.id}
            ticketName={
              x.status === 'PAID'
                ? x['AttendeeTicket'][0]?.ticket.event.name
                : x['Booking'][0]?.ticket.event.name
            }
            bookingData={x.Booking}
            total={x.total}
            status={x.status}
            startDate={x['Booking'][0]?.ticket.event.startDate}
          ></TransactionComponent>
        ))}
      </div>
    </div>
  );
}
