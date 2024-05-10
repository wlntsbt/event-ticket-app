import { isSameDay } from 'date-fns';
import Image from 'next/image';
import { FaCircleUser } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { PiCalendarDuotone } from 'react-icons/pi';
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
    eventDuration =
      base.getDate() +
      ' ' +
      base.toLocaleString('default', { month: 'long' }) +
      ' ' +
      base.getFullYear();
  } else {
    const baseStart = new Date(startDate);
    const baseEnd = new Date(endDate);
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
  // price = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  const replaced = image.replace(/\\/g, '/');
  return (
    <div className="w-[300px] bg-white border rounded-[17px] mx-5 my-5 overflow-hidden drop-shadow-md hover:cursor-pointer">
      <Image
        src={`http://localhost:8000/${image}`}
        width={100}
        height={100}
        unoptimized={true}
        alt="Event Image"
        className="w-[100%] h-[150px] rounded-t-md object-cover"
      ></Image>

      <div className="flex flex-col justify-between h-full pt-3">
        <div className="flex flex-col gap-1 pl-3">
          <h1 className="text-[18px] font-medium tracking-wide text-wrap">
            {name}
          </h1>
          <p className="text-sm italic flex items-center gap-1" title='Event Duration'>
            <span className='text-purple-700'><PiCalendarDuotone /></span>
            {eventDuration}
          </p>
          <p className="text-sm flex items-center gap-1" title='Location'>
            <span className='text-purple-700'><IoLocationOutline /></span>
            {location}
          </p>
          <p className="font-bold italic">IDR {price}</p>
        </div>

        <div className="h-full w-full pt-3">
          <p className="p-[10px] bg-purple-200 flex items-center gap-2">
            <span className='text-purple-700'><FaCircleUser /></span>
            {promoter}
          </p>
        </div>
      </div>
    </div>
  );
}
