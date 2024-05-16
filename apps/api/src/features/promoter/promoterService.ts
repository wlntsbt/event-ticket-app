import { prisma } from '@/connection';

export const getPromoterData = async (uid: string) => {
  return await prisma.promotor.findUnique({
    where: {
      uid,
    },
  });
};
