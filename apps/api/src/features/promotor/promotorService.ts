import { prisma } from '@/connection';

export const getTransaction = async (uid: string) => {
  return await prisma.promotor.findUnique({
    where: {
      uid,
    },
    include: {
      Event: true,
    },
  });
};
