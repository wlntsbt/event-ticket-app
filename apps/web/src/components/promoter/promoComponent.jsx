import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import { isPast } from 'date-fns';
export default function PromoComponent({
  expiredAt,
  eventName,
  amount,
  description,
  stock,
}) {
  return (
    <div>
      <div className="flex flex-col border rounded-xl border-purple-400 bg-fuchsia-50 w-full">
        <div className="rounded-t-xl p-2 pl-3 bg-purple-700">
          {isPast(new Date(expiredAt)) ? (
            <p className="flex items-center gap-1">
              <FaRegDotCircle className="text-gray-500 " /> Expired
            </p>
          ) : (
            <p className="flex items-center gap-1 text-white">
              <FaRegDotCircle className="text-green-400 " /> Active
            </p>
          )}
        </div>

        <div className=" leading-relaxed p-3">
          <p className="font-bold text-purple-900">{eventName}</p>
          <p className="text-orange-500">Discount {amount * 100}%</p>
          <p className="italic">"{description}"</p>
        </div>

        <div className="w-full flex justify-between items-center px-3">
          <p>
            {' '}
            Expired at {' - '}{' '}
            <span className="font-semibold">
              {new Date(expiredAt).toLocaleDateString('us-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </p>
          <p className="border w-fit rounded p-1 bg-white m-2">
            Stock: {stock}
          </p>
        </div>
      </div>
    </div>
  );
}
