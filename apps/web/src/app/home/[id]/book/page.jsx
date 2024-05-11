'use client';
import { useGetPublishedEvent } from '@/hooks/useGetPublicData';
import { useGetUserPromo } from '@/hooks/user/useGetUserData';
import Image from 'next/image';
import { isSameDay } from 'date-fns';
import TicketComponent from '@/components/general/ticketCard';
import { useSelector } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation';
import { Formik, Field, Form } from 'formik';
import { useState, useRef, useEffect } from 'react';
import { isPast } from 'date-fns';
import VoucherComponent from '@/components/general/voucherComponent';
import { useCreatePurchase } from '@/hooks/user/useTicket';

export default function BookingPage() {
  const pathname = usePathname();
  const { publishedEvent } = useGetPublishedEvent(pathname.split('/')[2]);
  let { bookingData } = JSON.parse(localStorage.getItem('ticket'));
  const [usePoints, setUsePoints] = useState(false);
  const [useVouchers, setUseVouchers] = useState(0);
  const [voucherAmount, setVoucherAmount] = useState(0);
  const { userPromo } = useGetUserPromo();
  const voucherRef = useRef(null);

  const { mutationPurchaseTicket } = useCreatePurchase();
  const router = useRouter();

  if (!publishedEvent || !userPromo)
    return <div className="pt-16">Loading...</div>;

  const points = userPromo.Points.filter((x) => !isPast(new Date(x.expiredAt)));
  const vouchers = userPromo.Vouchers.filter(
    (x) => !isPast(new Date(x.expiredAt)),
  );

  console.log('useVoucher', useVouchers);
  const bookingDataCopy = JSON.parse(JSON.stringify(bookingData));
  bookingDataCopy
    .filter((x) => x.qty > 0)
    .map(
      (x) =>
        (x.details = publishedEvent?.Ticket.find(
          (ticket) => ticket.id === x.ticketId,
        )),
    );

  const baseURL =
    process.env.NEXT_PUBLIC_BASE_API_URL + publishedEvent.imageLink;

  let eventDuration;
  if (
    isSameDay(
      new Date(publishedEvent.startDate),
      new Date(publishedEvent.endDate),
    )
  ) {
    const base = new Date(publishedEvent.startDate);
    eventDuration =
      base.getDate() +
      ' ' +
      base.toLocaleString('default', { month: 'long' }) +
      ' ' +
      base.getFullYear();
  } else {
    const baseStart = new Date(publishedEvent.startDate);
    const baseEnd = new Date(publishedEvent.endDate);
    eventDuration =
      baseStart.getDate() +
      ' ' +
      baseStart.toLocaleString('default', { month: 'long' }) +
      ' - ' +
      baseEnd.getDate() +
      ' ' +
      baseEnd.toLocaleString('default', { month: 'long' }) +
      ' ' +
      baseEnd.getFullYear();
  }

  function toCurrency(num) {
    return num.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
  }

  const handleVoucherSet = (id, amount) => {
    if (useVouchers === 0) {
      setUseVouchers(id);
      setVoucherAmount(amount);
    } else {
      setUseVouchers(0);
      setVoucherAmount(0);
    }
  };

  console.log(voucherAmount);
  return (
    <div className="pt-16 grid grid-rows-2 gap-3 grid-flow-col w-[80%]">
      <div className="bg-pink-50 ">
        <div className="text font-bold">Order Details</div>
        <div className="flex">
          <Image
            src={baseURL}
            width={100}
            height={100}
            // className="w-[100%] h-[150px] rounded-t-md object-cover"
            alt="event picture"
          />
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-xl font-medium">{publishedEvent.name}</div>
              <div className="text-sm">
                {publishedEvent.location} | {eventDuration}
              </div>
            </div>
            {bookingDataCopy.map((x) => (
              <div className="flex justify-between">
                <div>
                  <div>{x.details.ticketName}</div>
                  <div className="text-xs italic">
                    {x.details.ticketDescription}
                  </div>
                </div>
                <div>
                  <div className="text-sm">Quantity</div>
                  <div>{x.qty}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="text font-bold">Buyer Details</div>
        <div>
          <Formik
            initialValues={{
              ticketName: '',
              ticketAmount: 0,
              ticketPrice: 0,
              ticketDescription: '',
              salesStart: '',
              salesEnd: '',
            }}
          >
            {({ dirty }) => {
              return (
                <Form>
                  <div className="rounded-xl w-[50%]">
                    <div className="relative h-10 w-full min-w-[200px]">
                      <Field
                        type="text"
                        name="name"
                        className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                        placeholder=" "
                      />
                      <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                        Buyer name (as written in ID card)
                      </label>
                    </div>

                    <div className="relative h-10 w-full min-w-[200px] mt-5">
                      <Field
                        type="text"
                        name="phone"
                        className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                        placeholder=" "
                      />
                      <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                        Phone
                      </label>
                    </div>

                    <div className="relative h-10 w-full min-w-[200px] mt-5">
                      <Field
                        type="email"
                        name="email"
                        className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                        placeholder=" "
                      />
                      <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                        Email
                      </label>
                    </div>

                    <div class="relative w-full min-w-[200px] mt-5">
                      <Field
                        type="text"
                        name="idcard"
                        className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                        placeholder=" "
                      />
                      <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                        ID card number
                      </label>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>

      <div>
        <div className="font-bold">Pricing Details</div>
        <div>
          <div className="bg-pink-100">Tickets</div>
          {bookingDataCopy.map((x) => (
            <div className="text-sm flex justify-between">
              <div>
                {x.details.ticketName} ({x.qty})
              </div>
              <div>{toCurrency(x.qty * x.details.ticketPrice)}</div>
            </div>
          ))}

          <div className="bg-pink-100">Other fees</div>
          <div>
            <div className="text-sm flex justify-between">
              <div>Platform fee</div>
              <div>{toCurrency(0)}</div>
            </div>
          </div>

          <div className="flex justify-between">
            <div>Total Price</div>
            <div>
              {toCurrency(
                bookingDataCopy.reduce(
                  (acc, x) => acc + x.details.ticketPrice * x.qty,
                  0,
                ) *
                  (voucherAmount > 0 ? 1 - voucherAmount : 1) -
                  (usePoints ? points.length * 10000 : 0),
              )}
            </div>
          </div>

          {useVouchers ? (
            <div className="text-sm flex justify-between">
              <div>Vouchers</div>
              <div>
                -{' '}
                {toCurrency(
                  bookingDataCopy.reduce(
                    (acc, x) => acc + x.details.ticketPrice * x.qty,
                    0,
                  ) * voucherAmount,
                )}
              </div>
            </div>
          ) : null}

          {usePoints ? (
            <div className="text-sm flex justify-between">
              <div>Points</div>
              <div> - {toCurrency(points.length * 10000)} </div>
            </div>
          ) : null}

          <div>
            <div
              onClick={() => setUsePoints(!usePoints)}
              className={`${usePoints ? 'bg-purple-600' : 'bg-purple-300'} p-2`}
            >
              Use points
            </div>
            <div>You have {points.length * 10000} points.</div>
          </div>

          <div>
            <div
              className={`${useVouchers ? 'bg-pink-600' : 'bg-pink-300'} p-2`}
            >
              Use Voucher
            </div>
            {vouchers.map((x, i) => (
              <div
                ref={voucherRef}
                onClick={() => handleVoucherSet(x.id, Number(x.amount))}
              >
                <VoucherComponent
                  key={i}
                  expiredAt={x.expiredAt}
                  description={x.description}
                  amount={x.amount}
                ></VoucherComponent>
              </div>
            ))}
          </div>
        </div>

        <button
          className="p-3 align-center bg-purple-600 text-white rounded-lg"
          onClick={() =>
            mutationPurchaseTicket({
              bookingData,
              usePoint: usePoints,
              voucherId: useVouchers,
            })
          }
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}
