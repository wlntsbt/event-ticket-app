/*
  Warnings:

  - Added the required column `description` to the `Voucher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `voucher` ADD COLUMN `description` TEXT NOT NULL;
