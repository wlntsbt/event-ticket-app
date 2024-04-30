import React from 'react';
import OptionAttendee from '@/components/optionRegister/optionAttendee'
import OptionPromoter from '@/components/optionRegister/optionPromoter'

export default function RegistrationPage() {
  return (
    <div className="py-[50px] bg-violet-200 bg-no-repeat bg-cover px-[50px] h-screen font-[Poppins] lg:px-[100px] lg:py-[100px]">
      <h1 className="flex items-center justify-center text-center pt-5 text-xl font-black tracking-widest">
        SELECT YOUR ROLE
      </h1>
      <div className="grid justify-center text-center m-5 gap-[50px] lg:flex lg:gap-[100px]">
       <OptionAttendee className="hover:shadow-xl transform hover:scale-110 transition duration-500"/>
       <OptionPromoter className="hover:shadow-xl transform hover:scale-110 transition duration-500"/>
      </div>
    </div>
  );
}
