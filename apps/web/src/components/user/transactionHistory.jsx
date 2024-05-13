import { isPast } from 'date-fns';

export default function TransactionComponent({
  billId,
  ticketName,
  bookingData,
  total,
  status,
  startDate,
}) {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col p-8 rounded-lg">
          <div className="">Bill ID: {billId}</div>
          <div className="flex">
            <div className="text-xl">{ticketName}</div>
            <div>{status}</div>
          </div>
          <div>
            {bookingData.map((x, i) => (
              <div>
                {x.ticket.ticketName} x {x.qty}
              </div>
            ))}
          </div>
          <div>
            Total:{' '}
            {total.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
            })}
          </div>
        </div>
        {status === 'PAID' && isPast(new Date(startDate)) ? (
          <div>Write a review</div>
        ) : null}
      </div>
    </>
  );
}
