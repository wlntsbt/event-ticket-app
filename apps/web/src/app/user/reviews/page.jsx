'use client';
import React from 'react';
import { useGetUserReview } from '@/hooks/user/useGetUserData';

function ReviewPage() {
  const { userReview } = useGetUserReview();

  if (!userReview) return <div>Loading...</div>;
  console.log(userReview);
  return (
    <div className="pt-[20px] scroll-smooth">
      <h1 className="flex justify-center items-center w-full bg-purple-100 h-[50px] text-2xl">
        Reviews
      </h1>
    </div>
  );
}

export default ReviewPage;
