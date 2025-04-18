import Image from 'next/image';

const Hero = () => {
  return (
      <section className="hero">
        <div className="overlay"></div>
        <div className="heroContent">
          <h1>Welcome to</h1>
          <h2>Consultancy Centre of Parul University</h2>
          <div className="Buttons">
            <a href="/#ContactUs" className="ctaBtn">GET QUOTE</a>
          </div>
        </div>
        <Image 
          src="/Herobg.jpg" 
          alt="Research Center"
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          priority={true} 
          className="image"
        />
        
      </section>
  )
}
export default Hero;
