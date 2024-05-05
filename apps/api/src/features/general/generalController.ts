import { getPublishedEvents } from './generalService';
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
