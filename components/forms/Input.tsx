import React from "react";
import { FieldError } from "react-hook-form";

type Input = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends Input {
  id: string;
  label: string;
  error: FieldError | undefined;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ id, label, error, ...props }, ref) => {
    return (
      <div>
        <label
          htmlFor={id}
          className="text-xs mx-6 text-neutral-400 font-semibold capitalize"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className="border-solid border-gray border-2 px-6 py-2 text-sm text-neutral-500 rounded-md w-full focus:border-primary focus:outline-none"
          {...props}
        />
        {error && (
          <small className="text-red-500 text-xs">{error.message}</small>
        )}
      </div>
    );
  }
);

export default Input;
