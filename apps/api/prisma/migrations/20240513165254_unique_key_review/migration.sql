/*
  Warnings:

  - A unique constraint covering the columns `[eventId,attendeeUid]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Review_eventId_attendeeUid_key` ON `Review`(`eventId`, `attendeeUid`);
