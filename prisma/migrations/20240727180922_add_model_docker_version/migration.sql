-- CreateTable
CREATE TABLE "DockerVersion" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "DockerVersion_id_key" ON "DockerVersion"("id");
