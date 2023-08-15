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

export const GET = async () => {
  const rooms = await prisma.room.findMany({
    select: {
      id: true,
      name: true,
      postal: true,
      city: true,
      street: true,
    },
  });

  return NextResponse.json(rooms);
};
