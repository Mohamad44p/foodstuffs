import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import db from "@/db/db";
import { UsersIcon } from "lucide-react";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

async function fetchClientCount() {
  const data = await db.client.count();
  return data;
}

const Homepage = async () => {
  noStore();
  const clientCount = await fetchClientCount();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Welcome to Admin Dashboard
      </h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <UsersIcon className="mr-2 h-6 w-6 text-blue-500" />
            Client Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold text-gray-800">{clientCount}</p>
          <p className="text-sm text-gray-500">Total Clients</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Homepage;
