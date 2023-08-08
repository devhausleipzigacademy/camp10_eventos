import React from "react";
import { FieldError } from "react-hook-form";

type Textarea = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
interface Props extends Textarea {
  id: string;
  label: string;
  error: FieldError | undefined;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ id, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={id}
          className="text-xs mx-6 text-neutral-400 font-semibold capitalize"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          {...props}
          className="min-h-[100px] resize-none text-neutral-500 border-solid border-gray border-2 px-6 py-2 text-sm rounded-md w-full focus:border-primary focus:outline-none"
        ></textarea>
        {error && (
          <small className="text-red-500 text-xs">{error.message}</small>
        )}
      </div>
    );
  }
);

export default Textarea;
