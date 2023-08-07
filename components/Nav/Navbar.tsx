import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { UserButton, auth } from "@clerk/nextjs";

function Navbar() {
  const { userId } = auth();

  return (
    <nav className="w-full flex items-center py-2 px-6 justify-between border-b shadow-sm bg-white fixed">
      <Link
        href="/"
        className="text-xl text-primary  font-bold uppercase tracking-wider"
      >
        <h1>Eventos</h1>
      </Link>
      <ul className="flex items-center gap-4">
        {!userId && (
          <>
            <li>
              <NavLink href="/sign-in">Sign in</NavLink>
            </li>
            <li>
              <NavLink href="/sign-up">Sign up</NavLink>
            </li>
          </>
        )}
        {userId && (
          <>
            <li>
              <NavLink href="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink href="/events">Create Events</NavLink>
            </li>
            <li>
              <NavLink href="/booking-rooms">Booking Rooms</NavLink>
            </li>
            <div>
              <UserButton afterSignOutUrl="/" />
            </div>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
