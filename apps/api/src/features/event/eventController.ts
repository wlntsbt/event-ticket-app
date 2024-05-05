import { NextFunction, Request, Response } from 'express';
import { timeToDate } from '@/helpers/dateConverter';
import { IReqAccessToken } from '@/helpers/token';
import {
  createEvent,
  createTicket,
  getEventByPromoter,
  definedEnum,
  updatePublishedStatus,
} from './eventService';

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
      ticket.ticketPrice = parseInt(ticket.ticketPrice);
    }

    eventData.startDate = new Date(startDate);
    eventData.endDate = new Date(endDate);
    eventData.startTime = timeToDate(startDate, startTime);
    eventData.endTime = timeToDate(endDate, endTime);

    const data = await createEvent(eventData, req.files, ticketData);

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

export const allEventsByPromoter = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqToken = req as IReqAccessToken;
    const { uid } = reqToken.payload;
    const data = await getEventByPromoter(uid);
    console.log('result', data);
    res.status(200).send({
      error: false,
      message: `Get all events by UID ${uid} success`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const checkDefinedEnum = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqToken = req as IReqAccessToken;
    const { uid } = reqToken.payload;
    const data = await definedEnum();
    console.log(data);
    res.status(200).send({
      error: false,
      message: `LOCATION ENUM`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const publishEvent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.body;
    await updatePublishedStatus(id);
    res.status(200).send({
      error: false,
      message: 'Event publish success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
