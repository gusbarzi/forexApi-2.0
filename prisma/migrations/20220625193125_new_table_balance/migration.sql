/*
  Warnings:

  - You are about to drop the column `transaction` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `balance` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "transaction",
ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL;
