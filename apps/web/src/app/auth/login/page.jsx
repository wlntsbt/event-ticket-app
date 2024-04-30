'use client';

import React from 'react';
import Link from 'next/link';
import { Form, Formik, Field } from 'formik';
import { useAuthLogin } from '@/hooks/useCreateAccount';

export default function LoginPage() {
  const { mutationAuth } = useAuthLogin()

  return (
    <section className="min-h-screen flex items-stretch text-white ">

      <div className="w-1/2 hidden bg-violet-300 bg-no-repeat bg-cover relative items-center lg:flex">
        <div className="w-full px-24">
          <h1 className="tracking-widest drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] text-5xl hover:text-black font-bold font-[Poppins]">LETSGOIN!</h1>
          <p className="text-3xl my-4 italic">"Insert Your Company Tagline Here"</p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <p>© Copyright 2024 by Bogi & Wulan</p>
        </div>
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0">
        <Formik
        initialValues={{
          email: "",
          password:"",
        }}
        onSubmit={(values) => {
          console.log(values);
          mutationAuth({ email: values.email, password: values.password })
        }}
        >

        <div className="w-full py-6 z-20">
            <h1 className="my-6 text-black text-3xl tracking-wider">WELCOME TO LESGOIN!</h1>

            <Form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
              <Field type="text" name ="email" placeholder="Input Your Email" className="w-full p-4 text-lg rounded-xl border-black border bg-white text-black" />
            </div>

            <div className="pb-2 pt-4">
              <Field type="pasword" name="password" placeholder="Input Your Password" className="w-full p-4 text-lg rounded-xl border-black border bg-white text-black" />
            </div>

            <div className="text-right text-teal-400 hover:underline hover:text-red-500">
              <a href="#">Forgot your password?</a>
            </div>

            <div className="px-4 pb-2 pt-4">
              <button type="submit" className="w-full p-4 text-lg rounded-full bg-teal-700 hover:bg-teal-500 focus:outline-none">SIGN IN</button>
            </div>
            </Form>

        </div>
          </Formik>
      </div>
    </section>
  );
}
