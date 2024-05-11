'use client';
import { useGetUserTransaction } from '@/hooks/user/useGetUserData';
import TransactionComponent from '@/components/user/transactionHistory';

export default function TransactionPage() {
  const { userTransaction } = useGetUserTransaction();

  if (!userTransaction) return <div>Loading...</div>;

  console.log(userTransaction);
  return (
    <div>
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
          ></TransactionComponent>
        ))}
      </div>
    </div>
  );
}
