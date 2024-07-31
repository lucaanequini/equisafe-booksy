import { Plus } from "lucide-react";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

export default function MyAppointmentsPage() {
    return (
        <main className="p-5">
            <div className="flex justify-between items-center">
                <Heading
                    title="Meus Agendamentos"
                    description="Veja todos seus agendamentos"
                />
                <Button
                    className="flex gap-2"
                >
                    <Plus className="w-5 h-5" />
                    Novo Agendamento
                </Button>
            </div>
        </main>
    )
}