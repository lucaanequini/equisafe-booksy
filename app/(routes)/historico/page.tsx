import { Heading } from "@/components/ui/heading"

export default function HistoryPage() {
    return (
        <main className="p-5">
            <div className="flex justify-between items-center">
                <Heading
                    title="Histórico"
                    description="Veja todos seu histórico de agendamentos"
                />
            </div>
        </main>
    )
}