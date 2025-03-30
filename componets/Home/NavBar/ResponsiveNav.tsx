"use client";
import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { useState } from 'react'



const ResponsiveNav = () => {

  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(true)
  const handleCloseNav = () => setShowNav(false)

  return (
    <div>
        <Nav openNav={handleShowNav} />
        <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  )
}

export default ResponsiveNav