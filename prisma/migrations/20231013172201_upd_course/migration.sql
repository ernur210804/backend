/*
  Warnings:

  - You are about to drop the column `title` on the `bookmarks` table. All the data in the column will be lost.
  - Added the required column `course` to the `bookmarks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookmarks" DROP COLUMN "title",
ADD COLUMN     "course" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Courses" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "subscription_type_id" INTEGER NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_subscription_type_id_fkey" FOREIGN KEY ("subscription_type_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
