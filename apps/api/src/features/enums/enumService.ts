import {
  location,
  eventCategory,
  pointStatus,
  billingStatus,
  role,
} from '@/connection';

export const getLocation = () => {
  return location;
};

export const getCategory = () => {
  return eventCategory;
};

export const getPointStatus = () => {
  return pointStatus;
};

export const getBillingStatus = () => {
  return billingStatus;
};

export const getRole = () => {
  return role;
};
