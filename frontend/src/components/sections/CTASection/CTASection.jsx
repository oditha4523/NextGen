import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="color-cover">
          {/* Row */}
          <div className="row">
            {/* Col 1 */}
            <div data-aos="fade-up" className="content-col">
              <h2 className="cta-title">
                Ready to get started?
              </h2>
            </div>
            {/* Col 2 */}
            <div data-aos="fade-up" className="button-col">
              <a className="cta-button" href="Contact.html">
                <span>contact</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;