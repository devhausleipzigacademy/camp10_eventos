import Sidebar from "@/components/nav/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navLinks = [
    {
      href: "/booking-rooms",
      name: "Booking Rooms",
    },
    {
      href: "/booking-rooms/create",
      name: "Create Booking Rooms",
    },
  ];
  return (
    <div className="flex gap-6 h-screen">
      <Sidebar navLinks={navLinks} />
      <div className="container m-auto mt-6">{children}</div>
    </div>
  );
}
