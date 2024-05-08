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

export const getPublishedEventById = async (id: number) => {
  return await prisma.event.findUnique({
    where: {
      isPublished: true,
      id,
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
