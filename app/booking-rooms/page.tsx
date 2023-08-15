import { PrismaClient, Room } from "@prisma/client";
import { DataTable } from "./data-tables";
import { columns } from "./columns";
import Button from "@/components/forms/Button";
import Link from "next/link";

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
      <div className=" border-primary-dark border-2 rounded-md py-4 px-6">
        <h2 className="text-2xl font-bold text-neutral-700">No rooms found.</h2>
        <hr className="w-[50%] my-4" />
        <p className="text-lg text-neutral-600 max-w-[500px] my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          veniam, aperiam ut dolorem unde illum libero? Odit inventore officia
          modi! Vero laborum dolorum dignissimos aut officiis amet repudiandae,
          magni assumenda?
        </p>
        <Button>
          <Link href="/booking-rooms/create">Create new room</Link>
        </Button>
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
