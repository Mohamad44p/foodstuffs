import { Suspense } from "react";
import ClientComponent from "./ClientComponent";

export default async function ClientsPage() {

  return (
    <div className="container py-[24vh] mx-auto px-4 bg-[#faf7f2] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          {/* <ClientComponent clients={clients} /> */}
        </Suspense>
      </div>
    </div>
  );
}
