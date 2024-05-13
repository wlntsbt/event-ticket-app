import { NextFunction, Request, Response } from 'express';
import { IReqAccessToken } from '@/helpers/token';
import { createReview } from './reviewService';

export const newReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqToken = req as IReqAccessToken;
    const { uid } = reqToken.payload;

    const { promotorUid, rating, feedback, eventId } = req.body;

    const reqData = {
      attendeeUid: uid,
      rating,
      feedback,
      eventId,
    };

    await createReview(reqData);

    res.status(200).send({
      error: false,
      message: 'Review sent successfully!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
