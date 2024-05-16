import React from 'react';
import Spinner from '@/components/general/spinner';
import { Form, Formik, Field } from 'formik';

export default function PromoterProfile() {


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
            }}
        >
          {({ dirty }) => {
            return (
              <Form>
                <div className="flex flex-col px-10 gap-1 h-full lg:w-1/2 lg:mx-auto">
                  <label>First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    className="border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
                  />
                  <label>Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
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
                    className="disabled:text-purple-500 disabled:bg-gray-200 border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
                  />
                  <label>Date of Birth</label>
                  <Field
                    type="date"
                    name="dob"
                    className="border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
                  />
                  <label>Phone</label>
                  <Field
                    type="text"
                    name="phone"
                    className="border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
                  />
                  <label>ID Card Number</label>
                  <Field
                    type="text"
                    name="idCardNumber"
                    className="border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
                  />
                  <label>Member Code</label>
                  <Field
                    type="text"
                    name="referralCode"
                    disabled={true}
                    className="disabled:text-purple-500 disabled:bg-gray-200 border border-black rounded-lg p-2 focus:outline-none focus:border-purple-500 focus:border-2"
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