/*
  Warnings:

  - You are about to drop the column `available` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Property` table. All the data in the column will be lost.
  - Added the required column `city` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floorSizeSqm` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Property` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `email` on table `PropertyOwner` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('HOUSE', 'APARTMENT', 'TOWNHOUSE', 'DUPLEX', 'PENTHOUSE', 'STUDIO', 'CONDO');

-- CreateEnum
CREATE TYPE "Amenity" AS ENUM ('SWIMMING_POOL', 'GYM', 'SECURITY_SYSTEM', 'AIR_CONDITIONING', 'HEATING', 'BALCONY', 'FIREPLACE', 'GARAGE', 'GARDEN', 'ELEVATOR', 'PET_FRIENDLY');

-- DropIndex
DROP INDEX "PropertyOwner_email_key";

-- DropIndex
DROP INDEX "Tenant_email_key";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "available",
DROP COLUMN "size",
ADD COLUMN     "amenities" "Amenity"[],
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "dateAvailable" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "floorSizeSqm" INTEGER NOT NULL,
ADD COLUMN     "furnished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "neighborhood" TEXT NOT NULL,
ADD COLUMN     "parkingSpaces" INTEGER DEFAULT 0,
ADD COLUMN     "yearBuilt" INTEGER,
DROP COLUMN "type",
ADD COLUMN     "type" "PaymentType" NOT NULL;

-- AlterTable
ALTER TABLE "PropertyOwner" ALTER COLUMN "email" SET NOT NULL;
