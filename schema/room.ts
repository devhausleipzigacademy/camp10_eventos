import * as z from "zod";

export const RoomSchema = z.object({
  name: z.string().min(3).max(255),
  postal: z.string().min(5).max(5),
  city: z.string().min(3).max(255),
  street: z.string().min(3).max(255),
  description: z.string().min(50).max(1500),
});

export type Room = z.infer<typeof RoomSchema>;
