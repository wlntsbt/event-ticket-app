import React from 'react';
import Link from 'next/link';

export default function OptionPromoter() {
  return (
    <Link href={'/auth/register/promoter'}>
      <div className="bg-purple-50 border border-gray-300 w-[400px] h-[150px] rounded-full hover:shadow-slate-800 hover:shadow-[0_5px_10px_rgba(0,0,0,0.5)] lg:w-[400px] lg:h-[200px]">
        <div className="text-sm lg:text-base">
          <h1 className=" group pt-7 text-center text-purple-500 transition duration-200 w-fit mx-auto text-[22px] font-bold tracking-widest">
            PROMOTER
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
          </h1>

          <div className="text-center pt-[35px]">
            <button className="border border-purple-700 bg-purple-50 font-medium rounded-full p-2 hover:bg-purple-300 ">
              CREATE NOW
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
