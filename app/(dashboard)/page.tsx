import { Navbar } from "@/components/navbar";
import { Heading } from "@/components/ui/heading";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-5">
        <Heading
          title="Seja bem-vindo à Equisafe!"
          description="Aqui você pode agendar consultas e exames para seu cavalo de forma rápida e prática."
        />
      </main>
    </div>
  );
}
