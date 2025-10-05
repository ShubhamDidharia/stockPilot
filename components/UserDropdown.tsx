'use client'  
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from 'lucide-react'
import NavItems from './NavItems'

const UserDropdown = () => {
    const router = useRouter();

  const handleSignOut = async () => {
    // Sign out logic here
  }
  const user = {name : "John Doe", email : "jWVdY@example.com"} // Example user object

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant = "ghost" className="flex items-center gap-3 text-gray-400 hover: text-yellow-400">
                <div className='flex relative items-center gap-3 py-2'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className='hidden flex flex-col sm:block'>
                        <span className='text-base font-medium text-gray-500'>{user.name}</span>
                    </div>

                </div>
                    
                
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='text-gray-400'>
            <DropdownMenuLabel>
                <div className='flex relative items-center gap-3 py-2'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col gap-1'>
                        <span className='text-base font-bold text-gray-500'>{user.name}</span>
                        <span className='text-sm  text-gray-500'>{user.email}</span>
                    </div>

                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className='bg-gray-600'/> 
            <DropdownMenuItem onClick={handleSignOut} className= 'text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer'>
                <LogOut className='mr-2 h-4 w-4 hidden sm:block'/> Sign Out
            </DropdownMenuItem>
            <DropdownMenuSeparator className='hidden bg-gray-600 sm:block' />
            <nav className='sm:hidden'>
                <NavItems/>
            </nav>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown