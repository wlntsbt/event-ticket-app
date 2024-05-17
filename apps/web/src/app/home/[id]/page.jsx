'use client';
import { useGetAllPublishedEvents } from '@/hooks/useGetPublicData';
import Image from 'next/image';
import { isSameDay, isPast } from 'date-fns';
import TicketComponent from '@/components/general/ticketCard';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/general/spinner';

export default function brandPage({ params }) {
  const { allPublishedEvents } = useGetAllPublishedEvents();
  let eventData = allPublishedEvents;
  const userState = useSelector((state) => state.user);
  const ticketState = useSelector((state) => state.ticket);
  const router = useRouter();

  if (!eventData) return <Spinner />;

  eventData = eventData.filter((x) => x.id == params.id);

  let eventDate;
  if (
    isSameDay(new Date(eventData[0].startDate), new Date(eventData[0].endDate))
  ) {
    const base = new Date(eventData[0].startDate);
    eventDate =
      base.getDate() +
      ' ' +
      base.toLocaleString('default', { month: 'long' }) +
      ' ' +
      base.getFullYear();
  } else {
    const baseStart = new Date(eventData[0].startDate);
    const baseEnd = new Date(eventData[0].endDate);
    eventDate =
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

  const handleBuy = () => {
    if (!userState.uid) {
      router.push(`/auth/register/user`);
    } else if (userState.role === 'PROMOTER') {
      alert(
        'You are using promoter account. Tickets can only be purchased through attendee account!',
      );
      router.push(`/`);
    } else {
      localStorage.setItem('ticket', JSON.stringify(ticketState));
      router.push(`${params.id}/book`);
    }
  };

  return (
    <div className="w-full h-full pt-[80px] pb-10 flex-col items-center mx-auto md:w-[80%]">
      <div className="w-full">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_API_URL}${eventData[0].imageLink}`}
          width={100}
          height={100}
          alt="Event Banner"
          unoptimized={true}
          className="w-full h-[300px] object-cover lg:rounded-[17px] lg:h-[400px]"
        ></Image>
      </div>

      <h1 className="text-2xl font-medium pt-3 tracking-wide px-5 lg:px-0 lg:text-4xl">
        {eventData[0].name}
      </h1>

      <div className="px-5 lg:px-0">
        <p className="lg:text-xl">{eventDate}</p>
        <div>
          {new Date(eventData[0].startTime).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}{' '}
          -{' '}
          {new Date(eventData[0].endTime).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </div>
        <div className="underline">{eventData[0].location}</div>

        <div className="text-[14px] lg:text-[18px]">
          Promoted by{' '}
          <span className="italic">{eventData[0].promotor.name}</span>
        </div>
        <div>
          <h1 className="font-bold pt-5">Description</h1>
          <p className="text-[14px] lg:text-[18px]">
            {eventData[0].description}
          </p>
        </div>
        <div>
          <h1 className="font-bold pt-5">Terms & Condition</h1>
          <p className="text-[14px] lg:text-[18px]">
            Para pemegang tiket wajib mengikuti peraturan yang sudah dibuat oleh
            pihak penyelenggara dan apabila terdapat pelanggaran dari peraturan
            tersebut, pihak penyelenggara berwewenang untuk mengeluarkan dan
            menghanguskan tiket ybs.
          </p>
        </div>
      </div>

      <div className="pt-5 px-5 lg:px-0">
        <h1 className="font-bold">Ticket</h1>

        <div className="flex flex-col pt-2 w-full">
          {eventData[0].Ticket.map((x, i) => (
            <TicketComponent
              key={i}
              ticketId={x.id}
              ticketName={x.ticketName}
              ticketPrice={x.ticketPrice}
              ticketAmount={x.ticketAmount}
              ticketDescription={x.ticketDescription}
              salesEnd={x.salesEnd}
            />
          ))}
        </div>

        <div className="h-full w-full lg:w-[500px]">
          <button
            onClick={handleBuy}
            type="submit"
            disabled={
              ticketState.bookingData.length == 0
                ? true
                : isPast(new Date(eventData[0].endDate))
                  ? true
                  : false
            }
            className="disabled:bg-slate-400 disabled:before:bg-slate-400 font-bold w-full relative bg-purple-500 rounded-full h-12 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full"
          >
            <span className="relative text-white tracking-widest text-lg">
              {isPast(new Date(eventData[0].endDate))
                ? 'EVENT HAS ENDED'
                : 'BUY TICKET'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
