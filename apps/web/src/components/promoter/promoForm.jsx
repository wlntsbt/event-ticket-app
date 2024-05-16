'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import { useGetAllEvents } from '@/hooks/promoter/useEvent';
import { isPast } from 'date-fns';
import { useCreatePromo } from '@/hooks/promoter/useEvent';
import Spinner from '../general/spinner';
export default function PromoForm() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { mutationCreateDiscount } = useCreatePromo();
  const { allEventsData } = useGetAllEvents();

  if (!allEventsData) return <Spinner />;
  // console.log('>>><<<', !isPast(new Date(allEventsData[0].endDate)));

  allEventsData;
  return (
    <div className="bg-white flex-col my-5 mx-[30px] border rounded-xl lg:mx-[500px]">
      <Formik
        initialValues={{
          eventId: '',
          amount: 0,
          stock: 0,
          description: '',
          expiredAt: '',
        }}
        onSubmit={(values) => {
          values.amount = values.amount / 100;
          console.log(values);
          mutationCreateDiscount(values);
        }}
      >
        <Form>
          <div className="flex flex-col items-center px-5 py-5 gap-3">
            <div className="relative h-10 w-full mt-2">
              <Field
                as="select"
                name="eventId"
                placeholder="Select Location"
                className="peer h-full w-full rounded-[7px] bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all  empty:!bg-gray-500 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500 border border-black border-t-transparent placeholder-shown:border placeholder-shown:border-purple-500 placeholder-shown:border-t-purple-500 focus:border-purple-500"
              >
                <option defaultChecked value="">
                  Select Event
                </option>
                {allEventsData
                  ?.filter((x) => !isPast(new Date(x.endDate)))
                  .map((x, i) => (
                    <option value={x.id}>{x.name}</option>
                  ))}
              </Field>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-purple-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                Event
              </label>
            </div>

            <div className="flex justify-center items-center gap-2 w-full">
              <div className="relative h-10 w-full">
                <div className="relative w-full">
                  <Field
                    type="number"
                    name="amount"
                    min="0"
                    className="caret-purple-500 peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                    placeholder=" "
                  ></Field>
                  <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                    Discount
                  </label>
                </div>
              </div>

              <div className="relative h-10 w-full">
                <div className="relative w-full">
                  <Field
                    type="number"
                    name="stock"
                    min="0"
                    className="caret-purple-500 peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                    placeholder=" "
                  ></Field>
                  <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                    Quota
                  </label>
                </div>
              </div>
            </div>

            <div className="relative h-10 w-full">
              <Field
                type="date"
                name="expiredAt"
                className="text-center peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                placeholder=""
              />
              <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                Expiry Date
              </label>
            </div>

            <div className="relative w-full flex flex-col gap-2">
              <div className="relative w-full">
                <Field
                  as="textarea"
                  type="text"
                  name="description"
                  className="caret-purple-500 peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                  placeholder=" "
                ></Field>
                <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                  Description
                </label>
              </div>

              <div className="flex-col h-full w-full rounded-xl flex gap-2">
                <button
                  type="submit"
                  className="font-bold w-full relative bg-purple-500 rounded-full h-12 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full"
                >
                  <span className="relative text-white tracking-widest text-lg">
                    CREATE
                  </span>
                </button>
                <Link href={'/promoter/event'}>
                  <button className="border-purple-500 border-2 w-full relative h-12 rounded-full hover:border-purple-500 text-purple-500 hover:bg-purple-100">
                    <span className="font-medium w-full flex h-full justify-center items-center tracking-widest text-md">
                      CANCEL
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
