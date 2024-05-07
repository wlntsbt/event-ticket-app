'use client';
import { Formik, Form, Field, useFormikContext } from 'formik';
import CreateTicket from './ticketForm';
import { useEffect, useState } from 'react';
import { useFormContext } from '@/utils/formContext';
import TicketCategoryComponent from './ticketCategoryComponent';
import { useCreateEvent } from '@/hooks/promoter/useEvent';
import { useRouter } from 'next/router';
export default function EventForm() {
  const { formValues, updateFormValues } = useFormContext();
  const [showModal, setShowModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { mutationCreateEvent } = useCreateEvent();
  // const router = useRouter()
  let ticketData;

  useEffect(() => {
    ticketData = localStorage.getItem('ticket');
    if (ticketData) {
      updateFormValues(JSON.parse(ticketData));
    } else {
      localStorage.setItem('ticket', JSON.stringify([]));
    }
  }, []);

  const onSetFiles = (event) => {
    try {
      const acceptedFormat = ['jpg', 'jpeg', 'webp', 'png'];
      const files = [...event.target.files];

      files.forEach((file) => {
        if (
          !acceptedFormat.includes(
            file.name.split('.')[file.name.split('.').length - 1],
          )
        ) {
          throw { message: `${file.name} Format Not Acceptable` };
        }
        if (file.size > 10000000000000) {
          throw {
            message: `${file.name} is too Large! Maximum Filesize is 1Kb`,
          };
        }
      });

      if (files.length > 1) throw { message: `Selected File More Than 1` };

      setSelectedFiles(files); // Array of Object
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div>{ticketData}</div>
      <Formik
        initialValues={{
          name: '',
          startDate: '',
          endDate: '',
          startTime: '',
          endTime: '',
          category: '',
          location: '',
          namePIC: '',
          emailPIC: '',
          description: '',
        }}
        onSubmit={(values) => {
          const fd = new FormData();
          const data = {
            name: values.name,
            startDate: values.startDate,
            endDate: values.endDate,
            startTime: values.startTime,
            endTime: values.endTime,
            category: values.category,
            location: values.location,
            namePIC: values.namePIC,
            emailPIC: values.emailPIC,
            phonePIC: values.phonePIC,
            description: values.description,
            ticketData: formValues,
          };
          fd.append('image', selectedFiles[0]);
          fd.append('data', JSON.stringify(data));
          mutationCreateEvent(fd);
          localStorage.removeItem('ticket');
          // router.push('/promoter/event')
        }}
      >
        <Form>
          <div className="flex flex-col items-center px-5 py-10 gap-3">
            <label className="form-control w-full p-3 border rounded-xl">
              <div className="label">
                <span className="label-text">Event Image</span>
              </div>
              <input
                type="file"
                name="imageUrl"
                accept="image/*"
                onChange={(e) => onSetFiles(e)}
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

            <div className="w-full">
              <div>Ticket</div>
              {formValues
                ? formValues.map((x, i) => (
                    <TicketCategoryComponent
                      key={i}
                      ticketName={x.ticketName}
                      ticketAmount={x.ticketAmount}
                      ticketPrice={x.ticketPrice}
                      ticketDescription={x.ticketDescription}
                      salesStart={x.salesStart}
                      salesEnd={x.salesEnd}
                    ></TicketCategoryComponent>
                  ))
                : null}
              <div
                onClick={() => setShowModal(true)}
                className="items-center w-full hover:cursor-pointer relative bg-purple-700 rounded-lg h-12 before:absolute before:inset-0 before:bg-purple-400 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-lg"
              >
                <span className="relative text-white tracking-widest text-lg">
                  CREATE TICKET
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="btn bg-indigo-500 text-white w-full rounded-full p-3"
            >
              Create Event
            </button>
          </div>
        </Form>
      </Formik>

      <CreateTicket
        close={() => setShowModal(false)}
        open={showModal}
      ></CreateTicket>
    </div>
  );
}
