import Image from "next/image";

const ConsultancyHero = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2>About Us</h2>
        <div className="underlineCollaborationsCarousel"></div>
        <p>
          Consultancy Center, Parul University is an initiative to provide
          quality testing and consultancy services to various industries,
          academia and research organizations across India. The center is
          involved in various tailor-made research services as per the
          requirement of industries. We offer a broad range of
          state-of-the-art analytical instruments under one roof and
          facilities for accurate, prompt and cost-effective analysis and
          testing. We have trained and qualified staff for sample
          preparation, testing and interpretation. The goal of the centre is
          dedicated towards ensuring the highest form of credibility and
          quality in our consultancy services.
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
