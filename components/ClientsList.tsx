import db from "@/db/db";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import ClientComponent from "./ClientComponent";
import { unstable_noStore  as noStore} from "next/cache";


export default async function ClientsPage() {
  noStore();
  const clients = await db.client.findMany({
    select: {
      id: true,
      title: true,
      Link: true,
      ButtonColor: true,
      BackgroundColor: true,
      ImageUrl: true,
    },
  
  });

  return (
    <div className="container py-24 mx-auto px-4 bg-[#faf7f2] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <ClientComponent clients={clients} />
        </Suspense>
      </div>
    </div>
  );
}
