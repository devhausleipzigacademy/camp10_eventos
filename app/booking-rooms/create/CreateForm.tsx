"use client";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import Textarea from "@/components/forms/Textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Room, RoomSchema } from "@/schema/room";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import React from "react";

function CreateForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    register: registerForm,
    handleSubmit,
    formState,
    reset,
  } = useForm<Room>({
    resolver: zodResolver(RoomSchema),
    mode: "onBlur",
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (room: Room) => await axios.post("/api/rooms", room),
    onSuccess: async (res) => {
      await queryClient.invalidateQueries(["rooms"]);
      toast.success("Room created successfully");
      reset();
      router.push("/booking-rooms");
    },
    onError: (err) => {
      console.log("errror");
      toast.error("Room creation failed, try again");
    },
  });

  return (
    <form onSubmit={handleSubmit(async (room: Room) => mutateAsync(room))}>
      <div className="flex gap-4">
        <Input
          id="name"
          label="Name"
          placeholder="Enter room name"
          type="text"
          error={formState.errors.name}
          {...registerForm("name")}
        />
        <Input
          id="postal"
          label="Postal"
          type="number"
          placeholder="80333"
          error={formState.errors.postal}
          {...registerForm("postal")}
        />
      </div>
      <div className="flex gap-4">
        <Input
          id="city"
          label="City"
          type="text"
          placeholder="Munich"
          error={formState.errors.city}
          {...registerForm("city")}
        />
        <Input
          id="street"
          label="Street"
          type="text"
          placeholder="Marienplatz"
          error={formState.errors.street}
          {...registerForm("street")}
        />
      </div>
      <div className="my-4">
        <Textarea
          id="description"
          label="Description"
          error={formState.errors.description}
          {...registerForm("description")}
        />
      </div>
      <Button disabled={isLoading} type="submit">
        Create Room
      </Button>
    </form>
  );
}

export default CreateForm;
