'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

import { cn } from "@/lib/utils"

export const MainNav = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {
    const pathname = usePathname()

    const routes = [
        {
            href: `/`,
            label: 'Início',
            active: pathname === '/'
        },
        {
            href: `/agendamentos`,
            label: 'Meus Agendamentos',
            active: pathname === '/agendamentos'
        },
        {
            href: `/historico`,
            label: 'Histórico',
            active: pathname === '/historico'
        },
    ]

    return (
        <nav className={cn(`flex flex-col sm:flex-row items-center sm:space-x-4 lg:space-x-6`, className)}>
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        'sm:text-sm font-medium transition-colors hover:text-primary',
                        route.active ? 'text-black' : 'text-muted-foreground'
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}