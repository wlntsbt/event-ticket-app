-- AlterTable
ALTER TABLE `attendee` ADD COLUMN `role` ENUM('USER', 'PROMOTER') NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE `promotor` ADD COLUMN `role` ENUM('USER', 'PROMOTER') NOT NULL DEFAULT 'PROMOTER';
