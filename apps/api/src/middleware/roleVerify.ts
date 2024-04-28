import { NextFunction, Response, Request } from 'express';

interface IReqPayload extends Request {
  payload: any;
}

export const userVerify = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { payload } = req as IReqPayload;

    const currentRole = payload.role;

    if (currentRole == 'USER') {
      next();
    } else {
      throw new Error('Only accessible for Attendees.');
    }
  } catch (error) {
    next(error);
  }
};

export const promoterVerify = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { payload } = req as IReqPayload;

    const currentRole = payload.role;

    if (currentRole == 'PROMOTER') {
      next();
    } else {
      throw new Error('Only accessible for Promoters.');
    }
  } catch (error) {
    next(error);
  }
};
