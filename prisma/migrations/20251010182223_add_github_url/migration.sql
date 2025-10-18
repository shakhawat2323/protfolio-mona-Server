/*
  Warnings:

  - Added the required column `githublink` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "githublink" TEXT NOT NULL;
