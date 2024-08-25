// app/admin/clients/edit/[id]/page.tsx
import { notFound } from 'next/navigation';
import db from "@/db/db";
import ClientEditForm from './_components/ClientEditForm';
import { unstable_noStore  as noStore} from "next/cache";

export default async function ClientEditPage({ params }: { params: { id: string } }) {
  noStore();
  const client = await db.client.findUnique({ where: { id: params.id } });

  if (!client) {
    notFound();
  }

  return <ClientEditForm client={client} />;
}