import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useFormContext } from '@/utils/formContext';
export default function CreateTicket({ open, close }) {
  if (!open) return null;

  const { updateFormValues } = useFormContext();
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  // console.log('sumbmission message', submissionSuccess);
  const closeHandler = (e) => {
    if (e.target.id === 'popup-bg') {
      close();
    }
    if (e.target.id === 'close-btn') {
      close();
      window.location.reload();
    }
  };

  const submitHandler = async (values) => {
    values.ticketPrice = parseInt(values.ticketPrice);
    const currentItem = localStorage.getItem('ticket');
    const item = JSON.parse(currentItem);
    item.push(values);
    localStorage.setItem('ticket', JSON.stringify(item));
    updateFormValues(item);
    setSubmissionSuccess(true); // Set submission success to true
  };

  return (
    <>
      {submissionSuccess ? (
        <div
          id="popup-bg"
          onClick={closeHandler}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="p-4 rounded w-[30%] h-[60%]flex flex-col gap-8">
            <div className="flex flex-col my-auto">
              <div className="mx-auto font-bold">DONE</div>
              <button
                id="popup-bg"
                onClick={closeHandler}
                className="mt-8 rounded-lg border p-2 bg-slate-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="popup-bg"
          onClick={closeHandler}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="p-4 rounded h-[60%] flex flex-col gap-8">
            <div className="font-bold mx-auto text-white text-xl">Create Ticket</div>
            <Formik
              initialValues={{
                ticketName: '',
                ticketAmount: 0,
                ticketPrice: 0,
                ticketDescription: '',
                salesStart: '',
                salesEnd: '',
              }}
              onSubmit={submitHandler}
            >
              {({ dirty }) => {
                return (
                  <Form>
                    <div className="bg-yellow-50 py-[50px] px-5 rounded-xl w-full ">
                      <div className="relative h-10 w-full min-w-[200px]">
                        <Field
                          type="text"
                          name="ticketName"
                          className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                          placeholder=" "
                        />
                        <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                          Ticket Name
                        </label>
                      </div>

                      <div className="relative h-10 w-full min-w-[200px] mt-5">
                        <Field
                          type="number"
                          min="1"
                          name="ticketAmount"
                          className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                          placeholder=" "
                        />
                        <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                          Ticket Amount
                        </label>
                      </div>

                      <div className="relative h-10 w-full min-w-[200px] mt-5">
                        <Field
                          type="text"
                          name="ticketPrice"
                          className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                          placeholder=" "
                        />
                        <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                          Ticket Price
                        </label>
                      </div>

                      <div class="relative w-full min-w-[200px] mt-5">
                        <Field
                          type="text"
                          name="ticketDescription"
                          className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                          placeholder=" "
                        />
                        <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                          Ticket Description
                        </label>
                      </div>

                      <div className="flex flex-row pt-5 gap-5">
                        <div className="relative h-10 w-full">
                          <Field
                            type="date"
                            name="salesStart"
                            className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                            placeholder=""
                          />
                          <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                            Sales Start
                          </label>
                        </div>

                        <div className="relative h-10 w-full">
                          <Field
                            type="date"
                            name="salesEnd"
                            className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                            placeholder=""
                          />
                          <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                            Sales End
                          </label>
                        </div>
                      </div>
                      
                      <button
                type="submit"
                className="mt-5 font-bold w-full relative bg-purple-500 rounded-full h-12 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full"
              >
                <span className="relative text-white tracking-widest text-lg">
                  CREATE
                </span>
              </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
}
