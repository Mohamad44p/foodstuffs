import { redirect } from "next/navigation";
import Link from "next/link";
import Sidebar from "./_components/Sidebar";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto container mx-auto">{children}</main>
    </div>
  );
}