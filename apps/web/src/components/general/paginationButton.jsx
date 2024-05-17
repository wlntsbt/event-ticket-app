import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPage } from '@/redux/slice/pageSlice';

export function CircularPagination({ searchLength }) {
  const pageState = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(setPage({ currentPage: pageState.currentPage + 1 }));
  };

  const handlePrev = () => {
    dispatch(setPage({ currentPage: pageState.currentPage - 1 }));
  };

  const handleClick = (i) => {
    dispatch(setPage({ currentPage: i }));
  };

  return (
    <div className="flex items-center gap-4">
      <button
        disabled={pageState.currentPage === 0 ? true : false}
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      {Array(searchLength)
        .fill(null)
        .map((x, i) => (
          <div
            onClick={() => handleClick(i)}
            className={`${
              i == pageState.currentPage
                ? 'bg-purple-600 text-white'
                : 'text-purple-700'
            } px-5 py-2 rounded-full`}
          >
            {i + 1}
          </div>
        ))}
      <button
        disabled={pageState.currentPage === searchLength - 1 ? true : false}
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
