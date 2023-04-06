-- CreateTable
CREATE TABLE "EndpointStatistics" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "methodName" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "args" TEXT NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "EndpointStatistics_pkey" PRIMARY KEY ("id")
);
