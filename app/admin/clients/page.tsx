import db from "@/db/db";
import Link from "next/link";
import { DataTable } from "./_components/DataTable";
import { columns } from "./_components/columns";

async function getClients() {
  return await db.client.findMany();
}

export default async function AdminDashboard() {
  const clients = await getClients();

  return (
    <div className="py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Brands Admin Dashboard
        </h1>
        <Link
          href="/admin/clients/add"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
        >
          Add New Brands
        </Link>
      </div>

      <DataTable columns={columns} data={clients} />
    </div>
  );
}