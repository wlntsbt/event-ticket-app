'use client';
import React from 'react';
import Spinner from '@/components/general/spinner';
import { Form, Formik, Field } from 'formik';
import { useGetPromoterInfo } from '../../../hooks/promoter/useGetPromoterData';
export default function PromoterProfile() {
  const { promoterInfo } = useGetPromoterInfo();

  if (!promoterInfo) return <Spinner />;

  console.log(promoterInfo);
  return (
    <div>
      <div className="pt-[20px] scroll-smooth">
        <h1 className="flex justify-center items-center w-full h-[50px] bg-purple-600 font-bold text-xl text-white uppercase tracking-wider">
          PROMOTER PROFILE
        </h1>
      </div>
      <div>
        <Formik
          initialValues={{
            name: promoterInfo.name,
            username: promoterInfo.username,
            email: promoterInfo.email,
            location: promoterInfo.location,
            phone: promoterInfo.location,
            password: promoterInfo.password,
          }}
        >
          {({ dirty }) => {
            return (
              <Form>
                <div className=" pt-5 flex flex-col px-10 gap-1 h-full lg:w-1/2 lg:mx-auto">
                  <label>Promoter Name</label>
                  <Field
                    type="text"
                    name="name"
                    className="border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
                  />
                  <label>Username</label>
                  <Field
                    type="text"
                    name="username"
                    className="border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
                  />
                  <label>Email</label>
                  <Field
                    type="text"
                    name="email"
                    disabled={true}
                    className="disabled:text-purple-500 cursor-not-allowed disabled:bg-gray-200 border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
                  />
                  <label>Location</label>
                  <Field
                    as="select"
                    name="location"
                    className="border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
                  >
                    <option defaultChecked value="">Select Location</option>
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
                  </Field>
                  <label>Phone</label>
                  <Field
                    type="text"
                    name="phone"
                    className="border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
                  />
                  <label>Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
                  />

                  <button
                    type="submit"
                    className="my-5 font-bold w-full relative bg-purple-500 rounded-full h-12 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full"
                  >
                    <span className="relative text-white tracking-widest text-lg">
                      UPDATE
                    </span>
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
