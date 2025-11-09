import React from 'react';

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
    <section className="bg-primary-custom custom-padding">
      <div className="container">
        {/* Row */}
        <div className="row">
          {/* Col 1 */}
          <div className="col">
            <div>
              <h2 data-aos="fade-up" data-aos-duration="1000" className="text-uppercase text-white text-center font-krona-one mb-3 h2-text">
                Deliver Solution
              </h2>
            </div>
            <p data-aos="fade-up" data-aos-duration="1500" className="text-white text-center mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* Row */}
        <div className="row gap-3 gap-md-0">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="fade-zoom-in" 
              data-aos-easing="ease-in-back" 
              data-aos-delay={service.delay} 
              data-aos-offset="0" 
              className="col-md-4"
            >
              <div className="card text-white bg-dark custom-card">
                <div className="card-image-wrapper">
                  <img src={service.image} className="card-img" alt="Card image" />
                  <div className="gradient-overlay"></div>
                </div>
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <div className="card-body" data-aos="fade-up" style={{flex: 'none'}}>
                    <h5 className="card-title font-krona-one text-uppercase">
                      {service.title}
                    </h5>
                    <p className="card-text mb-2">{service.description}</p>
                    <a href="Services.html" className="bg-transparent d-flex align-items-center gap-3 text-secondary-color font-krona-one ps-0 text-decoration-none" style={{border: 'none'}}>
                      <p className="mb-0 text-uppercase">Learn More</p>
                      <i className="fa-solid fa-arrow-right" style={{color: '#c4fb6d'}}></i>
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