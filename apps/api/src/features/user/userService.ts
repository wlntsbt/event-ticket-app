import { prisma } from '@/connection';

export const getUserPromo = async (uid: string) => {
  return await prisma.attendee.findUnique({
    where: {
      uid,
    },
    include: {
      Vouchers: {
        where: {
          status: 'AVAILABLE',
        },
      },
      Points: {
        where: {
          status: 'AVAILABLE',
        },
      },
    },
  });
};

export const getUserTransactions = async (uid: string) => {
  return await prisma.bill.findMany({
    where: {
      attendeeUid: uid,
    },
    include: {
      AttendeeTicket: {
        include: {
          ticket: {
            include: {
              event: true,
            },
          },
        },
      },
      Booking: {
        include: {
          ticket: {
            include: {
              event: true,
            },
          },
        },
      },
    },
  });
};
