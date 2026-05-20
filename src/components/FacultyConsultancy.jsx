"use client";
import React, { useState } from 'react';
import styles from './FacultyConsultancy.module.css';
import Link from 'next/link';

const FacultyConsultancy = () => {
  const allCards = [
    {
      id: 1,
      title: 'Consultancy Service',
      description: 'Department of Electrical Engineering',
      imgSrc: '/thumbnails/electrical-engineering.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/Brochure%20-%20EE%20Department%20Consultancy%20Cell.pdf',
    },
    {
      id: 2,
      title: 'Micro-Nano Research',
      description: '& Development Center',
      imgSrc: '/thumbnails/micro-nano.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/Brochure%20of%20Micro-Nano%20Research%20&%20Development%20Centre.pdf',
    },
    {
      id: 3,
      title: 'Foot Pressure Analysis',
      description: 'Faculty of Physiotherapy',
      imgSrc: '/thumbnails/foot-pressure-analysis.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/Foot%20Pressure%20Analysis,%20Flyer.pdf',
    },
    {
      id: 4,
      title: 'Gaiton Postural Analysis',
      description: 'Faculty of Physiotherapy',
      imgSrc: '/thumbnails/gaiton-postural-analysis.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/GaitOn%20Postural%20Analysis,%20Flyer.pdf',
    },
    {
      id: 5,
      title: 'Gaiton Running Analysis',
      description: 'Faculty of Physiotherapy',
      imgSrc: '/thumbnails/gaiton-running-analysis.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/GaitOn%20Running%20Analysis,%20Flyer.pdf ',
    },
    {
      id: 6,
      title: 'Gaiton Walking Analysis',
      description: 'Faculty of Physiotherapy',
      imgSrc: '/thumbnails/gaiton-walking-analysis.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/GaitOn%20%20Walking%20Analysis,%20Flyer.pdf',
    },
    {
      id: 7,
      title: 'ACCOMMODATION OPERATIONS & HYGIENE SAFETY TRAINING PROGRAMME',
      description: 'Faculty of Hotel Management & Catering Technology',
      imgSrc: '/thumbnails/fhmct.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/hotal%20management.pdf',
    },
    {
      id: 8,
      title: 'Consultancy Services in Restaurant Designing',
      description: 'Faculty of Hotel Management & Catering Technology',
      imgSrc: '/thumbnails/fhmct2.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/HOTEL%20MANAGEMENT.pdf',
    },
    {
      id: 9,
      title: 'First Aid & CPR Training',
      description: 'Parul Institute of Nursing',
      imgSrc: '/thumbnails/PIN.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/Commen%20Flyer%20for%20parul%20institute%20of%20nursing.pdf',
    },
    {
      id: 10,
      title: 'Faculty of Agriculture',
      imgSrc: '/thumbnails/faculty_of_agriculture.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/faculty%20of%20agriculture.pdf',
    },
    {
      id: 11,
      title: 'Faculty of Architecture & Planning',
      imgSrc: '/thumbnails/faculty_of_architecture_planing.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/faculty%20of%20architecture%20&%20planing.pdf',
    },
    {
      id: 12,
      title: 'Faculty of Management Studies',
      imgSrc: '/thumbnails/faculty_management_studies.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/faculty%20of%20management%20studies.pdf',
    },
    {
      id: 13,
      title: 'Industrial Ergonomic and Health Prevention Program',
      description: 'Faculty of Physiotherapy',
      imgSrc: '/thumbnails/Faculty-of-Physiotherapy.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/FACULTY%20OF%20PHYSIOTHERAPY.pdf',
    },
    {
      id: 14,
      title: 'Faculty of Social Work',
      imgSrc: '/thumbnails/faculty_of_social_work.png',
      link: 'https://paruluniversity.ac.in/consultancycenter/pdf/faculty%20of%20social%20work.pdf',
    },
    {
      id: 15,
      title: 'Cyber Security Consultancy',
      imgSrc: '/thumbnails/cyber_security.png',
      link: 'https://4zyyfvenek92faoq.public.blob.vercel-storage.com/cyber.pdf',
    },
    {
      id: 16,
      title: 'VMC Machinery Services',
      imgSrc: '/thumbnails/vmc_machinery.png',
      link: 'https://4zyyfvenek92faoq.public.blob.vercel-storage.com/vmc.pdf',
    },
    {
      id: 17,
      title: 'Environment Consultancy',
      imgSrc: '/thumbnails/environmentconsultancy.png',
      link: 'https://4zyyfvenek92faoq.public.blob.vercel-storage.com/environment.pdf',
    },
    {
      id: 18,
      title: 'Faculty of Architecture & Planning',
      imgSrc: '/thumbnails/fap.png',
      link: 'https://4zyyfvenek92faoq.public.blob.vercel-storage.com/architecture.pdf',
    },
    {
      id: 19,
      title: 'SEO Services',
      imgSrc: '/thumbnails/SEO_services.png',
      link: 'https://4zyyfvenek92faoq.public.blob.vercel-storage.com/seo.pdf',
    },
    {
      id: 20,
      title: 'Faculty of Pharmacy',
      imgSrc: '/thumbnails/fop.png',
      link: 'https://4zyyfvenek92faoq.public.blob.vercel-storage.com/pharmacy.pdf',
    },
    {
      id: 21,
      title: 'Faculty of Management Studies',
      imgSrc: '/thumbnails/fms.png',
      link: 'https://4zyyfvenek92faoq.public.blob.vercel-storage.com/management.pdf',
    },
  ];
  const [visibleCards, setVisibleCards] = useState(6);

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  return (
    <section className={styles.container} id="OurServices">
      <h2 className={styles.heading}>Faculty Wise Consultancy Information</h2>
      <div className="underlineCollaborationsCarousel"></div>

      <div className={styles.cardGrid}>
        {allCards.slice(0, visibleCards).map((card) => (
          <Link key={card.id} href={card.link} legacyBehavior>
            <a className={styles.card}>
              <img src={card.imgSrc} alt={card.title} className={styles.image} />
              <div className={styles.textContainer}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      {visibleCards < allCards.length && (
        <div className={styles.buttonContainer}>
          <button className={styles.loadMoreButton} onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default FacultyConsultancy;
