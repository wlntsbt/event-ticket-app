import { isSameDay } from 'date-fns';
import Image from 'next/image';
export default function EventCardComponent({
  name,
  startDate,
  endDate,
  location,
  promoter,
  image,
  price,
}) {
  let eventDuration;
  if (isSameDay(new Date(startDate), new Date(endDate))) {
    const base = new Date(startDate);
    eventDuration = base.getDate() + base.getMonth();
  } else {
    const baseStart = new Date(startDate);
    const baseEnd = new Date(endDate);
    eventDuration =
      baseStart.getDate() +
      baseStart.toLocaleString('default', { month: 'long' }) +
      ' - ' +
      baseEnd.getDate() +
      baseEnd.toLocaleString('default', { month: 'long' }) +
      baseEnd.getFullYear();
  }
  return (
    <div className="w-[300px] h-auto p-6 border">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_API_URL}${image}`}
        width={100}
        height={100}
        alt="Image"
        className="w-[100%] h-[200px] rounded-xl"
      ></Image>
      <div className="text-xl">{name}</div>
      <div className="text-sm">{eventDuration}</div>
      <div className="text-sm">Location: {location}</div>
      <div className="font-bold">IDR {price}</div>
      <div className="mt-5 pt-1 border-t">{promoter}</div>
    </div>
  );
}
