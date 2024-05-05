import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
dotenv.config();

export interface ITokenizedData {
  uid: string;
  role: string;
}

export interface IReqAccessToken extends Request {
  payload: any;
  headers: {
    accesstoken: string;
  };
}

export const createToken = (data: ITokenizedData) => {
  return jwt.sign(data, process.env.JWT_SECRET_KEY as string, {
    expiresIn: '1d',
  });
};

export const tokenVerify = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqToken = req as IReqAccessToken;
    const { accesstoken } = reqToken.headers;

    if (!accesstoken) throw new Error('Token Must Provided!');

    const payload = jwt.verify(
      accesstoken as string,
      process.env.JWT_SECRET_KEY as string,
    );

    // console.log('middleware token verify. check payload:', payload);
    reqToken.payload = payload;
    next();
  } catch (error) {
    next(error);
  }
};
