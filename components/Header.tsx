'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import UserDropdown from './UserDropdown'


const Header = () => {
  
  return (
    <header className='sticky top-0 header'> 
     <div className='container header-wrapper'>
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/assets/icons/newLogo.png" alt="logo" width={140} height={32} className="h-8 w-auto cursor-pointer"/>
            <span className="text-2xl font-bold text-white">StockPilot</span>
          </div>
        </Link>
        <nav className='hidden sm:block'>
            <NavItems/>
        </nav>
        <UserDropdown/>
     </div>  

    </header>
  )
}

export default Header