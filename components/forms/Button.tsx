import React from "react";

type Button = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  ...props
}: Button & { children: React.ReactNode }) {
  return (
    <button
      {...props}
      className="bg-primary text-white shadow-sm py-2 px-7 rounded-md hover:bg-primary-dark"
    >
      {children}
    </button>
  );
}

export default Button;
