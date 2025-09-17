import Head from "next/head";
import NavBarHome from "@/components/NavBarHome";
import Hero from "../components/Hero";
import ContactPageComponent from "@/components/Contact";
import FooterBar from "@/components/footerBar";
import ConsultancyHero from "@/components/ConsultancyHero";
import CollaborationsCarousel from "@/components/CollaborationsCarousel";
import OurFacilities from"@/components/OurFacilities";
import { Geist, Geist_Mono } from "next/font/google";
import OurObjectives from "@/components/OurObjectives";
import Gallery from "@/components/Gallery";
import ConsultancyProjects from "@/components/ConsultancyProjects";
import Achievements from "@/components/Achievements";
import Brochures from "@/components/Brochures";
import FacultyConsultancy from "@/components/FacultyConsultancy";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin= "anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        <title>Consultancy Center of Parul University</title>
        <meta name="description" content="Provising effective Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <NavBarHome />
        <Hero/>
        <ConsultancyHero />
        <CollaborationsCarousel />
        <Gallery />
        <OurObjectives/>
        <OurFacilities/>
        <FacultyConsultancy />
        <Brochures />
        <ConsultancyProjects />
        <Achievements />
        <ContactPageComponent />
        <FooterBar/>
      </div>
    </>
  );
}
