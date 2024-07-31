import { Navbar } from "@/components/navbar"

export default function DefaultRoutesLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}