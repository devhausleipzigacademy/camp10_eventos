import { NextResponse } from "next/server";
import { RoomSchema, Room } from "@/schema/room";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const body = (await req.json()) as Room;

  try {
    RoomSchema.parse(body);
  } catch (err) {
    return NextResponse.json({ message: "Wrong data" }, { status: 422 });
  }

  const createdRoom = await prisma.room.create({
    data: {
      ...body,
    },
  });

  return NextResponse.json(createdRoom, { status: 201 });
};
