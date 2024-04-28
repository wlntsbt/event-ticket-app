/*
  Warnings:

  - You are about to alter the column `ticketId` on the `discount` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `ticket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `attendeeUid` on the `ticket` table. All the data in the column will be lost.
  - You are about to drop the column `billId` on the `ticket` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `ticket` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `discount` DROP FOREIGN KEY `Discount_ticketId_fkey`;

-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `Ticket_attendeeUid_fkey`;

-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `Ticket_billId_fkey`;

-- AlterTable
ALTER TABLE `discount` MODIFY `ticketId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ticket` DROP PRIMARY KEY,
    DROP COLUMN `attendeeUid`,
    DROP COLUMN `billId`,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `AttendeeTicket` (
    `id` VARCHAR(191) NOT NULL,
    `ticketId` INTEGER NOT NULL,
    `billId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Discount` ADD CONSTRAINT `Discount_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Ticket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AttendeeTicket` ADD CONSTRAINT `AttendeeTicket_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Ticket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AttendeeTicket` ADD CONSTRAINT `AttendeeTicket_billId_fkey` FOREIGN KEY (`billId`) REFERENCES `Bill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
