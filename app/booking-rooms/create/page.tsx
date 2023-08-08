import React from "react";
import CreateForm from "./CreateForm";

function CreateRoom() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-neutral-700">
        Create a Booking Room:
      </h1>
      <hr className="w-[50%] my-4" />
      <CreateForm />
    </div>
  );
}

export default CreateRoom;
