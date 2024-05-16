import { getPromoterData } from './promoterService';
import { NextFunction, Request, Response } from 'express';
import { IReqAccessToken } from '@/helpers/token';

export const getPromoterInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqToken = req as IReqAccessToken;
    const { uid } = reqToken.payload;

    const userData = await getPromoterData(uid);

    res.status(200).send({
      error: false,
      message: 'fetch promoter info success',
      data: userData,
    });
  } catch (error) {
    next(error);
  }
};
