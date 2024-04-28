import {
  PrismaClient,
  City,
  Category,
  PointStatus,
  BillingStatus,
  Role,
} from '@prisma/client';
export const prisma = new PrismaClient();
export const location = City;
