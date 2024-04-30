'use client';
import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import { usePromoterRegister } from '@/hooks/useRegisterAccount';

export default function PromoterRegistrationPage() {
  const { mutationPromoterRegister } = usePromoterRegister();

  return (
    <div className="w-[50vw] mx-12">
      <Formik
        initialValues={{
          email: '',
          password: '',
          username: '',
          name: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          const { email, password, username, name, location, phone } = values;
          mutationPromoterRegister({
            email,
            password,
            username,
            name,
            location,
            phone,
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
                <span className="label-text">Display Name</span>
              </div>
              <Field
                type="text"
                name="name"
                placeholder="Type Display Name"
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
                <span className="label-text">Location</span>
              </div>
              <Field
                as="select"
                name="location"
                placeholder="Select city"
                className="input input-bordered p-2 rounded-xl w-full"
              >
                <option defaultChecked>Select City</option>
                <option value="JAKARTA">Jakarta</option>
                <option value="BALI">Bali</option>
                <option value="Bandung">Bandung</option>
              </Field>
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
            <button
              type="submit"
              className="btn bg-indigo-500 text-white w-full rounded-full p-3"
            >
              Register as Promoter
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
