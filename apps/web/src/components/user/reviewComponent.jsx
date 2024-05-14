'use client';
import Image from 'next/image';

export default function UserReviewComponent({
  key,
  eventName,
  rating,
  feedback,
  promoter,
}) {
  return (
    <>
      <div key={key} className=" w-[50%]">
        <div>{eventName}</div>
        <div>{promoter}</div>
        <div>{rating}</div> {/* material tailwind rating bar value={rating} */}
        <div>{feedback}</div>
      </div>
    </>
  );
}
