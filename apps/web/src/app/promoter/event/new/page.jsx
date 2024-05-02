'use client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PromoterMenuBar from '@/components/promoter/menuBar';
import Link from 'next/link';
import { Formik, Form, Field, useFormikContext } from 'formik';
import CreateTicket from '../../../../components/promoter/ticketForm';
import { FormProvider } from '@/utils/formContext';

/* const CreateEventForm = () => {
  const { setFieldValue } = useFormikContext();
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState();

  const handleFormSubmit = (values) => {
    setFormValues(values);
  };

  return (
    <Form>
      <div className="flex flex-col items-center px-5 py-10 gap-3">
        <label className="form-control w-full p-3 border rounded-xl">
          <div className="label">
            <span className="label-text">Event Image</span>
          </div>
          <Field
            type="file"
            name="eventImage"
            value={undefined}
            onChange={(e) => {
              setFieldValue('eventImage', e.currentTarget.files[0]);
            }}
            accept="image/png, image/jpeg, image/webp, image/jpg"
            className="input input-bordered p-2 rounded-xl w-full"
          />
        </label>
        <label className="form-control w-full p-3 border rounded-xl">
          <div className="label">
            <span className="label-text">Event Title</span>
          </div>
          <Field
            type="text"
            name="name"
            className="input input-bordered p-2 rounded-xl w-full"
          />
        </label>
        <label className="form-control w-full p-3 border rounded-xl">
          <div className="label">
            <span className="label-text">Start Date</span>
          </div>
          <Field
            type="date"
            name="startDate"
            className="input input-bordered p-2 rounded-xl w-full"
          />
        </label>
        <label className="form-control w-full p-3 border rounded-xl">
          <div className="label">
            <span className="label-text">End Date</span>
          </div>
          <Field
            type="date"
            name="endDate"
            className="input input-bordered p-2 rounded-xl w-full"
          />
        </label>
        <label className="form-control w-full p-3 border rounded-xl">
          <div className="label">
            <span className="label-text">Start Time</span>
          </div>
          <Field
            type="time"
            name="startTime"
            className="input input-bordered p-2 rounded-xl w-full"
          />
        </label>
        <label className="form-control w-full p-3 border rounded-xl">
          <div className="label">
            <span className="label-text">End Time</span>
          </div>
          <Field
            type="time"
            name="endTime"
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
            <span className="label-text">Category</span>
          </div>
          <Field
            as="select"
            name="category"
            placeholder="Select category"
            className="input input-bordered p-2 rounded-xl w-full"
          >
            <option defaultChecked>Select category</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Workshop">Workshop</option>
            <option value="Others">Others</option>
          </Field>
        </label>
        <label className="form-control w-full p-3 border rounded-xl">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <Field
            type="text"
            name="description"
            className="input input-bordered p-2 rounded-xl w-full"
          />
        </label>
        <div className="flex flex-col items-center w-full gap-3">
          <div className="w-full ">Contact Person Info</div>
          <label className="form-control w-full p-3 border rounded-xl">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <Field
              type="text"
              name="emailPIC"
              className="input input-bordered p-2 rounded-xl w-full"
            />
          </label>
          <label className="form-control w-full p-3 border rounded-xl">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <Field
              type="text"
              name="namePIC"
              className="input input-bordered p-2 rounded-xl w-full"
            />
          </label>
          <label className="form-control w-full p-3 border rounded-xl">
            <div className="label">
              <span className="label-text">Phone</span>
            </div>
            <Field
              type="text"
              name="phonePIC"
              className="input input-bordered p-2 rounded-xl w-full"
            />
          </label>
        </div>
        <div
          onClick={() => setShowModal(true)}
          className="items-center w-full hover:cursor-pointer relative bg-purple-700 rounded-lg h-12 before:absolute before:inset-0 before:bg-purple-400 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-lg"
        >
          <span className="relative text-white tracking-widest text-lg">
            CREATE TICKET
          </span>
        </div>
        <CreateTicket
          onClose={() => setShowModal(false)}
          visible={showModal}
          onSubmit={handleFormSubmit}
        ></CreateTicket>
        <button
          type="submit"
          className="btn bg-indigo-500 text-white w-full rounded-full p-3"
        >
          Create Event
        </button>
      </div>
    </Form>
  );
}; */

export default function PromoterPage() {
  const stateUser = useSelector((state) => state.user);

  return (
    <div className="pt-32">
      <FormProvider>
        <div>CREATE EVENT</div>

        <div className="w-[50vw] mx-12"></div>
      </FormProvider>
    </div>
  );
}
