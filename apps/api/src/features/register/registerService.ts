import { prisma } from '@/connection';
import { ICreateAttendeeParams, ICreatePromoterParams } from './registerType';
import { addMonths } from 'date-fns';

export const createPromoter = async (promotorData: ICreatePromoterParams) => {
  return await prisma.promotor.create({
    data: promotorData,
  });
};

export const isReferralCodeExist = async (code: string) => {
  return await prisma.attendee.findUnique({
    where: {
      referralCode: code,
    },
  });
};

export const createAttendee = async (
  attendeeData: ICreateAttendeeParams,
  memberCode?: any,
) => {
  let newUser: any;
  if (!memberCode) {
    newUser = await prisma.attendee.create({
      data: attendeeData,
    });
  } else {
    await prisma.$transaction(async (tx: any) => {
      const memberData = await tx.attendee.findUnique({
        where: {
          referralCode: memberCode,
        },
      });

      if (!memberData) throw new Error('Referral code invalid');

      await tx.point.create({
        data: {
          attendeeUid: memberData.uid,
          expiredAt: addMonths(new Date(), 3),
        },
      });

      newUser = await tx.attendee.create({
        data: attendeeData,
      });

      await tx.voucher.create({
        data: {
          attendeeUid: newUser.uid,
          expiredAt: addMonths(new Date(), 3),
          amount: 0.1,
          description: 'New Member Voucher',
        },
      });
    });
  }
  return newUser;
};
