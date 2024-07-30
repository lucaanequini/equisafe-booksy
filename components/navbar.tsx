import { AlignJustify } from "lucide-react"

import { UserButton } from "@clerk/nextjs"
import { MainNav } from "@/components/main-nav"
import { Sheet, SheetContent, SheetTrigger, SheetDescription, SheetTitle, SheetHeader } from "@/components/ui/sheet"

export const Navbar = () => {
    return (
        <div className="border-b">

            <div className="flex h-16 items-center px-4">
                <MainNav className="hidden sm:flex" />
                <div className="sm:hidden">
                    <Sheet>
                        <SheetTrigger className="p-3"><AlignJustify className="w-4 h-4" /></SheetTrigger>
                        <SheetContent side='left'>
                            <SheetHeader>
                                <SheetTitle className="py-5">Equisafe</SheetTitle>
                            </SheetHeader>
                            <MainNav className="border-t pt-5 space-y-3 items-center" />
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div >
    )
}