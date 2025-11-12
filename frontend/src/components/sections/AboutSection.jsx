import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="content-wrapper">
        <div className="container">
          {/* Row */}
          <div className="row">
            {/* Col 1 */}
            <div className="col-left">
              <h4 data-aos="fade-right" className="section-label">
                about us
              </h4>
              <div data-aos="fade-up">
                <h1 className="section-title">
                  creative
                </h1>
                <h1 className="section-title">
                  agency
                </h1>
              </div>
            </div>

            {/* Col 2 */}
            <div className="col-right">
              <p data-aos="fade-up" className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus a. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu.
              </p>
              <a href="About.html" data-aos="fade-up" data-aos-duration="0" className="read-more-link" id="readMoreButton">
                <p>read more</p>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;