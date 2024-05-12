import { prisma, location } from '@/connection';
import { ICreateEventParams, ICreateTicketParams } from './eventType';

export const createEvent = async (
  eventData: ICreateEventParams,
  images: any,
  ticketData?: ICreateTicketParams[],
) => {
  eventData.imageLink = images.image[0].path;
  return prisma.$transaction(async (tx) => {
    const event = await tx.event.create({
      data: eventData,
    });

    if (ticketData) {
      for (let ticket of ticketData) {
        ticket.eventId = event.id;
        await tx.ticket.create({
          data: ticket,
        });
      }
    }
  });
};

export const createTicket = async (
  eventId: number,
  ticketData: ICreateTicketParams[],
) => {
  const isEvent = await prisma.event.findUnique({
    where: { id: eventId },
    include: {
      promotor: true,
    },
  });

  if (isEvent)
    for (let ticket of ticketData) {
      ticket.eventId = eventId;

      await prisma.ticket.create({
        data: ticket,
      });
    }
};

export const getEventByPromoter = async (promotorUid: string) => {
  return await prisma.event.findMany({
    where: {
      promotorUid,
    },
    include: {
      Ticket: {
        include: {
          AttendeeTicket: true,
        },
      },
    },
  });
};

export const definedEnum = async () => {
  return location;
};

export const updatePublishedStatus = async (id: number) => {
  const hasTicket = await prisma.ticket.findMany({
    where: {
      id,
    },
  });

  if (!hasTicket)
    throw new Error(
      'Events without ticket data can not be published. Add ticket data!',
    );

  return await prisma.event.update({
    where: {
      id,
    },
    data: {
      isPublished: true,
    },
  });
};
