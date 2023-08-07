export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('https://source.unsplash.com/random?event')] bg-cover bg-center w-full min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
