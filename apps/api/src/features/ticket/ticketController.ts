import { createBill, payBill } from './ticketService';
import { NextFunction, Request, Response } from 'express';
import { IReqAccessToken } from '@/helpers/token';

export const newBill = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqToken = req as IReqAccessToken;
    const { uid } = reqToken.payload;

    const { usePoint, voucherId, bookingData } = req.body;
    console.log(req.body);
    console.log(usePoint)
    const reqData = {
      uid,
      bookingData,
      usePoint,
      voucherId,
    };
    console.log(reqData)
    const bill = await createBill(reqData);

    res.status(200).send({
      error: false,
      message: 'Bill created!',
      data: bill,
    });
  } catch (error) {
    next(error);
  }
};

export const billPayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bill = req.params.bill;

    await payBill(bill);

    res.status(200).send({
      error: false,
      message: `Payment made for bill ${bill}`,
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
