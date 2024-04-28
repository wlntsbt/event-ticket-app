import { prisma } from '@/connection';
import { ICreateAttendeeParams, ICreatePromoterParams } from './registerType';
import { addMonths } from 'date-fns';

export const createPromoter = async (promotorData: ICreatePromoterParams) => {
  await prisma.promotor.create({
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
  member?: any,
) => {
  if (!member) {
    await prisma.attendee.create({
      data: attendeeData,
    });
  } else {
    await prisma.$transaction(async (tx: any) => {
      await tx.point.create({
        data: {
          attendeeUid: member.uid,
          expiredAt: addMonths(new Date(), 3),
        },
      });

      const newUser = await prisma.attendee.create({
        data: attendeeData,
      });

      console.log(newUser)
      await tx.voucher.create({
        data: {
          attendeeUid: newUser.uid,
          expiredAt: addMonths(new Date(), 3),
          amount: 0.10,
          description: 'New Member Voucher',
        },
      });
    });
  }
};
