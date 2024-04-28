import { prisma } from '@/connection';
import { ICreateEventParams, ICreateTicketParams } from './eventType';

/* export const createEvent = async (
  eventData: ICreateEventParams,
  ticketData?: ICreateTicketParams,
) => {
  if (ticketData) {
    await prisma.$transaction(async (tx: any) => {
      const event = await prisma.event.create({
        data: eventData,
      });

      ticketData.eventId = event.id;

      await prisma.ticket.create({
        data: ticketData,
      });
    });
  }
}; */

/* export const createEvent = async ({
  eventData: ICreateEventParams,
  ticketData?: ICreateTicketParams[]},
) => {
  if (ticketData) {
    await prisma.$transaction(async (tx: any) => {
      const event = await prisma.event.create({
        data: eventData,
      });

      for (let i of ticketData) {
        i.eventId = event.id;

        await prisma.ticket.create({
          data: i,
        });
      }
    });
  } else {
    await prisma.event.create({
      data: eventData,
    });
  }
}; */

export const createEvent = async (eventData: ICreateEventParams) => {
  const event = await prisma.event.create({
    data: eventData,
  });

  return event.id;
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
