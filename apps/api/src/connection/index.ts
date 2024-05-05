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
export const eventCategory = Category;
export const pointStatus = PointStatus;
export const billingStatus = BillingStatus;
export const role = Role;