"use client"
import { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'


export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const pathname = usePathname();

  const navLinks = [
    {href:"/", text: "Home"},
    {href:"/produtos", text: "Produtos"},
    {href:"/contato", text: "Contato"},
  ]

  return (
    <nav className="bg-purple-900/25 fixed w-full z-10 shadow-md">
      <div className="flex justify-between max-w-7xl h-16 mx-auto px-6 lg:px-8">
        <div className="flex-shrink-0 flex items-center">
          <Link href="#" className="text-white text-2xl font-bold">GalileoSoft</Link>
        </div>
        <div className="hidden sm:flex items-center gap-4 ml-6">
          {navLinks.map(link => {
            return <Link key={link.text} href={link.href} className={`${pathname === link.href ? 'bg-purple-700/50' : ''} text-white px-3 py-2 rounded-md text-md lg:text-lg font-medium hover:bg-purple-700`}>{link.text}</Link>
          })}
        </div>
        <div className='flex sm:hidden h-full'>
          {
            showLinks ?
              <button onClick={() => setShowLinks(false)} className='p-3'>
                <MdOutlineClose className="text-white w-8 h-8" />
              </button>
              :
              <button onClick={() => setShowLinks(true)} className='p-3'>
                <GiHamburgerMenu className="text-white w-8 h-8" />
              </button>
          }
        </div>
      </div>
      {
        showLinks ?
          <div 
            onClick={()=>setShowLinks(false)}
            className="absolute top-16 left-0 right-0 bottom-0 pb-16 h-screen flex justify-center align-middle bg-gray-900"
          >
            <div className='my-auto text-center flex flex-col gap-20 w-2/5'>
              {navLinks.map(link => {
                return (
                  <Link 
                    key={link.text} 
                    href={link.href} 
                    className={`${pathname === link.href ? 'bg-purple-700/50' : ''} text-white px-3 py-4 rounded-md text-xl font-bold hover:bg-purple-700`}
                  >
                    {link.text}
                  </Link>
                )
              })}
            </div>
          </div>
          :
          undefined
      }
    </nav>
  )
}
