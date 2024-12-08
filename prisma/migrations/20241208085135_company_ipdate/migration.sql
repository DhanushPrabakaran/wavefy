/*
  Warnings:

  - Made the column `company` on table `Experience` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Experience" ALTER COLUMN "company" SET NOT NULL;
