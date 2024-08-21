// app/actions/clientActions.ts
"use server";

import db from "@/db/db";
import { Client } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function deleteClient(id: string) {
try {
    await db.client.delete({
      where: { id },
    });
    revalidatePath("/admin/clients");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete client:", error);
    return { success: false, error: "Failed to delete client" };
  }
}

export async function editClient(id: string, data: Partial<Client>) {
  try {
    await db.client.update({
      where: { id },
      data,
    });
    revalidatePath("/admin/clients");
    return { success: true };
  } catch (error) {
    console.error("Failed to edit client:", error);
    return { success: false, error: "Failed to edit client" };
  }
}
