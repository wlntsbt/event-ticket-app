'use client';
import { useSelector } from 'react-redux';
import Link from 'next/link';
export default function BillPage() {
  const billInfo = useSelector((state) => state.bill);

  if (!billInfo.billId) return <div>Loading...</div>;

  return (
    <div className="flex flex-col pt-32">
      <div>Bill ID: {billInfo.billId}</div>
      <div className="text-sm">
        <div>Details</div>
        <div>status: {billInfo.status}</div>
        {billInfo.booking.map((x, i) => (
          <div>
            {x.ticket.ticketName} -
            {x.ticket.ticketPrice.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
            })}
            - {x.qty}
          </div>
        ))}
        <div className="flex">
          {billInfo.useVoucher ? <div>Voucher Used</div> : null}
          {billInfo.usePoint ? <div>Point Used</div> : null}
        </div>
      </div>
      <div>
        Total:
        {billInfo.total.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
        })}
      </div>
      <Link href={'/'} className="p-6 rounded-full bg-purple-600 text-white">
        Back to home
      </Link>
    </div>
  );
}
