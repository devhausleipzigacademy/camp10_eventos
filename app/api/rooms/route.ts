import { NextResponse } from "next/server";
import { RoomSchema, Room } from "@/schema/room";
import { PrismaClient } from "@prisma/client";
import { withValidation } from "@/lib/withValidation";

const prisma = new PrismaClient();

export const POST = withValidation(RoomSchema, async ({ body }) => {
  const createdRoom = await prisma.room.create({
    data: {
      ...body,
    },
  });

  return NextResponse.json(createdRoom, { status: 201 });
});
