/*
  Warnings:

  - Added the required column `expiredAt` to the `Discount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `discount` ADD COLUMN `expiredAt` DATETIME(3) NOT NULL;
