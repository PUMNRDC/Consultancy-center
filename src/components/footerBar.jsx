"use client";
import React from 'react';
import Link from 'next/link';

const FooterBar = () => {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }; // Add closing bracket here

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src='./parul.svg' alt="Parul University" className="pu_logo" />
        </div>
        <div className="footer-links">
          <h4 className="QuickLinks">Quick links</h4>
          <ul>
            <li>
              <Link href="/contact">Get a Quote</Link>
            </li>
            <li>
              <Link href="https://micronanornd.paruluniversity.ac.in/#KeyFeature">Who We Are</Link>
            </li>
            <li>
              <Link href="https://micronanornd.paruluniversity.ac.in/#OurTeam">Our People & Values</Link>
            </li>
            <li>
              <Link href="https://micronanornd.paruluniversity.ac.in/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="https://micronanornd.paruluniversity.ac.in/#ResearchUpdate">News & Views</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <a href="https://maps.app.goo.gl/Gj1fwqDi9GdETKP59" className="PUMNRDC">
            <h4>
              Parul University Micro-Nano Research & Development Center
            </h4>
            <p className="address">Parul University, P. O Limda, Waghodia, Vadodara,<br />Gujarat, India - 391760</p>
          </a>
          <h4 className="GetinTouch">Get in Touch:<br /></h4>
          <p className="contactdetails" > <a href="mailto:micronanornd@paruluniversity.ac.in">Email: micronanornd@paruluniversity.ac.in</a><br /></p>
          <p className="contactdetails" > <a href="tel:+918511369904">Mobile: +91 85113 69904</a><br /></p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;