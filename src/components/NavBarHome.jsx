"use client";  // Add this directive at the top

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBarHome = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // For mobile drawer state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
          <Link href="/" passHref>
            <Image 
              src={scrolled ? '/Parul-black.svg':'/Parul.svg' }
              alt="Logo"
              width={325} 
              height={50}
              style={{ objectFit: 'contain' }} // Updated this line
              priority={true}
            />
          </Link>
        </div>
        <ul className="navbar-links">
          <li><a href="/about">About</a></li>
          <li><a href="/equipments">OurFacilities</a></li>
          <li><a href="/pricing">Our Services</a></li>
          <li><a href="/contact" className="cta">Contact Us</a></li>
        </ul>
          
        <div className="hamburger" onClick={toggleDrawer}>
          <div className="hamburger-icon">
            <Image
              src={scrolled ? '/hamburger-icon-black.svg' : '/hamburger-icon.svg'}
              alt="Hamburger Icon"
              width={30}
              height={30}
              style={{ objectFit: 'contain' }} // Updated this line
            />
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <button className="close-drawer" onClick={toggleDrawer}>X</button>
        <ul>
          <li><a href="/equipments">Equipments</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="#booking" className="cta">Resource Booking</a></li>
        </ul>
        <div className="navbar-supported-mobile">
        <Link href="https://ic.gujarat.gov.in/" target="_blank" rel="noopener noreferrer" passHref>
          <Image
            src="/ic-white.svg"
            alt="Supported Logo"
            width={200}
            height={50}
            style={{ objectFit: 'contain' }} // Updated this line
          />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBarHome;
