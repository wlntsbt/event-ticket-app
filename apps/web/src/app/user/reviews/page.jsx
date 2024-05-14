'use client';
import React from 'react';
import { useGetUserReview } from '@/hooks/user/useGetUserData';
import UserReviewComponent from '@/components/user/reviewComponent';

function ReviewPage() {
  const { userReview } = useGetUserReview();

  if (!userReview) return <div>Loading...</div>;
  console.log(userReview);
  return (
    <div className="pt-[20px] scroll-smooth">
      <h1 className="flex justify-center items-center w-full bg-purple-100 h-[50px] text-2xl">
        Reviews
      </h1>
      {userReview.map((x, i) => (
        <UserReviewComponent
          key={i}
          eventName={x.eventName.name}
          rating={x.rating}
          feedback={x.feedback}
          promoter={x.eventName.promotor.name}
        />
      ))}
    </div>
  );
}

export default ReviewPage;
