// app/[locale]/admin/layout.tsx
import AuthCheck from "./_components/AuthCheck";
import Sidebar from "./_components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthCheck>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto container mx-auto">{children}</main>
      </div>
    </AuthCheck>
  );
}