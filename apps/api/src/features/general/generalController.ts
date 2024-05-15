import { City } from '@prisma/client';
import {
  getPublishedEvents,
  getPublishedEventById,
  getPublishedEventBySearch,
} from './generalService';
import { NextFunction, Request, Response } from 'express';

export const getAllEvents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allEvents = await getPublishedEvents();

    res.status(200).send({
      error: false,
      message: 'Fetch all published events success!',
      data: allEvents,
    });
  } catch (error) {
    next(error);
  }
};

export const getEvent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const event = await getPublishedEventById(parseInt(id));

    res.status(200).send({
      error: false,
      message: `Fetch event with id ${id} success!`,
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

export const getEventSearch = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let { q, location, take, skip } = req.query;
    let event;

    let toTake = Number(take)
    let toSkip = Number(skip)

    if (
      typeof q === 'string' &&
      typeof toTake === 'number' &&
      typeof toSkip === 'number'
    ) {
      event = await getPublishedEventBySearch(
        q,
        toTake,
        toSkip,
      );
    }
    res.status(200).send({
      error: false,
      message: `Fetch event success!`,
      data: event,
    });
  } catch (error) {
    console.log(error);
  }
};
