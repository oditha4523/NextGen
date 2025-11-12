import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: "Marketing",
      image: "/assets/image/8.jpg",
      description: "Lorem ipsum dolor sit amet.",
      delay: 0
    },
    {
      title: "Branding", 
      image: "/assets/image/17.jpg",
      description: "Lorem ipsum dolor sit amet.",
      delay: 200
    },
    {
      title: "Website",
      image: "/assets/image/37.jpg", 
      description: "Lorem ipsum dolor sit amet.",
      delay: 200
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Row */}
        <div className="row">
          {/* Col 1 */}
          <div className="section-header">
            <div>
              <h2 data-aos="fade-up" data-aos-duration="1000" className="section-title">
                Deliver Solution
              </h2>
            </div>
            <p data-aos="fade-up" data-aos-duration="1500" className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* Row */}
        <div className="cards-row">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="fade-zoom-in" 
              data-aos-easing="ease-in-back" 
              data-aos-delay={service.delay} 
              data-aos-offset="0" 
              className="card-col"
            >
              <div className="service-card">
                <div className="card-image-wrapper">
                  <img src={service.image} className="card-image" alt="Card image" />
                  <div className="gradient-overlay"></div>
                </div>
                <div className="card-overlay">
                  <div className="card-body" data-aos="fade-up">
                    <h5 className="card-title">
                      {service.title}
                    </h5>
                    <p className="card-text">{service.description}</p>
                    <a href="Services.html" className="learn-more-link">
                      <p>Learn More</p>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;