-- CreateTable
CREATE TABLE "organizations" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);
