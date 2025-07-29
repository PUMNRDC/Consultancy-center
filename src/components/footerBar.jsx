"use client";
import React from 'react';
import Link from 'next/link';

const FooterBar = () => {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src='/parul.svg' alt="Parul University" className="pu_logo" />
         
        </div>
        <div className="footer-links">
          <h4 className="QuickLinks">Quick links</h4>
          <ul>
            <li>
              <Link href="/contact">Get a Quote</Link>
            </li>
            <li>
              <Link href="https://consultancy.paruluniversity.ac.in/#WhoWeAre">Who We Are</Link>
            </li>
            <li>
              <Link href="https://consultancy.paruluniversity.ac.in/facilties">Our Facilties</Link>
            </li>
            <li>
              <Link href="https://consultancy.paruluniversity.ac.in/services">Our Services</Link>
            </li>
            <li>
              <Link href="https://consultancy.paruluniversity.ac.in/#AboutUs">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <a href="https://maps.app.goo.gl/Gj1fwqDi9GdETKP59" className="Consultancy">
            <h4>
              Parul University Consultancy Center
            </h4>
            <p className="address">Room 211, Subhash Chandra Bose Bhavan, Parul University,<br /> P. O Limda, Waghodia, Vadodara,Gujarat, India - 391760</p>
          </a>
          <h4 className="GetinTouch">Get in Touch:<br /></h4>
          <p className="contactdetails" > <a href="mailto:consultancy@paruluniversity.ac.in">Email: consultancy@paruluniversity.ac.in</a><br/>
          </p>
           <div className="footer-social-icons">
            <a href="https://wa.me/+917486018533" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/in/consultancy-center-b06714343" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/pu_consultancycenter/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
