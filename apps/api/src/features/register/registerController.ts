import { NextFunction, Request, Response } from 'express';
import {
  createPromoter,
  createAttendee,
  isReferralCodeExist,
} from './registerService';
import { hashPassword } from '@/helpers/hash';
import { referralCodeGenerator } from '@/helpers/referralCode';

export const newPromoter = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const { password } = req.body;

    data.password = await hashPassword(password);

    await createPromoter(data);

    res.status(200).send({
      error: false,
      message: 'Create promoter success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const newAttendee = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      phone,
      memberCode,
    } = req.body;

    const data = {
      firstName,
      lastName,
      username,
      email,
      password,
      phone,
      referralCode: referralCodeGenerator(),
    };

    const checkMemberCode = await isReferralCodeExist(memberCode);
    if (!checkMemberCode) throw new Error('Referral code does not exist!');

    data.password = await hashPassword(password);

    await createAttendee(data, checkMemberCode);

    res.status(200).send({
      error: false,
      message: 'Create attendee success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const codeChecker = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { code } = req.params;

    const checkMemberCode = await isReferralCodeExist(code);
    if (!checkMemberCode) throw new Error('Referral code does not exist!');

    res.status(200).send({
      error: false,
      message: 'Referral code exists.',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
