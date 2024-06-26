'use client';

import Link from 'next/link';
import { useGetAllPublishedEvents } from '@/hooks/useGetPublicData';
import EventCardComponent from '@/components/general/eventCard';
import HeroCarousel from '@/components/general/heroCarousel';
import SearchBar from '@/components/general/searchBar';
import { useEffect, useState } from 'react';
import MockComponent from '@/app/mock/page';
import Spinner from '@/components/general/spinner';
import { useDispatch } from 'react-redux';
import { setPage } from '@/redux/slice/pageSlice';
import { isThisMonth } from 'date-fns';

export default function HomePage() {
  const { allPublishedEvents } = useGetAllPublishedEvents();
  const [location, setLocation] = useState('JAKARTA');
  const [category, setCategory] = useState('Entertainment');
  const [searchValue, setSearchValue] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (allPublishedEvents !== null) {
    // }
    if (!searchValue) {
      dispatch(setPage({ currentPage: 0 }));
    }
  }, [location, allPublishedEvents, category, searchValue]);

  const handleSearchValue = (val) => {
    setSearchValue(val);
  };

  if (!allPublishedEvents) {
    return <Spinner />;
  } else {
    allPublishedEvents.sort(
      (a, b) => new Date(b.endDate) - new Date(a.endDate),
    );
    return (
      <div className="scroll-smooth w-full py-[80px] px-[20px] lg:px-[100px] bg-gradient-to-b from-purple-400 from-[3%] lg:from-[10%] via-white via-[7%] lg:via-[20%] to-white to-100%">
        <div>
          <div className="lg:w-[500px] mx-auto">
            <h1 className="text-center text-2xl">
              How's it goin!?
              <span className="text-transparent bg-gradient-to-r from-pink-400 to-violet-600 bg-clip-text font-bold tracking-wide">
                {' '}
                LESGOIN!
              </span>
            </h1>
            <SearchBar childValue={handleSearchValue} />
          </div>

          {searchValue ? (
            <MockComponent query={searchValue} />
          ) : (
            <div>
              <div className="mx auto mx-[5px] pt-5">
                <HeroCarousel />
              </div>

              <div className="w-full flex justify-center">
                <h1 className="group pt-7 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 transition duration-200 w-fit mx-auto text-[22px] font-bold tracking-widest">
                  LATEST EVENT
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
                </h1>
              </div>

              <div className="w-full grid justify-center lg:flex-wrap lg:flex lg:justify-normal lg:mx-[18px]">
                {allPublishedEvents.slice(0, 10).map((x, i) => (
                  <Link href={`home/${x.id}`}>
                    <EventCardComponent
                      key={i}
                      name={x.name}
                      startDate={x.startDate}
                      endDate={x.endDate}
                      location={x.location}
                      promoter={x.promotor?.name}
                      price={x.Ticket[0]?.ticketPrice}
                      image={x.imageLink}
                    ></EventCardComponent>
                  </Link>
                ))}
              </div>

              <div className="py-16 w-1/2 lg:w-1/4 mx-auto">
                <Link href="/">
                  <button
                    type="submit"
                    className="font-bold w-full relative bg-purple-500 rounded-full h-12 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full"
                  >
                    <span className="relative text-white tracking-widest text-lg">
                      BROWSE EVENTS
                    </span>
                  </button>
                </Link>
              </div>

              <div className="w-full flex justify-center">
                <h1 className="group bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 transition duration-200 w-fit mx-auto text-[22px] font-bold tracking-widest">
                  THIS MONTH'S EVENTS
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
                </h1>
              </div>

              <div className="w-full grid justify-center lg:flex-wrap lg:flex lg:justify-normal lg:mx-[18px]">
                {allPublishedEvents
                  .filter((x) => isThisMonth(new Date(x.startDate)))
                  .slice(0, 10)
                  .map((x, i) => (
                    <Link href={`home/${x.id}`}>
                      <EventCardComponent
                        key={i}
                        name={x.name}
                        startDate={x.startDate}
                        endDate={x.endDate}
                        location={x.location}
                        promoter={x.promotor?.name}
                        price={x.Ticket[0]?.ticketPrice}
                        image={x.imageLink}
                      ></EventCardComponent>
                    </Link>
                  ))}
              </div>

              <div className="pt-5 w-full border-t border-gray-400 flex justify-center items-center gap-2 lg:justify-center">
                <h1 className="group bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 transition duration-200 w-fit text-[22px] font-bold tracking-widest">
                  BASED ON LOCATION
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
                </h1>
                <select
                  onChange={(e) => setLocation(e.target.value)}
                  id="location"
                  name="location"
                  className="border rounded-xl w-fit h-fit p-[5px] bg-purple-50"
                >
                  <option value="JAKARTA">JAKARTA</option>
                  <option value="BANDUNG">BANDUNG</option>
                  <option value="YOGYAKARTA">YOGYAKARTA</option>
                  <option value="BALI">BALI</option>
                  <option value="SEMARANG">SEMARANG</option>
                  <option value="SURABAYA">SURABAYA</option>
                  <option value="BOGOR">BOGOR</option>
                  <option value="DEPOK">DEPOK</option>
                  <option value="TANGERANG">TANGERANG</option>
                  <option value="BEKASI">BEKASI</option>
                </select>
              </div>

              <div className="w-full pb-10">
                <div className="flex overflow-x-scroll">
                  {allPublishedEvents
                    .filter((x) => x.location === location)
                    .slice(0, 5)
                    .map((x, i) => (
                      <Link href={`home/${x.id}`}>
                        <EventCardComponent
                          key={i}
                          name={x.name}
                          startDate={x.startDate}
                          endDate={x.endDate}
                          location={x.location}
                          promoter={x.promotor?.name}
                          price={x.Ticket[0]?.ticketPrice}
                          image={x.imageLink}
                        ></EventCardComponent>
                      </Link>
                    ))}
                </div>
              </div>

              <div className="pt-5 w-full border-t border-gray-400 flex justify-center items-center gap-2 lg:justify-center">
                <h1 className="group text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 transition duration-200 w-fit text-[20px] font-bold tracking-widest">
                  BASED ON CATEGORY
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
                </h1>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  id="category"
                  name="category"
                  className="border rounded-xl w-fit h-fit p-[5px] bg-purple-50"
                >
                  <option value="Entertainment">Entertainment</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Social">Social</option>
                  <option value="Bazaar">Bazaar</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="w-full">
                <div className="flex overflow-x-scroll">
                  {allPublishedEvents
                    .filter((x) => x.category === category)
                    .slice(0, 5)
                    .map((x, i) => (
                      <Link href={`home/${x.id}`}>
                        <EventCardComponent
                          key={i}
                          name={x.name}
                          startDate={x.startDate}
                          endDate={x.endDate}
                          location={x.location}
                          promoter={x.promotor?.name}
                          price={x.Ticket[0]?.ticketPrice}
                          image={x.imageLink}
                        ></EventCardComponent>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
