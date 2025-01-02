import Head from "next/head";
import NavBarHome from "@/components/NavBarHome";
import ConsultancyHero from "../components/ConsultancyHero";
import ContactPageComponent from "@/components/ContactPageComponent";
import FooterBar from "@/components/footerBar";
import CollaborationsCarousel from "@/components/CollaborationsCarousel";
import { Geist, Geist_Mono } from "next/font/google";

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
        <title>About Consultancy Center of Parul University</title>
        <meta name="description" content="Provising effective Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <NavBarHome />
        <ConsultancyHero />
        <ContactPageComponent />
        <FooterBar/>
      </div>
    </>
  );
}
