import { prisma } from '@/connection';

export const findAccountbyEmail = async (email: string) => {
  const findUser = await prisma.attendee.findUnique({
    where: {
      email,
    },
  });

  const findPromoter = await prisma.promotor.findUnique({
    where: {
      email,
    },
  });

  console.log(findPromoter)
  if (!(findUser || findPromoter)) throw new Error('User does not exist.');

  if (findUser) {
    return findUser;
  } else {
    return findPromoter;
  }
};
