"use client";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import Textarea from "@/components/forms/Textarea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Room, RoomSchema } from "@/schema/room";

function CreateForm() {
  const {
    register: registerForm,
    handleSubmit,
    formState,
  } = useForm<Room>({
    resolver: zodResolver(RoomSchema),
    mode: "onBlur",
  });

  // Comment out two way data binding because react hook forms manage that for us
  /*  const initialFormState = {
    name: "",
    postal: "",
    city: "",
    street: "",
    description: "",
  };
  const [formState, setFormState] = useState(initialFormState); */

  function onSubmitHandler() {
    console.log(formState);
    /*     formState.name.length < 3 && alert("Name must be at least 3 characters");
    formState.name.length > 20 && alert("Name must be at most 20 characters"); */
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="flex gap-4">
        <Input
          id="name"
          label="Name"
          placeholder="Enter room name"
          type="text"
          error={formState.errors.name}
          {...registerForm("name")}
          /*           value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })} */
        />
        <Input
          id="postal"
          label="Postal"
          type="number"
          placeholder="80333"
          error={formState.errors.postal}
          {...registerForm("postal")}
          /*           value={formState.postal}
          onChange={(e) =>
            setFormState({ ...formState, postal: e.target.value })
          } */
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
          /*           value={formState.city}
          onChange={(e) => setFormState({ ...formState, city: e.target.value })} */
        />
        <Input
          id="street"
          label="Street"
          type="text"
          placeholder="Marienplatz"
          error={formState.errors.street}
          {...registerForm("street")}
          /*           value={formState.street}
          onChange={(e) =>
            setFormState({ ...formState, street: e.target.value })
          } */
        />
      </div>
      <div className="my-4">
        <Textarea
          id="description"
          label="Description"
          error={formState.errors.description}
          {...registerForm("description")}
          /*           value={formState.description}
          onChange={(e) =>
            setFormState({ ...formState, description: e.target.value })
          } */
        />
      </div>
      <Button type="submit">Create Room</Button>
    </form>
  );
}

export default CreateForm;