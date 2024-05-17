import { prisma } from '@/connection';
import { IReviewData } from './reviewType';

export const createReview = async (reviewData: IReviewData) => {
  const newReview = await prisma.review.create({
    data: reviewData,
  });
};


// export const getReviewByPromoter = async (uid: string) => {
//   return await prisma.review.findMany({
//     where: {
//       promotorUid: uid,
//     },
//   });
// };
