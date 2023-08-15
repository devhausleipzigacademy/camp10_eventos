"use client";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { Room } from "@prisma/client";

import Button from "@/components/forms/Button";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

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
  {
    header: "Actions",
    accessorKey: "actions",
    id: "actions",
    cell: ({ row }) => {
      const queryClient = useQueryClient();
      const { mutateAsync, isLoading } = useMutation({
        mutationFn: async (id: string) =>
          await axios.delete(`/api/rooms/${id}`),
        onSuccess: (res) => {
          queryClient.invalidateQueries(["rooms"]);
          toast.success("Room deleted successfully");
        },
        onError: (err) => {
          console.log("errror");
          toast.error("Room deletion failed, try again");
        },
      });

      return (
        <Button onClick={() => mutateAsync(row.original.id)}>
          Delete Room
        </Button>
      );
    },
  },
];
