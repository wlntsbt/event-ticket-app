import { NextFunction, Request, Response } from 'express';
import { timeToDate } from '@/helpers/dateConverter';
import { IReqAccessToken } from '@/helpers/token';
import { createEvent, createTicket } from './eventService';

export const newEvent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqToken = req as IReqAccessToken;
    const { uid } = reqToken.payload;

    let { startDate, endDate, startTime, endTime } = req.body;

    const eventData = req.body;

    eventData.startDate = new Date(startDate);
    eventData.endDate = new Date(endDate);
    eventData.startTime = timeToDate(startDate, startTime);
    eventData.endTime = timeToDate(endDate, endTime);
    eventData.promotorUid = uid;

    const data = await createEvent(eventData);

    res.status(200).send({
      error: false,
      message: 'Create event success!',
      data: { eventId: data },
    });
  } catch (error) {
    next(error);
  }
};

export const newTicket = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let ticketData = req.body;
    let eventId = req.headers.eventid as string;

    for (let ticket of ticketData) {
      let { salesStart, salesEnd } = ticket;
      ticket.salesEnd = new Date(salesEnd);
      ticket.salesStart = new Date(salesStart);
      ticket.eventId = parseInt(eventId);
    }
    await createTicket(parseInt(eventId), ticketData);

    res.status(200).send({
      error: false,
      message: 'Create ticket success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
