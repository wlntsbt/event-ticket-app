'use client';
import Image from 'next/image';
import { Rating } from '@material-tailwind/react';
import { FaCircleUser } from 'react-icons/fa6';

export default function UserReviewComponent({
  key,
  eventName,
  rating,
  feedback,
  promoter,
}) {
  return (
    <>
      <div
        key={key}
        className="border rounded-lg p-5 border-purple-700 bg-purple-50"
      >
        <h1 className="text-[20px] text-purple-700 font-semibold">{eventName}</h1>
        <div className="flex items-center gap-1">
          <FaCircleUser className="text-purple-500" />
          <p className=" font-medium text-[15px]">{promoter}</p>
        </div>

        <Rating value={rating} className="text-purple-400 pt-2" readonly />

        <p className="italic">"{feedback}"</p>
      </div>
    </>
  );
}
