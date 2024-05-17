import { createDiscount } from './promotionService';
import { NextFunction, Request, Response } from 'express';
import { IReqAccessToken } from '@/helpers/token';

export const newPromo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let { expiredAt, eventId, amount, stock, description } = req.body;

    expiredAt = new Date(expiredAt);
    eventId = Number(eventId);
    const promo = await createDiscount({
      eventId,
      amount,
      stock,
      description,
      expiredAt,
    });

    res.status(200).send({
      error: false,
      message: 'Promo created!',
      data: promo,
    });
  } catch (error) {
    next(error);
  }
};
