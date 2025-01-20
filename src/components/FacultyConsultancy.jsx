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
      description: 'Research & Development Center',
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
      title: 'New Project 1',
      description: 'Description for new project 1',
      imgSrc: '/thumbnails/new_project_1.png',
      link: '/consultancy/new-project-1',
    },
    {
      id: 8,
      title: 'New Project 2',
      description: 'Description for new project 2',
      imgSrc: '/thumbnails/new_project_2.png',
      link: '/consultancy/new-project-2',
    },
    {
      id: 9,
      title: 'New Project 3',
      description: 'Description for new project 3',
      imgSrc: '/thumbnails/new_project_3.png',
      link: '/consultancy/new-project-3',
    },
  ];
  const [visibleCards, setVisibleCards] = useState(6);

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Faculty Wise Consultancy Information</h2>
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
