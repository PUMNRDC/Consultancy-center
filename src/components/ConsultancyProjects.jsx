import React, { useState, useEffect } from "react";
import styles from "./ConsultancyProjects.module.css";

const ConsultancyProjects = () => {
    const [selectedTab, setSelectedTab] = useState("Faculty of Engineering Technology");
    const [fade, setFade] = useState(true); // Start with fade enabled
  
  const allProjects = [
    {
      srNo: 1,
      department: "Faculty of Engineering Technology",
      details: "Design & Development of Flexible Pipe Reversing Mechanism",
      contact: "Yield Pro Earth Private Limited",
    },
    {
      srNo: 2,
      department: "Faculty of Engineering Technology",
      details: "Phase-1 Software based Analysis for Fitness of Machineries",
      contact: "TCR",
    },
    {
      srNo: 3,
      department: "Faculty of Engineering Technology",
      details: "Tolerances and Dimensioning for staff member",
      contact: "M/S Shreno limited",
    },
    {
      srNo: 4,
      department: "Faculty of Engineering Technology",
      details: "ENVIRONMENT AUDIT CONSULTANCY",
      contact: "PANCHMAHAL STEEL LIMITED",
    },
    {
      srNo: 5,
      department: "Faculty of Engineering Technology",
      details: "DEVELOPMENT OF TRAVEL SENSING DEVICE",
      contact: "SETCO AUTO SYSTEMS",
    },
    {
      srNo: 6,
      department: "Faculty of Engineering Technology",
      details:
        "DEVELOPMENT OF CHARACTERIZATION OF PROCESSED SHAPE MEMORY ALLOY (SMA) COMPONENTS FOR SPACE APPLICATIONS",
      contact: "INDIAN SPACE RESEARCH ORGANISATION (ISRO)",
    },
    {
      srNo: 1,
      department: "Faculty of Pharmacy",
      details: "Development of Surface functionalized Lactoferrin based Protein biotherapeutics for the treatment of Ovarian Cancer",
      contact: "Gujarat State Biotechnology Mission, Gandhinagar",
    },
    {
      srNo: 2,
      department: "Faculty of Pharmacy",
      details: "Development of block copolymeric micelles containing EGFR moieties for the treatment of Lung carcinoma",
      contact: "ALL INDIA Council of Technical Education",
    },
    {
      srNo: 3,
      department: "Faculty of Pharmacy",
      details: "High speed homogenizer",
      contact: "Omgene Life science Pvt. Ltd",
    },
    {
        srNo: 4,
        department: "Faculty of Pharmacy",
        details: "Evaluation of efficacy and tolerability of Abhraloha tablets in iron deficiency anaemia – Phase IV study",
        contact: "Shree Dhootapapeshwar Limited",
      },
      
      {
        srNo: 5,
        department: "Faculty of Pharmacy",
        details: "Formulation and evaluation of conventional tablets",
        contact: "Edge Pharma Pvt ltd",
      },
      {
        srNo: 6,
        department: "Faculty of Pharmacy",
        details: "Consultancy Project amount (2nd phase)",
        contact: "Mansi Polymers Pvt Ltd",
      },
      {
        srNo: 7,
        department: "Faculty of Pharmacy",
        details: "Convert para amino phenol paracetamol",
        contact: "Deepak Nitrite Limited",
      },
      {
        srNo: 8,
        department: "Faculty of Pharmacy",
        details: "MICs and Zone of inhibition studies",
        contact: "Dr vidhi Thakral Pg scholar Parul Institute of ayurved",
      },
      {
        srNo: 1,
        department: "Faculty of Commerce",
        details: "Faculty on GST good & service tax accredited to ICAI management consultancy",
        contact:"Rohit Mangal Chartered Account Firm",
      }, 
      {
        srNo: 2,
        department: "Faculty of Commerce",
        details: "Corporate training",
        contact:"BANCANCY TECHNOLOGY",
      },
      {
        srNo: 3,
        department: "Faculty of Commerce",
        details: "Corporate Consultancy service with regards to company formationg",
        contact:"CORPLIANCE CONSULTANCY LLP",
      },
      {
        srNo: 1,
        department: "Faculty of Design",
        details: "Pre-mixing of Web Series Taj Mahal Season 2",
        contact:"Mavericks Post Pvt Ltd Mumbai",
      }, 
      {
        srNo: 1,
        department: "Faculty of Physiotherapy",
        details: "Ergonomic Program for Industrial Workers at Apollo Tyres Ltd, Limda Unit, Waghodia",
        contact:"Apollo Tyres Ltd, Limda Unit, Waghodia",
      }, 
      {
        srNo: 2,
        department: "Faculty of Physiotherapy",
        details: "CONSULTANCY FOR ERGONOMIC PROGRAM ON PHYSIOTHERAPY FOOT, POSTURAL, RUNNING, WALKING",
        contact:"KAIZEN SWITCHGEAR PRODUCTS",
      }, 
      {
        srNo: 1,
        department: "Faculty of Social Work",
        details: "Life Satisfaction & Quality of Life of the Elderly Living in Old age homes : A Comparative Study of Western India and North East India",
        contact:"KNational Human Rights Commission, New Delhi",
      }, 
      {
        srNo: 1,
        department: "Centre of Distance and Online Education",
        details: "CONSULTANCY ASSIGNMENT TO CENTRE FOR DISTANCE AND ONLINE EDUCATION AT PARUL UNIVERSITY ON ADVANCE MICROSOFT EXCEL",
        contact:"MCCAIN FOODS INDIA LTD",
      }, 


  ]; 

  // Filter projects based on selected tab
  const filteredProjects = allProjects.filter(
    (project) => project.department === selectedTab
  );

  // Trigger fade effect when the selected tab changes
  useEffect(() => {
    // Set fade to false temporarily before fade in effect
    setFade(false);
    const timeout = setTimeout(() => {
      setFade(true); // Trigger fade-in after short delay
    }, 100); // Adjust delay for smooth transition

    return () => clearTimeout(timeout); // Clean up timeout if component unmounts or re-renders
  }, [selectedTab]); // Only trigger effect when selectedTab changes

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ongoing/Completed Consultancy Projects</h1>
      <div className="underlineCollaborationsCarousel"></div>

      <div className={styles.tabs}>
        <button onClick={() => setSelectedTab("Faculty of Engineering Technology")}>
          Engineering Projects
        </button>
        <button onClick={() => setSelectedTab("Faculty of Pharmacy")}>
          Pharmacy Projects
        </button>
        <button onClick={() => setSelectedTab("Faculty of Commerce")}>
          Commerce Projects
        </button>
        <button onClick={() => setSelectedTab("Faculty of Design")}>
          Design Projects
        </button>
        <button onClick={() => setSelectedTab("Faculty of Physiotherapy")}>
          Physiotherapy Projects
        </button>
        <button onClick={() => setSelectedTab("Faculty of Social Work")}>
          Social Work Projects
        </button>
        <button onClick={() => setSelectedTab("Centre of Distance and Online Education")}>
          Online Education Projects
        </button>
      </div>

      <table className={`${styles.table} ${fade ? styles.show : ""}`}>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Department</th>
            <th>Consultancy details</th>
            <th>Consultancy Contact details</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => (
            <tr key={index}>
              <td>{project.srNo}</td>
              <td>{project.department}</td>
              <td>{project.details}</td>
              <td>{project.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultancyProjects;