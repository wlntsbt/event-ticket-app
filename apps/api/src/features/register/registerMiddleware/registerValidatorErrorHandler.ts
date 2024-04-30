import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const registerValidatorErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errorResult = validationResult(req);
  if (!errorResult.isEmpty()) {
    res.status(300).send({
      error: true,
      message: errorResult.array()[0].msg,
      data: null,
    });
  } else {
    next();
  }
};
