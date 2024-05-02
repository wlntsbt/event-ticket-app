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
    let inputData = JSON.parse(req.body.data);

    let {
      name,
      startDate,
      endDate,
      startTime,
      endTime,
      category,
      location,
      namePIC,
      phonePIC,
      emailPIC,
      description,
      ticketData,
    } = inputData;

    const eventData = {
      name,
      startDate,
      endDate,
      startTime,
      endTime,
      category,
      location,
      namePIC,
      emailPIC,
      phonePIC,
      description,
      promotorUid: uid,
      imageLink: '',
    };

    for (let ticket of ticketData) {
      let { salesStart, salesEnd } = ticket;
      ticket.salesEnd = new Date(salesEnd);
      ticket.salesStart = new Date(salesStart);
    }

    eventData.startDate = new Date(startDate);
    eventData.endDate = new Date(endDate);
    eventData.startTime = timeToDate(startDate, startTime);
    eventData.endTime = timeToDate(endDate, endTime);

    const data = await createEvent(eventData, ticketData, req.files);

    res.status(200).send({
      error: false,
      message: 'Create event success!',
      data: null,
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
