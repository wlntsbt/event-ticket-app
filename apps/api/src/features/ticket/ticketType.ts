export interface IBookingData {
  ticketId: number;
  qty: number;
}

export interface IAttendeeTicketData {
  ticketId: number;
  billId: string;
}

export interface ICreateBill {
  uid: string;
  bookingData: IBookingData[];
  usePoint?: boolean;
  voucherId?: number;
}
