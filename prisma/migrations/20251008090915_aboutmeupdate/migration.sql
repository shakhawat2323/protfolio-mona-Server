/*
  Warnings:

  - You are about to drop the `About` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Certificate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Education` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Social` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Strength` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Certificate" DROP CONSTRAINT "Certificate_aboutId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Education" DROP CONSTRAINT "Education_aboutId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Social" DROP CONSTRAINT "Social_aboutId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Stat" DROP CONSTRAINT "Stat_aboutId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Strength" DROP CONSTRAINT "Strength_aboutId_fkey";

-- DropTable
DROP TABLE "public"."About";

-- DropTable
DROP TABLE "public"."Certificate";

-- DropTable
DROP TABLE "public"."Education";

-- DropTable
DROP TABLE "public"."Social";

-- DropTable
DROP TABLE "public"."Stat";

-- DropTable
DROP TABLE "public"."Strength";

-- CreateTable
CREATE TABLE "AboutMe" (
    "id" SERIAL NOT NULL,
    "technologiesMastered" INTEGER NOT NULL DEFAULT 15,
    "happyClients" INTEGER NOT NULL DEFAULT 8,
    "completedProjects" INTEGER NOT NULL DEFAULT 20,
    "yearsOfExperience" DOUBLE PRECISION NOT NULL DEFAULT 1.5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AboutMe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certification" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "org" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "image" TEXT,
    "aboutMeId" INTEGER NOT NULL,

    CONSTRAINT "Certification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Certification" ADD CONSTRAINT "Certification_aboutMeId_fkey" FOREIGN KEY ("aboutMeId") REFERENCES "AboutMe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
