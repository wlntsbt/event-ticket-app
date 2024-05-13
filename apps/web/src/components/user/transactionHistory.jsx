import { isPast } from 'date-fns';
import CreateReview from './reviewForm';
import { useState } from 'react';

export default function TransactionComponent({
  billId,
  ticketName,
  bookingData,
  total,
  status,
  startDate,
  eventId,
  eventName,
  isReviewPublished,
}) {
  const [showModal, setShowModal] = useState(false);

  console.log('isreviewed', isReviewPublished, eventName);
  return (
    <>
      <div className="flex">
        <div className="flex flex-col p-8 rounded-lg">
          <div className="">Bill ID: {billId}</div>
          <div className="flex">
            <div className="text-xl">{ticketName}</div>
            <div>{status}</div>
          </div>
          <div>
            {bookingData.map((x, i) => (
              <div>
                {x.ticket.ticketName} x {x.qty}
              </div>
            ))}
          </div>
          <div>
            Total:{' '}
            {total.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
            })}
          </div>
        </div>
        {status === 'PAID' &&
        !isPast(new Date(startDate)) ? null : isReviewPublished ? (
          <div>Review Published</div>
        ) : (
          <div onClick={() => setShowModal(true)}>Write a review</div>
        )}
      </div>
      <CreateReview
        close={() => setShowModal(false)}
        open={showModal}
        eventId={eventId}
        eventName={eventName}
      ></CreateReview>
    </>
  );
}
