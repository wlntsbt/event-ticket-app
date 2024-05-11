import { getUserPromo, getUserTransactions } from './userService';
import { NextFunction, Request, Response } from 'express';
import { IReqAccessToken } from '@/helpers/token';

export const getUserPointsAndVouchers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqToken = req as IReqAccessToken;
    const { uid } = reqToken.payload;

    const userPointsAndVouchers = await getUserPromo(uid);

    res.status(200).send({
      error: false,
      message: 'fetch user promo success',
      data: userPointsAndVouchers,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUserTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqToken = req as IReqAccessToken;
    const { uid } = reqToken.payload;

    const userTransactions = await getUserTransactions(uid);

    res.status(200).send({
      error: false,
      message: 'fetch user transactions success',
      data: userTransactions,
    });
  } catch (error) {
    next(error);
  }
};
