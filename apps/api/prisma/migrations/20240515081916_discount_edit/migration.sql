/*
  Warnings:

  - You are about to drop the column `endDate` on the `discount` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `discount` table. All the data in the column will be lost.
  - You are about to drop the column `ticketId` on the `discount` table. All the data in the column will be lost.
  - Added the required column `eventId` to the `Discount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Discount` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `discount` DROP FOREIGN KEY `Discount_ticketId_fkey`;

-- AlterTable
ALTER TABLE `discount` DROP COLUMN `endDate`,
    DROP COLUMN `startDate`,
    DROP COLUMN `ticketId`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `eventId` INTEGER NOT NULL,
    ADD COLUMN `stock` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Discount` ADD CONSTRAINT `Discount_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
