import { prisma } from '@/connection';
import { City } from '@prisma/client';

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

export const getPublishedEventBySearch = async (
  query: string,
  location?: City | undefined,
) => {
  return await prisma.event.findMany({
    where: {
      isPublished: true,
      OR: [
        {
          name: {
            contains: query,
          },
        },
        {
          promotor: {
            name: {
              contains: query,
            },
          },
        },
        {
          description: {
            contains: query,
          },
        },
        {
          location: {
            equals: location,
          },
        },
      ],
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

export const getPublishedEventByPromotor = async (username: string) => {
  return await prisma.promotor.findUnique({
    where: {
      username,
    },
    include: {
      Event: {
        where: {
          isPublished: true,
        },
        include: {
          Review: true,
        },
      },
    },
  });
};
