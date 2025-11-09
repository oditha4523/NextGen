import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-primary-custom">
      <div className="bg-secondary-opacity-custom custom-padding">
        <div className="container">
          {/* Row */}
          <div className="row">
            {/* Col 1 */}
            <div className="col-xs-12 col-md-4">
              <h4 data-aos="fade-right" className="text-uppercase font-krona-one text-white mb-4" style={{fontSize: '12px'}}>
                about us
              </h4>
              <div data-aos="fade-up">
                <h1 className="text-uppercase font-krona-one border-text h2-text mb-0">
                  creative
                </h1>
                <h1 className="text-uppercase font-krona-one border-text h2-text mb-0">
                  agency
                </h1>
              </div>
            </div>

            {/* Col 2 */}
            <div className="col-xs-12 col-md-8 mt-4 mt-md-0">
              <p data-aos="fade-up" className="text-white sub-text-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus a. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu.
              </p>
              <a href="About.html" data-aos="fade-up" data-aos-duration="0" className="d-flex align-items-center justify-content-start gap-2 py-3 w-full border-0 mt-1 mt-lg-0 bg-transparent text-secondary-color ps-0 text-decoration-none" id="readMoreButton">
                <p className="mb-0 font-krona-one text-uppercase button-text" style={{textWrap: 'nowrap'}}>
                  read more
                </p>
                <i className="fa-solid fa-arrow-right" style={{color: '#c4fb6d'}}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;