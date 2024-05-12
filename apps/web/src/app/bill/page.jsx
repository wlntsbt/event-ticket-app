'use client';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Spinner from '@/components/general/spinner';
import { GoInfo } from 'react-icons/go';
export default function BillPage() {
  const billInfo = useSelector((state) => state.bill);

  if (!billInfo.billId) return <Spinner />;

  return (
    <div className="flex flex-col pt-[50px] px-5 w-full lg:mx-auto lg:w-[50%] lg:py-[100px]">
      <div className="border-purple-200 border rounded-lg p-2 m-2 bg-purple-50">
        <h1 className="font-mono">Bill ID: {billInfo.billId}</h1>

        <div className="text-sm pt-2">
          <h1>Details</h1>

          <div className="flex flex-row justify-between">
            <p>status: </p>
            <p className="text-orange-500">{billInfo.status}</p>
          </div>

          {billInfo.booking.map((x, i) => (
            <p>
              {x.ticket.ticketName} -
              {x.ticket.ticketPrice.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
              })}
              - {x.qty}
            </p>
          ))}
          <ul className="list-disc pl-3">
            {billInfo.useVoucher ? <li>Voucher Used</li> : null}
            {billInfo.usePoint ? <li> Point Used</li> : null}
          </ul>
        </div>

        <div className="flex flex-row justify-between font-medium border-t-2 border-dashed border-gray-200">
          <p>Total:</p>
          <p>
            {billInfo.total.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
            })}
          </p>
        </div>
      </div>

      <Link href={'/'}>
        <button
          type="submit"
          className="my-5 lg:w-full font-bold w-full relative bg-purple-500 rounded-full h-12 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full"
        >
          <span className="relative text-white tracking-widest text-lg">
            Back to Home
          </span>
        </button>
      </Link>
    </div>
  );
}
