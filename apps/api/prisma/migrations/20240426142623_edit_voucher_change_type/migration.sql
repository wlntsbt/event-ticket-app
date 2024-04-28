/*
  Warnings:

  - You are about to alter the column `amount` on the `discount` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(10,2)`.
  - You are about to alter the column `amount` on the `voucher` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE `discount` MODIFY `amount` DECIMAL(10, 2) NOT NULL;

-- AlterTable
ALTER TABLE `voucher` MODIFY `amount` DECIMAL(10, 2) NOT NULL,
    MODIFY `description` TEXT NULL;
