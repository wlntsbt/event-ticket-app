import { IoTimeOutline } from 'react-icons/io5';

export default function VoucherComponent({
  onClick,
  description,
  expiredAt,
  amount,
}) {
  return (
    <div className={`flex flex-col p-2`}>
      <h>{description}</h>
      <p className="text-purple-700">{Number(amount) * 100}%</p>
      <p className="text-sm flex items-center gap-1">
        <IoTimeOutline />
        expired at{' '}
        <span className="italic text-red-500">
          {new Date(expiredAt).toLocaleDateString('us-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
      </p>
    </div>
  );
}
