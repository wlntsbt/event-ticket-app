'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useGetAllPublishedEvents } from '@/hooks/useGetPublicData';
import EventCardComponent from '@/components/general/eventCard';
import HeroCarousel from '@/components/general/heroCarousel';
import SearchBar from '@/components/general/searchBar';

export default function HomePage() {
  const stateUser = useSelector((state) => state.user);
  const { allPublishedEvents } = useGetAllPublishedEvents();

  if (!allPublishedEvents)
    return (
      <div class="pt-[100px] grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <svg
          class="w-16 h-16 animate-spin text-purple-500/50"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-purple-900"
          ></path>
        </svg>
      </div>
    );
  const router = useRouter();
  return (
    <div className="w-full py-[80px] px-[20px] lg:px-[100px]">
      <div>
        <h1 className="text-center text-2xl">
          How's it goin!?
          <span className="hover:text-purple-500">LESGOIN!</span>
        </h1>
        <div className="lg:w-[500px] mx-auto">
          <SearchBar />
        </div>
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
      </div>
    </div>
  );
}
