'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useGetAllPublishedEvents } from '@/hooks/useGetPublicData';
import EventCardComponent from '@/components/general/eventCard';
import HeroCarousel from '@/components/general/heroCarousel';
import SearchBar from '@/components/general/searchBar';
import { useEffect, useState } from 'react';
import MockComponent from '@/app/mock/page';
import Spinner from '@/components/general/spinner';

export default function HomePage() {
  const { allPublishedEvents } = useGetAllPublishedEvents();
  const [location, setLocation] = useState('JAKARTA');
  const [category, setCategory] = useState('Entertainment');
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    if (allPublishedEvents !== null) {
      console.log('lokasinya di', location);
      console.log('search value dr child', searchValue);
    }
  }, [location, allPublishedEvents, category, searchValue]);

  const handleSearchValue = (val) => {
    setSearchValue(val);
  };

  if (!allPublishedEvents) {
    return (
      <Spinner/>
    );
  } else {
    return (
      <div className="w-full py-[80px] px-[20px] lg:px-[100px]">
        <div>
          <h1 className="text-center text-2xl">
            How's it goin!?
            <span className="hover:text-purple-500">LESGOIN!</span>
          </h1>
          <div className="lg:w-[500px] mx-auto">
            <SearchBar childValue={handleSearchValue} />
          </div>

          {searchValue ? (
            <MockComponent query={searchValue}/>
          ) : (
            <div>
              <div>
                <HeroCarousel />
              </div>
              <div className="w-full flex justify-center lg:justify-start">
                <h1 className="w-[180px] pt-5 text-center text-2xl text-purple-700 relative after:bg-purple-500 after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer lg:pl-10 lg:text-left lg:text-3xl lg:w-[230px] lg:hover:after:w-[200px] lg:hover:after:ml-[35px]">
                  LATEST EVENT
                </h1>
              </div>

              <div className="w-full grid justify-center lg:flex-wrap lg:flex lg:justify-normal lg:mx-[18px]">
                {allPublishedEvents.map((x, i) => (
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

              <div className="w-full flex justify-center lg:justify-start">
                <div className="flex w-[180px] pt-5 text-center text-2xl text-purple-700 relative after:bg-purple-500 after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer lg:pl-10 lg:text-left lg:text-3xl lg:w-full lg:hover:after:w-[200px] lg:hover:after:ml-[35px]">
                  FIND EVENT IN
                </div>
                <select
                  onChange={(e) => setLocation(e.target.value)}
                  id="location"
                  name="location"
                >
                  <option value="JAKARTA">JAKARTA</option>
                  <option value="BALI">BALI</option>
                  <option value="BANDUNG">BANDUNG</option>
                </select>
              </div>

              <div className="w-full grid justify-center lg:flex-wrap lg:flex lg:justify-normal lg:mx-[18px]">
                {allPublishedEvents
                  .filter((x) => x.location === location)
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

              <div className="w-full flex justify-center lg:justify-start">
                <div className="flex w-[180px] pt-5 text-center text-2xl text-purple-700 relative after:bg-purple-500 after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer lg:pl-10 lg:text-left lg:text-3xl lg:w-full lg:hover:after:w-[200px] lg:hover:after:ml-[35px]">
                  BASED ON CATEGORY
                </div>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  id="category"
                  name="category"
                >
                  <option value="Entertainment">Entertainment</option>
                  <option value="Social">Social</option>
                  <option value="Seminar">Seminar</option>
                </select>
              </div>

              <div className="w-full grid justify-center lg:flex-wrap lg:flex lg:justify-normal lg:mx-[18px]">
                {allPublishedEvents
                  .filter((x) => x.category === category)
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
          )}
        </div>
      </div>
    );
  }
}
