export enum Location {
  JAKARTA = 'JAKARTA',
  BANDUNG = 'BANDUNG',
  YOGYAKARTA = 'YOGYAKARTA',
  BALI = 'BALI',
  SEMARANG = 'SEMARANG',
  SURABAYA = 'SURABAYA',
  BOGOR = 'BOGOR',
  DEPOK = 'DEPOK',
  TANGERANG = 'TANGERANG',
  BEKASI = 'BEKASI',
}

export enum Category {
  Entertainment = 'Entertainment',
  Seminar = 'Seminar',
  Workshop = 'Workshop',
  Social = 'Social',
  Other = 'Other',
}

export interface ICreateEventParams {
  name: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  category: Category;
  location: Location;
  namePIC: string;
  phonePIC: string;
  emailPIC: string;
  description: string;
  promotorUid: string;
  imageLink: string;
}

export interface ICreateTicketParams extends ICreateEventParams {
  ticketName: string;
  ticketAmount: number;
  ticketPrice: number;
  ticketPrisDiscounted?: number;
  ticketDescription: string;
  salesStart: string;
  salesEnd: string;
  eventId: number;
}
