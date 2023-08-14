"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Room } from "@prisma/client";

export const columns: ColumnDef<
  Omit<Room, "description" | "updatedAt" | "createdAt">
>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "City",
    accessorKey: "city",
  },
  {
    header: "Postal",
    accessorKey: "postal",
  },
  {
    header: "Street",
    accessorKey: "street",
  },
];
