/*
  Warnings:

  - You are about to drop the column `subscription_type_id` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionType` on the `users` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `sub_type` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_subscription_type_id_fkey";

-- DropForeignKey
ALTER TABLE "user_sub" DROP CONSTRAINT "user_sub_user_id_fkey";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "subscription_type_id";

-- AlterTable
ALTER TABLE "sub_type" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "subscriptionType";
