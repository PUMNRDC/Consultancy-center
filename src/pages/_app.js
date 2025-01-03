import "@/styles/globals.css";
import '../components/Hero.css'; // Import regular CSS file
import '../components/NavBarHome.css'; 
import "../components/ContactPage.css";
import '../components/footer.css';
import '../components/CollaborationsCarousel.css';
import "../components/ConsultancyHero.css";
import "../components/OurObjectives.css";
import "../components/OurFacilities.css";



export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
