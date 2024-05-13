import { createToken } from '@/helpers/token';
import { findAccountbyEmail } from './authService';
import { comparePassword } from '@/helpers/hash';
import { NextFunction, Request, Response } from 'express';
import { IReqAccessToken } from '@/helpers/token';
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    const accountData = await findAccountbyEmail(email);

    if (!accountData) throw new Error('Account not found.');

    const validatePassword = await comparePassword({
      passwordFromClient: password,
      passwordFromDatabase: accountData.password,
    });

    if (!validatePassword) throw new Error('Password does not match.');

    const accesstoken = await createToken({
      uid: accountData.uid,
      role: accountData.role,
      username: accountData.username,
    });

    res.status(200).send({
      error: false,
      message: 'Login success',
      data: {
        accesstoken,
        uid: accountData.uid,
        role: accountData.role,
        username: accountData.username,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const persist = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqToken = req as IReqAccessToken;
    const { uid, role, username } = reqToken.payload;

    res.status(200).send({
      error: false,
      message: 'jwt token validated',
      data: { uid, role, username },
    });
  } catch (error) {
    next(error);
  }
};
