import { prisma } from '@/connection';
import { ICreateDiscount } from './promotionType';

export const createDiscount = async(data: ICreateDiscount) => {
  const { eventId, amount, stock, description } = data;
  return await prisma.discount.create({
    data: data
  });
  
};
