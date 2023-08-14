import { NextRequest, NextResponse } from "next/server";
import { ZodType } from "zod";

type MyRequest<T> = {
  req: NextRequest;
  body: T;
};

type Callback<T> = ({ req, body }: MyRequest<T>) => void;

export const withValidation = <T>(schema: ZodType<T>, cb: Callback<T>) => {
  return async (req: NextRequest) => {
    try {
      const body = await req.json();
      const parsedBody = schema.parse(body);
      return cb({ req, body: parsedBody });
    } catch (err) {
      return NextResponse.json({ message: "Wrong data" }, { status: 422 });
    }
  };
};
