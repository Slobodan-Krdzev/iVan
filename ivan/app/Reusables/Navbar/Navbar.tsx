'use client'
import { animate } from 'motion'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import MainLink from '../Buttons/MainLink'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed lg:top-[3%] lg:rounded-2xl left-1/2 transform -translate-x-1/2 w-full lg:w-[85%] m-auto z-20 px-6 py-3 flex justify-between items-center backdrop-blur-sm bg-white/20 text-white"
      >
        <div className="flex items-center gap-2">
          <div className='bg-white p-2 rounded-xl'>
          <Image src={'/logoLight.png'} alt='Logo' width={40} height={100}/>

          </div>
          <div className='flex flex-col justify-center items-center'>
          <p className="font-black text-white text-2xl md:text-3xl">TOTAL </p>
          <p className="font-black text-sm md:text-md text-white">Security Pros</p>


          </div>
        </div>

        <div className="hidden md:flex gap-8 font-black items-center text-white">
          <a href="#solutions">Solutions</a>
          <a href="#industries">Industries</a>
          <a href="#about">About Us</a>
          <MainLink link='/' text='Contact'/>
       
        </div>

        <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(true)}>
          <HiOutlineMenu />
        </button>
      </motion.nav>
    
      <AnimatePresence mode='wait'>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="fixed inset-0 bg-white text-[var(--dark-text)] z-30 flex flex-col items-center justify-center text-2xl gap-6"
          >
            <button className="absolute top-6 right-6 text-4xl" onClick={() => setMenuOpen(false)}>
              <IoMdClose />
            </button>
            <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="#industries" onClick={() => setMenuOpen(false)}>Industries</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <button className="bg-red-500 px-6 py-2 rounded text-white">Contact</button>
          </motion.div>
        )}
      </AnimatePresence>

    </>
      
  )
}

export default Navbar
