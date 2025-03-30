import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props ={
  showNav:boolean;
  closeNav:()=>void;
} 

const MobileNav = ({closeNav,showNav}:Props) => {
  const navopen = showNav ? "translate-x-0": "translate-x-[-100%]";

  return (
    <div>
        {/* over lay */}
        <div className={`fixed ${navopen} inset-0 transform transition-all duration-500 z- [1000] bg-black opacity-70 w-full h-screen`}></div>

       {/* nav linka */}
       <div className={`text-white ${navopen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w- [60%] bg-rose-900 space-y-6 z-[10006]`}>
        {
            navLinks.map((link)=>{
                return <Link href={link.url} key={link.id}>
                <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                    {link.label}
                </p>
                </Link>
            })
        }

        {/* close btn */}
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
       </div>

    </div>
  )
}

export default MobileNav