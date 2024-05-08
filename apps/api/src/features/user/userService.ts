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
