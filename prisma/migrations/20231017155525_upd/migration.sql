/*
  Warnings:

  - You are about to drop the column `subscriptionType_id` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `sub_type` table. All the data in the column will be lost.
  - Added the required column `subscription_type_id` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_subscriptionType_id_fkey";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "subscriptionType_id",
ADD COLUMN     "subscription_type_id" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "sub_type" DROP COLUMN "user_id";

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_subscription_type_id_fkey" FOREIGN KEY ("subscription_type_id") REFERENCES "sub_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
