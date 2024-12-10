-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
