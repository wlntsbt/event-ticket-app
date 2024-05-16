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

export const getEventDiscount = async (id: number) => {
  return await prisma.discount.findMany({
    where: {
      eventId: id,
    },
    include: {
      event: true,
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

export const getUserData = async (uid: string) => {
  return await prisma.attendee.findUnique({
    where: {
      uid,
    },
  });
};

export const getUserReview = async (uid: string) => {
  return await prisma.review.findMany({
    where: {
      attendeeUid: uid,
    },
    include: {
      eventName: {
        include: {
          promotor: true,
        },
      },
    },
  });
};
