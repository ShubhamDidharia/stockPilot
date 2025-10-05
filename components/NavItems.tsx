'use client'
import Link from "next/link"
import NAV_ITEMS from "@/lib/constants"
import { use } from "react"
import { usePathname } from "next/navigation"


const NavItems = () => {
    const pathname = usePathname()
    const isActive = (href: string) => {
        if(href === "/") {
            return pathname === href
        }
        return pathname.startsWith(href)
    }
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
        {NAV_ITEMS.map((item) => (
            <li key={item.title} >
                <Link href={item.href} className={`hover:text-yellow-500 transition-colors 
                    ${isActive(item.href) ? 'text-gray-400' : ''}`}>
                    {item.title}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default NavItems