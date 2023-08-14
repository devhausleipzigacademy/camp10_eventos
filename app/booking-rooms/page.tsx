import { PrismaClient, Room } from "@prisma/client";
import { DataTable } from "./data-tables";
import { columns } from "./columns";

const prisma = new PrismaClient();

async function getData() {
  const rooms = await prisma.room.findMany({
    select: {
      id: true,
      name: true,
      postal: true,
      city: true,
      street: true,
    },
  });
  return rooms;
}

async function BookingRooms() {
  const rooms = await getData();

  if (!rooms || rooms.length === 0) {
    return (
      <div>
        <h1>No rooms found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={rooms} />
      </div>
    </div>
  );
}

export default BookingRooms;
