import Link from 'next/link'
import React from 'react'

import { Button } from './ui/button'

const Navbar = () => {
  
  return (
    <div className='max-md:hidden w-full h-12 flex flex-row items-center px-8'>
      <div className='justify-start w-1/3'><Button className=' bg-gradient-to-r from-indigo-500 to-teal-500 text-lg font-semibold font-mono text-green-100  '>Resume</Button></div>

      <div className='justify-end w-2/3'><div className=' bg-clip-text  text-transparent bg-gradient-to-r from-blue-200 to-teal-500 px-10 gap-10 flex flex-row space-x-2  justify-end text-lg font-semibold font-rubik' >
        <Link href="#home"  className='hover:text-green-100'>Home</Link>
        <Link href="#skills" className='hover:text-green-100'>Skills</Link>
        <Link href="#projects" className='hover:text-green-100'>Projects</Link>
        <Link href="#education" className='hover:text-green-100 '>Education</Link>
        <Link href="#contact" className='hover:text-green-100 '>Contact</Link>
    </div></div>
    
   
    </div>

  )
}

export default Navbar