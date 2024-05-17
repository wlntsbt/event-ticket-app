'use client';
import { useState } from 'react';
import { Rating } from '@material-tailwind/react';
import { Formik, Form, Field } from 'formik';
import { useCreatePurchase } from '@/hooks/user/useReview';

export default function CreateReview({ open, close, eventId, eventName }) {
  if (!open) return null;

  const { mutationReviewEvent } = useCreatePurchase();
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [rating, setRating] = useState(0);

  const closeHandler = (e) => {
    if (e.target.id === 'popup-bg') {
      close();
    }
    if (e.target.id === 'close-btn') {
      close();
      window.location.reload();
    }
  };

  return (
    <>
      {submissionSuccess ? (
        <div
          id="popup-bg"
          onClick={closeHandler}
          className="bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="p-4 rounded w-[30%] h-[60%]flex flex-col gap-8">
            <div className="flex flex-col my-auto">
              <h1 className="mx-auto font-bold text-white text-xl w-full">
                Review Sent!
              </h1>
              <button
                id="popup-bg"
                onClick={closeHandler}
                className="mt-5 font-bold w-full relative bg-purple-500 rounded-full h-12 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full"
              >
                <span
                  onClick={setTimeout(() => {
                    window.location.reload();
                  }, 2000)}
                  className="relative text-white tracking-widest text-lg"
                >
                  Close
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="popup-bg"
          onClick={closeHandler}
          className="fixed z-50 inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="p-4 rounded h-[60%] flex flex-col gap-8">
            <Formik
              initialValues={{
                rating: '',
                feedback: '',
              }}
              onSubmit={(values) => {
                const data = {
                  rating: rating,
                  feedback: values.feedback,
                  eventId: eventId,
                };
                mutationReviewEvent(data);
                setSubmissionSuccess(true);
              }}
            >
              {({ dirty }) => {
                return (
                  <Form>
                    <div className="bg-white border-purple-500 border py-[20px] px-5 rounded-xl">
                      <h1 className="font-bold mx-auto text-xl text-center py-2 text-purple-900">
                        Review for "{eventName}"
                      </h1>
                      <div className="relative h-10 w-full min-w-[200px] flex-col flex items-center justify-center">
                        <label className="">
                          How's your experience with the Event?
                        </label>
                        <Rating
                          name="rating"
                          value={rating}
                          onChange={(value) => setRating(value)}
                          className="text-purple-400"
                        />
                      </div>
                      <div className="flex flex-col justify-between h-full">
                        <div className="relative h-full w-full min-w-[200px] mt-5">
                          <Field
                            as="textarea"
                            type="text"
                            name="feedback"
                            className="bg-white peer h-full w-full rounded-[7px] border border-t-transparent border-black bg-transparent px-3 py-2.5 text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500"
                            placeholder=" "
                          />
                          <label className="absolute left-0 -top-1.5 flex h-full w-full after:content[' '] before:content[' '] before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l pointer-events-none select-none text-[11px] leading-tight text-black transition-all before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                            Feedback
                          </label>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="mt-5 font-bold w-full relative bg-purple-500 rounded-full h-10 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full"
                          >
                            <span className="relative text-white tracking-widest text-md">
                              SEND REVIEW
                            </span>
                          </button>
                        </div>
                      </div>
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
