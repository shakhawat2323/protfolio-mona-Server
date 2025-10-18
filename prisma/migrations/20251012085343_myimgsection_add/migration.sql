/*
  Warnings:

  - You are about to drop the column `Image` on the `blogs` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[image]` on the table `blogs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."blogs_Image_key";

-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "Image",
ADD COLUMN     "image" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "blogs_image_key" ON "blogs"("image");
