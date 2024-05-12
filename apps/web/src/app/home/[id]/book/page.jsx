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
import { Switch } from '@/components/ui/switch';

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

  // console.log('useVoucher', useVouchers);
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

  // console.log(voucherAmount);
  return (
    <div className="pt-[50px] flex-col gap-3 w-full">
      <h1 className="flex justify-center items-center w-full bg-purple-100 h-[50px] text-2xl">
        Order Details
      </h1>

     
      
        <div className="w-full lg:flex">

           {/* left section for desktop */}
          <div className="px-5 lg:flex-col lg:flex lg:w-1/2 lg:pl-[100px] lg:justify-center">
            <div>
              {/* event details */}
              <div className="flex-col pt-3">
                <Image
                  src={baseURL}
                  width={100}
                  height={100}
                  unoptimized={true}
                  className="w-[100%] h-[150px] rounded-t-md object-cover hover:object-fill"
                  alt="event picture"
                />
                <p className="text-xl font-medium">{publishedEvent.name}</p>
                <p className="text-sm">
                  {publishedEvent.location} | {eventDuration}
                </p>
              </div>
              {/* event details */}

              {/* ticket details */}
              <div className="flex flex-col justify-between pt-2">
                {bookingDataCopy.map((x) => (
                  <div className="flex justify-between">
                    <div>
                      <p>{x.details.ticketName}</p>
                      <p className="text-xs italic">
                        {x.details.ticketDescription}
                      </p>
                    </div>
                    <div className="text-sm text-center">
                      <p>Quantity</p>
                      <p>{x.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* ticket details */}

              {/* Buyer Detail */}
              <div>
                <h1 className="text font-bold pt-5">Buyer Details</h1>
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
                        <div className="w-full pt-2">
                          <div className="relative h-10 w-full min-w-[200px]">
                            <Field
                              type="text"
                              name="name"
                              className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                              placeholder=" "
                            />
                            <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                              Buyer Name (as written in ID card)
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
              {/* Buyer Detail */}
            </div>
          </div>
          {/* left section for desktop */}

          {/* right section for desktop */}
          <div className="pt-5 px-5 lg:w-1/2 lg:pr-[100px] lg:px-0">
            <h1 className="font-bold">Pricing Details</h1>
            <h1 className="bg-pink-100 mt-2">Tickets</h1>

            {bookingDataCopy.map((x) => (
              <div className="text-sm flex justify-between">
                <p>
                  {x.details.ticketName} ({x.qty})
                </p>
                <p>{toCurrency(x.qty * x.details.ticketPrice)}</p>
              </div>
            ))}

            <h1 className="bg-pink-100 mt-2">Other fees</h1>
            <div className="text-sm flex justify-between">
              <p className="italic">Platform fee</p>
              <p>{toCurrency(0)}</p>
            </div>

            <div className="text-lg flex justify-between border-t-2 border-dashed border-slate-200 mt-2">
              <p className="font-bold">Total Price</p>
              <p className="font-medium">
                {toCurrency(
                  bookingDataCopy.reduce(
                    (acc, x) => acc + x.details.ticketPrice * x.qty,
                    0,
                  ) *
                    (voucherAmount > 0 ? 1 - voucherAmount : 1) -
                    (usePoints ? points.length * 10000 : 0),
                )}
              </p>
            </div>

            {useVouchers ? (
              <div className="text-sm flex justify-between">
                <p>Vouchers</p>
                <p className="text-red-500">
                  -{' '}
                  {toCurrency(
                    bookingDataCopy.reduce(
                      (acc, x) => acc + x.details.ticketPrice * x.qty,
                      0,
                    ) * voucherAmount,
                  )}
                </p>
              </div>
            ) : null}

            {usePoints ? (
              <div className="text-sm flex justify-between">
                <p>Points</p>
                <p className="text-red-500">
                  {' '}
                  - {toCurrency(points.length * 10000)}{' '}
                </p>
              </div>
            ) : null}

            <div className="flex justify-between items-center">
              {usePoints ? (
                <p className="font-bold">Points Used</p>
              ) : (
                <p>Use Points</p>
              )}
              <Switch onClick={() => setUsePoints(!usePoints)}></Switch>
            </div>
            <p className="italic text-sm">
              You have {points.length * 10000} points.
            </p>

            <div>
              <div className="py-2 flex justify-between items-center">
                {useVouchers ? (
                  <p className="font-bold">Voucher Used</p>
                ) : (
                  <p>Use Voucher</p>
                )}
                <Switch
                  disabled={true}
                  checked={useVouchers ? true : false}
                ></Switch>
              </div>

              {vouchers.map((x, i) => (
                <div
                  ref={voucherRef}
                  onClick={() => handleVoucherSet(x.id, Number(x.amount))}
                  className={`${
                    useVouchers
                      ? 'border-purple-500 border-2 rounded-lg'
                      : 'border-purple-300 border-dashed border rounded-lg'
                  } my-2 hover:bg-purple-100 transition`}
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

            <button
              onClick={() =>
                mutationPurchaseTicket({
                  bookingData,
                  usePoint: usePoints,
                  voucherId: useVouchers,
                })
              }
              type="submit"
              className="my-5 lg:w-full font-bold w-full relative bg-purple-500 rounded-full h-12 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full"
            >
              <span className="relative text-white tracking-widest text-lg">
                Make Payment
              </span>
            </button>
          </div>
          {/* right section for desktop */}
        </div>

      
    </div>
  );
}
