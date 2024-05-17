export default function TicketCategoryComponent({
  key,
  ticketName,
  ticketAmount,
  ticketPrice,
  ticketDescription,
  salesStart,
  salesEnd,
}) {
  return (
    <div className="flex items-center p-5 w-full rounded-xl bg-purple-50">
      <div className="flex flex-col w-[70%]">
        <div className="text-2xl">{ticketName}</div>
        <div>Amount: {ticketAmount}</div>
        <div className="">Price: IDR {ticketPrice}</div>
        <div>{ticketDescription}</div>
        <div>
          Sales Duration: {salesStart} - {salesEnd}
        </div>
      </div>
    </div>
  );
}
