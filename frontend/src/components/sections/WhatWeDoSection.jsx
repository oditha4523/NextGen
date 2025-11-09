import React from 'react';

const WhatWeDoSection = () => {
  const services = [
    "Digital Marketing", "Social Media", 
    "Branding Design", "Content Strategy", 
    "User Experience", "Digital Solution", 
    "Website Design", "Graphic Design", 
    "Mobile Apps", "Creative Branding"
  ];

  return (
    <section className="what-we-do text-white mx-2 mx-md-0 position-relative custom-padding">
      <div className="container">
        {/* Row */}
        <div className="row align-items-center">
          {/* Col 1 */}
          <div className="col-md-6 pe-md-5">
            <h1 data-aos="fade-up" className="text-uppercase font-krona-one h2-text">
              What We Do
            </h1>
            <p data-aos="fade-up" className="my-4">
              Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet. Ut elit tellus, luctus nec ullamcorper.
            </p>
            <ul data-aos="fade-up" data-aos-duration="1500" className="list-unstyled mt-4 row">
              <div className="col-md-6">
                {services.slice(0, 5).map((service, index) => (
                  <li key={index}>✦ {service}</li>
                ))}
              </div>
              <div className="col-md-6">
                {services.slice(5, 10).map((service, index) => (
                  <li key={index + 5}>✦ {service}</li>
                ))}
              </div>
            </ul>
            <a 
              data-aos="fade-up" 
              data-aos-duration="3000" 
              href="Services.html" 
              className="text-secondary-color text-decoration-none text-uppercase font-krona-one button-text"
            >
              <span className="me-2">All Services</span>
              <i className="fa-solid fa-arrow-right" style={{color: '#c4fb6d'}}></i>
            </a>
          </div>

          {/* Col 2 */}
          <div className="col-md-6 d-flex margin-short-c flex-column align-items-center justify-content-end position-relative">
            <div 
              data-aos="fade-zoom-in" 
              data-aos-easing="ease-in-back" 
              data-aos-delay="300" 
              data-aos-offset="0" 
              className="icon-box d-flex flex-column align-items-center justify-content-center gap-3 px-4 py-5 bg-secondary-opacity-custom channer-booster rounded position-absolute right-c button-c"
              style={{height: 'fit-content', backgroundColor: '#232520'}}
            >
              <i className="fa-brands fa-youtube" style={{color: '#c4fb6d'}}></i>

              <div className="my-4 my-md-3">
                <h3 className="font-krona-one text-uppercase fs-5 mb-0">channel</h3>
                <h3 className="font-krona-one text-uppercase fs-5 mb-0">booster</h3>
              </div>
              <p className="text-center mb-0 mb-3 mb-md-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="overflow-hidden">
              <img data-aos="fade-left" src="/assets/image/22.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;