import Image from 'next/image';

const OurObjectives = () => {
  return (
    <section className="objectives-section">
      <h2 className="title">Our Objectives</h2>
      <div className="underlineCollaborationsCarousel"></div>
      <div className="objectives-container">
        <div className="objective-item research-support">
          <div className="icon">
            <Image src="/developing-networks.png" alt="Research Support" width={50} height={50} />
          </div>
          <h3>Research Support</h3>
          <p>To support research in advanced areas of science and technology.</p>
        </div>
        <div className="objective-item innovative-development">
          <div className="icon">
            <Image src="/innovative-development.png" alt="Innovative Development" width={50} height={50} />
          </div>
          <h3>Innovative Development</h3>
          <p>To offer support to R&D centres & industries towards design & development of their products.</p>
        </div>
        <div className="objective-item training-capacity-building">
          <div className="icon">
            <Image src="/training-capacity-building.png" alt="Training & Capacity Building" width={50} height={50} />
          </div>
          <h3>Training & Capacity Building</h3>
          <p>To arrange specialized training programs for technicians working on instruments in academic institutions / small industries.</p>
        </div>
        <div className="objective-item developing-networks">
          <div className="icon">
            <Image src="/developing-networks.png" alt="Developing Networks" width={50} height={50} />
          </div>
          <h3>Developing Networks</h3>
          <p>To build a strong industry academic network.</p>
        </div>
        <div className="objective-item additional-services">
          <div className="icon">
            <Image src="/additional-services.png" alt="Additional Services" width={50} height={50} />
          </div>
          <h3>Additional Services</h3>
          <p>To offer services to industries and other education and research organizations as testing/consultancy services.</p>
        </div>
      </div>
    </section>
  );
};

export default OurObjectives;
