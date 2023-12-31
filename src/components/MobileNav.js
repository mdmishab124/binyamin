import React, { useState, useEffect, useRef } from 'react';
//import icons
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'
//import Link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';

// menu variants
const menuVariants = {
  hidden: {
    x: '-100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {

  // close this mobile nav when click outside of mobile navbar
  const [openMenu, setOpenMenu] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setOpenMenu(false)
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <nav className='text-primary xl:hidden' ref={menuRef}>
      {/* nav open button */}
      <div onClick={() => setOpenMenu(true)} className='text-3xl cursor-pointer'>
        <CgMenuRight className='rotate-180' />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 left-0 max-w-xs h-screen z-20'>
        {/* icon */}
        <div onClick={() => setOpenMenu(false)} className='text-4xl absolute z-30 right-4 top-14 text-primary cursor-pointer'>
          <IoMdClose />
        </div>
        {/* menu List*/}
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
          <li>
            <Link onClick={() => setOpenMenu(false)} to="/">Home</Link>
          </li>
          <li>
            <Link onClick={() => setOpenMenu(false)} to="/about">About</Link>
          </li>
          <li>
            <Link onClick={() => setOpenMenu(false)} to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link onClick={() => setOpenMenu(false)} to="/contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
