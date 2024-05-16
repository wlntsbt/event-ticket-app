'use client';
import React, { useState, useEffect } from 'react';
import { useGetUserPromo } from '@/hooks/user/useGetUserData';
import { useGetSearchedEvents } from '@/hooks/useGetPublicData';
import EventCardComponent from '@/components/general/eventCard';
import Link from 'next/link';
import { axiosInstance } from '@/config/axios';
import { CircularPagination } from '@/components/general/paginationButton';
import { useSelector } from 'react-redux';
export default function MockComponent({ query }) {
  const pageState = useSelector((state) => state.page);
  const [searchedEvents, setSearchedEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const take = 8;
  const events = async () => {
    try {
      const res = await axiosInstance.get(
        `/public/search?q=${query}&take=${take}&skip=${
          pageState.currentPage * take
        }`,
      );
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await events();
      setSearchedEvents(data);
      setIsLoading(false);
    };

    fetch();
  }, [query, pageState]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (!searchedEvents) {
    return <div>No result for {query}</div>;
  } else {
    return (
      <div className="py-16 flex flex-col items-center gap-8 w-full">
        <div>Search result for "{query}"</div>
        <div className="flex flex-wrap w-[80%]">
          {searchedEvents.perPage
            .sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
            .map((x, i) => (
              <Link href={`home/${x.id}`} key={i}>
                <EventCardComponent
                  name={x.name}
                  startDate={x.startDate}
                  endDate={x.endDate}
                  location={x.location}
                  promoter={x.promotor?.name}
                  price={x.Ticket[0]?.ticketPrice}
                  image={x.imageLink}
                />
              </Link>
            ))}
        </div>
        <CircularPagination searchLength={searchedEvents.totalPage} />
      </div>
    );
  }
}
