import React from 'react';
import Link from 'next/link';

export default function OptionPromoter() {
  return (
    <Link href={'/auth/register/promoter'}>
      <div className="bg-white w-[400px] h-[150px] rounded-full hover:shadow-slate-800 hover:shadow-[0_5px_10px_rgba(0,0,0,0.5)] lg:w-[400px] lg:h-[200px]">
        <div className="text-sm lg:text-base">
          <div className="text-purple-500 pt-10 text-[22px] font-bold tracking-widest h-[50px] flex items-center justify-center">
            PROMOTER
          </div>

          <div className="text-center pt-[35px]">
            <button className=" bg-deep-purple-500 rounded-full p-2 text-white hover:bg-deep-purple-300">
              CREATE NOW
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
