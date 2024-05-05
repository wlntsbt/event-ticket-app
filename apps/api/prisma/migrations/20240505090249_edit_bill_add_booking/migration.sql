/*
  Warnings:

  - You are about to drop the column `eventId` on the `bill` table. All the data in the column will be lost.
  - You are about to drop the column `qty` on the `bill` table. All the data in the column will be lost.
  - You are about to drop the column `usePromo` on the `bill` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `bill` DROP FOREIGN KEY `Bill_eventId_fkey`;

-- AlterTable
ALTER TABLE `bill` DROP COLUMN `eventId`,
    DROP COLUMN `qty`,
    DROP COLUMN `usePromo`,
    ADD COLUMN `usePoint` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `useVoucher` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `voucherId` INTEGER NULL,
    MODIFY `total` INTEGER NULL;

-- CreateTable
CREATE TABLE `Booking` (
    `billId` VARCHAR(191) NOT NULL,
    `ticketId` INTEGER NOT NULL,
    `qty` INTEGER NOT NULL,

    PRIMARY KEY (`billId`, `ticketId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bill` ADD CONSTRAINT `Bill_voucherId_fkey` FOREIGN KEY (`voucherId`) REFERENCES `Voucher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_billId_fkey` FOREIGN KEY (`billId`) REFERENCES `Bill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Ticket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
