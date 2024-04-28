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

export interface ICreatePromoterParams {
  name: string;
  username: string;
  email: string;
  password: string;
  location?: Location;
  phone?: string;
}

export interface ICreateAttendeeParams {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  referralCode: string;
  dob?: string;
  phone?: string;
  idCardNumber?: string;
}
