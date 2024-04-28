/*
  Warnings:

  - Added the required column `imageLink` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `imageLink` VARCHAR(191) NOT NULL;
