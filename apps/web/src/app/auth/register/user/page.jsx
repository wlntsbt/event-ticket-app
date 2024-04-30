'use client';
import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import { useUserRegister } from '@/hooks/useRegisterAccount';
export default function AttendeeRegistrationPage() {
  const { mutationUserRegister } = useUserRegister();
  return (
    <div className="w-[50vw] mx-12">
      <Formik
        initialValues={{
          email: '',
          password: '',
          username: '',
          firstName: '',
          lastName: '',
        }}
        onSubmit={(values) => {
          console.log(values);

          const {
            email,
            password,
            username,
            firstName,
            lastName,
            phone,
            dob,
            memberCode,
            idCardNumber,
          } = values;

          mutationUserRegister({
            email,
            password,
            username,
            firstName,
            lastName,
            phone,
            dob,
            memberCode,
            idCardNumber,
          });
        }}
      >
        <Form>
          <div className="flex flex-col items-center px-5 py-10 gap-3">
            <label className="form-control w-full p-3 border rounded-xl">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <Field
                type="text"
                name="email"
                placeholder="Type Email"
                className="input input-bordered p-2 rounded-xl w-full"
              />
            </label>
            <label className="form-control w-full p-3 border rounded-xl">
              <div className="label">
                <span className="label-text">Username</span>
              </div>
              <Field
                type="text"
                name="username"
                placeholder="Type Username"
                className="input input-bordered p-2 rounded-xl w-full"
              />
            </label>
            <label className="form-control w-full p-3 border rounded-xl">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <Field
                type="text"
                name="password"
                placeholder="Type Password"
                className="input input-bordered p-2 rounded-xl w-full"
              />
            </label>
            <label className="form-control w-full p-3 border rounded-xl">
              <div className="label">
                <span className="label-text">Firstname</span>
              </div>
              <Field
                type="text"
                name="firstName"
                placeholder="Type Firstname"
                className="input input-bordered p-2 rounded-xl w-full"
              />
            </label>
            <label className="form-control w-full p-3 border rounded-xl">
              <div className="label">
                <span className="label-text">Lastname</span>
              </div>
              <Field
                type="text"
                name="lastName"
                placeholder="Type Lastname"
                className="input input-bordered p-2 rounded-xl w-full"
              />
            </label>

            <label className="form-control w-full p-3 border rounded-xl">
              <div className="label">
                <span className="label-text">ID Card Number</span>
              </div>
              <Field
                type="text"
                name="idCardNumber"
                placeholder="ID Card Number"
                className="input input-bordered p-2 rounded-xl w-full"
              />
            </label>
            <label className="form-control w-full p-3 border rounded-xl">
              <div className="label">
                <span className="label-text">Date of Birth</span>
              </div>
              <Field
                type="date"
                name="dob"
                placeholder="dob"
                className="input input-bordered p-2 rounded-xl w-full"
              />
            </label>
            <label className="form-control w-full p-3 border rounded-xl">
              <div className="label">
                <span className="label-text">Phone</span>
              </div>
              <Field
                type="text"
                name="phone"
                placeholder="Phone"
                className="input input-bordered p-2 rounded-xl w-full"
              />
            </label>
            <label className="form-control w-full p-3 border rounded-xl">
              <div className="label">
                <span className="label-text">Member Referral Code</span>
              </div>
              <Field
                type="text"
                name="memberCode"
                placeholder="Referral Code"
                className="input input-bordered p-2 rounded-xl w-full"
              />
            </label>
            <button
              type="submit"
              className="btn bg-indigo-500 text-white w-full rounded-full p-3"
            >
              Register as User
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
