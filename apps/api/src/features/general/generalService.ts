import { prisma } from '@/connection';

export const getPublishedEvents = async () => {
  return await prisma.event.findMany({
    where: {
      isPublished: true,
    },
    include: {
      Ticket: {
        orderBy: {
          ticketPrice: 'asc',
        },
      },
      promotor: true,
    },
  });
};
