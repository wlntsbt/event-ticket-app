'use client';
import Image from 'next/image';

export default function PromoterReviewComponent({
  key,
  username,
  eventName,
  rating,
  feedback,
}) {
  return (
    <>
      <div key={key} className=" w-[50%]">
        <div>{username}</div>
        <div>{eventName}</div>
        <div>{rating}</div> {/* material tailwind rating bar value={rating} */}
        <div>{feedback}</div>
      </div>
    </>
  );
}
