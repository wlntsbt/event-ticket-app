import { prisma, billingStatus, pointStatus } from '@/connection';
import { IBookingData, IAttendeeTicketData, ICreateBill } from './ticketType';
import { Decimal } from '@prisma/client/runtime/library';

export const createBill = async (data: ICreateBill) => {
  const { uid, bookingData, usePoint, voucherId, discountId } = data;

  const bill = await prisma.bill.create({
    data: {
      attendeeUid: uid,
      Booking: {
        create: bookingData,
      },
    },
  });

  const bookingItem = await prisma.booking.findMany({
    where: {
      billId: bill.id,
    },
    include: {
      ticket: true,
    },
  });

  let total = bookingItem.reduce(
    (acc, x) => acc + x.ticket.ticketPrice * x.qty,
    0,
  );

  if (usePoint) {
    const points = await prisma.point.findMany({
      where: {
        attendeeUid: uid,
      },
    });

    total = total - 10000 * points.length;
  }

  if (voucherId) {
    const voucher = await prisma.voucher.findUnique({
      where: {
        id: voucherId,
      },
    });

    if (voucher) {
      total = total - total * new Decimal(voucher.amount).toNumber();
    }
  }

  if (discountId) {
    const discount = await prisma.discount.findUnique({
      where: {
        id: discountId,
      },
    });

    if (discount) {
      total = total - total * new Decimal(discount.amount).toNumber();
    }
  }

  return prisma.$transaction(async (tx) => {
    if (usePoint) {
      await tx.point.updateMany({
        where: {
          attendeeUid: uid,
        },
        data: {
          status: pointStatus.USED,
        },
      });

      await tx.bill.update({
        where: {
          id: bill.id,
        },
        data: {
          usePoint: true,
        },
      });
    }

    if (voucherId) {
      await tx.voucher.update({
        where: {
          id: voucherId,
        },
        data: {
          status: pointStatus.USED,
        },
      });

      await tx.bill.update({
        where: {
          id: bill.id,
        },
        data: {
          useVoucher: true,
        },
      });
    }

    if (discountId) {
      await tx.bill.update({
        where: {
          id: bill.id,
        },
        data: {
          useDiscount: discountId,
        },
      });
    }

    return await tx.bill.update({
      where: {
        id: bill.id,
      },
      data: {
        total: total,
      },
      include: {
        Booking: {
          include: {
            ticket: true,
          },
        },
      },
    });
  });
};

export const payBill = async (id: string) => {
  return prisma.$transaction(async (tx) => {
    const updatedBill = await tx.bill.update({
      where: {
        id,
      },
      data: {
        status: billingStatus.PAID,
      },
    });

    if (updatedBill.useDiscount) {
      await tx.discount.update({
        where: {
          id: updatedBill.useDiscount,
        },
        data: {
          stock: {
            decrement: 1,
          },
        },
      });
    }

    const ticketData: IAttendeeTicketData[] = [];

    const bookingData = await tx.booking.findMany({
      where: {
        billId: id,
      },
    });

    bookingData.forEach((x) => {
      for (let i = 0; i < x.qty; i++) {
        ticketData.push({
          ticketId: x.ticketId,
          billId: x.billId,
        });
      }
    });

    await tx.attendeeTicket.createMany({
      data: ticketData,
    });

    const ticket = await tx.ticket.findMany({
      include: {
        AttendeeTicket: true,
      },
    });

    for (let book of bookingData) {
      await tx.ticket.update({
        where: {
          id: book.ticketId,
        },
        data: {
          ticketAmount: {
            decrement: book.qty,
          },
        },
      });
    }

    return ticket;
  });
};
