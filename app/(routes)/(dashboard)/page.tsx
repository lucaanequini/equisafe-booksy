'use client'

import { useUser } from "@clerk/nextjs";

import { Navbar } from "@/components/navbar";
import { Heading } from "@/components/ui/heading";
import { CardSection } from "@/components/card-section";

export default function Home() {
  const { user } = useUser();

  const isAdmin = user?.organizationMemberships[0].role === 'org:admin'
  console.log(isAdmin)

  return (
    <div>
      <main className="p-5">
        <Heading
          title="Seja bem-vindo à Equisafe!"
          description="Aqui você pode agendar consultas e exames para seu cavalo de forma rápida e prática."
        />
        <div className="w-full h-full flex items-center justify-center mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-10 lg:gap-20">
            <CardSection
              title='Meus Agendamentos'
              description='Pré-visualização de seus agendamentos para os próximos 15 dias.'
              data={['Exame de Raio-X', 'Exame de Ultrassom']}
            />
            <CardSection
              title='Histórico'
              description="Pré-visualização de seus agendamentos passados."
              data={['Exame de Sangue', 'Consulta']}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
