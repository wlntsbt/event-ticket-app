import {
  getLocation,
  getCategory,
  getBillingStatus,
  getPointStatus,
  getRole,
} from './enumService';
import { NextFunction, Request, Response } from 'express';

export const getLocationList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await getLocation();
    res.status(200).send({
      error: false,
      message: `Fetch location enum success`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getCategoryList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await getCategory();
    res.status(200).send({
      error: false,
      message: `Fetch category enum success`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getBillingStatusList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await getBillingStatus();
    res.status(200).send({
      error: false,
      message: `Fetch billing status enum success`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getPointStatusList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await getPointStatus();
    res.status(200).send({
      error: false,
      message: `Fetch point status enum success`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getRoleList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await getRole();
    res.status(200).send({
      error: false,
      message: `Fetch role enum success`,
      data,
    });
  } catch (error) {
    next(error);
  }
};
