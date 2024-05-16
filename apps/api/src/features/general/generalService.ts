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
  take: number,
  skip: number,
  location?: City | undefined,
) => {
  const perPage = await prisma.event.findMany({
    take,
    skip,
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

  const totalContent = await prisma.event.count({
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
  });

  return {
    perPage,
    totalPage: Math.ceil(totalContent / 8),
  };
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
