/*
  Warnings:

  - You are about to drop the `DockerVersion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DockerVersion";

-- CreateTable
CREATE TABLE "dockerVersion" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "dockerVersion_id_key" ON "dockerVersion"("id");
