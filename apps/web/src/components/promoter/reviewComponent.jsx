'use client';
import Image from 'next/image';
import { Rating } from '@material-tailwind/react';
import { PiSmileyLight } from 'react-icons/pi';

export default function PromoterReviewComponent({
  key,
  username,
  eventName,
  rating,
  feedback,
}) {
  return (
    <div
      key={key}
      className="bg-purple-50 border-2 border-purple-500 rounded-lg p-3 m-5 lg:w-1/3"
    >
      <p className="flex items-center gap-1 bg-white border-purple-500 border rounded-full px-2 max-w-min uppercase">
        <PiSmileyLight />
        {username}
      </p>
      <p className="pt-5 font-bold uppercase truncate">{eventName}</p>
      <div>
        <Rating value={rating} className="text-purple-400 pt-2" readonly />
      </div>
      <p className="italic text-neutral-800">"{feedback}"</p>
    </div>
  );
}
