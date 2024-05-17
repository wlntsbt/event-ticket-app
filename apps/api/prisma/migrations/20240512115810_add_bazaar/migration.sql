-- AlterTable
ALTER TABLE `event` MODIFY `category` ENUM('Entertainment', 'Seminar', 'Workshop', 'Social', 'Bazaar', 'Other') NOT NULL DEFAULT 'Other';
