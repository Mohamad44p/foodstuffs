import AllSections from "@/components/All";
import ClientsPage from "@/components/ClientsList";
import SectionLoader from "@/components/SectionLoader";
import dynamic from "next/dynamic";

export default function page() {
  return (
    <main>
      <AllSections>
        <ClientsPage />
      </AllSections>
    </main>
  );
}
