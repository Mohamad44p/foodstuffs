import AllSections from "@/components/All";
import ClientsPage from "@/components/ClientsList";
import SectionLoader from "@/components/SectionLoader";

export default function page() {
  return (
    <main>
      <AllSections>
        <ClientsPage />
      </AllSections>
    </main>
  );
}