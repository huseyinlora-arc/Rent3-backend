/*
  Warnings:

  - You are about to drop the column `paymentDate` on the `RentalPayment` table. All the data in the column will be lost.
  - You are about to drop the column `paymentType` on the `RentalPayment` table. All the data in the column will be lost.
  - Added the required column `propertyId` to the `RentalPayment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionHash` to the `RentalPayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PropertyOwner" ALTER COLUMN "walletAddress" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RentalPayment" DROP COLUMN "paymentDate",
DROP COLUMN "paymentType",
ADD COLUMN     "propertyId" INTEGER NOT NULL,
ADD COLUMN     "transactionHash" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "walletAddress" DROP NOT NULL;

-- DropEnum
DROP TYPE "PaymentType";

-- AddForeignKey
ALTER TABLE "RentalPayment" ADD CONSTRAINT "RentalPayment_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
