export default function TicketCategoryComponent({ticketName, ticketAmount, ticketPrice, ticketDescription, salesStart, salesEnd}) {
  return <div>
    <div className="flex flex-col p-5 w-full rounded-xl bg-purple-50">
      <div className="text-2xl">{ticketName}</div>
      <div>Amount: {ticketAmount}</div>
      <div className="">Price: IDR {ticketPrice}</div>
      <div>{ticketDescription}</div>
      <div>Sales Duration: {salesStart} - {salesEnd}</div>
    </div>
  </div>
}