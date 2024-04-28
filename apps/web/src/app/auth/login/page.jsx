'use client';

import Link from 'next/link';
import { Form, Formik, Field } from 'formik';
import { useAuthLogin } from '@/hooks/useCreateAccount';

export default function LoginPage() {
  const { mutationAuth } = useAuthLogin();

  return (
    <div className="w-[50vw] mx-12">
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
                <span className="label-text">Password</span>
              </div>
              <Field
                type="text"
                name="password"
                placeholder="Type Password"
                className="input input-bordered p-2 rounded-xl w-full"
              />
            </label>
            <button
              type="submit"
              className="btn bg-indigo-500 text-white w-full rounded-full p-3"
            >
              Log In
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
