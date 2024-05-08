'use client';
import { useGetAllPublishedEvents } from '@/hooks/useGetPublicData';
import Image from 'next/image';
import { isSameDay } from 'date-fns';
import TicketComponent from '@/components/general/ticketCard';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function brandPage({ params }) {
  const { allPublishedEvents } = useGetAllPublishedEvents();
  let eventData = allPublishedEvents;
  const userState = useSelector((state) => state.user);
  const ticketState = useSelector((state) => state.ticket);
  console.log('ticket state', ticketState);
  console.log('user state', userState);
  console.log('user state uid', typeof userState.uid);
  const router = useRouter();
  if (!eventData) return <div className="pt-16">Loading...</div>;

  eventData = eventData.filter((x) => x.id == params.id);
  console.log(eventData);

  let eventDate;
  if (
    isSameDay(new Date(eventData[0].startDate), new Date(eventData[0].endDate))
  ) {
    const base = new Date(eventData[0].startDate);
    eventDate =
      base.getDate() + base.toLocaleString('default', { month: 'long' });
  } else {
    const baseStart = new Date(eventData[0].startDate);
    const baseEnd = new Date(eventData[0].endDate);
    eventDate =
      baseStart.getDate() +
      baseStart.toLocaleString('default', { month: 'long' }) +
      ' - ' +
      baseEnd.getDate() +
      baseEnd.toLocaleString('default', { month: 'long' }) +
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
    <div className="mx-auto flex lg:w-[70%] md:w-[80%] flex-col gap-5 pt-32">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_API_URL}${eventData[0].imageLink}`}
        width={100}
        height={100}
        alt="Image"
        unoptimized={true}
        className="w-full  h-[300px] lg:h-[25vw] rounded-xl object-cover"
      ></Image>
      <div className="text-2xl lg:text-4xl font-medium">
        {eventData[0].name}
      </div>
      <div id="details">
        <div>{eventDate}</div>
        <div>
          {eventData[0].startTime} - {eventData[0].endTime}
        </div>
        <div>{eventData[0].location}</div>
      </div>
      <div>
        Promoted by <span>{eventData[0].promotor.name}</span>
      </div>
      <div>
        <div className="font-bold">Description</div>
        <div>{eventData[0].description}</div>
      </div>
      <div>
        <div className="font-bold">Terms & Condition</div>
        <div>
          Para pemegang tiket wajib mengikuti peraturan yang sudah dibuat oleh
          pihak penyelenggara dan apabila terdapat pelanggaran dari peraturan
          tersebut, pihak penyelenggara berwewenang untuk mengeluarkan dan
          menghanguskan tiket ybs.
        </div>
      </div>
      <div>
        <div className="font-bold">Ticket</div>
        <div className="flex flex-col gap-3">
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
        <button
          onClick={handleBuy}
          disabled={ticketState.bookingData.length == 0 ? true : false}
          className="disabled:bg-slate-400 align-right text-white px-3 py-2 rounded-full bg-purple-500 hover:bg-purple-400"
        >
          Buy Ticket
        </button>
      </div>
    </div>
  );
}
