import db from "@/db/db";
import { Suspense } from "react";
import ClientComponent from "./ClientComponent";

export default async function ClientsPage() {
  const clients = await db.client.findMany();

  return (
    <div className="container py-[24vh] mx-auto px-4 bg-[#faf7f2] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-[20vh] bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
          Our Esteemed Clients
        </h2>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientComponent clients={clients} />
        </Suspense>
      </div>
    </div>
  );
}
