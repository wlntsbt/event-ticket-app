'use client';

import React from 'react';
import Link from 'next/link';
import { Form, Formik, Field } from 'formik';
import { useAuthLogin } from '@/hooks/useCreateAccount';

export default function LoginPage() {
  const { mutationAuth } = useAuthLogin();

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div className="w-1/2 hidden bg-purple-400 bg-no-repeat bg-cover relative items-center lg:flex">
        <div className="w-full px-24">
          <h1 className="tracking-widest drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] text-5xl hover:text-black font-bold font-[Poppins]">
            LETSGOIN!
          </h1>
          <p className="text-3xl my-4 italic">
            "Insert Your Company Tagline Here"
          </p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <p>© Copyright 2024 by Bogi & Wulan</p>
        </div>
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            console.log(values);
            mutationAuth({ email: values.email, password: values.password });
          }}
        >
          <div className="w-full py-6 z-20">
            <h1 className="my-6 text-black text-3xl tracking-wider">
              WELCOME TO LESGOIN!
            </h1>

            <div className='px-5'>
            <Form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="relative h-10 w-full min-w-[200px]">
                <Field
                  type="text"
                  name="email"
                  className="peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                  placeholder=""
                />
                <label className="absolute left-0 -top-1.5 flex h-full w-full before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                  Input Your Email
                </label>
              </div>

              <div className="relative h-10 w-full min-w-[200px] mt-5">
                <Field
                  type="password"
                  name="password"
                  placeholder=""
                  className="peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                />
                <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                  Input Your Password
                </label>
              </div>

              <div className="pt-2 text-sm text-right text-black hover:underline hover:text-red-500">
                <a href="#">Forgot your password?</a>
              </div>

              <div className="pb-2 pt-4">
                <button
                  type="submit"
                  className="w-full relative bg-purple-700 rounded-lg h-12 before:absolute before:inset-0 before:bg-purple-400 before:scale-x-0 before:origin-top before:transition before:duration-500 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-lg"
                >
                  <span className="relative text-white tracking-widest text-lg">LOGIN</span>
                </button>
              </div>
            </Form>
            </div>
          </div>
        </Formik>
      </div>
    </section>
  );
}
