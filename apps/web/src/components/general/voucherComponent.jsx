export default function VoucherComponent({ onClick, description, expiredAt, amount }) {
  return (
    <div className={`flex flex-col p-2 rounded-lg border`}>
      <div>{description}</div>
      <div>{Number(amount) * 100}%</div>
      <div>
        expired at
        {new Date(expiredAt).toLocaleDateString('us-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
    </div>
  );
}
