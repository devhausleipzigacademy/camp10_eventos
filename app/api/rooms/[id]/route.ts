import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

type Params = {
  params: {
    id: string;
  };
};

export const DELETE = async (req: NextRequest, { params }: Params) => {
  const deletedRoom = await prisma.room.delete({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(deletedRoom, { status: 200 });
};
