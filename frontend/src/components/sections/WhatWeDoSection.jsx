import React from 'react';
import './WhatWeDoSection.css';

const WhatWeDoSection = () => {
  const services = [
    "Digital Marketing", "Social Media", 
    "Branding Design", "Content Strategy", 
    "User Experience", "Digital Solution", 
    "Website Design", "Graphic Design", 
    "Mobile Apps", "Creative Branding"
  ];

  return (
    <section className="what-we-do-section">
      <div className="container">
        {/* Row */}
        <div className="row">
          {/* Col 1 */}
          <div className="content-col">
            <h1 data-aos="fade-up" className="section-title">
              What We Do
            </h1>
            <p data-aos="fade-up" className="description">
              Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet. Ut elit tellus, luctus nec ullamcorper.
            </p>
            <ul data-aos="fade-up" data-aos-duration="1500" className="services-list">
              <div className="services-column">
                {services.slice(0, 5).map((service, index) => (
                  <li key={index}>✦ {service}</li>
                ))}
              </div>
              <div className="services-column">
                {services.slice(5, 10).map((service, index) => (
                  <li key={index + 5}>✦ {service}</li>
                ))}
              </div>
            </ul>
            <a 
              data-aos="fade-up" 
              data-aos-duration="3000" 
              href="Services.html" 
              className="all-services-link"
            >
              <span>All Services</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Col 2 */}
          <div className="image-col">
            <div 
              data-aos="fade-zoom-in" 
              data-aos-easing="ease-in-back" 
              data-aos-delay="300" 
              data-aos-offset="0" 
              className="icon-box"
            >
              <i className="fa-brands fa-youtube"></i>

              <div className="icon-box-title">
                <h3>channel</h3>
                <h3>booster</h3>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="image-wrapper">
              <img data-aos="fade-left" src="/assets/image/22.jpg" className="main-image" alt="What we do" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;