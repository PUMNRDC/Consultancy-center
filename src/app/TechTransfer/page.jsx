  "use client";
  import React from "react";
  import { User, FileText, UserCheck } from "lucide-react";
  import './TechTransfer.css'; 
  import NavBarHome from '@/components/NavBarHome'; 
  import Footer from '@/components/footerBar'; 
  import './footer.css';
   import './header.css';
  
  const projects = [
    // // {
    // //   id: 1,
    // //   title: 'Coarse and Hard Shelled Fruit Holder',
    // //   inventor_name: '',
    // //   patent_number: '358300-001',
    // //   first_inventor_name: '',
    // //   imageWebp: '/patents/Coarse and Hard-Shelled Fruit Holder patent granted -358300-001-01-01.webp',
    // //   imageJpg: '/patents/Coarse and Hard-Shelled Fruit Holder patent granted -358300-001-01-01.jpg'
    // // },
    // {
    //   id: 2,
    //   title: 'Medical Equipment for Measuring Vital Parameters of Patients',
    //   inventor_name: '',
    //   patent_number: '375474-001',
    //   first_inventor_name: '',
    //   imageWebp: '/patents/Design No 375474-001-01.webp',
    //   imageJpg: '/patents/Design No 375474-001-01.jpg'
    // },
    // {
    //   id: 3,
    //   title: 'BRINZOLAMIDE ENTRAPPED MUCOADHESIVE LIPIDIC NANOPARTICLE FORMULATION  AND ITS PROCESS OF PREPARATION',
    //   inventor_name: '',
    //   patent_number: '47735',
    //   first_inventor_name: '',
    //   imageWebp: '',
    //   imageJpg: '/patents/Drug patent granted -47735-01.jpg'
    // },
    {
      id: 4,
      title: 'NOVEL ORAL PHARMACEUTICAL COMPOSITIONS OF ENZALUTAMIDE CONTAINING NANOPARTICLES',
      inventor_name: 'THAKKAR VISHALKUMAR JAYANTILAL(VADODARA, IN); DR DIPTI PATEL(VADODARA, IN); DR ABHAY DHARAMSI  (VADODARA, IN)',
      patent_number: '447147',
      first_inventor_name: 'THAKKAR VISHALKUMAR JAYANTILAL ( VADODARA , IN )',
      imageWebp: '/patents/Drug patent granted -447147-01.webp',
      imageJpg: '/patents/Drug patent granted -447147-01.jpg'
    },
    {
      id: 5,
      title: 'NOVEL OPHTHALMIC COMPOSITIONS OF CYCLOSPORIN A FOR THE TREATMENT OF DRY EYE SYNDROME',
      inventor_name: 'DR RAKESH PATEL ; DR ASHA PATEL ; ISHRAT CHHOWALA ; DR DEVANSHU PATEL ; PROF ABHAY DHARAMSI',
      patent_number: '458118',
      first_inventor_name: 'DR RAKESH PATEL',
      imageWebp: '/patents/Drug patent granted -458118-01.webp',
      imageJpg: '/patents/Drug patent granted -458118-01.jpg'
    },
    {
      id: 6,
      title: '7-AMINO/CYCLICAMINOALKOXY-2 DARYL/ARYLMETHYL-6-METHOXYQUINAZOLIN-4-(3H)- ONES AS POTENTIAL ANTICANCER AGENTS AND THE PROCESS OF THEIR PREPARATION',
      inventor_name: 'MANGE RAM YADAV  (VADODARA, IN); DEVANSHU J PATEL  (VADODARA, IN); PRASHANT R MURUMKAR  (BARODA, IN)',
      patent_number: '479327',
      first_inventor_name: 'MANGE RAM YADAV (VADODARA , IN)',
      imageWebp: '/patents/Drug patent granted -479327-01.webp',
      imageJpg: '/patents/Drug patent granted -479327-01.jpg'
    },
    {
      id: 7,
      title: 'Herbal Organic Hand Sanitizer and Its Process of Preparation',
      inventor_name: 'KHRISTI AVANI  (VADODARA, IN); TANDEL FALGUNI  (VADODARA, IN); DHARAMSI DR ABHAY  (VADODARA, IN); NIZAMA VRUSHANK  (VADODARA, IN)',
      patent_number: '566448',
      first_inventor_name: 'KHRISTI AVANI (VADODARA , IN )',
      imageWebp: '/patents/Herbal Organic Hand Sanitizer.webp',
      imageJpg: '/patents/Herbal Organic Hand Sanitizer.jpg'
    },
    {
      id: 8,
      title: 'Natural Herbal Formulation for PCOS',
      inventor_name: 'PARUL UNIVERSITY PARUL INSTITUTEE OF AYURVED',
      patent_number: '565251',
      first_inventor_name: 'PARUL UNIVERSITY PARUL INSTITUTEE OF AYURVED',
      imageWebp: '/patents/PATENT GRANTED-01.webp',
      imageJpg: '/patents/PATENT GRANTED-01.jpg'
    },
    // {
    //   id: 9,
    //   title: 'A Low-Cost Solid Desiccant Wheel',
    //   inventor_name: '',
    //   patent_number: '502356',
    //   first_inventor_name: '',
    //   imageWebp: '/patents/Patented - For Branding-01.webp',
    //   imageJpg: '/patents/Patented - For Branding-01.jpg'
    // },
  ];

  export default function TechTransferPage() {
    return (
      <div className="main-wrapper">
        <NavBarHome />
        
        {projects.length > 0 ? (
          <section className="tech-section">
            <div className="tech-container">
              
              {/* Section Header */}
              <div className="tech-header">
                <h2 className="tech-title">
                  <span className="tech-gradient-text">
                    Patents Granted
                  </span>
                </h2>
                <div className="tech-divider" />
                <p className="tech-subtitle">
                  Transforming research into intellectual property, 
                  securing innovation for future technological breakthroughs.
                </p>
              </div>

              {/* Grid Layout */}
              <div className="tech-grid">
                {projects.map((project) => (
                  <div key={project.id} className="tech-card">
                    
                    {/* Left Side: Image */}
                    <div className="tech-card-image">
                      <picture>
                        <source srcSet={project.imageWebp} type="image/webp" />
                        <img
                          src={project.imageJpg}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    </div>

                    {/* Right Side: Content */}
                    <div className="tech-card-content">
                      {/* Title */}
                      <h3 className="project-title">
                        {project.title}
                      </h3>

                      {/* Details Blocks */}
                      <div className="project-details">
                        
                        {/* 1. INVENTOR NAME - Blue Style */}
                        <div className="detail-block inventor-block">
                          <div className="detail-icon-box inventor-icon">
                            <User size={20} />
                          </div>
                          <div className="detail-text">
                            <p className="detail-label">INVENTOR NAME</p>
                            {/* FIX: Using project.inventor_name */}
                            <p className="detail-value">{project.inventor_name}</p>
                          </div>
                        </div>

                        {/* 2. PATENT NO. - Light Gray Style */}
                        <div className="detail-block patent-block">
                          <div className="detail-icon-box patent-icon">
                            <FileText size={20} />
                          </div>
                          <div className="detail-text">
                            <p className="detail-label">PATENT NO.</p>
                            {/* FIX: Using project.patent_number */}
                            <p className="detail-value">{project.patent_number}</p>
                          </div>
                        </div>

                        {/* 3. 1st INVENTOR NAME - Red/Pink Style */}
                        <div className="detail-block first-inventor-block">
                          <div className="detail-icon-box first-inventor-icon">
                            <UserCheck size={20} />
                          </div>
                          <div className="detail-text">
                            <p className="detail-label">1st INVENTOR NAME</p>
                            {/* FIX: Using project.first_inventor_name */}
                            <p className="detail-value first-inventor-value">
                              {project.first_inventor_name}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="tech-section" style={{ minHeight: '50vh' }}>
            <div className="tech-container">
              <p className="tech-subtitle">No ongoing projects to display.</p>
            </div>
          </section>
        )}

        <Footer />
      </div>
    );
  }