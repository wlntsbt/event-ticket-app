'use client';
import React, { useState, useEffect } from 'react';
import { useGetUserPromo } from '@/hooks/user/useGetUserData';
import { useGetSearchedEvents } from '@/hooks/useGetPublicData';
import EventCardComponent from '@/components/general/eventCard';
import Link from 'next/link';
import { axiosInstance } from '@/config/axios';

export default function MockComponent({ query, searchData }) {
  // let { searchedEvents, isLoading } = useGetSearchedEvents(query);

  const [searchedEvents, setSearchedEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const events = async() => {
    try {
      const res = await axiosInstance.get(`/public/search?q=${query}`);
      console.log(res.data.data);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetch = async() => {
      const data = await events()
      setSearchedEvents(data)
      setIsLoading(false)
    }

    fetch()
  }, [query]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (!searchedEvents) {
    return <div>No result for {query}</div>;
  } else {
    // searchData(searchedEvents);

    return (
      <div className="py-16">
        <div>Search result for "{query}"</div>
        <div className="flex">
          {searchedEvents.map((x, i) => (
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
      </div>
      // <div>LOADED</div>
    );
  }
}
