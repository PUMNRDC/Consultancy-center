import Image from "next/image";

const ConsultancyHero = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2>About Us</h2>
        <div className="underlineCollaborationsCarousel"></div>
        <p>
        The Consultancy Center at Parul University is a multidisciplinary initiative committed to delivering 
        high-quality consultancy and testing services to industries, academia, and research organizations 
        across India. With expertise spanning diverse fields such as Pharmacy, Physiotherapy, Ayurveda, 
        Social work, Commerce, Engineering, Management, IT Solutions, and many more, we cater to a wide 
        range of needs through customized and innovative solutions.
        </p>
        <br>
        </br>
        <p>Our center is equipped with state-of-the-art facilities and cutting-edge technology, supported by 
          highly skilled professionals who ensure precision, reliability, and efficiency in every service we provide.
           From drug formulation and quality testing to financial advisory, market research, technical problem-solving,
            and IT-based solutions,  we strive to offer cost-effective and prompt results that meet the highest standards
             of credibility and excellence.  </p>
             <br>
             </br>
             <p>
             At the Consultancy Center, we are dedicated to fostering collaboration, 
             driving innovation, and empowering industries and organizations with actionable insights and solutions 
             to achieve their goals.
             </p>
          </div>
      <div className="about-us-image">
        <Image
          src="/AboutBanner.png"
          alt="Parul University Consultancy Center"
          width={800}
          height={400}
          className="about-image"
        />
      </div>
    </section>
  );
};

export default ConsultancyHero;
